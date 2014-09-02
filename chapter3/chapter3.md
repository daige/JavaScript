#第3章  对象基础

##对象的废除
在ECMAScript中，不能访问对象的物理表示，只能访问对象的引用，每次创建对象，存储的都是该对象的引用。在对象的删除的时候，如果对象有多个应用时，要把所以的引用设置为null。

    var test = new Object();
    test = "daige"; //test也是一个对象的引用
    var test1 = test; 
    var test2 = test1;
    test = null; 
    test1 = null;
    alert(test2); //daige 

##本地对象
- Array
  split,concat,slice,push,pop,shift,unshift,reverse,sort,splice
- Date
  `var time = new Date();alert(time.toLocaleString());`

##内置对象
- Global
  Global对象的方法举例：　isNan isFinite parseInt parseFloat   
  encodeURI: 处理完整的URI  　decodeURI相反  
  encodeURIComponent: 　处理URI的片段 　decodeURIComponent  
  eval：`eval("alert('daige')")`  　小心代码注入    

- Math
  max min abs ceil floor round exp log pow sqrt 

##作用域
- this 　this总是指向调用该方法的对象。
<pre><code> 
    var car = new Object();
    car.color = "red";
    car.showColor = function ()
    {
      alert(this.color); //指向调用的对象
    };

    alert(car.showColor());
</code></pre>
    调用对象的属性的时候，必须使用this，不然会被认为是局部变量或者全局变量。  
 
##定义类或对象
1. 工厂方法
<pre><code>
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

    return car; //返回一个对象
}
var myCar = createCar("blue",4);
alert(myCar.showColor());
</code></pre>
2. 构造函数方式
<pre><code>
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
</code></pre> 

3. 原型方式
<pre><code>
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
</code></pre>

4. 混合的构造函数/原型方式
<pre><code>
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
</code></pre>

5. 动态原型方式
<pre><code>
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
</code></pre>

6. 混合工厂方式
<pre><code>
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
</code></pre>

最流行的是混合的构造函数/原型方式，其次是动态原型。

##修改对象
- 增加新方法
<pre><code>
  Number.prototype.toHexString = function()
  {
    return this.toString(16);
  }

  var num = 96;
  alert(num.toHexString());
  </code></pre>
- 重写存在的方法
<pre><code>
  Function.prototype.toString = function()
  {
    return "hi daige";
  };

  function sayHi()
  {
    alert("hi");
  }

  alert(sayHi.toString());
</code></pre>

##小结
- 学到了三种不同的对象:本地对象，内置对象和宿主对象  
- 探讨了Array和Date对象  
- 介绍了完全定义自己对象的能力，以及修改已有对象和加入新方法等方法
