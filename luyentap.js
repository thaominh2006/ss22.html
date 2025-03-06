let stuMenu = [
    "Do Thao Minh",
    "Do Khac Quyen",
    "Pham Thanh Dat"
];
console.log(stuMenu)

// read one- lay 1 phan tu
stuMenu[2];
console.log(stuMenu[2], "Bien")
stuMenu[stuMenu.length - 1];
// read all
for(let i = 0; i < stuMenu.length; i = i + 1){
    console.log(stuMenu[i], "BIEN HET")
}
for(let i = stuMenu.length - 1; i >= 0; i = i - 1){
    console.log(stuMenu[i], "BIEN HET")
}

for(let stu1 of stuMenu){
    console.log(stu1)
}

for (let index in stuMenu){
    console.log(index, stuMenu[index])
}

// create (.unshift)
stuMenu.unshift("Pham Thai Son")
console.log(stuMenu)

stuMenu.push("Pham Ngoc Linh")
console.log(stuMenu)

stuMenu.splice(0, 0, "Vu Xuan Duc")
console.log(stuMenu)

stuMenu[4] = "Phuong Trang"
// delete: start(.shift),end(.pop),random(.splice)
stuMenu.shift();
console.log(stuMenu)
stuMenu.pop();
console.log(stuMenu)
stuMenu.splice(2, 1)
console.log(stuMenu)

