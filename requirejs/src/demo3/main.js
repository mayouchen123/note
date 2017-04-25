require.config({
  paths: {
    "jquery": ["https://cdn.bootcss.com/jquery/3.2.1/jquery"] //加载远程模块
  }
  // shim: {
  //   'test': {
  //     exports: "test"
  //   }
  // }
});
require(["jquery"], function($) {
  $("body").css({"color":"red"});
});
