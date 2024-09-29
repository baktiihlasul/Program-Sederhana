//Keliling Lingkaran//
var diameter = prompt("masukan diameter");
var keliling = 3.14 * diameter;
console.log("Keliling Lingkaran =" + keliling);

//Luar Persegi panjang//
var panjang = prompt("masukan panjang");
var lebar = prompt("masukan lebar");
var luas = panjang * lebar;
console.log("Luas Persegi Panjang = " + luas);

//Menghitung volume kubus//
var sisi = prompt("masukan sisi");
var volume = sisi * sisi * sisi;
console.log("volume kubus = " + volume);

//Menghitung suhu//
var celcius = prompt("Masukkan suhu dalam Celcius: ");
var fahrenheit = (celcius * 9 / 5) + 32;
console.log("Suhu dalam Fahreinheit adalah:" + fahrenheit + "°F")

//Apk uang kembalian pembelian telur//
var hargaPerKilo = 28000;
var jumlahTelur = prompt("Masukkan jumlah telur (kg):");
var totalBayar = jumlahTelur * hargaPerKilo;
var uangDibayarkan = prompt("Masukkan jumlah uang yang dibayarkan:");
var uangKembalian = uangDibayarkan - totalBayar;
console.log("Jumlah Telur (kg): " + jumlahTelur + " kilo");
console.log("Total Bayar: Rp" + totalBayar);
console.log("Uang yang dibayarkan: Rp" + uangDibayarkan);
console.log("Uang Kembalian: Rp" + uangKembalian);