/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var double = [],
      triangles = 0;

  for (var i = 0; i<preferences.length; i++) {

    var n = i + 1,
        a,b,c;

        a = preferences[i];
        b = preferences[a-1];
        c = preferences[b-1];


    if (n === c && double.indexOf(a) == -1 && a !== b) {
      double.push(a,b,c);
      triangles++;
    }
  }

  return triangles;
};
