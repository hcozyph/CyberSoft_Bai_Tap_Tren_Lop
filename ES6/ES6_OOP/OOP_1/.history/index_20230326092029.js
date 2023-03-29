/* -------------  Cơ chế khai báo biến ------------------------- */

/*
    Phạm vi biến
    var: Hỗ trợ cơ chế hoisting, nên phạm vi biến là toàn cục
    let: Không hỗ trợ hoisting, khi khai báo biến trùng tên với nhau trên cùng 1 scope thì browser sẽ báo lỗi. Khi khai báo let ở các scope khác nhau thì giá trị sẽ phân biệt.
    const: Tương tự let tuy nhiên giá trị không được phép gán lại
    => Dùng let thay cho var khi khai báo biến trong es6
*/
let title = 'abc';
{
    let title = 'xyz';
    console.log(title); //???
};
console.log(title); //???
const DOMAIN = 'https://api.cybersoft.edu.vn';
{
    const DOMAIN = 'abc';
}

var arrButton = document.querySelectorAll('button');

for (let index = 0; index < arrButton.length; index++) {
    let btn = arrButton[index];
    btn.onclick = function () {
        alert(btn.innerHTML);
    }
}
// {
//     let index = 0;
//     let btn = arrButton[index];
//     btn.onclick = function () {
//         alert(btn.innerHTML);
//     }
// }
// {
//     let index = 1;
//     let btn = arrButton[index];
//     btn.onclick = function () {
//         alert(btn.innerHTML);
//     }
// }
// {
//     let index = 2;
//     let btn = arrButton[index];
//     btn.onclick = function () {
//         alert(btn.innerHTML);
//     }
// }

/* --------------------- Hàm ----------------------- */

//declaration function (hỗ trợ hoisting)
function tenHam() {
    console.log('tên hàm');
}
//expression function (không hỗ trợ hoisting)
var showMessage = function () {
    console.log('showMessage');
}

tenHam();
showMessage();


/*  ------------------ context (ngữ cảnh this) -----------------------------
    object: Trong object this sẽ là object 
    function: Trong function đối tượng nào thực thi phương thức thì this sẽ là đối tượng đó . Nói cách khác this trong function là function đó.
    default(mặc định): this là window (Khi ngữ cảnh chồng chéo nhau) - Nếu mở tính năng module của thẻ script thì sẽ báo lỗi
*/




console.log('chiều rộng', window.innerWidth);
console.log('tiêu đề web', window.document.title);
console.log('họ tên', window.hoTen);

var sinhVien = {
    ma: 1,
    ten: 'Huy',
    hienThiThongTin: function () {
        var hienThi = () => {
            console.log(this.ma);
            console.log(this.ten);
        }
        hienThi();
    }
}

sinhVien.hienThiThongTin();



function Product() {
    this.id = '';
    this.name = '';
    this.showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
    }
}
var prd1 = new Product();
prd1.id = 1;
prd1.name = 'Product A';
prd1.showInfo();
var prd2 = new Product();
prd2.id = 2;
prd2.name = 'Product B';
prd2.showInfo();


// ---------------- Arrow function --------------------------
/*
    Arrow function là cách khai báo hàm với cú pháp => 
    + Khai báo hàm ngắn gọn hơn
        + Đối với hàm chỉ có 1 tham số thì sẽ không cần () cho tham số. ví dụ: (title) => {}  tương đương title => {}
        + Đối với hàm chỉ có 1 lệnh return thì sẽ không cần ghi chữ return và {}. Ví dụ:  (a,b)=> {return a+b;} tương đương (a,b) => a + b
    + Loại bỏ ngữ cảnh (this)
    + Không dùng cho việc khai báo prototype và cũng không hỗ trợ hoisting
    => dùng cho mục đích khai báo hàm (hàm tìm số nguyên tố, hàm xử lý chức năng, hàm onclick, onchange, event ....);


*/
var showInfoProduct = () => {
    console.log('Hello cybersoft bc43');
    console.log(this);
}


var sayHello = (name) => {
    return 'hello' + name;
}

var sayHelloArrow = name => `hello ${name}`;
//Viết tắt của arrow 

var renderObject = (id, name) => ({
    id: id,
    name: name
})






/** -----Bài tập---- */

let arrColors = ['red', 'green', 'blue', 'pink', 'orange', 'black'];

let renderButton = () => {
    //Cách 1: Tạo ra các button = dom => append lên ui
    // for(let index = 0 ; index < arrColors.length;index++){
    //     let color = arrColors[index];
    //     //Tạo ra button
    //     let btn = document.createElement('button');
    //     btn.className = 'btn text-light mx-2';
    //     btn.style.background = color;
    //     btn.innerHTML = color;
    //     btn.onclick = function () {
    //         document.getElementById('home').style.color = color;
    //     }

    //     document.getElementById('colors').appendChild(btn);
    // }
    //Cách 2: 
    let outputHTML = ``;
    for (let index = 0; index < arrColors.length; index++) {
        //Mỗi lần duyệt lấy ra 1 màu từ mảng arrColor
        let color = arrColors[index];
        outputHTML += `
            <button class="btn text-white mx-2" style="background-color:${color};" onclick="changeColor('${color}')">${color}</button>
        `
    }
    //Hiển thị output lên giao diện
    document.getElementById('colors').innerHTML = outputHTML;

}
renderButton();

window.changeColor = (color) => {
    document.querySelector('#home').style.color = color;
}

//-------------------------- Default parameter values -------------------------------

var getUserInfo = (name = "Mị", age = 18) => {
    if (age > 0 && age < 30) {
        console.log(`${name} còn trẻ ${name} muốn đi chơi !`);
    }
}

getUserInfo('Huy');


/* ------------------------ Rest prameter ------------
    RestParam: là ham số của hàm nhận nhiều giá trị khi gọi hàm dưới dạng mảng
*/
function tinhTong(...arrSo) {
    switch (arrSo.length) {
        case 2: {
            console.log('Tổng = ', arrSo[0] + arrSo[1]);
        }; break;
        case 3: {
            console.log('Tổng = ', arrSo[0] + arrSo[1] + arrSo[2]);
        }; break;
        default: {
            console.log('Tham số không hợp lệ');
        }
    }
}
tinhTong(2, 3);
tinhTong(2, 3, 5);
tinhTong(2, 3, 5, 4);

/*
    Spread Operator : Dùng để sao chép giá trị của object hoặc array

*/

let hocVien1 = { id: 5, name: 'Huy' }; // {}00z
let hocVien2 = { ...hocVien1, id: 100, phone: '0909090909' }; // hocVien2 = 00T
// hocVien2.id = 100;

console.log('hocVien1', hocVien1); //10
console.log('hocVien2', hocVien2); //10


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6];
// arr2.push(6);

console.log('arr1', arr1);
console.log('arr2', arr2);

/* ------------- Destructuring ---------------
    Destructuring dùng để bóc tách phần tử trong mảng hoặc object
*/

let prod10 = {
    id: 5,
    name: 'Iphone',
    price: 1000,
    showInfo: function () {
        console.log('showinfo');
        console.log('Giá tiền', this.price)
    }
}
//es5
// let id = prod10.id;
//es6 
let { id: maSP, name, showInfo, ...restProd } = prod10;

let f = showInfo.bind(prod10);
f();
console.log(maSP);
function main() {
    return function () {
        console.log('abc')
    }
}
// main() //1
// main()// {id:1}
// main()()

//Đối với mảng (tuple)

let [idProd, nameProd, priceProd, showInfoProd] = [5, 'Iphone', 1000, function () {
    console.log('Giá tiền', thongTinSP[2]);
}]
console.log('Tên SP', nameProd);

// ----------- Object literal: Sử dụng tên biến làm tên thuộc tính ------

let tenLopHoc = 'Cybersoft BC43';
let maLop = 'BC43';

let lopHoc = {
    maLop,
    tenLopHoc
}

console.log('lopHoc', lopHoc);


let hocSinh = {
    ['mã học viên']: 'BCSV001'
}

console.log(hocSinh['mã học viên']);

var tagInput = document.getElementById('tenSP')
let sanPham = {
    [tagInput.id]: tagInput.value
}

console.log(sanPham);

/*
    for in: thường dùng để duyệt key của object
    for of: thường dùng để duyệt các phần tử của mảng
*/
let arrProduct = [
    { id: 1, name: 'Galaxy note 20', price: 1000 },
    { id: 2, name: 'Galaxy note 21', price: 2000 },
    { id: 3, name: 'Galaxy note 22', price: 2000 },
]
//consoe.log tất cả sản phẩm trong mảng arrProduct
for (let phone of arrProduct) {
    console.log(phone);
}
for (let index in arrProduct) {
    console.log('index ', index);
    console.log('object ', arrProduct[index]);
}
let productPhone = { id: 3, name: 'Galaxy note 22', price: 2000 }
for (let key in productPhone) {
    console.log(key, productPhone[key]);
}
/*
    let object = {
        key : value
    }
    let arr = {
        index: value
    }
*/


/* Bài tập */

document.querySelector('#frmNhanVien').onsubmit = function (event) {
    event.preventDefault(); //Chặn reload browser

    let arrInput = document.querySelectorAll(' #frmNhanVien input,#frmNhanVien select');
    let nhanVien = {};
    // nhanVien.id = 1;
    // nhanVien['id'] = 1;
    for (let input of arrInput) {
        //input.id,input.name,input.style,input.onchange ....
        let { id, value, style } = input;
        // let id = input.id; // maNhanVien
        // let value = input.value; //1
        // let name = input.name;
        style.backgroundColor = 'green';
        nhanVien[id] = value;
    }

    //nhanVien = {maNhanVien:1,tenNhanVien:'Nguyễn văn a',...}
    let contentHTML = '';
    for (let key in nhanVien) {
        contentHTML += `
            <p>${key} : ${nhanVien[key]}</p>
        `
    }

    document.querySelector('#ketQuaHienThi').innerHTML = contentHTML;

}
//import
import { ProductES6, DOMAIN_API as API_URL } from "./models/Product.js";
//import file default
import PrototypeProduct from './models/Product.js';

// import _ from './node_modules/lodash';

let prod15 = new ProductES6();
console.log(prod15);

console.log(API_URL);

let product20 = new PrototypeProduct();
console.log(product20);
// console.log(_);

import { gv, gv2 } from './models/SinhVien.js';

console.log('first')