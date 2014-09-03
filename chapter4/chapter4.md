#第四章 继承

##继承机制的实现
开发者定义的类都可以作为基类，本地类和宿主类不能成为基类。  
只用于提供子类通用函数，而不能直接使用的基类叫抽象类。  
创建的子类可以继承超类的所有属性和方法，而且都是公用的。

- 对象冒充
<pre><code> 
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
</code></pre>

- call()方法
 <pre><code>
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
  /*  this.newMethod = ClassA;
    this.newMethod(color);

    delete this.newMethod; //所有新方法和属性必须在删除新方法之后定义
  */
    ClassA.call(this,color); //this指向ClassB

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
</code></pre>

- apply()方法
 <pre><code>
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
  /*  this.newMethod = ClassA;
    this.newMethod(color);

    delete this.newMethod; //所有新方法和属性必须在删除新方法之后定义
  */
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
  </code></pre>

- 原型链
 <pre><code>
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

  ClassB.prototype  = new ClassA(); //用类重写超类的prototype
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
</code></pre>

- 混合方式
<pre><code>
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
</code></pre>

##实例

<pre><code>
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

</code></pre>


##小结
- 介绍了ECMAScript中用对象冒充和原型链实现的继承。


