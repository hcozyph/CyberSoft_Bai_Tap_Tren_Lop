
let arrProduct = [
    { id: 1, name: "IPhone X", price: 1000, type: "Phone" },
    { id: 2, name: "IPhone XS", price: 1250, type: "Phone" },
    { id: 3, name: "IPhone XS MAX", price: 1350, type: "Phone" },
    { id: 4, name: "Ipad pro 13", price: 1050, type: "Tablet" },
    { id: 5, name: "Ipad pro max 13", price: 1550, type: "Tablet" },
    { id: 6, name: "Macbook m1", price: 1250, type: "Laptop" },
    { id: 7, name: "Macbook m2", price: 1750, type: "Laptop" },
    { id: 8, name: "Macbook m3", price: 2350, type: "Laptop" },
]

//Yêu cầu: Từ mảng arrProduct lấy ra các sản phẩm có type là Phone
function getPhoneProduct() {
    let arrPhone = [];
    for (let prod of arrProduct) {
        if (prod.type === 'Phone') {
            arrPhone.push(prod);
        }
    }

    return arrPhone;
}

let res = getPhoneProduct();
console.log('res', res);

//.filter: là method của aray dùng để lọc ra các object thỏa tiêu chí của arrow function. Kết quả trả về là arr[], nếu không có phần tử nào khớp sẽ trả về arr rỗng.

let resPhone = arrProduct.filter(prod => prod.type === 'Phone');
console.log('resPhone', resPhone);


//Lấy ra các sản phẩm có giá trị từ 1250 trở lên
let resPhonethan1250 = arrProduct.filter(prod => prod.price.value >= 1250);
console.log("resPhonethan1250", resPhonethan1250);
























