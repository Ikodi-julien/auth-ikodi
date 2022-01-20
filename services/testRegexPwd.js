module.exports = function (pwd) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/.test(pwd);
};
