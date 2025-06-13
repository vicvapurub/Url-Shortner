 export const cookieOptions = {
    maxAge: 1000*60*60, // 1 hour
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set to true in production
    sameSite: 'Lax', // Adjust as needed
};