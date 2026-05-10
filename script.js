let cart = [];

const produk = [ 
    { id: 1, kategori: "Kaos", jenisKelamin: "Pria", sHarga: "Rp 129.000", ukuran: "XS-3XL", nama: "T-Shirt Soft Touch Kerah Bulat Lengan Panjang", harga: 129000, image: "Asset_Tugas/Pria/Produk1.jpg", cekDiskon: true, hargaSebelumDiskon: "Rp 199.000", margin: , padding: }, 

    { id: 2, kategori: "Jaket", jenisKelamin: "Pria", sHarga: "Rp 399.000", ukuran: "XS-3XL", nama: "Jaket Risleting DRY-EX Proteksi Sinar UV", harga: 399000, image: "Asset_Tugas/Pria/Produk2.jpg", cekDiskon: false, margin: , padding: }, 

    { id: 3, kategori: "Kaos", jenisKelamin: "Pria", sHarga: "Rp 199.000", ukuran: "XS-3XL", nama: "UT (T-Shirt) The Super Mario Galaxy Movie", harga: 199000, image: "Asset_Tugas/Pria/Produk3.jpg", cekDiskon: false, margin: , padding: }, 

    { id: 4, kategori: "Jaket", jenisKelamin: "Pria", sHarga: "Rp 699.000", ukuran: "S-XL", nama: "Jaket Coach Peanuts", harga: 699000, image: "Asset_Tugas/Pria/Produk4.jpg", cekDiskon: true, hargaSebelumDiskon: "Rp 899.000", margin: , padding: }, 

    { id: 5, kategori: "Kemeja", jenisKelamin: "Wanita", sHarga: "Rp 349.000", ukuran: "S-3XL", nama: "Kemeja Body Denim Lengan", harga: 349000, image: "Asset_Tugas/Wanita/Produk5.jpg", cekDiskon: false, margin: , padding: }, 

    { id: 6, kategori: "Kemeja", jenisKelamin: "Wanita", sHarga: "Rp 349.000", ukuran: "S-3XL", nama: "Kemeja Oxford Boxy Lengan Pendek", harga: 349000, image: "Asset_Tugas/Wanita/Produk6.jpg", cekDiskon: false, margin: , padding: }, 

    { id: 7, kategori: "Jaket", jenisKelamin: "Wanita", sHarga: "Rp 129.000", ukuran: "XS-M", nama: "ALRISM Katun T-Shirt", harga: 129000, image: "Asset_Tugas/Wanita/Produk7.jpg", cekDiskon: true, hargaSebelumDiskon: "Rp 199.000", margin: , padding: }, 

    { id: 8, kategori: "Kaos", jenisKelamin: "Wanita", sHarga: "Rp 399.000", ukuran: "M-XL", nama: "Jaket Aktif Ultra Stretch Ritsleting", harga: 399000, image: "Asset_Tugas/Wanita/Produk8.jpg", cekDiskon: true, hargaSebelumDiskon: "Rp 499.000", margin: , padding: }, 

    { id: 9, kategori: "Kaos", jenisKelamin: "Anak", sHarga: "Rp 149.000", ukuran: "4-5Y (110cm)-14Y(160cm)", nama: "KIDS Alrism Katun T-Shirt Garis Kerah Bulat", harga: 149000, image: "Asset_Tugas/Anak/Produk9.jpg", cekDiskon: false, margin: , padding: }, 

    { id: 10, kategori: "Kaos", jenisKelamin: "Anak", sHarga: "Rp 149.000", ukuran: "4-5Y (110cm)-14Y(160cm)", nama: "KIDS Alrism Katun T-Shirt Grafis Kerah Bulat", harga: 149000, image: "Asset_Tugas/Anak/Produk10.jpg", cekDiskon: false, margin: , padding: }, 
]

function renderCart() {
    if (cart.length == 0) {
        document.getElementById("item1").innerHTML = `
            <div class="text-center">
                <div class="card-body" style="margin: 100px 0px;">
                    <h5 class="card-title mb-2">Keranjang Kamu Kosong</h5>
                    <p class="card-text mb-4">Yuk Belanja Dulu Di Halaman Produk</p>
                    <a href="index.html" class="btn btn-dark">Belanja Sekarang</a>
                </div>
            </div>
        `;
    }
    else {

    }
}

function tambahKeCart(gambar, namaBaju, ukuran, harga) {
    
}

function renderTampilanDepan(kategori, jenisKelamin, harga) {
    const tampilan = document.querySelector("#tampilkanProduk");
    tampilan.innerHTML = "";

    let selectedKategori = kategori.value;
    let selectedjenisKelamin = jenisKelamin.value;
    let selectedharga = harga.value;

    let hasilFilter = produk.filter(p => {
        const matchKategori = selectedKategori === 'Semua' || p.kategori === selectedKategori;
        const matchJenisKelamin = selectedjenisKelamin === 'Semua' || p.jenisKelamin === selectedjenisKelamin;

        return matchKategori && matchJenisKelamin;
    })

    if (selectedharga === 'Harga Termurah') {
        for (let i = 0; i < hasilFilter.length-1; i++) {
            for(let j = 0; j < hasilFilter.length-i-1; j++) {
                if (hasilFilter[j].harga > hasilFilter[j+1].harga) {
                    let temp = hasilFilter[j+1];
                    hasilFilter[j+1] = hasilFilter[j];
                    hasilFilter[j] = temp;
                }
            }
        }
    } else if (selectedharga === 'Harga Termahal') {
        for (let i = 0; i < hasilFilter.length-1; i++) {
            for(let j = 0; j < hasilFilter.length-i-1; j++) {
                if (hasilFilter[j].harga < hasilFilter[j+1].harga) {
                    let temp = hasilFilter[j+1];
                    hasilFilter[j+1] = hasilFilter[j];
                    hasilFilter[j] = temp;
                }
            }
        }
    }

    hasilFilter.forEach(p => {
        if (p.cekDiskon == true) {
            tampilan.innerHTML += `
                <div class="card" style="width: 14rem; height: 550px;">
                    <img src="${p.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="fs-6 fw-semibold mb-3 bg-black text-white text-center rounded">${p.kategori}</div>
                        <p class="text-secondary">${p.jenisKelamin}, ${p.ukuran}</p>
                        <h5 class="fw-bold fs-6">${p.nama}</h5>
                        <h6 class="text-danger fw-bold fs-5">${p.sHarga}</h6>
                        <h6 class="fw-bold text-secondary"><strike>${p.hargaSebelumDiskon}</strike></h6>
                        <button type="button" class="btn bg-black text-white" style="position: absolute; padding-right: 23px; margin-top: 6px;" onclick="tambahKeCart('${p.image}', '${p.nama}', '${p.jenisKelamin}, ${p.ukuran}', '${p.sHarga}')">Tambah Ke Keranjang</button>
                    </div>
                </div>
            `;
        }
        else {
            tampilan.innerHTML += `
                <div class="card" style="width: 14rem; height: 550px;">
                    <img src="${p.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="fs-6 fw-semibold mb-3 bg-black text-white text-center rounded">${p.kategori}</div>
                        <p class="text-secondary">${p.jenisKelamin}, ${p.ukuran}</p>
                        <h5 class="fw-bold fs-6">${p.nama}</h5>
                        <h6 class="text-dark fw-bold fs-5 ">${p.sHarga}</h6>
                        <button type="button" class="btn bg-black text-white" style="position: absolute; padding-right: 23px; margin-top: 6px;" onclick="tambahKeCart('${p.image}', '${p.nama}', '${p.jenisKelamin}, ${p.ukuran}', '${p.sHarga}')">Tambah Ke Keranjang</button>
                    </div>
                </div>
            `;
        }
    })
}

// let btnFilterr = document.querySelector("#btnFilter")
// btnFilterr.addEventListener("click", function() {
//     let kategori = document.querySelector("#kategori")
//     let jenisKelamin = document.querySelector('input[name="radioDefault"]:checked')
//     let harga = document.querySelector("#urutkan")

//     renderTampilanDepan(kategori, jenisKelamin, harga);
// })

// let kategoriAwal = document.querySelector("#kategori");
// let jenisKelaminAwal = document.querySelector('input[name="radioDefault"]:checked');
// let hargaAwal = document.querySelector("#urutkan");
// renderTampilanDepan(kategoriAwal, jenisKelaminAwal, hargaAwal);

// renderCart();