<?php
namespace Inchoo\Helloworld\Block;

use Magento\Framework\View\Element\Template;

class Helloworld extends Template
{
    public function getHelloWorldTxt()
    {
        return "Hello world";
    }
}