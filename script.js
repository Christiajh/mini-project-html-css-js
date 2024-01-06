const expectedPassword = "Jovanka";
const userInput = prompt("Masukkan kata sandi:");
if (userInput === expectedPassword) {
    alert("Kata sandi benar. Akses diberikan!");
} else {
    alert("Kata sandi salah. Akses ditolak!");
    window.location.href = "halaman_error.html";
}
