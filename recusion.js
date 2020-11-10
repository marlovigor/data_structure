// const sumOf = function(list) {
//     // Base case
//     if (list.length === 1) {
//         return list[0];
//     }
//     // General case
//    return list[0] + sumOf(list.slice(1))

// }

// let lst = [2,4,6,8,10];
// console.log(sumOf(lst));

// const numOfSheep = function(sheep){
//     if (sheep <= 0){
//         return console.log('all sheep jumped over the fence');
//       }
//     console.log(`${sheep}: Another sheep jumps over the fence`)
//    setTimeout(()=>{
//     numOfSheep(sheep - 1)
//    }, 2000);
//     // setInterval(function(){
//     //     return numOfSheep(count - 1)


//     // },2000)
// }

// console.log(numOfSheep(3))


// function sum(array) {
//   let sum = 0, ticks=1;
//   for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//       ticks++;
//   }
//   return {result: sum, ticks};
// }
// time complexity is 0(n)  say = 0 of n
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))

// function getRandomItem(array){
//   if(array <= 0){
//     console.log('no numbers entered')
//   }
//   let ticks =0;

//   const item = array[Math.floor(Math.random() * array.length)];

//   ticks++;
//   return{
//     results:item,
//     ticks:ticks
//   }

   
// }

// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
     because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
      ticks++;
      return 0;
  }

  let lowIndex = 0, highIndex = arr.length;

  while (highIndex > lowIndex) {
      // Find midpoint
      let midIndex = Math.floor((highIndex + lowIndex) / 2);
      /* If `midIndex` element is greater than `n`, that means all elements
         to the right of `midIndex` are also greater than `n`, so
         we only need to focus on elements to the left of `midIndex`.
         We set `highIndex` to the current value of `midIndex` so next time
         through the loop, we'll only look at the left half */
      if (arr[midIndex] >= n) {
          highIndex = midIndex;
          ticks++;
      }

      /* If the element to the right of `midIndex` is less than `n`, then we
         know that we need to check the items to the right of `midIndex`, so
         we set `lowIndex` to the current value of `midIndex`, so that next
         time through the loop we only look at the right side */
      else if (arr[midIndex + 1] < n) {
          lowIndex = midIndex;
          ticks++;
      }

      /* Otherwise, if the element to the right of `midIndex` is greater
         than or equal to `n`, we know that the item at `midIndex` is the last
         item that's less than `n`, so we return `midIndex +  1` to get the total
         number of items that are less than `n` */
      else {
          ticks++;
          return {
              result: midIndex + 1,
              ticks: ticks
          }
      }
  }
}

console.log(howManyLessThanNitems([1,2,3], 2));
console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 44 ));