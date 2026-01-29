// ==UserScript==
// @name         Link4M Auto Bypass  & Cloudflare
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Link4M Auto Bypass  & Cloudflare
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

    function killAdblockPopup() {
        const popup = document.querySelector('.jquery-adi_content');
        if (popup) {
            const overlay = popup.closest('.text-center.dark') || popup.closest('div[style*="z-index: 99999"]');
            if (overlay) {
                overlay.remove();
                document.body.style.overflow = 'auto'; 
                console.log('>> Đã xóa Popup Anti-Adblock');
            }
        }
    }

    function autoClickLogic() {
        
        let captchaBtn = document.querySelector('#invisibleCaptchaShortlink');
        if(captchaBtn && !captchaBtn.disabled) {
             captchaBtn.click();
             console.log('>> Click Captcha Button');
        }

        let mainBtn = document.getElementById('jgo');
        
        if (!mainBtn) mainBtn = document.querySelector('a.btn.btn-success.btn-lg.get-link');
        
        if (mainBtn) {
            
            if (mainBtn.classList.contains('disabled') || mainBtn.style.display === 'none') {
                 
                 return;
            }
            
            mainBtn.scrollIntoView({behavior: "smooth", block: "center"});
            
            setTimeout(() => {
                mainBtn.click();
                window.location.href = mainBtn.href; 
                console.log('>> Đã Click nút lấy link!');
            }, 1000);
        }
    }

    setInterval(() => {
        killAdblockPopup();
        autoClickLogic();
        
        if (typeof window.time_request !== 'undefined' && window.time_request > 0) {
            window.time_request = 0; 
            console.log('>> Đã tua nhanh Timer');
        }
    }, 1000);

})();
