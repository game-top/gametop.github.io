var a = 'al;';

var d = 'ss;';

setTimeout(wow, 10000);
// setInterval(wow, 500)

function wow() {
    var tochno = 'точно ';
    for(var i = 1; i < 10; i++) {
        tochno = tochno + tochno;
        console.log('Ты ' + tochno + ' хочешь закрыть окно?');
    }
    
}