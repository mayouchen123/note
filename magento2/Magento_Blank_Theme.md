# Magento Theme

# [Themes]()
## Create a new storefront theme
1.先设置当前Magento的mode为developer
```bash
php bin/magento deploy:mode:set developer
```
> 关于magento的应用模式设置可以参考:[设置magento2应用模式](https://pointline.github.io/2017/04/16/设置magento2应用模式/),[关于magento2的几种应用模式](https://pointline.github.io/2017/04/16/关于magento2的几个应用模式/)

2.创建theme目录
创建/app/design/frontend/<Vendor>/theme

比如:/app/design/frontend/Pointline/blank

3.在/app/design/frontend/Pointline/blank下创建theme.xml
```xml
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
    <title>PointLine Blank</title>
    <parent>Magento/blank</parent>
    <media>
        <preview_image>media/preview.jpg</preview_image>
    </media>
</theme>
```
拷贝一份Magento/blank下的media到Pointline/blank的目录下

4.在/app/design/frontend/Pointline/blank下创建registration.php
```php
<?php
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::THEME,
    'frontend/Pointline/blank',
    __DIR__
);
```

5.在/app/design/frontend/Pointline/blank/etc/创建view.xml,控制这主题中各部分的图片大小,可以拷贝一份Magebti/blank到Pointline/blank进行修改,
现在不修改,直接拷贝过来使用

6.在/app/design/frontend/Pointline/blank/web下创建一些静态资源文件目录,参考Magento/blank/web结构创建

7.如果你想修改theme logo,创建/app/design/frontend/Pointline/blank/Magento_Theme/layout/default.xml
```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="logo">
            <arguments>
                <argument name="logo_file" xsi:type="string">images/my_logo.png</argument>
                <argument name="logo_img_width" xsi:type="number">300</argument>
                <argument name="logo_img_height" xsi:type="number">300</argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

8.需要到magento后台去配置新创建的主题
content->design->configuration

## Configure images properties for a theme
配置/app/design/frontend/Pointline/blank/etc/view.xml 控制magento中的一些图片属性

| Attribute | Type | Description |
| :-------- | :--- | :---------- |
| `id` | string | Image identifier. Unique in the scope of theme. Can have any value, but in out-of-the- box Magento themes id's are meaningful and describe the location of an image. For example, the id value for images of cross-sell products displayed in a shopping cart is cart_cross_sell_products. id's are used in .phtml templates for defining the type and properties of images displayed in each particular location on a particular page.|
| `type` | string | 相当于图像的大小类型控制,type类型还可以选择thumbnail,small_image,image |

```xml
<images module="Magento_Catalog">
    <image id="unique_image_id" type="image">
        <width>100</width> <!-- Image width in px -->
        <height>100</height> <!-- Image height in px -->
    </image>
</images>
```

除了有这些属性外,在image标签中还有width,height,constrain,aspect_ratio,frame,transparency,background

如果修改过view.xml想重新生成图片尺寸可执行:
```bash
php <magento install dir>/bin/magento catalog:images:resize
```

## uninstall themes
```bash
magento theme:uninstall [--backup-code] [-c|--clear-static-content] {theme path} ... {theme path}
```

## Magento theme structure
magento主题目录的结构通常如下
```txt
<theme_dir>/
├── <Vendor>_<Module>/
│	├── web/
│	│	├── css/
│	│	│	├── source/
│	├── layout/
│	│	├── override/
│	├── templates/
├── etc/
├── i18n/
├── media/
├── web/
│	├── css/
│	│	├── source/
│	├── fonts/
│	├── images/
│	├── js/
├── composer.json
├── registration.php
├── theme.xml
```


# [Layout]()
## Layout handle

A layout handle is a uniquely identified set of layout instructions that serves as a name of a layout file.<br/>
布局句柄是唯一标识的布局指令集，用作布局文件的名称。

There are three kinds of layout handles:

+ `page type layout handles` – Synonyms of the page type identifiers. Correspond to “full action names” of controller actions, for example, catalog_product_view.
+ `page layout handles` – Identifiers of specific pages. Correspond to controller actions with parameters that identify specific pages, for example, catalog_product_view_type_simple_id_128.
+ `arbitrary handles` - Do not correspond to any page type, but other handles use them by including.


Use layout instructions to:
+ move a page element to another parent element
+ add content
+ remove a page element

## 常见的布局说明
+ [block](#block)
+ [container]()
+ [before and after attributes]()
+ [action]()
+ [referenceBlock and referenceContainer]()
+ [move]()
+ [remove]()
+ [update]()
+ [argument]()
+ [arguments]()

<a name="block"></a>
### block
一个phtml页面对应一个block

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | --------- |
| class | class	Name of a class that implements rendering of a particular block. An object of this class is responsible for actual rendering of block output. | class name | yes |
| name | Name that can be used to address the block to which this attribute is assigned. The name must be unique per generated page. If not specified, an automatic name will be assigned in the format ANONYMOUS_n | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive. | no |
| before | Used to position the block before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-) | no |
| after | Used to position the block after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-) | no |
| template | A template that represents the functionality of the block to which this attribute is assigned. | template file name | no |
| as | An alias name that serves as identifier in the scope of the parent element. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| cacheable | Defines whether a block element is cacheable. This can be used for development purposes and to make needed elements of the page dynamic. | true or false | no |

To pass parameters use the <argument></argument> instruction.

### container
其中可以包括block和container

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | --------- |
| name | A name that can be used to address the container in which this attribute is assigned. The name must be unique per generated page. | A-Z, a-z, 0-9, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive. | yes |
| label | An arbitrary name to display in the web browser. | any | no |
| before | Used to position the container before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-). | no |
| after | Used to position the container after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-). | no |
| as | An alias name that serves as identifier in the scope of the parent element. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| output | Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.) | Any value except the obsolete toHtml. Recommended value is 1. | no |
| htmlTag | Output parameter. If specified, the output is wrapped into specified HTML tag. | Any valid HTML 5 tag. | no |
| htmlId | Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect. | Any valid HTML 5 <id> value. | no |
| htmlClass | Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect. | Any valid HTML 5 <class> value. | no |

### 关于before和after属性

| Attribute | Value | Description |
| :-------- | :---------- | ------ |
| before | Dash (-) | The block displays before all other elements in its parent node. |
| before | [element name] | 	The block displays before the named element. |
| before | empty value or [element name] is absent | Use the value of after. If that value is empty or absent as well, the element is considered as non-positioned. |
| after | Dash (-) | 	The block displays after all other elements in its parent node. |
| after | [element name] | The block displays after the named element. |
| after | empty value or [element name] is absent | Use the value of before. If that value is empty or absent as well, the block is considered as non-positioned. |

### action
action已经弃用,如果方法实现允许,使用argument for block or referenceBlock

Example:
```xml
<block class="Magento\Module\Block\Class" name="block">
    <action method="setText">
        <argument name="text" translate="true" xsi:type="string">Text</argument>
    </action>
    <action method="setEnabled">
        <argument name="enabled" xsi:type="boolean">true</argument>
    </action>
</block>
```
| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | ---------- |
| method | Name of the public method of the block class this tag is located in that is called during block generation. | block method name | yes |

To pass parameters, use the <argument></argument> instruction.

### referenceBlock和referenceContainer
用于要更新对应的block和container

For example, if you make a reference by <referenceBlock name="right">, you're targeting the block <block name="right">.

To pass parameters to a block use the <argument></argument> instruction.

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | ---------- |
| remove | 	Allows to remove or cancel the removal of the element. When a container is removed, its child elements are removed as well. | true/false | no |
| display | Allows you to disable rendering of specific block or container with all its children (both set directly and by reference). The block's/container's and its children' respective PHP objects are still generated and available for manipulation. | true/false | no |

比如删除一个block
```xml
<referenceBlock name="block.name" remove="true" />
```
比如删除一个container
```xml
<referenceContainer name="container.name" display="false" />
```
当有remove时忽略display属性

### move
将声明的块或容器元素按指定的顺序设置为另一个元素的子元素。

如果没有定义move的element属性,则会跳过move

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | ---------- |
| element | Name of the element to move. | element name | yes |
| destination | Name of the target parent element. | element name | yes |
| as | 	Alias name for the element in the new location. |0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| after before | Specifies the element's position relative to siblings. Use dash (-) to position the block before or after all other siblings of its level of nesting. If the attribute is omitted, the element is placed after all siblings. | element name | no |

### remove
仅用于删除页面head部分链接的静态资源.要删除块或容器，请使用reference属性referenceBlock和referenceContainer。 使用示例：
```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
   <head>
        <!-- Remove local resources -->
        <remove src="css/styles-m.css" />
        <remove src="my-js.js"/>
        <remove src="Magento_Catalog::js/compare.js" />

	<!-- Remove external resources -->
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"/>
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"/>
        <remove src="http://fonts.googleapis.com/css?family=Montserrat" />
   </head>
```

### update
```xml
<update handle="{name_of_handle_to_include}"/>
```

### argument
用来传递参数必须包含在arguments中

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | ---------- |
| name | Argument name. | unique | yes |
| xsi:type | Argument type. | string,boolean,object,number,null,array |	yes |
| translate |  | true,false | no |

To pass multiple arguments use the following construction:
```xml
<arguments>
   <argument></argument>
   <argument></argument>
   ...
</arguments>
```

To pass an argument that is an array use the following construction:
```xml
<argument>
   <item></item>
   <item></item>
   ...
</argument>
```

配置argument参数可以在template通过get{ArgumentName}()和has{ArgumentName}()方法

has{ArgumentName}返回的是一个布尔值,判断值是否被设置

```xml
...
<arguments>
    <argument name="welcome" xsi:type="string">Hello World</argument>
</arguments>
...
```
那么可以在相对应的template使用
```xml
...
$welcome = $this->getWelcome() ?  $this->getWelcome() : "";
...
```

### arguments
arguments是argument必须的容器,没有自己的属性
```xml
...
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
...
```
