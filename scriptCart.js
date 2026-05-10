let cart = [];

let isiKeranjang = document.querySelector('#item1');
isiKeranjang.innerHTML = ""
let total = 0;

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
    } else {
        cart.forEach(c => {
            isiKeranjang.innerHTML += `
                <div class="d-flex" style="margin: 10px 0px;">
                    <img src="${c.image}" class="img-fluid rounded-start" alt="...">
                    <div class="w-100 shadow-sm">
                        <div class="d-flex justify-content-between" style="margin-top: 150px;">
                            <div class="item ms-3">
                                <h5 class="card-title">${c.namaBaju}</h5>
                                <p class="card-text">${c.gender}, ${c.ukuranBaju}</p>
                                <p class="card-text text-body-secondary">${c.StringHarga}</p>
                            </div>
                            <div class="item d-flex">
                                <button class="btn btn-outline-secondary" style="margin-top: 30px; margin-bottom: 70px;" type="button">-</button>
                                <p style="margin: 37px 10px;">${c.jumlahPesan}</p>
                                <button class="btn btn-outline-secondary" style="margin-top: 30px; margin-bottom: 70px;" type="button">+</button>
                            </div>
                            <div class="item mt-1 me-3">
                                <h6 class="fw-bold">${c.jumlahPesan * c.hargaNum}</h6>
                                <button type="button" class="btn btn-danger mt-3 ms-3">Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }) 
    }
}

function tambahKeCart(gambar, nama, jenisKelamin, ukuran, sHarga, harga, jumlah) {
    cart.forEach(c => {
        if (c.namaBaju != nama) {
            total += harga;

            cart.push({
                image: gambar,
                namaBaju: nama, 
                gender: jenisKelamin,
                ukuranBaju: ukuran,
                StringHarga: sHarga,
                hargaNum : harga,
                jumlahPesan: jumlah
            })  
        }
    })
}

let btnDeleteAll = document.querySelector('#btnDeleteAll');
btnDeleteAll.addEventListener("click", function(e) {
    isiKeranjang.innerHTML = ""
    cart = [];
    renderCart();
})

let ambilTotalHarga = document.querySelector("#totalHarga");
ambilTotalHarga.innerHTML = total;

renderCart();