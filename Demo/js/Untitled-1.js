<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>
// 首先获取所有菜单的超链接
let menus = document.querySelectorAll(".site-nav a");

// 遍历这些超链接对象
for (let menu of menus) {
// 找到想要操作的超链接对象。例如我在about页面添加了自定义JS，想要排除分类页面
if (menu.getAttribute("href")==="/about/") {
    // 修改这个超链接对象的属性值
    menu.setAttribute("data-pjax-state", "unload");
}
}
