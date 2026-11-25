const hedefZamani = new Date("November 24, 2026 14:00:00").getTime();

const sayacFonksiyonu = setInterval(function () {
    const suAn = new Date().getTime();
    const KalanSure = hedefZamani - suAn;

    const gun = Math.floor(KalanSure / (1000 * 60 * 60 * 24));
    const saat = Math.floor((KalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dakika = Math.floor((KalanSure % (1000 * 60 * 60)) / (1000 * 60));
    const saniye = Math.floor((KalanSure % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = gun;
    document.getElementById("hours").innerText = saat;
    document.getElementById("minutes").innerText = dakika;
    document.getElementById("seconds").innerText = saniye;

    if (KalanSure < 0) {
        clearInterval(sayacFonksiyonu);
        document.querySelector(".main-container").innerHTML = "<h1>Yönlendiriliyorsunuz.....</h1>";

        setTimeout(function () {
            window.location.href = "anasayfa.html";
        }, 2000);
    }
}, 1000);

function mesajGoster() {
    alert("Bana karataseylul112@gmail.com mail adresinden ulaşabilirsiniz.");
}