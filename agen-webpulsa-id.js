<!-- begin
/*
 *
 * This scripts uses hue rotation in the following manner:
 * hue=0   is red (#FF0000)
 * hue=60  is yellow (#FFFF00)
 * hue=120 is green (#00FF00)
 * hue=180 is cyan (#00FFFF)
 * hue=240 is blue (#0000FF)
 * hue=300 is magenta (#FF00FF)
 * hue=360 is hue=0 (#FF0000)
 *
 * Site https://www.webpulsa.id
 *
 * This script should function in any browser that supports document.getElementById
 * It has been tested in Netscape7, Mozilla Firefox 1.0, and Internet Explorer 6
 *
 * Accessibility
 *
 * The script does not write the string out, but rather takes it from an existing
 * HTML element. Therefore, users with javascript disabled will not be adverely affected.
 * They just won't get the pretty colors.
 */

/*
 * splits par.firstChild.data into 1 span for each letter
 * ARGUMENTS
 *   span - HTML element containing a text node as the only element
 */
function toSpans(span) {
  var str=span.firstChild.data;
  var a=str.length;
  span.removeChild(span.firstChild);
  for(var i=0; i<a; i++) {
    var theSpan=document.createElement("SPAN");
    theSpan.appendChild(document.createTextNode(str.charAt(i)));
    span.appendChild(theSpan);
  }
}
function RainbowSpan(span, hue, deg, brt, spd, hspd) {
    this.deg=(deg==null?360:Math.abs(deg));
    this.hue=(hue==null?0:Math.abs(hue)%360);
    this.hspd=(hspd==null?3:Math.abs(hspd)%360);
    this.length=span.firstChild.data.length;
    this.span=span;
    this.speed=(spd==null?50:Math.abs(spd));
    this.hInc=this.deg/this.length;
    this.brt=(brt==null?255:Math.abs(brt)%256);
    this.timer=null;
    toSpans(span);
    this.moveRainbow();
}
RainbowSpan.prototype.moveRainbow = function() {
  if(this.hue>359) this.hue-=360;
  var color;
  var b=this.brt;
  var a=this.length;
  var h=this.hue;

  for(var i=0; i<a; i++) {

    if(h>359) h-=360;

    if(h<60) { color=Math.floor(((h)/60)*b); red=b;grn=color;blu=0; }
    else if(h<120) { color=Math.floor(((h-60)/60)*b); red=b-color;grn=b;blu=0; }
    else if(h<180) { color=Math.floor(((h-120)/60)*b); red=0;grn=b;blu=color; }
    else if(h<240) { color=Math.floor(((h-180)/60)*b); red=0;grn=b-color;blu=b; }
    else if(h<300) { color=Math.floor(((h-240)/60)*b); red=color;grn=0;blu=b; }
    else { color=Math.floor(((h-300)/60)*b); red=b;grn=0;blu=b-color; }

    h+=this.hInc;

    this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")";
  }
  this.hue+=this.hspd;
}
//-->
var GMT = +7;
var now = new Date();
now.setUTCMinutes(now.getUTCMinutes() + (GMT+0)*60);
var jam=now.getUTCHours();
var menit=now.getUTCMinutes();
var detik=now.getUTCSeconds();
jam=""+jam+"";
menit=""+menit+"";
detik=""+detik+"";
if(jam<1)jam=document.write('<h id="webpulsaid">Waktunya tidur nih Bos....</h>');
if(jam<2)jam=document.write('<h id="webpulsaid">Selamat dini hari Bos, lagi ngeronda ya..??</h>');
if(jam<4)jam=document.write('<h id="webpulsaid">Met dini hari baru bangun atau belum tidur Bos..!!</h>');
if(jam<5)jam=document.write('<h id="webpulsaid">Bangun Pagi itu indah..</h>');
if(jam<6)jam=document.write('<h id="webpulsaid">Selamat pagi,jangan lupa mandi Bos..!!</h>');
if(jam<7)jam=document.write('<h id="webpulsaid">Selamat ber-aktifitas didunia maya Bos..</h>');
if(jam<8)jam=document.write('<h id="webpulsaid">Selamat pagi, jangan lupa cek saldonya bos, jika sedikit silahkan deposit.!!!</h>');
if(jam<9)jam=document.write('<h id="webpulsaid">Selamat pagi selamat beraktifitas Bos..</h>');
if(jam<10)jam=document.write('<h id="webpulsaid">Met pagi menjelang siang Bos ku..</h>');
if(jam<14)jam=document.write('<h id="webpulsaid">Selamat siang, met nyantai tengah hari Bos ku..??</h>');
if(jam<15)jam=document.write('<h id="webpulsaid">Selamat siang menjelang sore Bos ku..</h>');
if(jam<17)jam=document.write('<h id="webpulsaid">Selamat sore.., waktunya mandi nih Bos..</h>');
if(jam<18)jam=document.write('<h id="webpulsaid">Selamat petang, met nyantai aja Bos..</h>');
if(jam<19)jam=document.write('<h id="webpulsaid">Selamat Malam bos, Ayo cari downline baru di facebook..!!!</h>');
if(jam<21)jam=document.write('<h id="webpulsaid">Selamat malam Bos.., Banyak downline banyak komisi bos.</h>');
if(jam<23)jam=document.write('<h id="webpulsaid">Selamat malam.., Met istirahat..Bos..</h>');
if(jam<24)jam=document.write('<b><h id="webpulsaid">Met menanti pergantian hari Bos...!! Siap Tempur..</h>');
setTimeout("jam()",1000);
// -->
var webpulsaid=document.getElementById("webpulsaid"); //get span to apply rainbow
var myRainbowSpan=new RainbowSpan(webpulsaid, 0, 360, 255, 50, 18);
myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
