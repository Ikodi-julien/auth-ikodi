module.exports = {
  options:
    process.env.NODE_ENV === "production"
      ? {
          httpOnly: true,
          sameSite: "None",
          secure: true,
          domain: "pellin.eu",
          // Add 90 days to current date
          maxAge: 60 * 60 * 1000 * 24 * 90,
        }
      : {
          httpOnly: true,
        },
};
