// js/footer.js
// 功能一：动态加载到首页中
$(function(){
  var link=document.createElement("link");
  link.rel="stylesheet";
  link.href="css/footer.css";
  document.head.appendChild(link);
  $("#footer").load("footer.html",function(html) {
      document.getElementById("footer")
              .innerHTML = html;
  })
});
