const form = document.getElementById("generate-form");
const qrcode = document.getElementById("qr");

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url == ""){
        alert('Please enter a URL.')
    } else{
        showSpinner();
        setTimeout(() => {
            hideSpinner();

            generateQRCode(url,size);

            setTimeout(() => { 
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            },50)

        },1000);
    }
    };

const generateQRCode = (url,size) => {
    const qrcode = new QRCode('qr',{
        text:url,
        width:size,
        height:size,
    })
}



const  showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const  hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qrcode.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if (saveLink) saveLink.remove();
};

const createSaveBtn = (saveUrl) =>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.className = 'btn-main';
    link.href = saveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image';
    document.getElementByClassName('generated-body').appendChild(link);
};
 

hideSpinner();
form.addEventListener('submit',onGenerateSubmit);