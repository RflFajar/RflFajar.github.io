// script.js

// Tab Navigation
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".order-tabs button");
    const orderItems = document.querySelectorAll(".order-item");

    // Event Listener untuk tiap tab
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Reset semua tab ke keadaan tidak aktif
            tabs.forEach((t) => t.classList.remove("active"));
            // Aktifkan tab yang dipilih
            tab.classList.add("active");

            // Filter order sesuai tab
            const status = tab.textContent.toLowerCase();
            orderItems.forEach((item) => {
                if (status === "delivered") {
                    item.style.display = "flex"; // Contoh: Semua pesanan tampil di tab Delivered
                } else {
                    item.style.display = "none"; // Contoh: Sembunyikan pesanan lain
                }
            });
        });
    });

    // Tombol Details
    const detailButtons = document.querySelectorAll(".order-date button");
    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = 'Deskripsi.html';
        });
    });
});
