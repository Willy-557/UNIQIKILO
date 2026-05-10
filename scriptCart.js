function renderCart() {
    if (cart.length == 0) {
        isiKeranjang.innerHTML = `
            <div class="text-center">
                <div class="card-body" style="margin: 100px 0px;">
                    <h5 class="card-title mb-2">Keranjang Kamu Kosong</h5>
                    <p class="card-text mb-4">Yuk Belanja Dulu Di Halaman Produk</p>
                    <a href="index.html" class="btn btn-dark">Belanja Sekarang</a>
                </div>
            </div>
        `;
    }
}

function tambahKeCart(gambar, namaBaju, ukuran, harga) {
    
}

let btnDeleteAll = document.querySelector('#btnDeleteAll');
btnDeleteAll.addEventListener("click", function(e) {
    isiKeranjang.innerHTML = ""
    cart = [];
    renderCart();
})