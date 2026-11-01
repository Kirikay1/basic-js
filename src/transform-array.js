/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = new Map([
    ['--discard-next', { offset: 1, change: -1 }],
    ['--discard-prev', { offset: -1, change: -1 }],
    ['--double-next', { offset: 1, change: 1 }],
    ['--double-prev', { offset: -1, change: 1 }],
  ]);
  const copies = arr.map(() => 1);

  arr.forEach((value, index) => {
    const command = commands.get(value);
    if (!command) {
      return;
    }

    const target = index + command.offset;
    if (copies[target] > 0) {
      copies[target] += command.change;
    }
  });

  return arr.flatMap((value, index) => (
    commands.has(value) ? [] : Array(copies[index]).fill(value)
  ));
}

module.exports = {
  transform
};
