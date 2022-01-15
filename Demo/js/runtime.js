<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// 核心算法：现在的时间减去输入的时间，即运行时间，但是不能直接用时分秒相减；采用时间戳，运行的时间毫秒数转换
// 转换公式如下：
// d = parseInt(总秒数/60/60/24) 计算天
// h = parseInt(总秒数/60/60%24) 计算小时
// m = parseInt(总秒数/60%60) 计算分
// s = parseInt(总秒数%60) 计算秒
// 封装一个函数,设置一个定时器
function runTime() {
    window.setTimeout("runTime()",1000);
    var nowTime = +new Date();  // 现在时间戳
        sinceTime = +new Date('2020-12-1 10:24:00'); // 传入建立时间转时间戳
        times = (nowTime - sinceTime) / 1000; // 返回的是秒
        years = parseInt(times / 60 / 60 / 24 / 365);
        years = years < 10 ? "0" + years : years; // 三元运算符
        dates = parseInt(times / 60 / 60 / 24) - years*365;
        dates = dates < 10 ? "0" + dates : dates;
        hours = parseInt(times / 60 / 60 % 24);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = parseInt(times / 60 % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = parseInt(times % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("runtime").innerHTML = " 已运行 " + years + ' 年 ' + dates + ' 天 ' + hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + ' 秒 ';
}
runTime(); 