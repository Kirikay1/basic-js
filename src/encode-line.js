/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const characters = Array.from(str);
  let encoded = '';
  let count = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (characters[index] === characters[index + 1]) {
      count += 1;
    } else {
      encoded += (count > 1 ? count : '') + characters[index];
      count = 1;
    }
  }

  return encoded;
}

module.exports = {
  encodeLine
};
