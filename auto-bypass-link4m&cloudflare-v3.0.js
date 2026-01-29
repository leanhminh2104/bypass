// Script tự động xóa Anti-Adblock
(function() {
    'use strict';
    
    // Tạo vòng lặp quét mỗi 0.5 giây
    const cleaner = setInterval(() => {
        // Tìm cái hộp nội dung bên trong
        const contentBox = document.querySelector('.jquery-adi_content');
        
        if (contentBox) {
            // Tìm ra thẻ cha bao trùm (cái màn hình đen mờ)
            const overlay = contentBox.closest('.text-center.dark');
            
            if (overlay) {
                overlay.remove(); // Xóa khỏi DOM
                console.log('Đã xóa Anti-Adblock Overlay!');
                
                // Mở lại thanh cuộn (nếu trang web khóa scroll khi hiện popup)
                document.body.style.overflow = 'auto'; 
            }
        }
    }, 500);
})();
