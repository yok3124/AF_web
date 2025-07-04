
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
    'source/IMG/BGwelcom/BG1',
    'source/IMG/BGwelcom/',
    'source/IMG/BGwelcom/',
    ''
];

const currentIndex = 0; // index ของรูปภาพปัจจุบัน
// var bodyElement = document.body; // อ้างอิงถึง body element
const backgroundContainer = document.getElementById('backgroundContainer');

function changeBackground() {
    // กำหนด background-image ของ body (หรือ backgroundContainer)
    bodyElement.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

    // เลื่อนไปยังรูปภาพถัดไป
    currentIndex++;

    // ถ้าถึงรูปภาพสุดท้าย ให้กลับไปที่รูปแรก
    if (currentIndex >= backgroundImages.length) {
        currentIndex = 0;
    }
}

// เรียกใช้ฟังก์ชัน changeBackground ทันทีที่โหลดหน้า
changeBackground();

// กำหนดให้เปลี่ยนภาพทุกๆ 5 วินาที (5000 มิลลิวินาที)
setInterval(changeBackground, 5000);