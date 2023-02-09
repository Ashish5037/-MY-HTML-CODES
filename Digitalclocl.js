// function getDateTime() {
//     var now = new Date();
//     var year = now.getFullYear();
//     var month = now.getMonth() + 1;
//     var day = now.getDate();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     if (month.toString().length == 1) {
//             month = '0' + month;
//     }
//     if (day.toString().length == 1) {
//             day = '0' + day;
//     }
//     if (hour.toString().length == 1) {
//             hour = '0' + hour;
//     }
//     if (minute.toString().length == 1) {
//             minute = '0' + minute;
//     }
//     if (second.toString().length == 1) {
//             second = '0' + second;
//     }
//     var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
//     return dateTime;
// }

// // example usage: realtime clock
// setInterval(function() {
//     currentTime = getDateTime();
//     document.getElementById("time").innerHTML = currentTime;
// }, 1000);
function dig_clock(id) {
        const date = new Date;
        h = date.getHours();
        if (h < 10) {
          h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
          m = "0" + m;
        }
        s = date.getSeconds();
        if (s < 10) {
          s = "0" + s;
        }
        document.getElementById("h").innerHTML = '' + h;
        document.getElementById("m").innerHTML = '' + m;
        document.getElementById("s").innerHTML = '' + s;
        setTimeout('dig_clock("' + "s" + '");', '1000');
        return true;
      }
      window.onload = dig_clock('s');