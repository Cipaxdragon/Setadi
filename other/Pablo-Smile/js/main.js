var nomor = 0;

function berubah(){
    nomor++;
    if(nomor % 2 == 0 ){
        document.getElementById('bar').src="img/1.png";
    }
    else{
        document.getElementById('bar').src="img/2.png";
    }
}   