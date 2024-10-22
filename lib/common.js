export function formatDate(dateString) {
  // Array untuk hari dalam bahasa Indonesia
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  // Array untuk bulan dalam bahasa Indonesia
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Membuat objek Date dari string ISO 8601
  const date = new Date(dateString);

  // Mendapatkan hari, tanggal, bulan, tahun, jam, dan menit
  const dayName = days[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Mengembalikan string yang diformat
  return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
}
