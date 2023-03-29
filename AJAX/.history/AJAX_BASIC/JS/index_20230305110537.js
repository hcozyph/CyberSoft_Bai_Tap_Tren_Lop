// console.log(axios)

function readDataText() {

    var promise = axios({
        url: '../data/data.txt',//đường dẫn đi đến file hoặc 1 link (api) do backend cung cấp
        method: 'GET',//Phương thức do backend cung cấp hoặc đọc file là GET
        responseType: 'text',
    });

    //Thành công
    promise



    //Thất bại
}