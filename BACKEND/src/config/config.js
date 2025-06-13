/* export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
  maxAge: 1000 * 60 * 60, // 1 hour
}; */

export const cookieOptions = {
  maxAge: 1000 * 60 * 60,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true only in Render
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // 👈 use 'None' for cross-origin
};
