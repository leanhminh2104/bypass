// ==UserScript==
// @name         Tapmoney/Link4M Auto Bypass (No Bullshit)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Xóa Anti-Adblock, Auto Click, Tự động cuộn - Dành cho LAMDev
// @author       LAMDev
// @match        *://tapmoney.net/*
// @match        *://link4m.com/*
// @match        *://2m.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    console.log('>> LAMDev Bypass Started...');

    // 1. Hàm xóa Anti-Adblock (Cực mạnh)
    function killAdblockPopup() {
        const popup = document.querySelector('.jquery-adi_content');
        if (popup) {
            const overlay = popup.closest('.text-center.dark') || popup.closest('div[style*="z-index: 99999"]');
            if (overlay) {
                overlay.remove();
                document.body.style.overflow = 'auto'; // Mở khóa cuộn
                console.log('>> Đã xóa Popup Anti-Adblock');
            }
        }
    }

    // 2. Hàm xử lý Timer và Click nút
    function autoClickLogic() {
        // --- Xử lý các bước của Tapmoney/Link4m ---

        // Trường hợp 1: Nút "Tôi không phải người máy" (bước đầu)
        let captchaBtn = document.querySelector('#invisibleCaptchaShortlink');
        if(captchaBtn && !captchaBtn.disabled) {
             captchaBtn.click();
             console.log('>> Click Captcha Button');
        }

        // Trường hợp 2: Nút "Get Link" hoặc "Tiếp tục" bị ẩn
        // Tapmoney hay dùng ID 'jgo' hoặc class 'btn-success'
        let mainBtn = document.getElementById('jgo');
        
        // Nếu nút chưa hiện, thử tìm nút submit form
        if (!mainBtn) mainBtn = document.querySelector('a.btn.btn-success.btn-lg.get-link');
        
        if (mainBtn) {
            // Kiểm tra xem nút có bị disable hay đang đếm ngược không
            if (mainBtn.classList.contains('disabled') || mainBtn.style.display === 'none') {
                 // Đang đếm ngược, kệ nó
                 return;
            }
            
            // Cuộn tới nút cho chắc ăn (để trigger sự kiện scroll của web)
            mainBtn.scrollIntoView({behavior: "smooth", block: "center"});
            
            // Click
            setTimeout(() => {
                mainBtn.click();
                // Dự phòng: Nếu click thường không ăn thì dùng JS native
                window.location.href = mainBtn.href; 
                console.log('>> Đã Click nút lấy link!');
            }, 1000);
        }
    }

    // 3. Chạy vòng lặp kiểm tra mỗi giây (Thay vì chờ load xong mới chạy)
    setInterval(() => {
        killAdblockPopup();
        autoClickLogic();
        
        // Hack nhỏ: Luôn set biến đếm ngược về 0 nếu tìm thấy (tùy phiên bản web)
        if (typeof window.time_request !== 'undefined' && window.time_request > 0) {
            window.time_request = 0; // Tua nhanh thời gian
            console.log('>> Đã tua nhanh Timer');
        }
    }, 1000);

})();
