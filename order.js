// JavaScript source code
function reciept() {

    alert('Thank you for your order. Your reciept has been added to your account.');

}

function showOrder() {
    for (var key in sessionStorage) {
        console.log(key + ':' + sessionStorage[key]);
    }
    var output = '';

    for (var key in sessionStorage) {
        output = output + (key + ':' + sessionStorage[key]) + '\n';
    }

    $('#DivToPrintOut').html(output);
}