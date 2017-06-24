'use strcit';

var arr1 = [12,5,4,12,4,3,11,1];
//建立比较器函数对数字做比较
function cmp(a,b)
{
    return a-b;
}
console.log(arr1.sort(cmp));

//简单的字母比较器
var arr2 = ['b','AS','d','a'];
arr2.sort();
console.log(arr2);
arr2.sort(function(s,t){
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
});
console.log(arr2);

//入栈
var arr3=[];
for (var i =1;i<=10;i++)
{
    arr3.push("乘客"+i);
    console.log(arr3.toString());
//            debugger;
}

//出栈
while (arr3.length>0)
{
    var last = arr3.pop();
    console.log(last+"下车");
}

//找出数组中的最大值
var arr4 = [4,3,2,6,7,4,1];
function getMax(arr)
{
    for (var i=0,max=arr[0];
         i<arr.length;
         arr[i]>max&&(max=arr[i]),i++);
    return max;
}
console.time(getMax(arr4));
console.log(getMax(arr4));
console.timeEnd(getMax(arr4));

//数组去重
var arr5 = [2,3,3,6,5,3];
function unique(arr)
{
    var hash = [];
    hash[arr[0]]=1

    for (var i=1;i<arr.length;i++)
    {
        if(hash[arr[i]] === undefined)
        {
            hash[arr[i]]=1;
        }
    }
    // console.log(hash);
    var key = [];
     i = 0;
    for(key[i++] in hash);
    return key;
}

console.log(unique(arr5));

var new_arr5 = arr5.map(function (item) {
    return item+1;
});
console.log(new_arr5);

var arr6 = ['a',5,'vv','d',1];
var new_arr6 = arr6.filter(function (item) {
    return typeof item == 'number';
});
console.log(new_arr6);

function isNumber(value){
    return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false

var arr7 = [2,1,4,3,3,2,1,5,11,2];
console.log(arr7.sort(function (a,b){return a-b;}));
