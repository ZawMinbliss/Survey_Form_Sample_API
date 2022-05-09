module.exports.generateUniqueToken = () => {
  const rand = Math.random().toString(36).substr(7);
  return rand;
};
