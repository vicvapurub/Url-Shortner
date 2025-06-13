import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
// User model for MongoDB using Mongoose
const userSchema = new mongoose.Schema({
    
  name: {
    type: String,
    required: true,
  },    
    email: {
        type: String,
        required: true,
        unique: true,
    },  
    password: {     
        type: String,
        required: true,
        select: false, // Exclude password from queries by default
    },  
   avatar: {
    type: String,
    default: function() {
      // Generate MD5 hash of the user's email
      const hash = crypto
        .createHash('md5')
        .update(this.email.toLowerCase().trim())
        .digest('hex');
      // Return Gravatar URL with the hash
      return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
    }
  }, 
});

userSchema.methods.comparePassword = function (Password) {
  return bcrypt.compare(Password, this.password);
};

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Remove the password field from the JSON response
    delete ret.password;
    delete ret.__v; // Optionally remove __v field
    return ret;
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;