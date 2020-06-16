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
كود إنشاء سرفر باستخدام http
وقراءة الملف باستخدام fs
وكتابة نصى الى ملف باسم data.json
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



