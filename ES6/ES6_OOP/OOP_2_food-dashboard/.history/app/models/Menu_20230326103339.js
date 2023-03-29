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

        document.querySelector(selectorTbody).innerHTML = htmlContent;
        return htmlContent;
    }


    luuDanhSachMonAn() {
        let stringDSMA = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem('DSMA', stringDSMA);
    }

    layDanhSachMonAn() {
        if (localStorage.getItem('DSMA')) {
            let stringDSMA = localStorage.getItem('DSMA');
            this.danhSachMonAn = JSON.parse(stringDSMA);
        }
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