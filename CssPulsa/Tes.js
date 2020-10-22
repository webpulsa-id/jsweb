// Source Jam
window.setTimeout("waktu()", 1000);
	function waktu() {
		var waktu = new Date();
		setTimeout("waktu()", 1000);
		document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = waktu.getMinutes();
		document.getElementById("detik").innerHTML = waktu.getSeconds();
	}
// tutup jam

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Dec 30, 2020 15:37:25").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Keluarkan hasil dalam elemen dengan id = "DATAmundur"
  document.getElementById("DATAmundur").innerHTML = "Tinggal " + days + "Hari : " + hours + "Jam : "
  + minutes + "Menit : " + seconds + "Detik " + "lagi";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("DATAmundur").innerHTML = "EXPIRED";
  }
}, 1000);
// tutup wkt mundur

// open aktif
$(document).ready(function() {
		var delay = 46800;
		var jackpot = 0;
		pull_jackpot();
		var timer;
		function pull_jackpot() {
		var nominal = 15000;
		if (jackpot == 0) jackpot = parseInt(nominal - 15000);
		var amount = 15000 / delay * 1;
		timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
		}

		function set_jackpot(jackpot, nominal, amount) {
			var jackpot = jackpot + amount;
			if (jackpot >= nominal) {
				clearInterval(timer);
				pull_jackpot();
			} else {
				var result = addCommas(parseInt(jackpot));
				$('#jp').html(result);
			}
			return jackpot;
		}
		function addCommas(nStr) {
			nStr += ' Member Aktif saat ini.';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, 'dan ± ' + '$1' + ',' + '$2');
			}
			return x1 + x2;
		}
	})
var win = null;
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}
// tutup aktif

// open DATA REG
$('#noAdmin').val('0822-3547-8838');// WaCenter
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		// Onclick Whatsapp Sent!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .paket').val() == '') { // Cek paket
				ph = $('#whatsapp .paket').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .paket').focus();
				return false;
			} else if ($('#whatsapp .nama').val() == '') { // Cek Nama
				ph = $('#whatsapp .nama').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nama').focus();
				return false;
			} else if ($('#whatsapp .email').val() == '') { // Cek email
				ph = $('#whatsapp .email').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .email').focus();
                return false;
            } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
                ph = $('#whatsapp .nomor').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .nomor').focus();
				return false;
            } else if ($('#whatsapp .kota').val() == '') { // Cek kota
                ph = $('#whatsapp .kota').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .kota').focus();
				return false;
            } else if ($('#whatsapp .alamat').val() == '') { // Cek alamat
                ph = $('#whatsapp .alamat').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .alamat').focus();
				return false;
            } else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
				ph = $('#whatsapp .pembayaran').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .pembayaran').focus();
				return false;
			} else if ($('#whatsapp .informasi').val() == '') { // Cek dari
				ph = $('#whatsapp .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    paket = $('#whatsapp .paket').val(),
					nama = $('#whatsapp .nama').val(),
					email = $('#whatsapp .email').val(),
					nomor = $('#whatsapp .nomor').val(),
					kota = $('#whatsapp .kota').val(),
                    alamat = $('#whatsapp .alamat').val(),
					informasi = $('#whatsapp .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +
               '' + paket +
               '.' + nama +
               '.' + kota
               );
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
