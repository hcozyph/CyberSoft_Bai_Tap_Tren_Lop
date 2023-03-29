/*-------  Cơ chế khai báo biến ------ */

/* 
PHẠM VI BIẾN
- var: Hỗ trợ cơ chế hoisting, nên phạm vi biến là toàn cục

- let: 
    > KHÔNG hỗ trợ cơ chế hoisting khi khai báo biến trùng tên với nhau trên cùng một scope thì browser báo lỗi.
    > Khi khai báo let ở các scope khác nhau thi giá trị sẽ phân biệt.

- const: Tương tự let, tuy nhiên giá trị không được phép gán lại.

=>>> Dùng let thay thế cho var thì khai báo biến trong ES6
*/

// var arrButton = document.querySelectorAll('button');

// for (var index = 0; index < arrButton.length; index++) {
//     let btn = arrButton[index];
//     btn.onclick = function () {
//         alert(btn.innerHTML);
//     }
// }

/*------- HÀM -------*/

//----------declaration function ----- <Hỗ trợ hoisting>
function tenHam() {
    console.log('ten ham');
}

//-----------express function ----- <Không hỗ trợ hoisting>
var showMessage = function () {
    console.log('showMessage');
}


/*
------------- CONTEXT (ngữ cảnh this) ----------------

OBJECT: trong object thì this sẽ là object.

FUNCTION: trong function đối tượng nào thực thi phương thức thì this sẽ là đối tượng đó. Nói cách khác this trong function là function đó.

DEFAULT: this là window.(Khi ngữ cảnh trồng chéo nhau). Nếu mở tính năng module của thẻ script thì sẽ báo lỗi

*/
let hoTen = 'nguyen van teo';
console.log('width:', window.innerWidth);
console.log('title:', window.document.title);
console.log('name:', window.hoTen);


// var sinhvien = {
//     ma: 1,
//     ten: 'Phuoc',
//     hienThiThongTin: function () {
//         function hienThi() {
//             console.log(this.ma);
//             console.log(this.ten);
//         }
//         hienThi();
//     }
// }
// sinhvien.hienThiThongTin();


function Product() {
    this.id = '';
    this.name = '';
    this.showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
    };
}

var prd1 = new Product();
prd1.id = 1;
prd1.name = 'Product A';
prd1.showInfo();

var prd2 = new Product();
prd2.id = 2;
prd2.name = 'Product B';
prd2.showInfo();


/*----------- ARROW FUNCTION  ------------*/

/* Arrow function là cách khai báo hàm với cú pháp '=>'
    + Khai báo hàm ngắn gọn hơn:
        + Đối với hàm chỉ có 1 tham số thì sẽ không cẩn () cho tham số. VD: (title) => {} tương đương title => {}
        + Đối với hàm chỉ có 1 lệnh return thì sẽ không cần ghi chữ return và {}. Ví dụ (a,b)=> {return a+b;} tương đương (a,b) => a+b

    + Loại bỏ được ngữ cảnh (this)
    + Không dùng cho việc khai báo Prototype và cũng không hỗ trợ hoisting => dùng cho mục đích khai báo hàm( hàm không phụ thuộc vào prototype)
*/

var showInfoProduct = () => {
    console.log('Hello hcozyph bc43');
    console.log(this);
}
// var prd = new showInfoProduct();'

var sayHello = (name) => {
    return 'hello' + name;
}

var sayHelloArrow = name => `hello ${name}`;

/* -----------BÀI TẬP ----------------- */
let arrColors = ['red', 'green', 'blue', 'pink', 'orange', 'black'];


////Cách 1: tạo ra các button bằng DOM => append lên ui
// let renderButton = () => {
//     for (let index = 0; index < arrColors.length; index++) {
//         let color = arrColors[index];
//         //Tạo button
//         let btn = document.createElement('button');
//         btn.className = 'btn';
//         btn.style.background = color;
//         btn.innerHTML = color;
//         btn.onclick = function () {
//             document.getElementById('home').style.color = color;
//         }
//         document.getElementById('colors').appendChild(btn);
//     }
// }


////Cách 2:
let renderButton = (array) => {
    let htmlString = '';
    for (var index = 0; index < array.length; index++) {
        let color = array[index];
        htmlString += `
            <button class="btn text-white" style="background-color: ${color}" onclick="changeColor('${color}')">${color}</button>
        `
    }
    console.log(htmlString);
    document.querySelector('#colors').innerHTML = htmlString;
}
renderButton(arrColors);


/* !!!! CHÚ Ý: nếu dòng 147 dùng "let changeColor = (color) {}" thì sẽ bị lỗi vì let k hỗ trợ hoisting => phải dùng window.changeColor  */
window.changeColor = (color) => {
    // console.log(color);
    document.querySelector('#home').style.color = color;
}

///------------DEFAULT PARAMETER VALUES------
var getUserInfo = (name = 'Mị', age = 18) => {
    if (age > 0 && age < 30) {
        console.log(`${name} còn trẻ ${name} muốn đi chơi !`)
    }
}
getUserInfo('Nam', 19);


///----------- REST PARAMETER --------------
function tinhTong(...arrSo) {
    switch (arrSo.length) {
        case 2: {
            console.log('Tổng =', arrSo[0] + arrSo[1]);
        }; break;
        case 3: {
            console.log('Tổng =', arrSo[0] + arrSo[1] + arrSo[2]);
        }; break;
        default: {
            console.log('Tham số không hợp lệ');
        }
    }
}
tinhTong(2, 3);
tinhTong(2, 3, 5);
tinhTong(2, 3, 5, 4);



////------SPREAD OPERATOR ----- dùng để sao chép giá trị của OBJECT hoặc ARRAY

let number1 = 5;
let number2 = number1;
number2 = 10;

console.log('number1', number1)
console.log('number2', number2)


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6];
console.log('arr1', arr1);
console.log('arr2', arr2);


////-----DESTRUCTURING------------ dùng để bóc tách phần tử trong mảng hoặc object
let prod10 = {
    id: 5,
    name: 'Iphone',
    price: 1000,
    showInfo: function () {
        console.log('showInfo');
        console.log('giá tiền', this.price)
    }
}

//es5
//let id = prod10.id

//es6
let { id: maSO, name, showInfo, ...restProd } = prod10;
showInfo.bind(prod10)(); //---> cho biết showInfo là cái gì 
console.log(maSO);

function main() {
    return function () {
        console.log('abc');
    }
}
//main() //1
//main() //1
//main()()


////- DESTRUCTURING FOR ARRAY

let [idProd, nameProd, priceProd, showInfoProd] = [5, 'iphone', 1000,
    function () {
        console.log('Gía tiền', thongTinSP[2]);
    }]

console.log('Tên SP', nameProd);



////- TEMPLATE STRING ``


////- OBJECT LITERAL: sử dụng tên biến làm tên thuộc tính ---

let tenLopHoc = 'CyberSoft BC43';
let maLop = 'BC43';

let lopHoc = {
    maLop,
    tenLopHoc
}

console.log('lopHoc', lopHoc);


let hocSinh = {
    ['mã học viên']: 'BCSV001',
}

console.log(hocSinh['mã học viên']);


var tagInput = document.getElementById('tenSP')
let sanPham = {
    [tagInput.id]: tagInput.ariaValueMax,
}
console.log(sanPham);

/*
    FOR IN: thường dùng để duyệt key của object
    
    FOR OF: thường dùng để duyệt các phần tử của mảng
*/
let arrProduct = [
    { id: 1, name: 'Galaxy note 8', price: 1000 },
    { id: 2, name: 'Galaxy note 9', price: 1000 },
    { id: 3, name: 'Galaxy note 10', price: 1000 },
]
//console.log tất cả sản phẩm trong mảng arrProduct
for (let phone of arrProduct) {
    console.log(phone);
}

for (let index in arrProduct) {
    console.log('index', index);
    console.log('object', arrProduct[index]);
}

/*
    let object = {
        key : value
    }
    let arr = {
        index : value
    } 
*/

let productPhone = { id: 3, name: 'iphone 13', price: 5000 }

for (let key in productPhone) {
    console.log(key, productPhone[key]);
}

function getEle(n) {
    return document.getElementById(n);
};
function querySelector(n) {
    return document.querySelector(n);
}

getEle(btnHienThi).onclick = function () {

}








