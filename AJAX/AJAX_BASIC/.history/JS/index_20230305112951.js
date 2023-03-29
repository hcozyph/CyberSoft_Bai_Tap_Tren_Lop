console.log(axios)

function readDataText() {

    var promise = axios({
        url: "../data/data.txt",//đường dẫn đi đến file hoặc 1 link (api) do backend cung cấp
        method: "GET",//Phương thức do backend cung cấp hoặc đọc file là GET
        responseType: "text",
    });

    //Thành công
    promise.then(function (result) {
        //Hàm này sẽ tự gọi khi axious thực hieejnh lệnh đọc thành công
        console.log(result.data)

        //Đưa dữ liệu lên giao diện
        document.getElementById('content').innerHTML = `Họ tên: ${result.data}`;
    });

    //Thất bại
    promise.catch(function (err) {
        console.log(err);
        //console.error(err);
    })
}

readDataText();


function renderXMLData() {

    var promise = axios({
        url: '../data/data.xml',
        method: 'GET',
        responseType: 'document'
    });

    //Thành công
    promise.then(function (res) {
        console.log(res.data)
    });

    //Thất bại
    promise.catch(function (err) {
        console.log(err);
    })
}
renderXMLData;



function renderJSONData() {
    var promise = axios({
        url: '../data/data.xml',
        method: 'GET',
        responseType: 'json'
    });

    //Thành công
    promise.then(function (res) {
        console.log(res.data)
    });

    //Thất bại
    promise.catch(function (err) {
        console.log(err);
    })

}

renderJSONData();