//بنك أكواد جافا اسكريت


// كود رقم 1
/*
إنشاء مديول فى ملف منفصل وإرساله إلى أى ملف يطلبه
يتم كتابة هذا الكود فى ملف باسم resualt.js
تمت تجربة هذا الكود بنجاح
*/
function add (a, b){
	console.log(a+b)
	}
function squer (s){
	console.log(s*s)
	}
module.exports= {add: add, squer: squer};


// كود رقم 2
/*
طلب ملف وقراءة المديول الذى أرسله
يتم كتابة هذا الكود فى ملف باسم app.js
الملف الموجود بة المديول باسم resualt.js مثلا
انظر الكود رقم 1
*/
const addnew =require ('./resualt')
addnew.add(2,3)
addnew.squer(6)


// كود رقم 3
/*
كود الكتابة إلى ملف جيسون
باسم data.json
تمت تجربة هذا الكود بنجاح
*/
const http = require ('http');
const fs = require ('fs');
const server = http. createServer((req, res)=>{
	fs.readFile('./hame.html', null, (error, data)=>{
        if(error){
            res.end('file have ereror')
        }else{
            res.end(data)
		}
    });
	fs.writeFile('data.json', 'hello world', function(err){
	if (err) return console.error(err)
	});
});
server.listen(3000, "127.0.0.1", ()=>{
    console.log('server runing')
})


//كود رقم 4
/*
كود إنشاء روتج على أكثر من صفحة 
يتم كتابة هذا الكود فى ملف منفص باسم routing.js
انظر الكود رقم 5
تمت تجربة هذا الكود بنجاح
*/
const fs = require ('fs');
const url= require ('url');
function handelrequest(filepath, res){
    fs.readFile(filepath, null, (error, data)=>{
        if(error){
            res.end('file have error')
        }else{
            res.end(data)
        }
    })
}
function routing (req, res){
    const path = url.parse(req.url).pathname;
        switch (path){
            case '/':
		handelrequest('index.html', res);
                break;
	case '/any':
		handelrequest('any.html', res);
		break;
	case '/user':
		handelrequest('user.html', res);
		break;
		default:
                res.end('this page not found');
                break;
        }
}
module.exports = routing;


//كود رقم 5
/*
كود إنشاء سرفر مع طلب الروتر من ملف منفصل
يتم كتابة هذا الكود فى ملف منفص باسم app.js
انظر الكود رقم 4
تمت تجربة هذا الكود بنجاح
*/
const http = require ('http');
const routing = require ('./routing')
const server = http. createServer(routing)
server.listen(3000, "127.0.0.1", ()=>{
    console.log('server runing')
})


//كود رقم 6
/*
كود إنشاء سرفر باستخدام express
يقوم بإرسال محتويات متغير إلى المستعرض
تم استخدام cors 
تمت تجربة هذا الكود بنجاح
*/
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var port = process.env.PORT || 8000;
app.get('/', function (req, res){
    var info = {
        'string_value': 'StackOverflow', 'number_value': 8476
    }
res.json(info);
});
app.listen(port, function(){
    console.log('node.js listen on port'+ port)
})


//كود رقم 7
/*
كود التحكم فى تسجيل الدخول
انظر كود رقم 2 ببنك اتش تى ام ال
تمت تجربة هذا الكود بنجاح
*/
//تسجيل دخول المستخدمين
function check(){
var Username= document.getElementById("field").value;
var password= document.getElementById("password").value;
if (Username=="taha1" && password==1 
//المستخدم الثانى
|| Username=="taha2" && password==2
//يجب وضع المستخد الثالث هنا بنفس نظام المستخد الثانى
){
return true;
}
else {
	alert("اسم المستخدم أو كلمة المرور خطأ");
	return false;
}
}


//كود رقم 8
/*
كود القراءة من ملف جيسون باستخدام new XMLHttpRequest()
ووضع النتائج فى كائنات فى صفحة اتش تى ام ال
انظر الكود رقم 4 ببنك اتش تى ام ال
انظر كود رقم 1 ببنك جيسون
تمت تجربة هذا الكود بنجاح
*/
var xReq = new XMLHttpRequest();
xReq.open('GET', 'data1.json');
xReq.onload = function(){
var xdata = JSON.parse(xReq.responseText);
document.getElementById('data1').innerHTML = xdata[0].Username;
document.getElementById('data2').innerHTML = xdata[0].model;
}
xReq.send();


//كود رقم 9
/*
كود القراءة من ملف جيسون باستخدام new XMLHttpRequest()
ووضع النتائج فى كائنات فى صفحة اتش تى ام ال
بعد الضغط على زر
انظر الكود رقم 4 ببنك اتش تى ام ال
انظر كود رقم 1 ببنك جيسون
تمت تجربة هذا الكود بنجاح
*/
var zar = document.getElementById('zar');
var info = document.getElementById('data1');
var info2 = document.getElementById('data2');
zar.addEventListener("click", function(){
var xReq = new XMLHttpRequest();
xReq.open('GET', 'database1.json');
xReq.onload = function(){
var xdata = JSON.parse(xReq.responseText);
info.innerHTML = xdata[0].Username;
info2.innerHTML = xdata[0].model;
}
xReq.send();
});


//كود رقم 10
/*
تشغيل وإيقاف تيمر وتكرار التيمر
تمت تجربة هذا الكود بنجاح
*/
//يتم إدراج النص فى الصفحة مرة واحدة بعد5 ثوانى
function repeatingFunc( ) {
 document.write( "It's been 5 seconds. Execute the function again." ) ;
 }
setTimeout( repeatingFunc, 5000) ;
//يتم إدراج النص أكثر من مرة كل 5 ثوانى 
function waitFunc( ) {
 document.write( "This will be logged every 5 seconds" ) ;
}
setInterval( waitFunc, 5000) ;
//النص لا يظهر مطلقا
function waitFunc( ) {
 document.write( "This will not be logged after 5 seconds" ) ;
}
function stopFunc( ) {
 clearTimeout(timeout) ;
}
var timeout = window.setTimeout( waitFunc, 5000) ;
window.setTimeout( stopFunc, 3000)
//يتم إدراج النص 6 مرات مرة كل 5 ثوانى 
function waitFunc( ) {
 document.write( "This will be logged every 5 seconds" ) ;
}
var interval = window.setInterval( waitFunc, 5000) ;
window.setTimeout( function( ) {
 clearInterval( interval) ;
}, 32000) ;


//كود رقم11
/*
قراءة الخصائص من object
تمت تجربة هذا الكود بنجاح
*/
var john = {firstname: "John" ,  lastname: "Doe" ,  fullname: "John Doe" };
var billy = {
 firstname: "Billy" ,
 lastname: undefined,
 fullname: "Billy"
};
window.alert(john.fullname) ; // John Doe
window.alert(billy.firstname) ; // Billy


//الكود رقم 12
/*
قراءة العناصر من array
تمت تجربة هذا الكود بنجاح
*/
var myArray = [ "John Doe" , "Billy" ] ;
window.alert(myArray[1]) ; // Billy


//كود رقم 13
/*
كود إدراج محتويات ملف نصى فى كائن فى الصفحة
الملف النصى باسمajax_info.txt 
انظر كود رقم 5 ببنك اتش تى ام ال
تمت تجربة هذا الكود بنجاح
*/
function loadDoc() {
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("demo").innerHTML = this.responseText;
    		}
  	};
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}


//كود رقم 14
/*
كود الاستماع إلى حدث على كائن
انظر الكود رقم 6 ببنك اتش تى ام ال
تمت تجربة هذا الكود بنجاح*/
var text = document.getElementById('taha');
//
text.addEventListener("click", function(){ alert("Hello World!"); });
//
text.addEventListener("mouseover", myFunction);
//
text.addEventListener("click", myFunction);
//
text.addEventListener("mouseout", myFunction);
// 
function myFunction() {
  alert ("Hello World!");
}
//
var sometext = "hello world"
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});  


//كود رقم 15
/*
كود أنيميشن فى شفافية الكائن لكائن فى الصفحة
انظر كود رقم 7 ببنك اتش تى ام ال
تمت تجربة هذا الكود بنجاح
*/
var FADE_DURATION = 8000;
var startTime = -1.0;
function render(currTime) {
	var head1 = document.getElementById("demo");
	var opacity = (currTime/FADE_DURATION);
	head1.style.opacity = opacity;
	}
function eachFrame() {
	var timeRunning = (new Date()).getTime() - startTime;
	if (startTime < 0) {
	startTime = ( new Date( ) ) .getTime( ) ;
	render( 0.0) ;
	} else if ( timeRunning < FADE_DURATION) {
	render( timeRunning) ;
	} else {
	return;
	}
window.requestAnimationFrame( eachFrame) ;
};
window.requestAnimationFrame( eachFrame) ;


//كود رقم 16
/*




