//ES5: format của object (prototype - lớp đối tượng - class)
function SinhVien() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.hienThiThongTin = function () {
        console.log(this.maSinhVien);
        console.log(this.tenSinhVien);
    }
}

//ES6 : prototype trong es6
class SinhVienES6 {
    //thuộc tính
    maSinhVien = '';
    tenSinhVien = '';
    //phương thức
    hienThiThongTin() {
        console.log(this.maSinhVien);
        console.log(this.tenSinhVien);
    }
}


let sv = new SinhVienES6();
