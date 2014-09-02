/*
//对象删除
var test = new Object();

test = "daige"; //test也是一个对象的引用
var test1 = test;
var test2 = test1;

test = null; 
test1 = null;

alert(test2);


//数组
var value = new Array(2);

value[0]=1;
value[1]=2;
value[2]=3;

alert(value[0]);
alert(value.length);

value[4]=5;

alert(value[3]);
alert(value.length);


var color = ["red","block","yellow"];

alert(color.toString());
alert(color.valueOf());

alert(color.join(":"));

string="192.168.0.1";
var splitIp = string.split(".");
alert(splitIp[0]);


var color = ["red","block","yellow"];
var color2 = color.concat("daige");
alert(color2.toString());
var color3 = color.slice(1,3);
alert(color3.toString());

//栈
var stack = new Array();
stack.push(1);
stack.push(2);
stack.push(3);

alert(stack.toString());

var test = stack.pop();

alert(test);
alert(stack.toString());


//队列
var queue = new Array();
queue.push(1);
queue.push(2);
queue.push(3);

alert(queue.toString());
var test = queue.shift();
alert(test);
alert(queue.toString());


//排序和逆序
var color = ["red","blue","green","yellow"];

alert(color.reverse().toString());
alert(color.sort().toString());


var color = ["red","blue","green","yellow"];
alert(color.splice(2,1,"block","daige"));
alert(color.splice(0,2));

//Date

var  time = new Date();
time.setMinutes(time.getMinutes()+ time.getTimezoneOffset() + 12 * 60 - 300);
var timeString = "Beijing Time: " + time.getFullYear() +" " +(time.getMonth()+1)+" "+time.getDate()+" "
				 			 +time.getHours()+" "+time.getHours()+" "+time.getSeconds();
alert(timeString);

alert(new Date(new Date().getTime() + new Date().getTimezoneOffset()*60000))


var time = new Date();

alert(time.toLocaleString());

//内置对象
var uri = "http://daige.me/download.php? id=13&name=daige#begin";
alert(encodeURI(uri));
alert(encodeURIComponent(uri));



eval("alert('daige')");


alert(Math.ceil(25.5));
alert(Math.round(25.5));
alert(Math.floor(25.5));

//作用域
var car = new Object();
car.color = "red";
car.showColor = function ()
{
	alert(this.color);
};

alert(car.showColor());



//定义类或对象

//工厂
function createCar(color,doors)
{
	var car = new Object();

	car.color = color;
	car.doors = doors;
	car.mpg = 23;

	car.showColor = function()
	{
		alert(this.color);
	};

	return car;
}

var myCar = createCar("blue",4);
alert(myCar.showColor());

function Car(color,doors)
{
	
	this.color = color;
	this.doors = doors;
	this.mpg = 23;

	this.showColor = function()
	{
		alert(this.color);
	};
}

var myCar = new Car("blue",4);
alert(myCar.showColor());

function Car()
{
}

Car.prototype.color = "red";
Car.prototype.doors = 4;
Car.prototype.mpg = 23;

Car.prototype.showColor = function()
{
	alert(this.color);
};


var myCar = new Car();
alert(myCar.showColor());

function Car(color,doors)
{
	this.color = color;
	this.doors = doors;
	this.mpg = 23;
}

Car.prototype.showColor = function()
{
	alert(this.color);
};

var myCar = new Car("blue",4);
alert(myCar.showColor());

function Car(color,doors)
{
	this.color = color;
	this.doors = doors;
	this.mpg = 23;
}

if( typeof Car._initialized == "undefined")
{
	Car.prototype.showColor = function()
	{
		alert(this.color);
	};

	Car._initialized = true;
}

var myCar = new Car("blue",4);
alert(myCar.showColor());

function Car(color,doors)
{
	var car = new Object();

	car.color = color;
	car.doors = doors;
	car.mpg = 23;

	car.showColor = function()
	{
		alert(this.color);
	};

	return car;
}

var myCar = new Car("blue",4);
alert(myCar.showColor());



Number.prototype.toHexString = function()
{
	return this.toString(16);
}

var num = 96;
alert(num.toHexString());*/

Function.prototype.toString = function()
{
	return "hi daige";
};

function sayHi()
{
	alert("hi");
}

alert(sayHi.toString());