const orang = {
  nama: "Sakila",
  alamat: "Tangerang",
  usia: 20,
  jk: "perempuan",
  kendaraan: {
    mobil1: "pajero",
    mobil2: "lamborghini",
    motor: "harley",
    pesawat: "boeing",
  },
};

// Akses Properti Orang
console.log(orang.nama);
console.log(orang.alamat);
console.log(orang.usia);
console.log(orang.jk);

// Perbaiki interpolasi string
console.log(
  `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`
);

// Perbaiki InnerHTML
document.getElementById(
  "objek"
).innerHTML = `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan berusia ${orang.usia} tahun`;

// Akses Kendaraan Melalui Orang
console.log(orang.kendaraan.mobil1);
console.log(orang.kendaraan.mobil2);
console.log(orang.kendaraan.motor);
console.log(orang.kendaraan.pesawat);

// Perbaikan Objek Mahasiswa
const mahasiswa = {
  namaDepan: "Sakila",
  namaBelakang: "Divia",
  namaLengkap: function () {
    return `${this.namaDepan} ${this.namaBelakang}`;
  },
};

function mahasiswaSIK(nama, kelas, angkatan) {
  this.nama.alamat;
  this.kelas;
  this.angkatan;
}

const Sakila = new mahasiswaSIK("Sakila Divia", "A", 2023);
const scoup = new mahasiswaSIK("Mingyu", "A", 2023);
const woozi = new mahasiswaSIK("woozi", "A", 2023);

console.log(scoup.nama);
console.log(scoup.kelas);
console.log(scoup.angkatan);
