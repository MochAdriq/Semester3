let uangJasa = 0;
let uangKomisi = 0;
let gaji = 0;
let pendapatan = 200000;

if (pendapatan > 500000) {
    uangJasa += 30000;
    uangKomisi += pendapatan * 20 / 100;
    gaji = uangJasa + uangKomisi;
    console.log(`Anda mendapatkan bonus sebesar ${uangJasa} ditambah ${uangKomisi} dengan gaji sebesar ${gaji}`);
} else if (pendapatan > 200000) {
    uangJasa += 20000;
    uangKomisi += pendapatan * 15 / 100;
    gaji = uangJasa + uangKomisi;
    console.log(`Anda mendapatkan bonus sebesar ${uangJasa} ditambah ${uangKomisi} dengan gaji sebesar ${gaji}`);
} else if (pendapatan == 200000) {
    uangJasa += 10000;
    uangKomisi += pendapatan * 10 / 100;
    gaji = uangJasa + uangKomisi;
    console.log(`Anda mendapatkan bonus sebesar ${uangJasa} ditambah ${uangKomisi} dengan gaji sebesar ${gaji}`);
} else {
    console.log("Anda tidak mendapatkan bonus");
}
