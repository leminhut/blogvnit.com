//<![CDATA[
var City = "TP. Hồ Chí Minh;Quận 1 - TP.HCM; Quận 2 - TP.HCM; Quận 3 - TP.HCM;Quận 4 - TP.HCM;Quận 5 - TP.HCM;Quận 6 - TP.HCM;Quận 7 - TP.HCM;Quận 8 - TP.HCM;Quận 9 - TP.HCM;Quận 10 - TP.HCM;Quận 11 - TP.HCM;Quận 12 - TP.HCM;Gò Vấp - TP.HCM;Phú Nhuận - TP.HCM;Bình Thạnh - TP.HCM;Thủ Đức - TP.HCM;Tân Bình - TP.HCM;Tân Phú - TP.HCM;Bình Tân - TP.HCM;Củ Chi - TP.HCM; Bình Chánh - TP.HCM;Hóc Môn - TP.HCM;Nhà Bè - TP.HCM;Cần Giờ - TP.HCM;Hà Nội;Ba Đình – Hà Nội;Hoàn Kiếm – Hà Nội;Hai Bà Trưng – Hà Nội;Đống Đa – Hà Nội;Tây Hồ - Hà Nội;Cầu Giấy – Hà Nội;Thanh Xuân – Hà Nội;Hoàng Mai – Hà Nội; Từ Liêm – Hà Nội;Long Biên – Hà Nội;Thanh Trì – Hà Nội;Văn Lâm – Hà Nội;Đông Anh – Hà Nội;Sóc Sơn – Hà Nội; Hà Đông – Hà Nội;Sơn Tây – Hà Nội;Hải Phòng;Đà Nẵng;Cần Thơ;Đà Lạt;Hà Nam; Phú Thọ;Hải Dương;Nam Định;Ninh Bình;Thái Bình;Thanh Hóa;Huế;Bình Dương;Đồng Nai;Long An; Tây Ninh;Vũng Tàu;Cà Mau;Buôn Ma Thuột;Pleiku;Thủ Dầu Một;Phan Thiết;Hội An;Sa Pa; Hạ Long;Nha Trang".split(";"),
    catchText3, promoCount;
function showHydeWin(a, b) {
    var c = b,
        e = document.getElementById("popWindow"),
        g, d;
    if ("+" === a) g = 0, d = 1;
    else if ("-" === a) g = 1, d = 0, c = -b;
    else return;
    var f = g,
        h = setInterval(function() {
            e.style.opacity = f;
            f += c;
            "+" === a ? f > d && (e.style.opacity = d, clearInterval(h)) : "-" === a && f < d && (e.style.opacity = d, clearInterval(h))
        }, 17)}
function genRandNum(a, b) {
    return Math.floor(Math.random() * (b - a) + a)}
function showBoxTime(a, b) {
    showHydeWin("+", b);
    var c = 0,
        e = setInterval(function() {
            c > a ? (showHydeWin("-", b), clearInterval(e)) : c++
        }, 1E3)}
function setBoxText(a) {
    switch (a) {
        case 1:
            a = "Hiện có 100 người truy cập web này";
            var b = genRandNum(50, 250);
            document.getElementById("popWindow").innerHTML = a.replace("100", "<span>" + b + "</span>");
            break;
        case 2:
            a = "Khách Hàng Đăng Ký Dịch Vụ Mới tại  CITY.";
            b = City[Math.floor(Math.random() * City.length)];
            document.getElementById("popWindow").innerHTML = a.replace("CITY",
                "<b>" + b + "</b>");
            break;
        case 3:
            a = "Có 15 người đang xem sản phẩm", catchText3 = b = genRandNum(15, 50), document.getElementById("popWindow").innerHTML = a.replace("15", "<i>" + b + "</i>")
    }}
function welcomeUser() {
    var a = 0,
        b = genRandNum(9, 12),
        c = setInterval(function() {
            0 === a && (setBoxText(1), showBoxTime(4, .05));
            a === b && (setBoxText(2), showBoxTime(4, 1));
            a === b + 7 && (setBoxText(3), promoCount = catchText3, showBoxTime(5, .01), clearInterval(c), customLead(genRandNum(7, 20)));
            a++
        }, 1E3)}
function customLead(a) {
    setTimeout(function() {
        var a = 0,
            c = setInterval(function() {
                0 === a && (setBoxText(2), showBoxTime(4, 1));
                7 === a && (promoCount--, 0 < promoCount ? document.getElementById("popWindow").innerHTML = "Có <i>" + promoCount + "</i> người đang xem dịch vụ" : document.getElementById("popWindow").innerHTML = "<p>Thiết Kế Website Bán Hàng Online </p>",
                    showBoxTime(5, .01));
                14 === a && (clearInterval(c), 0 < promoCount && customLead(genRandNum(2, 20)));
                a++
            }, 1E3)
    }, 1E3 * a)
}
window.onload = welcomeUser;
//]]>
