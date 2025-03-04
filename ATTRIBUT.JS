function changeit() {
    var image=document.getElementById('good');
    if(image.scrc.match("download (1).jpg")){
        image.src="download.png";
    }else{
        image.src="download (3).png";
    }
}
