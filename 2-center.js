var url = "https://app-agen-pulsa.blogspot.com/p/app-center-transaksi.html"; // url tujuan
            var count = 0; // dalam detik
            function countDown() {
                if (count > 0) {
                    count--;
                    var waktu = count + 1;
                    $('#pesan').html(' Menuju Halaman Download dalam ' + waktu + ' detik');
                    setTimeout("countDown()", 1000);
                } else {
                    window.location.href = url;
                }
            }
            countDown();
