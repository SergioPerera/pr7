/**

Converts an array of numbers into an array of ranges represented as strings.
@param array - The input array of numbers.
@returns An array of ranges represented as strings.
*/
export function fromArrayToRanges(array: number[]): string[] {
  const result: string[] = [];
  let ini = array[0];
  let end = 0;
  for (let i = 0; i < array.length; i++) {
  if (array[i] + 1 !== array[i + 1]) {
      end = array[i];
      let in_str = ini.toString();
      let end_str = end.toString();
      let range = "";
      if (ini === end){
        range = ini.toString();
      }
      else {
        range = in_str + "_" + end_str;
      }
      result.push(range);
      ini = array[i + 1];
    }
  }
  return result;
}
  
/**

Converts an array of ranges represented as strings into an array of numbers.
@param ranges - The input array of ranges represented as strings.
@returns An array of numbers.
*/
export function fromRangesToArray(ranges: string[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < ranges.length; i++) {
    let range = ranges[i];
    let range_array = range.split("_");
    let ini = parseInt(range_array[0]);
    let end = parseInt(range_array[1]);
    if (isNaN(end)) {
      result.push(ini);
    }
    else {
      for (let j = ini; j <= end; j++) {
        result.push(j);
      }
    }
  }
  return result;
}