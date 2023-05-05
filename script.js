var num = 0;
document.getElementsByTagName('h1')[0].innerText = num;
document.getElementById('increment').addEventListener('click', function () {
    num = num + 1;
    document.getElementsByTagName('h1')[0].innerText = num;
})

document.getElementById('reset').addEventListener('click', function () {
    num = 0;
    document.getElementsByTagName('h1')[0].innerText = num;
})

