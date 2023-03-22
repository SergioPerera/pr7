/**

Returns a string formed by concatenating common characters between adjacent strings in an array.
@param arr - An array of strings to be meshed.
@returns A string formed by concatenating common characters between adjacent strings in the array..
*/
function meshArray(arr: string[]): string {
  let result = "";
  /// iterate trought the array
  for (let i = 0; i < arr.length; i++) {

    /// check if we can pick the next element
    if (i + 1 < arr.length - 1) {
      let current = arr[i];
      let next = arr[i + 1];

      let common = "";
      /// iterate trought the current by the end 
      for (let j = 0; j < current.length; j++) {
        /// iterate trought the next by the beg
        for (let k = 0; k < next.length; k++) {
          // console.log(current[j], next[k])
          if (current[j] === next[k]) {
            common += current[j];
            break;
          }
        }
      }
      if (common === "") {
        return "Error al encadenar"
      }
      else {
        result += common;
      }
    }
    else {
      break;
    }
  }

  return result;
}
