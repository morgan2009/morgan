/*1*/
var string = 'lorem lorem';
console.log(string);
/*2*/
var FireFox = {
	name: 'FireFox',
	version: 10,
	age: 7
};
console.log(FireFox)
/*3*/
var color = {
	color: 'white'
};
function showColor() {
	alert( 'White' );
}
showColor();
/*4*/
for (var i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}
/*5*/
var i = 4;
switch (i) {
	case 1: console.log( 'Маловато' );
	break;
	case 2: console.log( 'Еще немножко' ); 
	break;
	case 3: console.log( 'В точку!' );
	break;
	default: console.log( 'Я таких значений не знаю' );
}
/*6*/
var x = 5;
var result = (x > 1) ? 'да' : 'нет' ;
console.log(result)
/*7*/
var i = 0;

while(i<=7) {
	console.log(i)
	i++;
}
/*8*/
function A (arg1, arg2, callback) {
	alert( 'Число 2 в степени 4' );
	var result = (Math.pow (arg1,arg2));
	callback(result);
}
A (2,4, function(h) {
	alert ( 'Результат ' + h);
});
