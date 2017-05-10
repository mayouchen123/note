# Magento2 Note

# 前端
Magento的前端有丰富的组件利于扩展
+ Magento Blank Theme
+ Magento UI Library Components
+ Magento Admin Pattern Library

# [Themes]()
## Create a new storefront theme
1.先设置当前Magento的mode为developer
```bash
php bin/magento deploy:mode:set developer
```

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
| `id` | string | Image identifier. Unique in the scope of theme. |
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


# [Layout]()
## Layout handle

A layout handle is a uniquely identified set of layout instructions that serves as a name of a layout file.

There are three kinds of layout handles:

+ `page type layout handles` – Synonyms of the page type identifiers. Correspond to “full action names” of controller actions, for example, catalog_product_view.
+ `page layout handles` – Identifiers of specific pages. Correspond to controller actions with parameters that identify specific pages, for example, catalog_product_view_type_simple_id_128.
+ `arbitrary handles` - Do not correspond to any page type, but other handles use them by including.


Use layout instructions to:
+ move a page element to another parent element
+ add content
+ remove a page element

## 常见的布局说明
+ [block]()
+ [container]()
+ [before and after attributes]()
+ [action]()
+ [referenceBlock and referenceContainer]()
+ [move]()
+ [remove]()
+ [update]()
+ [argument]()
+ [arguments]()

### block
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

### <container>
其中包块block和container

| Attribute | Description | Values | Required? |
| :-------- | :---------- | ------ | --------- |
| name | A name that can be used to address the container in which this attribute is assigned. The name must be unique per generated page. | A-Z, a-z, 0-9, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive. | yes |
| label | An arbitrary name to display in the web browser. | any | no |
| before | Used to position the container before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-). | no |
| after | Used to position the container after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See before and after attributes for details. | Possible values: element name or dash (-). | no |
| as | An alias name that serves as identifier in the scope of the parent element. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| output | Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.) | Any value except the obsolete toHtml. Recommended value is 1. | no |
| htmlTag | Output parameter. If specified, the output is wrapped into specified HTML tag. | Any valid HTML 5 tag. | no |
| htmlId |
