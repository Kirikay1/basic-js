/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let timestamp;
  try {
    // The native method checks Date's internal value, which a fake cannot copy.
    timestamp = Date.prototype.getTime.call(date);
  } catch {
    throw new Error('Invalid date!');
  }

  if (Number.isNaN(timestamp)) {
    throw new Error('Invalid date!');
  }

  const month = Date.prototype.getMonth.call(date);
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  return seasons[Math.floor(((month + 1) % 12) / 3)];
}

module.exports = {
  getSeason
};
