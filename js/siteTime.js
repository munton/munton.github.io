<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>function siteTime(){
    window.setTimeout("siteTime()", 1000);
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let years = days * 365;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth()+1;
    let todayDate = today.getDate();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();
    let todaySecond = today.getSeconds();
    // 在这里设置创站的年月日时分秒
    let t1 = Date.UTC(2021,12,01,10,24,29);
    let t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    let diff = t2-t1;
    let diffYears = Math.floor(diff/years);
    diffYears = diffYears < 10 ? "0" + diffYears : diffYears;
    let diffDays = Math.floor((diff/days)-diffYears*365);
    let diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
    let diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
    let diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
    document.getElementById("sitetime").innerHTML=" 已运行 "+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
}
siteTime();