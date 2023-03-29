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

var arrButton = document.querySelectorAll('button');

for (var index = 0; index < arrButton.length; index++) {
    let btn = arrButton[index];
    btn.onclick = function () {
        alert(btn.innerHTML);
    }
}

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
DEFAULT: this là window.

*/
hoTen = 'nguyen van teo';
console.log('width:', window.innerWidth);
console.log('title:', window.document.title);
console.log('name:', window.hoTen);


var sinhvien = {
    ma: 1,
    ten: 'Phuoc',
    hienThiThongTin: function () {
        console.log(this.ma);
        console.log(this.ten);
    }
}

sinhvien.hienThiThongTin();

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


var prd2 = new Product();
prd1.id = 2;
prd1.name = 'Product B';





























