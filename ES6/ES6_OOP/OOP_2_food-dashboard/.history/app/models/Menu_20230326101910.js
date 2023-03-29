export class Menu {
    danhSachMonAn = []; //chứa nhiều object món ăn [{...};{...};...]

    themMonAn(mon) {
        this.danhSachMonAn.push(mon);
    }
}

/*
    let menu = {
        danhSachMonAn: [{maMon:...},{maMon:...},...]
        themMon: function themMonAn(mon){
            this.danhSachMonAn.push(mon);
        }
    }
*/