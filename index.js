const R = require("ramda");

/** Returns the sum of the values of the same property off all objects in the supplied list
 *
 * @sig [a] -> [a] -> Number
 * @param {String[]} path - the path to work with
 * @param {Object[]} objects - objects to retrieve values from
 * @return {Number} sum of the selected properties
 * @api public
 * @example
 *
 *   sumOf(["a"], [{ a: 2 }, { a: 3, b: 1 }]); //=> 5
 *
 */
const sumOf = R.curry((path, objects) =>
  R.pipe(
    R.pluck(path),
    R.filter(R.is(Number)),
    R.sum
  )(array)
);

module.exports = sumOf;
