/**

Applies a function to each element of an array and returns a new array with the results
@param arr The input array to be operated
@param in_function The function to be applied to each element of the array
@returns A new array with the results of applying the function to each element of the input array
*/
export function myMap(arr: number[], in_function: (num: number) => number): number[] {
  // We make the constant
  const result: number[] = [];
  // Then we make a for loop to operate the array with the in_function function
  for (let i = 0; i < arr.length; i++) {
    result.push(in_function(arr[i]));
  }
  return result;
}