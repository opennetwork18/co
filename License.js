<script>
         let tglNow = new Date().toISOString().split('T')[0];
let waktuBatas = "2025-02-23";
if (tglNow >= waktuBatas) {
alert('Server Anda Telah Habis!');
document.location.href = 'https://expried.blogspot.com/';
} else {
console.log('Server aktif');
}
      </script>
