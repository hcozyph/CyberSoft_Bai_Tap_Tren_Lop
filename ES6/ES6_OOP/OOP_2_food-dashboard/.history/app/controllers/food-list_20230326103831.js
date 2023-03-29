import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

let menu = new Menu();

document.querySelector('#btnThemMon').onclick = function () {
    //input: MonAn
    var mon = new MonAn();
    menu.layDanhSachMonAn(); //lấy storage
    console.log(menu);
    var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');
    for (let input of arrInput) {
        let { id, value } = input;
        mon[id] = value;
    }
    console.log('monAn', mon);

    //Đưa món ăn vào thuộc tính danhSachMonAn của menu
    menu.themMonAn(mon);
    //render món ăn
    menu.renderTableMonAn('#tbodyFood')
    //lưu vào storage
    menu.luuDanhSachMonAn();

}