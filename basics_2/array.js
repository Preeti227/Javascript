const arr=[1,2,3,4,5];
console.log(arr[0]);

const arr1= new Array(1,8,9,2,5);
console.log(arr1);

//Arrays maintain shallow copy of the data, so if we change the value of an element in the array, it will change the value of the original array as well.

//Array methods
arr.push(6); //adds an element to the end of the array
console.log(arr);
arr.pop(); //removes the last element of the array
console.log(arr);
arr.unshift(0); //adds an element to the beginning of the array
console.log(arr);
arr.shift(); //removes the first element of the array
console.log(arr);

console.log(arr.includes(9)); //returns true if the array contains the specified element, otherwise returns false
console.log(arr.indexOf(3));

const arr2= arr.join("/"); //joins all the elements of the array into a string, separated by the specified separator
console.log(arr2);

const arr3= arr.slice(1,4); //returns a new array containing the elements from the specified start index to the end index (exclusive)
console.log(arr3);

const arr4= arr.splice(1,4); //removes the specified number of elements from the array, starting from the specified index, and returns the removed elements as a new array
console.log(arr4);
console.log(arr);//The original array is modified by the splice method, while the slice method does not modify the original array.