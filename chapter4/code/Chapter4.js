//继承机制的实现

/*
function ClassA(color)
{
	this.color = color;

	this.showColor= function()
	{
		alert(this.color);
	};
}

function ClassB(color,name)
{
	this.newMethod = ClassA;
	this.newMethod(color);

	delete this.newMethod; //所有新方法和属性必须在删除新方法之后定义

	this.name = name;

	this.showName = function()
	{
		alert(this.name);
	};
}

var testA = new ClassA("red");
var testB = new ClassB("blue","daige");
testA.showColor();
testB.showColor();
testB.showName();


function ClassA(color)
{
	this.color = color;

	this.showColor= function()
	{
		alert(this.color);
	};
}

function ClassB(color,name)
{
  this.newMethod = ClassA;
	this.newMethod(color);

	delete this.newMethod; //所有新方法和属性必须在删除新方法之后定义

	ClassA.call(this,color);

	this.name = name;

	this.showName = function()
	{
		alert(this.name);
	};
}

var testA = new ClassA("red");
var testB = new ClassB("blue","daige");
testA.showColor();
testB.showColor();
testB.showName();



function ClassA(color)
{
	this.color = color;

	this.showColor= function()
	{
		alert(this.color);
	};
}

function ClassB(color,name)
{
  this.newMethod = ClassA;
	this.newMethod(color);

	delete this.newMethod; //所有新方法和属性必须在删除新方法之后定义

	ClassA.apply(this, arguments);//参数顺序要一致

	this.name = name;

	this.showName = function()
	{
		alert(this.name);
	};
}

var testA = new ClassA("red");
var testB = new ClassB("blue","daige");
testA.showColor();
testB.showColor();
testB.showName();



function ClassA()
{
}

ClassA.prototype.color = "red";

ClassA.prototype.showColor = function()
{
	alert(this.color);
};


function ClassB() //构造函数不能有参数
{
}	

ClassB.prototype  = new ClassA();
ClassB.prototype.name = "";
ClassB.prototype.showName= function()
{
	alert(this.name);
};


var testA = new  ClassA();
var testB = new  ClassB();

testB.color = "blue";
testB.name = "daige";
testA.showColor();
testB.showColor();
testB.showName();



function ClassA(color)
{
	this.color = color;
}

ClassA.prototype.showColor = function()
{
	alert(this.color);
};


function ClassB(color,name) //构造函数不能有参数
{
	ClassA.call(this,color);
	this.name = name;
}	

ClassB.prototype = new ClassA();

ClassB.prototype.showName= function()
{
	alert(this.name);
};


var testA = new  ClassA("red");
var testB = new  ClassB("blue","daige");
testA.showColor();
testB.showColor();
testB.showName();



function Ploygon(sides)
{
	this.sides = sides;
}

Ploygon.prototype.getArea = function()
{
	return 0;
};

//三角形子类
function Triangle(base,height)
{
	Ploygon.call(this,3); //调用超类初始化函数

	this.base = base;
	this.height = height;
}

Triangle.prototype = new  Ploygon();

Triangle.prototype.getArea =  function() //重写getArea函数
{
	return 0.5 * this.base * this.height; 
};

//矩形子类
function Rectangle(length,width)
{
	Ploygon.call(this,4);

	this.length = length;
	this.width = width;
}

Rectangle.prototype = new Ploygon();

Rectangle.prototype.getArea = function()
{
	return this.length * this.width;
};

var triangle = new Triangle(12,4);
var rectangle = new Rectangle(22,10);

alert(triangle.sides);
alert(triangle.getArea());

alert(rectangle.sides);
alert(rectangle.getArea());
*/