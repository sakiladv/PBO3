class Sensor {
  constructor(nama, lokasi) {
    this.nama = nama;
    this.lokasi = lokasi;
    this._status = "Mati";
  }

  aktifkan() {
    this._status = "Aktif";
    return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`;
  }

  nonaktifkan() {
    this._status = "Mati";
    return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`;
  }

  getStatus() {
    return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}`;
  }
}

// Kelas SensorLaut yang mewarisi kelas Sensor
class SensorLaut extends Sensor {
  constructor(nama, lokasi) {
    super(nama, lokasi); // Tidak perlu menambahkan _status di sini karena sudah ada di kelas induk
  }

  kirimData() {
    if (this._status === "Aktif") {
      // Menggunakan === untuk perbandingan
      return `Sensor ${this.nama} sedang mengirim data kondisi cuaca dari lokasi ${this.lokasi}`;
    } else {
      return `Sensor ${this.nama} tidak dapat mengirim data kondisi cuaca karena sensor dalam kondisi ${this._status}`;
    }
  }
}

const sensorPasut = new SensorLaut("Pasut Selat Sunda", "Seribu");

console.log(sensorPasut.aktifkan()); // Mengaktifkan sensor
console.log(sensorPasut.getStatus()); // Memeriksa status sensor
console.log(sensorPasut.kirimData()); // Sensor mulai mengirim data
console.log(sensorPasut.nonaktifkan()); // Menonaktifkan sensor
console.log(sensorPasut.kirimData()); // Coba kirim data ketika sensor sudah dinonaktifkan
