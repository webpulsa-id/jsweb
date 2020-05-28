// html5media enables <video> and <audio> tags in all major browsers
// External File: https://api.html5media.info/1.1.8/html5media.min.js

// Add user agent as an attribute on the <html> tag...
// Inspiration: https://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute("data-useragent", navigator.userAgent);
b.setAttribute("data-platform", navigator.platform);

// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/
jQuery(function($) {
  var supportsAudio = !!document.createElement("audio").canPlayType;
  if (supportsAudio) {
    var index = 0,
      playing = false,
      mediaPath = "https://archive.org/download/",
      extension = "",
      tracks = [
        {
          track: 1,
          name: "Aisyah istri rasullulah",
          length: "3:28",
          file: "webpulsa/Aisya%20istri%20rasulullah%20syakir%20daulay"
        },
        {
          track: 2,
          name: "Geisha cinta itu kamu",
          length: "3:34",
          file: "webpulsa/GEISHA%20-%20Cinta%20Itu%20Kamu"
        },
        {
          track: 3,
          name: "Warlan Sukandar Ujian akhir zaman",
          length: "6:21",
          file: "warlan-sukandar-ujian-akhir-zaman/Warlan%20Sukandar%20-%20Ujian%20akhir%20zaman"
        },
        {
          track: 4,
          name: "Ipank & Kintani Sangkutan Hati",
          length: "5:07",
          file: "ipankkintanisangkutanhati_201912/Ipank%20%26%20Kintani%20-%20Sangkutan%20Hati"
        },
        {
          track: 5,
          name: "Thomas arya ft Elsa pitaloka - Satu Hati Sampai Mati",
          length: "5:45",
          file: "ThomasArya-17April2020/Thomas%20arya%20ft%20Elsa%20pitaloka%20-%20Satu%20Hati%20Sampai%20Mati"
        },
        {
          track: 6,
          name: "Thomas arya - kecewa dalam setia",
          length: "5:34",
          file: "ThomasArya-17April2020/Thomas%20arya%20_%20kecewa%20dalam%20setia_slowrock%20terbaru%20cover%20liryk%20musik%20%28cover%29"
        },
        {
          track: 7,
          name: "Adfaita - Religi Terbaik",
          length: "###",
          file: "religi-terbaik/file_1585493738605"
        },
        {
          track: 8,
          name: "Aisyah Istri Rasulullah",
          length: "###",
          file: "religi-terbaik/file_1585493768362"
        },
        {
          track: 9,
          name: "Nissa - Aisyah Istri Rasulullah",
          length: "###",
          file: "religi-terbaik/file_1585493782621"
        },
        {
          track: 10,
          name: "Ai khodijah - Allahumma Labbaik",
          length: "###",
          file: "religi-terbaik/file_1585493796674"
        },
        {
          track: 11,
          name: "Allahummarhamna Bil Qur'an",
          length: "###",
          file: "religi-terbaik/file_1585493819949"
        },
        {
          track: 12,
          name: "Religi - Antasallam",
          length: "###",
          file: "religi-terbaik/file_1585493839555"
        },
        {
          track: 13,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 14,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 15,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 16,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 17,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 18,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 19,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: 20,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        },
        {
          track: ##,
          name: "##",
          length: "###",
          file: "religi-terbaik/44444"
        }

      ],
      buildPlaylist = $.each(tracks, function(key, value) {
        var trackNumber = value.track,
          trackName = value.name,
          trackLength = value.length;
        if (trackNumber.toString().length === 1) {
          trackNumber = "0" + trackNumber;
        } else {
          trackNumber = "" + trackNumber;
        }
        $("#plList").append(
          '<li><div class="plItem"><div class="plNum">' +
            trackNumber +
            '.</div><div class="plTitle">' +
            trackName +
            '</div><div class="plLength">' +
            trackLength +
            "</div></div></li>"
        );
      }),
      trackCount = tracks.length,
      npAction = $("#npAction"),
      npTitle = $("#npTitle"),
      audio = $("#audio1")
        .bind("play", function() {
          playing = true;
          npAction.text("Sedang Memutar...");
        })
        .bind("pause", function() {
          playing = false;
          npAction.text("Berhenti...");
        })
        .bind("ended", function() {
          npAction.text("Berhenti...");
          if (index + 1 < trackCount) {
            index++;
            loadTrack(index);
            audio.play();
          } else {
            audio.pause();
            index = 0;
            loadTrack(index);
          }
        })
        .get(0),
      btnPrev = $("#btnPrev").click(function() {
        if (index - 1 > -1) {
          index--;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      btnNext = $("#btnNext").click(function() {
        if (index + 1 < trackCount) {
          index++;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      li = $("#plList li").click(function() {
        var id = parseInt($(this).index());
        if (id !== index) {
          playTrack(id);
        }
      }),
      loadTrack = function(id) {
        $(".plSel").removeClass("plSel");
        $("#plList li:eq(" + id + ")").addClass("plSel");
        npTitle.text(tracks[id].name);
        index = id;
        audio.src = mediaPath + tracks[id].file + extension;
      },
      playTrack = function(id) {
        loadTrack(id);
        audio.play();
      };
    extension = audio.canPlayType("audio/mpeg")
      ? ".mp3"
      : audio.canPlayType("audio/ogg")
      ? ".ogg"
      : "";
    loadTrack(index);
  }
});