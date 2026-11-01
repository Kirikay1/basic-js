/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nextSuffix = new Map();

  return names.map((name) => {
    if (!nextSuffix.has(name)) {
      nextSuffix.set(name, 1);
      return name;
    }

    let suffix = nextSuffix.get(name);
    while (nextSuffix.has(`${name}(${suffix})`)) {
      suffix += 1;
    }

    const uniqueName = `${name}(${suffix})`;
    nextSuffix.set(name, suffix + 1);
    nextSuffix.set(uniqueName, 1);
    return uniqueName;
  });
}

module.exports = {
  renameFiles
};
