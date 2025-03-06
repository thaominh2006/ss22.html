let input = prompt("Nhập dãy số (cách nhau bởi dấu cách, ví dụ: 5 12 3 9 15):");
let arr = input.split(" ");

let max = Number(arr[0]);

for (let i = 1; i < arr.length; i++) {
  let arrNow = Number(arr[i]);
  if (arrNow > max) {
    max = arrNow;
  }
}
alert("Giá trị lớn nhất trong mảng là: " + max);