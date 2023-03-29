//Lưu ý: Model sẽ không DOM đến view, muốn DOM đến view phải truyền dưới dạng tham số
export class Menu {
    danhSachMonAn = []; //chứa nhiều object món ăn [{...};{...};...]

    themMonAn(mon) {
        this.danhSachMonAn.push(mon);
    }

    renderTableMonAn(selectorTbody) {
        let htmlContent = [];
        for (let mon of this.danhSachMonAn) {
            htmlContent += `
                <tr>
                    <td>${mon.maMon}</td>
                    <td>${mon.tenMon}</td>
                    <td>${mon.loai}</td>
                    <td>${mon.giaMon}</td>
                    <td>${mon.khuyenMai}</td>
                    <td>${mon.tinhGiaKhuyenMai}</td>
                    <td>${mon.tinhTrang}</td>
                </tr>
            `
        }

        document.querySelector(selectorTbody) = htmlContent;
        return htmlContent;
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