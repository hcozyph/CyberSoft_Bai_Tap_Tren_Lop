// console.log(axios)

function readDataText() {

    var promise = axios({
        url: '../data/data.txt',//đường dẫn đi đến file hoặc 1 link (api) do backend cung cấp
        method: 'GET',//Phương thức do backend cung cấp hoặc đọc file là GET
        responseType: 'text',
    });

    //Thành công
    promise.then(function (result) {
        //Hàm này sẽ tự gọi khi axious thực hieejnh lệnh đọc thành công
        console.log(result.data)
    });

    //Thất bại
    promise.catch(function (err) {
        console.log(err);
        //console.error(err);
    })
}

readDataText();