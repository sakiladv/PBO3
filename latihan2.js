// Kelas Induk: Kapal
class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
  }
}

// Subclass: KapalPenumpang
class KapalPenumpang extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini memiliki kapasitas ${
      this.kapasitasPenumpang
    } orang.`;
  }
}

// Subclass: KapalPesiar (turunan dari KapalPenumpang)
class KapalPesiar extends KapalPenumpang {
  constructor(
    nama,
    panjang,
    lebar,
    kapasitasPenumpang,
    jumlahKamar,
    kapasitasPerKamar
  ) {
    super(nama, "Kapal Pesiar", panjang, lebar, kapasitasPenumpang);
    this.jumlahKamar = jumlahKamar;
    this.kapasitasPerKamar = kapasitasPerKamar;
  }

  infoKapal() {
    return `Kapal Pesiar ini berukuran ${this.panjang} x ${this.lebar} m. Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang. Kapal ini memiliki ${this.jumlahKamar} kamar dengan kapasitas ${this.kapasitasPerKamar} orang per kamar.`;
  }
}

//subclass: kecepatan kapal
class KapalCepat extends Kapal {
  constructor(nama, jenis, panjang, lebar, KecepatanKapal) {
    super(nama, jenis, panjang, lebar);
    this.KecepatanKapal = KecepatanKapal;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ferry dan kapal pesiar memiliki kecepatan ${
      this.KecepatanKapal
    } knot`;
  }
}

// Kelas: TiketKapal
class TiketKapal {
  constructor(nomorTiket, namaPenumpang, kapal, hargaTiket) {
    this.nomorTiket = nomorTiket;
    this.namaPenumpang = namaPenumpang;
    this.kapal = kapal; // Objek kapal, bisa dari KapalPenumpang
    this.hargaTiket = hargaTiket;
  }

  infoTiket() {
    return `Tiket No. ${this.nomorTiket} Nama Penumpang: ${this.namaPenumpang} Kapal: ${this.kapal.nama} Jenis Kapal: ${this.kapal.jenis} Harga Tiket: Rp ${this.hargaTiket} Tiket ini adalah tiket reguler.`;
  }
}

// Membuat objek KapalPenumpang
const kapalFerry = new KapalPenumpang(
  "Budiono Siregar",
  "Ferry",
  200,
  100,
  600
);
console.log(kapalFerry.infoKapal());

// Membuat objek KapalPesiar
const kapalPesiar = new KapalPesiar("Audrey Berlin", 350, 150, 1500, 250, 5);
console.log(kapalPesiar.infoKapal());

// Membuat objek kecepatan kapal
const kapalCepat = new KapalCepat("Speedboat", "Kapal Cepat", 200, 100, 35); // Kecepatan 35 knot
console.log(kapalCepat.infoKapal());

// Membuat objek tiket untuk penumpang di kapal Ferry
const tiketFerry = new TiketKapal("0304", "Emely Carl", kapalFerry, 150000);
console.log(tiketFerry.infoTiket());
