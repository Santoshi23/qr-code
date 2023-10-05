let qrCodeContainer = document.getElementById("qrCodeContainer");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        const qrImage = new Image();
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrCodeContainer.innerHTML = '';
        qrCodeContainer.appendChild(qrImage);
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
}