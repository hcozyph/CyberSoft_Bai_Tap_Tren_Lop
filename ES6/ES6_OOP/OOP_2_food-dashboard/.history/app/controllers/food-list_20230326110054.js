import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

let menu = new Menu();
menu.layDanhSachMonAn(); //lấy storage
menu.renderTableMonAn('#tbodyFood');
console.log(menu);

document.querySelector('#btnThemMon').onclick = function () {
    //input: MonAn
    var mon = new MonAn();

    var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');
    for (let input of arrInput) {
        let { id, value } = input;
        mon[id] = value;
    }
    console.log('monAn', mon);

    //Đưa món ăn vào thuộc tính danhSachMonAn của menu
    menu.themMonAn(mon);
    //render món ăn
    menu.renderTableMonAn('#tbodyFood');
    //lưu vào storage
    menu.luuDanhSachMonAn();
}


window.delete = function (maMon) {
    menu.xoaMonAn(maMon);
    //render lại table
    menu.renderTableMonAn('#tbodyFood');
}

