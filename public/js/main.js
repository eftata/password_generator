var password = document.getElementById ('password'); //Passwor alanımızı alıyoruz.


  //Şifre Olusturma Fonksiyonumuzu Olusturuyoruz.
function genPassword() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Hangi karakterleri içermesini istiyorsak bu alana giriyoruz.
    var passwordLength = 12; // Bu Alanı istersek kullanıcıyada girdirebiliriz.
    var password = ''; 

    // Aşağıda Randomluk sağlayarak yukarıda verdiğimiz uzunlukta olacak şekilde şifre olusturmasını sağlıyoruz.
    
    for (var i = 0; i <= passwordLength; i++ ) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1 );
    }

    document.querySelector('#password').value = password ; // Şİfreyi ekrana basıyoruz.
}

        // Şİfreyi kopyalama fonksiyonu

function copyPassword() {
    var copyText = document.querySelector ('#password');
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand('copy');
}