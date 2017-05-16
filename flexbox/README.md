# Flexbox
WEB从1.0~3.0经过不断的发展,WEB的布局也经历过几个阶段:表格布局,
浮动布局,定位布局,Flexbox布局等.每种布局的出现在当时都很有意义.
今天重点来看看CSS3 Flexbox布局.

Flexbox是CSS3中的一个新特性,这个特性解决我们以前在CSS中遇到的
很多棘手的问题,像内容的伸缩与扩展,垂直居中问题,等分等.当然这个
属性也大量的运用于布局当中,特别是在对移动优先的时代下

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