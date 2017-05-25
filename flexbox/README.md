# Flexbox
![css FlexBox](./images/cssFlexbox.png)

WEB从1.0~3.0经过不断的发展,WEB的布局也经历过几个阶段:表格布局,
浮动布局,定位布局,Flexbox布局等.未来还会有像Grid网格布局这样的新型产物.那其实每种布局的出现在当时都很有意义.

Flexbox是CSS3中的一个新特性,这个特性解决我们以前在CSS中遇到的
很多棘手的问题,像内容的伸缩与扩展,垂直居中问题,等分等.当然这个
属性也大量的运用于布局当中,特别是在对移动优先的时代下,各种终端频频出现

Flexbox布局是什么?
Flex是Flexible Box的缩写,是弹性布局的意思,用来为盒模型提供最大的灵活性,
任何一个容器都可以指定为Flex布局

```css
.box{
    display: flex;
}
```
行内元素也可以使用Flex布局
```css
.box{
    display: inline-flex;
}
```

> 注意:设为Flex布局以后,子元素的float,clean和vertical-align都将失效

## Flex解析
使用Flex布局的元素,我们可以称其为Flex容器(Flex Container)简称容器.
它所有的子元素自动成为容器成员,我们称其为Flex项目(Flex item)简称项目.

![FLexContainer](./images/FlexContainer.png)

可以看出上图中,容器的主要部分分为两根轴:`水平的主轴`(main axis)和`垂直的交叉轴`(cross axis).主轴的开始位置
与边框的交叉点叫做`main start`,结束位置叫做`main end`;交叉轴的开始位置叫做`cross start`,结束的位置叫做`cross end`.

项目默认沿主轴排列.单个项目占据的主轴空间叫做`main size`,占句的交叉轴空间叫做`cross size`.

## Flex Container 的相关属性
首先作用在Flex容器上的相关属性有以下6个:
+ [flex-direction](#flex-direction)
+ [flex-wrap](#flex-wrap)
+ flex-flow
+ [justify-content](#justify-content)
+ align-items
+ align-content

<a name="flex-direction"></a>
### flex-direction
flex-direction属性主要决定主轴的方向,就是项目的排列方式,默认水平排列,从左到右.
+ row: 默认值,主轴水平方向,起点从左往右
+ row-reverse: 主轴为水平方向,起点从右往左
+ column: 主轴为垂直方向,起点从上往下
+ column-reverse: 主轴为垂直方向,起点从下往上

![flex-direction](./images/flex-direction.png)

[案例](./src/flex-direction/index.html)

<a name="flex-wrap"></a>
### flex-wrap
默认情况下,我们的flex-item都排在一条直线上,也就是我们所说的轴线上.
那flex-wrap属性就是定义如果一条直线上排不开是否换行的操作.

![flex-wrap](./images/flex-wrap.png)

+ nowrap: 默认值,不换行
![nowrap](./images/nowrap.png)
+ wrap: 换行,第一行在上方
![wrap](./images/wrap.png)
+ wrap-reverse: 换行,第一行在下方
![wrap-reverse](./images/wrap-reverse.png)

[案例](./src/flex-wrap/index.html)

<a name="justify-content"></a>
### justify-content
justify-content属性定义了flex itemt根据主轴方向的对齐方式
+ flex-start: 默认值.左对齐
+ flex-end: 右对齐
+ center: 居中
+ space-between: 两端对齐,flex item之间的间隔相等
+ space-around: 每个flex item两侧的间隔相等.所以flex item中间的间隔比flex item与边框的间隔大一倍

![justify-content](./images/justify-content.png)

[案例](./src/justify-content/index.html)
