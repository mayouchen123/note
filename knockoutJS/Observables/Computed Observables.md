# Computed Observables

## Using computed observables
What if you’ve got an observable for firstName, and another for lastName, and you want to display the full name? That’s where computed observables come in - these are functions that are dependent on one or more other observables, and will automatically update whenever any of these dependencies change. <br/>
如果你有一个可观察的firstName，另一个是lastName，你想显示全名怎么办？ 这就是计算的可观察值进来的 - 这些是依赖于一个或多个其他可观察值的函数，并且每当这些依赖关系发生变化时，它们将自动更新。

For example, given the following view model class,
```javascript
function AppViewModel() {
    this.firstName = ko.observable('Bob');
    this.lastName = ko.observable('Smith');
}
```
you could add a computed observable to return the full name:
```javascript
function AppViewModel() {
    this.firstName = ko.observable('Bob');
    this.lastName = ko.observable('Smith');

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}
```
在html中添加
```html
The name is <span data-bind="text: fullName"></span>
```

### Managing ‘this’
The second parameter to ko.computed (the bit where we passed this in the above example) defines the value of this when evaluating the computed observable. Without passing it in, it would not have been possible to refer to this.firstName() or this.lastName(). Experienced JavaScript coders will regard this as obvious, but if you’re still getting to know JavaScript it might seem strange. (Languages like C# and Java never expect the programmer to set a value for this, but JavaScript does, because its functions themselves aren’t part of any object by default.)

#### A popular convention that simplifies things
```javascript
function AppViewModel() {
    var self = this;

    self.firstName = ko.observable('Bob');
    self.lastName = ko.observable('Smith');
    self.fullName = ko.computed(function() {
        return self.firstName() + " " + self.lastName();
    });
}
```


### Pure computed observables
If your computed observable simply calculates and returns a value based on some observable dependencies, then it’s better to declare it as a ko.pureComputed instead of a ko.computed. For example:<br/>
如果您计算的observable可以简单地计算并返回基于某些可观察依赖关系的值，那么最好将其声明为ko.pureComputed而不是ko.computed。 例如：

```javascript
this.fullName = ko.pureComputed(function() {
    return this.firstName() + " " + this.lastName();
}, this);
```

### Forcing computed observables to always notify subscribers
When a computed observable returns a primitive value (a number, string, boolean, or null), the dependencies of the observable are normally only notified if the value actually changed. However, it is possible to use the built-in notify extender to ensure that a computed observable’s subscribers are always notified on an update, even if the value is the same. You would apply the extender like this:

```javascript
myViewModel.fullName = ko.pureComputed(function() {
    return myViewModel.firstName() + " " + myViewModel.lastName();
}).extend({ notify: 'always' });
```

### Delaying and/or suppressing change notifications
Normally, a computed observable updates and notifies its subscribers immediately, as soon as its dependencies change. But if a computed observable has many dependencies or involves expensive updates, you may get better performance by limiting or delaying the computed observable’s updates and notifications. This is accomplished using the rateLimit extender like this:

```javascript
// Ensure updates no more than once per 50-millisecond period
myViewModel.fullName.extend({ rateLimit: 50 });
```

### Determining if a property is a computed observable
In some scenarios, it is useful to programmatically determine if you are dealing with a computed observable. Knockout provides a utility function, ko.isComputed to help with this situation. For example, you might want to exclude computed observables from data that you are sending back to the server.

```javascript
for (var prop in myObject) {
    if (myObject.hasOwnProperty(prop) && !ko.isComputed(myObject[prop])) {
        result[prop] = myObject[prop];
    }
}
```

Additionally, Knockout provides similar functions that can operate on observables and computed observables:
+ `ko.isObservable` - returns true for observables, observable arrays, and all computed observables.
+ `ko.isWritableObservable` - returns true for observables, observable arrays, and writable computed observables (also aliased as ko.isWriteableObservable).


## Writable computed observables
Normally, computed observables have a value that is computed from other observables and are therefore read-only. What may seem surprising, then, is that it is possible to make computed observables writable. You just need to supply your own callback function that does something sensible with written values.<br/>
通常，计算的可观察值具有从其他可观察值计算的值，因此是只读的。 那么似乎令人惊讶的是，可以使计算的可观测量可写。 您只需要提供自己的回调函数，该函数用书面值做出明智的回调。

You can use a writable computed observable exactly like a regular observable, with your own custom logic intercepting all reads and writes. Just like observables, you can write values to multiple observable or computed observable properties on a model object using chaining syntax. For example, myViewModel.fullName('Joe Smith').age(50).<br/>
您可以使用一个可写的计算的可观察性，就像一个常规的可观察的，你自己的自定义逻辑拦截所有的读和写。 就像可观察的一样，您可以使用链接语法将值写入模型对象上的多个可观察或计算的可观察属性。 例如，myViewModel.fullName（'Joe Smith'）。age（50）。

### [Example](./src/writable_computed_observables/demo1.html) 1: Decomposing user input
Going back to the classic “first name + last name = full name” example, you can turn things back-to-front: make the fullName computed observable writable, so that the user can directly edit the full name, and their supplied value will be parsed and mapped back to the underlying firstName and lastName observables. In this example, the write callback handles incoming values by splitting the incoming text into “firstName” and “lastName” components, and writing those values back to the underlying observables. <br/>
回到经典的“名字+姓氏=全名”的例子，你可以把事情做到背后：使得fullName计算可观察可写，以便用户可以直接编辑全名，而它们提供的值将 被解析并映射回潜在的firstName和lastName可观察值。 在这个例子中，写回调通过将传入的文本分成“firstName”和“lastName”组件来处理传入的值，并将这些值写回底层的可观察值。

view
```html
    <div>FistName: <span data-bind="text: firstName"></span></div>
    <div>LastName: <span data-bind="text: lastName"></span></div>
    <div class="heading">Hello, <input type="text" data-bind="textInput: fullName"></div>
```

view model
```javascript
        function MyViewModel() {
            this.firstName = ko.observable("peter");
            this.lastName = ko.observable("xu");

            this.fullName = ko.pureComputed({
                read: function () {
                    return this.firstName() + " " + this.lastName();
                },
                write: function (value) {
                    var lastSpacePos = value.lastIndexOf(" ");
                    if (lastSpacePos > 0) {
                        this.firstName(value.substring(0, lastSpacePos));
                        this.lastName(value.substring(lastSpacePos + 1));
                    }
                },
                owner: this
            })
        }
        ko.applyBindings(new MyViewModel());
```

### Selecting/deselecting all items
When presenting the user with a list of selectable items, it is often useful to include a method to select or deselect all of the items. This can be represented quite intuitively with a boolean value that represents whether all items are selected. When set to true it will select all items, and when set to false it will deselect them.

view
```html
    <div class="heading">
        <input type="checkbox" data-bind="checked: selectedAllProduce" title="Select all/none"> Produce
    </div>
    <div data-bind="foreach: produce">
        <label for="">
            <input type="checkbox" data-bind="checkedValue: $data, checked: $parent.selectedProduce">
            <span data-bind="text: $data"></span>
        </label>
    </div>
```

view model
```javascript
        function MyViewModel() {
            this.produce = ["Apple", "Banana", "Celery", "Corn", "Orange", "Spinach"];
            this.selectedProduce = ko.observableArray(["Corn", "Orange"]);
            this.selectedAllProduce = ko.pureComputed({
                read: function () {
                    return this.selectedProduce().length === this.produce.length;
                },
                write: function (value) {
                    this.selectedProduce(value ? this.produce.slice(0) : []);
                },
                owner: this
            })
        }
        ko.applyBindings(new MyViewModel());
```
