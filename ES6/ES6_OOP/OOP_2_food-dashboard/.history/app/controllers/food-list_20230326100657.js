import { MonAn } from "../models/MonAn.js";


document.querySelector('#btnThemMon').onclick = function () {
    //input: MonAn
    var mon = new MonAn();

    var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');
    for (let input of arrInput) {
        let { id, value } = input;
        mon[id] = value;
    }
    console.log('monAn', mon);



    //output: stringHTML= '<tr >....</tr>';

    let trMonAn = `<tr>
        <td>${mon.maMonAn}</td>
        <td>${mon.tenMon}</td>
        <td>${mon.loai}</td>
        <td>${mon.giaMon}</td>
        <td>${mon.khuyenMai}%</td>
        <td>${mon.tinhGiaKhuyenMai()}</td>
        <td>${mon.tinhTrang}</td>
    </tr>`;

    document.querySelector('#tbodyFood').innerHTML += trMonAn;

}