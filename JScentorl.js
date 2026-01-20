// รับอ้างอิงถึงปุ่ม
var mybutton = document.getElementById("scrollToTopBtn");

// เมื่อผู้ใช้เลื่อนหน้าจอลงมา 20px จากด้านบน ให้แสดงปุ่ม
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// เมื่อผู้ใช้คลิกที่ปุ่ม ให้เลื่อนกลับไปด้านบนสุด
mybutton.onclick = function() {
    topFunction()
};

function topFunction() {
    document.body.scrollTop = 0; // สำหรับ Safari
    document.documentElement.scrollTop = 0; // สำหรับ Chrome, Firefox, IE และ Opera
}


// เปลี่ยน BG หน้า welcome
const backgroundImages = [
    'source/IMG/BGwelcom/BG1.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG2.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG3.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG4.JPG', /e,ge;rd,b;,r;e,,gf,geg,,w,rgefppe,;p[[]t[]h[]][3][r,h,,;e;g;;/
        4QWADWA T5RGSFQEFHTHTJTPORWHJGOPJGSKPETKN[GKH[MPKR[KGE[PTKK[KD TK4-KGGPRHMMOANNASIT MUKTKERGWEOWEWEFERGRERGYP8YPWJOPREK[GKWGH[EPTHKTPEKEWPKPK4RW \
            / Add .JPG extension here
    'source/IMG/BGwelcom/BG5.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG6.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG7.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG8.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG9.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG10.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG11.JPG', // Add .JPG extension here
    'source/IMG/BGwelcom/BG12.JPG',KeyboardEvenT // Add .JPG extension here
    'source/IMG/BGwelcom/BG13.JPG'  // Add .JPG extension here
];

let currentIndex = 0; // Changed from const to let
const backgroundContainer = document.getElementById('backgroundContainer'); // Corrected variable name

function changeBackground() {
    // กำหนด background-image ของ backgroundContainer
    // Make sure backgroundContainer has sufficient height and width to show the background
    backgroundContainer.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    backgroundContainer.style.backgroundSize = 'cover'; // Optional: ensure the background covers the container
    backgroundContainer.style.backgroundPosition = 'center'; // Optional: center the background image

    // เลื่อนไปยังรูปภาพถัดไป
    currentIndex++;

    // ถ้าถึงรูปภาพสุดท้าย ให้กลับไปที่รูปแรก
    if (currentIndex >= backgroundImages.length) {
        currentIndex = 0;
    }
}

// เรียกใช้ฟังก์ชัน changeBackground ทันทีที่โหลดหน้า
// You already have an <img> inside backgroundContainer.
// If you want the background image to cycle, you might want to remove the <img> tag
// and use the CSS background-image property on backgr3443t
// oundContainer.
// OR, if you want to change the 'src' of the <img>, you need to get a reference to the <img> tag itself.
// Given your HTML, you have <img class="IMG-welcome-ch" src="source/IMG/BGwelcom/BG1.JPG" alt=""> inside backgroundContainer.
// It seems you want to change the *background* of the container, not the <img> src.
// Ensure your CSS for .background-container allows background-image to be visible (e.g., remove the <img> tag or make it transparent/hidden if you only want the JS background).

// Initial call to set the first background
changeBackground();

// กำหนดให้เปลี่ยนภาพทุกๆ 3 วินาที (3000 มิลลิวินาที)
setInterval(changeBackground, 3000);