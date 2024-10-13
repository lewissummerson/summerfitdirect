var userName;
var userEmail;
var btnSend;

function init(){
    userName = document.getElementById('userName');
    userEmail = document.getElementById('userEmail');
    btnSend = document.getElementById('btnSend');

    btnSend.onclick = function() {
        emailjs.send("service_96rzxm8","template_86mbi5k",{
            from_name: userName.value,
            email_id: userEmail.value,
        });

        userName.value = '';
        userEmail.value = '';
        btnSend.innerHTML = 'Successfully Subscribed !'
    }
}