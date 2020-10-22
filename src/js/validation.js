let sendButton= document.querySelector('.sendButton');
const hello = "hello";
sendButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const senderName= document.querySelector('.senderName');
    const senderMail= document.querySelector('.senderMail');
    const senderMobile= document.querySelector('.senderMobile');
    const comment= document.querySelector('.comment');
    const nameVal= document.querySelector('.nameError');
    const mobVal= document.querySelector('.mobError');
    const mailVal= document.querySelector('.mailError');
    const textVal= document.querySelector('.textError');
    let nameCheck = false;
    let mobCheck = false;
    let mailCheck = false;
    let textCheck = false;

    if(senderName.value === "" || !senderName.value.replace(/\s/g, '').length){
        nameVal.style.visibility = 'visible';
        senderName.classList.add('error')
        console.log('error');
    }
    else{
        nameVal.style.visibility = 'hidden';
        senderName.classList.remove('error');
        nameCheck = true;
    }
    if(senderMobile.value === "" || !senderMobile.value.replace(/\s/g, '').length){
        mobVal.style.visibility = 'visible';
        senderMobile.classList.add('error')
        console.log('error');
    }
    else{
        mobVal.style.visibility = 'hidden';
        senderMobile.classList.remove('error')
        mobCheck = true;
    }
    if(senderMail.value === "" || !senderMail.value.replace(/\s/g, '').length){
        mailVal.style.visibility = 'visible';
        senderMail.classList.add('error')
        // if(mobCheck) senderMobile.style.marginTop ='25px';
        // else senderMobile.style.marginTop ='10px';
    }
    else{
        mailVal.style.visibility = 'hidden';

        senderMail.classList.remove('error');
        mailCheck = true;
        // senderMobile.style.marginTop ='10px';
    }
    if(comment.value === "" || !comment.value.replace(/\s/g, '').length){
        textVal.style.visibility = 'visible';
        comment.classList.add('error')
        console.log('error');
    }
    else{
        textVal.style.visibility = 'hidden';
        comment.classList.remove('error');
        textCheck = true;
    }

    if(nameCheck && mobCheck && mailCheck && textCheck ){
        fetch('/feedback',{
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                senderName:senderName.value,
                senderMail:senderMail.value,
                senderMobile:senderMobile.value,
                comment:comment.value
            })
        }).then(res => {
            senderName.value = '';
            senderMobile.value = '';
            senderMail.value = '';
            comment.value = '';
            console.log(res);
            return  res.json();
        });
        swal({
            title: "Thank you",
            text: "your message sent successfully",
            icon: "success",
            button: "OK",
        });
    }

});