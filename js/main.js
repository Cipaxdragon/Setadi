//alert
/* 
alert("Ini Cuma WebSait Untuk Latihan Moon Maap Kalo Jeleq");
alert("By Asep");
 */
//variabel
var num = 0;

//function


function tambah(){
    num = num + 1;
    document.getElementById("angka").innerHTML = num;
    
    if(num == 10){
        num = 100;
        document.getElementById("angka").innerHTML = num;
    
    }
}
