//js/header.js
// 功能一：动态加载到首页中
$(function(){
	var link=document.createElement("link");
	//引入头部样式
	link.rel="stylesheet";
	link.href="css/header.css";
	document.head.appendChild(link);
	//引入头部
	$("#header").load("header.html",function(html) {
		document.getElementById("header")
				    .innerHTML = html;
  })
});
// 功能二：搜索框功能