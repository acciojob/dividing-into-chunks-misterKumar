/*const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentSubarray = [];

    for (const num of arr) {
        if (currentSubarray.reduce((sum, el) => sum + el, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            result.push(currentSubarray);
            currentSubarray = [num];
        }
    }

    // Append the last subarray
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));*/
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
    let chunks = [];
    let chunk = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > n) {
            // start a new chunk
            chunks.push(chunk);
            chunk = [arr[i]];
            sum = arr[i];
        } else {
            // add to the current chunk
            chunk.push(arr[i]);
            sum += arr[i];
        }
    }

    // add the last chunk
    if (chunk.length > 0) {
        chunks.push(chunk);
    }

    return chunks;
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
