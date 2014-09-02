#第2章 ECMAScript基础

## 语法  
 区分大小写  
 变量为弱类型　　　　　　　　　只用var运算符，可以将它初始化为任意的值  
 每行结尾的分号可有可无　　　　编码习惯最好总加入分号，因为有些浏览器不能正确运行  
 注释和C的注释相同　　　　　　　/**/  // 两种注释方法  
 括号表明代码块　　        
 
## 变量  
  初始化  
  连续初始化：　var test="hi",age=25 　　test和age属于两种类型  
  未初始化：　　var test　　变量不一定要初始化，它们可以在幕后初始化  
  注意事项：　　使用变量时,好的习惯是始终存放相同类型的值  
 
  变量命名  
  第一个字符必须为字母，下划线或者美元符  
  余下的字符可以是下划线，美元符或者任何字母数字  
 
  标记法:推荐使用Camel标记法
  
 注意： ECMAScript 的解释程序把遇到未声明的标示符用该变量名创建一个全局变量并将其初始化为指定的值  
  
## 关键字  
  关键字不能用作变量名和函数名  

## 保留字  
 
## 原始值和引用值  
  变量可以存放两种类型的值：原始值和引用值  

   原始值：　存储在栈中的简单数据段　　值直接存储在变量访问的位置  
   引用值：　存储在堆中的对象          存储在变量处的是一个指针，指针指向存储对象的内存   
 
## 原始类型
  Undefined,Null,Boolen,Number,String   
  原始类型占据的空间是固定的，可以存储在较小的栈中，便于迅速查找变量的值
typeof 运算符：可以判断一个值是否在某种类型的范围内   
      如： typeof(2)　　　　返回number  
           typeof(null)　　　返回object 这是因为 null被认为是对象的占位符 但是它是原始值  
           typeof(String)　　返回function 
  
  - Undefined 类型：当声明的变量未初始化,该变量的默认值为 undefined  
       如：var temp1;  
       alert(temp1); 输出都是为 undefined  
       alert(temp2); 但是temp2没有声明，用其他运算符时会引起错误  
       当函数无明确返回值时，返回的是值 undefined　
       　
  - Null 类型：专有值 null  
        值undefined 由值null派生来，ECMAScript把他们定义为相等 alert(null == undefined);  
        区别：undefined　　声明了变量但未对其初始化  
              　null　　　　 尚不存在的对象

  - Boolen 类型：true false  
         true false两个字面值, true > false;为true  

  - Number 类型：八进制 0 十六进制 0x 数学运算返回的都是十进制  
        浮点数字面量在进行计算前是用字符串存储的  
        边界：无穷大 Infinity  
        Number.NEGATIVE_INFINITY　　　Number.POSITIVE_INFINITY   
            　-Infinity　　　　　　　　　　　+Infinity   
        测试是否是有穷数 isFinite()  

      特殊值NaN: 表示非数 (主要发生在类型转换时)  它和自身不相等，所以不推荐使用NaN值, 可以使用isNaN()函数

  - String 类型：为唯一没有固定大小的原始类型  
　 

## 转换  
   转换成字符串： Boolean值，数字和字符串都是伪对象，都有 toString()方法
  Boolean 类型 只输出 "true"或者"false"   
  Number 类型  两种模式    
  默认模式　　只输出相应字符串的数字值  
  基模式　　　可以用不同的基输出数字  
   如  var iNum=10;  
      alert(iNum.toString(2));  

  转换成数字： 两种方法：parseInt()　parseFloat()只能对String类型调用  
 - parseInt()              
      从字符串0处开始测试 (不通过返回NaN),是有效数字则转换，直到发现非有效数字。
      如：parseInt("123abc") 返回123  
      parseInt() 基模式： 
      parseInt("AF",16)  返回175  
      如果十进制前面有0，则最好采用基数10，不然会认为是八进制
                     parseInt("010")-> 8   parseInt("010",10)-> 10
 - parseFloat()
      从字符串0处开始测试 (不通过返回NaN) ，是有效数字则转换， 第一个出现的小数点是有效字符，把有效字符前面的转换成数字
      parseFloat() 字符串必须为十进制，而且忽略前面的 0，也没有基模式
  
 强制转换类型： 3种强制类型转换
    - Boolean(value)　　把给定的值转换成 Boolean类型
    - Number(value)　　把给定的值转换成数字
    - String(value)　　把给定的值转换成字符串
                    
    - Boolean(value):　　空字符串，数字0,undefined/null,返回false,其他true
    - Number(value):　　Number() 转换整个字符串，如果能转换则调用 parseInt或者parseFloat 转换，不能则返回 NaN
    - String(value):　　　把任何值转换为字符串。它和toString不同的是：可以对 　null或者undefine 强制转换

## 引用类型
  　引用类型通常叫作类，也就是处理的是对象。  
  　var obj = new Obeject(); 括号非必需，但是最好使用括号。 

  - Object 类：ECMAScript的所有类都由这个类继承而来，这个类的所有属性和方法都出现在其他类中  
  　属性：　Constructor 对创建对象的函数的引用  
  　　　　　Prototype   对该对象的对象原型的引用 对于所有的类，默认返回 Object对象的一个实例  
  
    方法： HasOwnProperty(property) 判断对象是否有某个特定的属性  
        　IsPropertyIsEnumerable(property) 判断给定的属性是否可以用 for...in枚举              
        　ToString   返回对象的原始字符串表示  
          ValueOf    返回最适合该对象的原始值 对于许多类，该方法返回的值和 ToString一样  

  - Boolean 类: Boolean类是 Boolean类型的引用类型  
  　　创建： `var oBooleanObject = new Boolean(true);`Boolean 对象将覆盖 valueOf和ToString 方法  
  　　建议：ECMAScript很少使用 Boolean对象，最好使用原始值  
    
  - Number 类： Number类是 Number类型的引用类型  
  　　创建： `var oNumberObject = new Number(55);`  
              得到原始值： valueOf()  
  　　专用方法： toFixed() 返回具有指定位数的小数的数字的字符串  
      　　       toExponential() 返回科学计数法表示的字符串形式  
          　　   toPrecision() 　返回最有意义的数字预定形式或指数形式  
              　　以上三种方法都要进行舍入操作  
  　　建议：　应尽量少用这种对象，以避免发生潜在的问题。最好使用数字的原始表示法  
    
  - String 类： String类是 String原始类型的对象表示法  
  　　创建： `var oStringObject = new String("hello world")`   
             得到原始值： valueOf() 和 toString() 都可以    
  　　属性： 　length　　　　返回字符串的字符个数  

  　　方法： charAt()　　　访问字符串中的单个字符 返回字符  
  　　　　　 charCodeAt()　返回的是单个字符的字符代码  
        　　 concat()　　　连接一个或多个字符串 保持原始字符串不变 返回String   原始值要真正改变字符串，用 + 来连接   
         　　indexOf()　　　返回指定字符在另一字符串的位置 从开头开始检索  
         　　lastIndexOf()　从结尾开始检索
         　　localeCompare() 对字符串值进行排序   
          　　返回值  -1 String对象按照字母顺序排在参数之前  
                 　　 0　　String对象和参数相等  
                 　　 1  　String对象按照字母顺序排在参数之    
                　　　判断返回值时 最好使用 <0 >0 来判断，因为返回值看具体实现
         slice()　　　　返回处理的字符串的字串   不改变String 对象的值  
         substring() 　
             如： 
             `var oStr = new String("hello world"); `  
                 　　　　　 　　　`alert(oStr.slice(3)); 'lo world'`  
                 　　　　　　　　 `alert(oStr.substring(3,7); 'lo w'`   
             不同点：  
                  alert(oStr.slice(-3)); 'rld'  负数从右边向左取值  
                  alert(oStr.substring(-3);'    hello world'负数当成 0处理  
        toLowerCase()        字符串大小写转换 locale表示特别区域实现   
        toLocaleLowerCase()   
        toUpperCase()  
        toLocaleUpperCase()  

    instanceof运算符：在使用typeof运算符时采用引用类型存储会出现一个问题，无论引用的是什么对象返回都是object   。而instanceof方法要求开发者明确确认对象的类型  

## 运算符
   - delete　删除对以前定义的对象的属性和方法的引用
   
   - void     对任何值都返回undefined 常用于避免输出不应该输出的值  
              例子：
  `<a href="javascript:void(window.open('about:blank'))">Click Me </a>`

   - 一元加法和减法  加法无影响 减法求负
   - 无符号右移    　创建无符号数 var num = -64 >>> 0
   - 全等号 　　　　 面对对象，无需类型转换条件下相等

## 语句  
   - 带标签的语句： start: var num = 0;  
   - with语句： 用于对象的特定作用域  
   - switch:　　不同点是：可以用于字符串    

## 函数
  - 函数无明确返回值，返回undefined
  - JS中无函数重载，可利用函数参数的个数来模拟函数重载
  - 函数也是引用，可以当函数参数
  - Fuction对象的公有方法valueOf和toString，都返回函数的源代码
     
     <pre> <code> 
        var doAdd = new Function("num1","num2","alert( num1+ num2)");
        function test(addFunction,num1,num2)
        {
          addFunction(num1,num2);
        }
        alert(test(doAdd,1,2));
        alert(doAdd.length);
        alert(doAdd.valueOf());
        alert(doAdd.valueOf());
        valueOf和valueOf都返回：
        function anonymous(num1,num2/**)
        {
           alert(num1+num2)
        }
        </code> </pre>

  - 闭包 闭包就是词法表示包括不必计算的变量的函数，也就是使用了函数外定义的变量
    
      <pre><code>
      var totalNum = 10;
      function addNum(num1,num2)
      {
        function doAdd() //doAdd是一个闭包 它获取外部函数参数和全局变量
        {
           eturn num1+num2+totalNum;
        }
       return doAdd(); //addNum调用内部函数 闭包不接受参数，它使用的的值是从执行环境获取
      }
      alert(addNum(1,2));
      </code></pre>
      

##小结
介绍了ECMAScript的基本语法
- 一般语法
- 用关键字var定义变量
- 原始值和引用值
- 基础的原始类型
- 基础的引用类型
- 运算符和语句
- 函数