let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");
let c = +prompt("Nhập số thứ ba:");

let max = (a > b) 
            ? (a > c ? a : c) 
            : (b > c ? b : c);

alert("Số lớn nhất là: " + max);
