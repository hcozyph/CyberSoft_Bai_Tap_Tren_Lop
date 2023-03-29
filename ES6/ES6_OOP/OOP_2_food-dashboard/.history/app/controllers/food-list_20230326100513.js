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
        
    
    
    </tr>`;



}