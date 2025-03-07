let month = +prompt("Mời bạn nhập vào một tháng trong năm: ");
if(month>0 && month<=12){
    if(month>=1 && month<=3){
        alert("Mùa xuân");
    } else if(month>=4 && month<=6) {
        alert("Mùa Hạ");
    } else if(month>=7 && month<=9) {
        alert("Mùa thu");
    } else {
        alert("Màu đông");
    }
} else {
    alert("Tháng không hợp lệ");
}
