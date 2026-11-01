/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    let key = '';
    for (const part of domain.split('.').reverse()) {
      key += `.${part}`;
      stats[key] = (stats[key] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
