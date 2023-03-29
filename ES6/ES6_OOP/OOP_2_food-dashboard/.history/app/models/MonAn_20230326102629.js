//Lưu ý: Model sẽ không DOM đến view, muốn DOM đến view phải truyền dưới dạng tham số
export class MonAn {
    maMonAn = '';
    tenMon = '';
    loai = '';
    giaMon = '';
    khuyenMai = '';
    tinhTrang = '';
    hinhMon = '';
    moTa = '';
    tinhGiaKhuyenMai() {
        let giaMonKM = this.giaMon - (this.giaMon * this.khuyenMai / 100);
        return giaMonKM;
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