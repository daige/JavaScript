//语法
/*
 var Daige = "hello";
 var daige = "hello";

 alert(daige);
 alert(Daige);

 alert(typeof(daige));
 daige = 1234;
 alert(typeof(daige));


//变量

var daige = "hi",age=25;
alert(typeof daige);
alert(typeof age);

test=daige;
alert(test);


//原始值和引用值

alert(typeof "hi daige");
alert(typeof null); //返回object
string = 1+"20";
alert(typeof string);
alert(typeof String); //返回function

var temp;
alert(temp);
alert(typeof temp);
alert(typeof temp1); //temp1未定义，其他运算符出错

function daige()
{

}
alert(typeof daige()); //alert(typeof daige)返回function



alert( null == undefined);

var temp;
alert( null == typeof(temp)); //false
alert( null == typeof(temp1));



alert(true);
alert(1==1);
alert(true < false);
alert(true > 0);


var t = 0x1023;
alert(t);

var f = 3.14e10;
alert(f);
alert(typeof f);

alert(isFinite(f*20000));
alert(isNaN("daige"));


var str1 = "你 好";
var str2 = "daig\"e";
var str3 = 'd';

alert(str1);
alert(str2);
alert(str3);


//转换
var num = 10;
alert(num.toString());
var isTrue = true;
alert(isTrue.toString());
var strTest = "daige";
alert(strTest.toString());

alert(num.toString(16));


alert(parseInt("123daige"));
alert(parseInt("13",16));
alert(parseInt("22.5"));
alert(parseInt("daige"));
alert(parseFloat("12.345"));


alert(Boolean("daige"));
alert(Number("23.21232"));
alert(String(123));

alert(Number("23.4.5"));
alert(parseInt("23.4.5"));
alert(String(null));
alert(String(undefined));


//引用类型

var obj = new String("daige");
alert(obj.length);
alert(obj.charAt(1));
alert(obj.concat(" hello"))
alert(obj.localeCompare());

var str1=new String("hi daige");
alert(str1.substring(2));
alert(str1.toLocaleUpperCase());

var test = new String("helo world");
alert(test instanceof String);


//运算符
var test = new String("daige");
test.name = "D";
alert(test.name);
delete test.name;
alert(test.name);


var str = "25";
str = -str;
alert(str);
alert(typeof str);


var num = 18;
alert(num.toString(2)); //10010
num = ~num;  //1*27 01101
alert(num.toString()); 



var num = 25 & 3;
alert(num);

var num = 25 | 3;
alert(num);

var num = 25 ^ 3;
alert(num);

var num = -2;
alert(num << 5);

var comp = "Block" < "about";
alert(comp);

var comp = "Block".toLowerCase() < "about".toLowerCase();
alert(comp);
var num = "23" < "3";
alert(num);

var num = "23" < 3;
alert(num);

var str = "55";
var num = 55;
alert(str == num);
alert(str === num);


start: var num = 0;
var str = "bule";

switch(str)
{
	case "blue":
	break start;
	
	case "daige":
	 var num = 100;
	 break;

	 default:
	 var num = 50;
}

alert(num);

MYLOOP: do {
  x = x + 1;
  if (x > 100) break MYLOOP;
  continue MYLOOP;
} while (0)

alert(x);*/