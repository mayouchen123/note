# Magento2 Note

# 前端
Magento的前端有丰富的组件利于扩展
+ Magento Blank Theme
+ Magento UI Library Components
+ Magento Admin Pattern Library

# [Themes]()
## Create a new storefront theme
1.先设置当前Magento的mode为developer

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
| `type` | string | 相当于图像的大小类型控制 |

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
