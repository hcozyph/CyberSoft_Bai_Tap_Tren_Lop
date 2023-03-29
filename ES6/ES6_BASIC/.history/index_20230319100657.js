/*-------  Cơ chế khai báo biến ------ */

/* 
PHẠM VI BIẾN
- var: Hỗ trợ cơ chế hoisting, nên phạm vi biến là toàn cục

- let: 
    > KHÔNG hỗ trợ cơ chế hoisting khi khai báo biến trùng tên với nhau trên cùng một scope thì browser báo lỗi.
    > Khi khai báo let ở các scope khác nhau thi giá trị sẽ phân biệt.

- const: Tương tự let, tuy nhiên giá trị không được phép gán lại.
*/

var arrButton = document.querySelectorAll('button');

for (let index = 0; index < arrButton.length; index++) {
    let btn = arrButton[index];
    btn.onclick = function () {
        alert(btn.innerHTML);
    }
}

































