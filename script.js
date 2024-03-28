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

const result=[];
let sub=[];
for(let i=0;i<arr.length;i++){
	if(sub.reduce((acc,val)=> acc+val,0)+arr[i]<= n){
		sub.push(arr[i]);
	}
	else{
		result.push(sub);
		sub.push(arr[i]);
	}
  }
if (sub.length > 0) {
result.push(sub);
}

return result;
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
