# Observables
三大核心功能
+ Observables and dependency tracking
+ Declarative bindings
+ Templating

Model-View-View Model (MVVM) is a design pattern for building user interfaces. It describes how you can keep a potentially sophisticated UI simple by splitting it into three parts:
+ A model: your application’s stored data. This data represents objects and operations in your business domain (e.g., bank accounts that can perform money transfers) and is independent of any UI. When using KO, you will usually make Ajax calls to some server-side code to read and write this stored model data. <br/>
模型：应用程序存储的数据。这些数据代表业务域中的对象和操作（例如，可以执行货币转帐的银行帐户），并且与任何用户界面无关。当使用KO时，通常会使用Ajax调用一些服务器端代码来读取和写入这个存储的模型数据。

+ A view model: a pure-code representation of the data and operations on a UI. For example, if you’re implementing a list editor, your view model would be an object holding a list of items, and exposing methods to add and remove items. <br/>
视图模型：用户界面上数据和操作的纯代码表示。例如，如果您正在实现列表编辑器，则视图模型将是一个对象，其中包含一个项列表，并显示添加和移除项目的方法。<br/>
请注意，这不是UI本身：它没有任何按钮或显示风格的概念。它不是持久化数据模型——是未保存的数据的用户使用。当使用KO时，你的视图模型是纯JavaScript对象，没有HTML的知识。这样保持视图模型抽象让它保持简单，这样你就可以管理更复杂的行为而不会迷失方向。<br/>
+ A view: a visible, interactive UI representing the state of the view model. It displays information from the view model, sends commands to the view model (e.g., when the user clicks buttons), and updates whenever the state of the view model changes. <br/>
视图：表示视图模型状态的可见的交互式用户界面。它从视图模型显示信息，向视图模型发送命令（例如，当用户单击按钮），并在视图模型状态改变时更新。

> 当使用KO时，你的视图仅仅是带有声明绑定的HTML文档，将其链接到视图模型。或者，可以使用视图模型中的数据生成HTML的模板。

## [example](./src/demo1/index.html)
1.创建一个视图模型,只需声明任何javascript对象
```javascript
var myViewModel = {
    personName: 'Bob',
    personAge: 123
};
```

2.可以使用声明绑定
```html
The name is <span data-bind="text: personName"></span>
```

3.激活Knockout
在myViewModel后面添加
```javascript
ko.applyBindings(myViewModel);
```

## 下面看看当视图模型更新是如何刷新UI的
1.同样创建一个视图模型
```javascript
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123)
};
```
2.现在不需要去修改html的内容,就能检测personName,personAge的数据修改,来刷新UI

## Reading and writing observables
由于不是所有浏览器都支持javascript getters 和 setters,比如像IE8及以下的浏览器就不支持,所以ko.observable是一个函数,来支持老的浏览器

读: myViewModel.personName() 返回Bob, myViewModel.personAge() 返回123
写: myViewModel.personName("peter"), myViewModel.personAge(11)
通过链接语法写入多个: myViewModel.personName('Mary').personAge(50)


# Observable Arrays
observableArray只跟踪它所拥有的对象,并在添加或删除对象时通知侦听器

## [example]()
```javascript
var myObservableArray = ko.observableArray();    // Initially an empty array
myObservableArray.push('Some value');            // Adds the value and notifies observers
```

## Prepopulating an observableArray
```javascript
// This observable array initially contains three objects
var anotherObservableArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
]);
```

## Reading information from an observableArray
```javascript
alert('The length of the array is ' + myObservableArray().length);
alert('The first element is ' + myObservableArray()[0]);
```

Technically you can use any of the native JavaScript array functions to operate on that underlying array, but normally there’s a better alternative. KO’s observableArray has equivalent functions of its own, and they’re more useful because: <br/>
(从技术上讲，您可以使用任何本机JavaScript数组函数对该底层数组进行操作，但通常情况下还有一个更好的选择。 KO的observableArray具有自己的等效功能，它们更有用，因为)<br/> 

They work on all targeted browsers. (For example, the native JavaScript indexOf function doesn’t work on IE 8 or earlier, but KO’s indexOf works everywhere.) <br/>
(他们在所有目标浏览器上工作。 （例如，本机JavaScript indexOf函数在IE 8或更早版本上不起作用，但KO的indexOf无处不在。）) <br/>

For functions that modify the contents of the array, such as push and splice, KO’s methods automatically trigger the dependency tracking mechanism so that all registered listeners are notified of the change, and your UI is automatically updated. <br/>
对于修改数组内容的功能（如推送和拼接），KO的方法会自动触发依赖关系跟踪机制，以便所有已注册的收听者被通知该更改，并且您的UI会自动更新。 <br/>
(语法更方便。 要调用KO的push方法，只需编写myObservableArray.push（...）。 这比通过编写myObservableArray（）。push（...）调用底层数组的push方法稍微好一些。) <br/>

## 关于observableArray的一些操作
`indexOf` : myObservableArray.indexOf('Blah') 如果没找到返回-1

`slice`: **myObservableArray.slice(...) 这里有个不区分myObservableArray不加()是调用observable的slice方法, myObservableArray().slice(...) 这里 myObservableArray()调用的是javascript 数组本身的slice API**

## Manipulating an observableArray
下面的这些操作都等同于javascript数组 API,然后通知侦听器有关更改
+ push( value ) — Adds a new item to the end of array.
+ pop() — Removes the last value from the array and returns it.
+ unshift( value ) — Inserts a new item at the beginning of the array.
+ shift() — Removes the first value from the array and returns it.
+ reverse() — Reverses the order of the array and returns the observableArray (not the underlying array).
+ sort() — Sorts the array contents and returns the observableArray.
  + The default sort is alphabetical, but you can optionally pass a function to control how the array should be sorted. Your function should accept any two objects from the array and return a negative value if the first argument is smaller, a positive value is the second is smaller, or zero to treat them as equal. For example, to sort an array of ‘person’ objects by last name, you could write myObservableArray.sort(function (left, right) { return left.lastName == right.lastName ? 0 : (left.lastName < right.lastName ? -1 : 1) })
+ splice() — Removes and returns a given number of elements starting from a given index. For example, myObservableArray.splice(1, 3) removes three elements starting from index position 1 (i.e., the 2nd, 3rd, and 4th elements) and returns them as an array.

## remove and removeAll
observableArray扩展了一些javascript arrays方法

+ remove( someItem ) — Removes all values that equal someItem and returns them as an array.
+ remove( function (item) { return item.age < 18; } ) — Removes all values whose age property is less than 18, and returns them as an array.
+ removeAll( ['Chad', 132, undefined] ) — Removes all values that equal 'Chad', 123, or undefined and returns them as an array.
+ removeAll() — Removes all values and returns them as an array.

## destroy and destroyAll 
+ destroy( someItem ) — Finds any objects in the array that equal someItem and gives them a special property called _destroy with value true.
+ destroy( function (someItem) { return someItem.age < 18; } ) — Finds any objects in the array whose age property is less than 18, and gives those objects a special property called _destroy with value true.
+ destroyAll( ['Chad', 132, undefined] ) — Finds any objects in the array that equal 'Chad', 123, or undefined and gives them a special property called _destroy with value true.
+ destroyAll() — Gives a special property called _destroy with value true to all objects in the array.
