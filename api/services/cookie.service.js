module.exports = {
  options:
    process.env.NODE_ENV === "production"
      ? {
          httpOnly: true,
          sameSite: "None",
          secure: true,
          domain: "ikodi.eu",
          expires: new Date(new Date.now() + 3000000),
        }
      : {
          httpOnly: true,
        },
};
