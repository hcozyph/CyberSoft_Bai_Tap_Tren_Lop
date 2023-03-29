export class Menu {
    danhSachMonAN = []; //chứa nhiều object món ăn [{...};{...};...]

    themMonAn(mon) {
        this.danhSachMonAN.push(mon);
    }
}