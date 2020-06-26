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
          file: "religi-terbaik/file_1585493738605",
          name: "Adfaita",
          length: "Religi Terbaik"
        },
        {
          track: 2,
          name: "Ujian akhir zaman",
          length: "Warlan Sukandar",
          file: "warlan-sukandar-ujian-akhir-zaman/Warlan%20Sukandar%20-%20Ujian%20akhir%20zaman"
        },
        {
          track: 3,
          name: "Aisyah istri rasullulah",
          length: "Religi Terbaik",
          file: "webpulsa/Aisya%20istri%20rasulullah%20syakir%20daulay"
        },
        {
          track: 4,
          file: "religi-terbaik/file_1585493768362",
          name: "Aisyah Istri Rasulullah",
          length: "Nissa"
        },
        {
          track: 5,
          file: "religi-terbaik/file_1585493782621",
          name: "Aisyah Istri Rasulullah",
          length: "Ai Khodijah"
        },
        {
          track: 6,
          file: "religi-terbaik/file_1585493796674",
          name: "Allahumma Labbaik",
          length: "Religi Terbaik"
        },
        {
          track: 7,
          file: "religi-terbaik/file_1585493819949",
          name: "Allahummarhamna Bil Qur'an",
          length: "Religi Terbaik"
        },
        {
          track: 8,
          file: "religi-terbaik/file_1585493839555",
          name: "Antasallam",
          length: "Religi Terbaik"
        },
        {
          track: 9,
          file: "religi-terbaik/file_1585493851497",
          name: "Busyro Lana",
          length: "Religi Terbaik"
        },
        {
          track: 10,
          file: "religi-terbaik/file_1585493867017",
          name: "I'tiraf",
          length: "Religi Terbaik"
        },
        {
          track: 11,
          file: "religi-terbaik/file_1585493879730",
          name: "Laa ilaha illa Allaah",
          length: "Religi Terbaik"
        },
        {
          track: 12,
          file: "religi-terbaik/file_1585493893420",
          name: "Man Ana",
          length: "Religi Terbaik"
        },
        {
          track: 13,
          file: "religi-terbaik/file_1585493906775",
          name: "Muhammad Nabina",
          length: "Religi Terbaik"
        },
        {
          track: 14,
          file: "religi-terbaik/file_1586050477637",
          name: "Aisyah Istri Rasulullah",
          length: "Cover Syakir Daulay"
          },
        {
          track: 15,
          file:"religi-terbaik/file_1585493552477",
          name: "Rohman Ya Rohman",
          length: "Religi Terbaik"
        },
        {
          track: 16,
          file:"religi-terbaik/file_1585493567823",
          name: "Sa'duna Fiddunya",
          length: "Religi Terbaik"
        },
        {
          track: 17,
          file:"religi-terbaik/file_1585493583797",
          name: "Sholawat Nariyah",
          length: "Religi Terbaik"
        },
        {
          track: 18,
          file:"religi-terbaik/file_1585493596933",
          name: "Sholawat Tasmauni Robbah",
          length: "Religi Terbaik"
        },
        {
          track: 19,
          file:"religi-terbaik/file_1585493609407",
          name: "Shooq",
          length: "Religi Terbaik"
        },
        {
          track: 20,
          file:"religi-terbaik/file_1585493621721",
          name: "Wahisna",
          length: "Neng Nada"
        },
        {
          track: 21,
          file:"religi-terbaik/file_1585493656215",
          name: "Ya Asyiqol Musthofa",
          length: "Religi Terbaik"
        },
        {
          track: 22,
          file:"religi-terbaik/file_1585493676555",
          name: "Ya Ayyuhannabi",
          length: "Religi Terbaik"
        },
        {
          track: 23,
          file:"religi-terbaik/file_1585493689005",
          name: "Ya Badrotim",
          length: "Religi Terbaik"
        },
        {
          track: 24,
          file:"religi-terbaik/file_1585493701684",
          name: "Ya Syahidan",
          length: "Religi Terbaik"
        },
        {
          track: 25,
          file:"religi-terbaik/file_1585493715283",
          name: "Yasir Lanaa",
          length: "Religi Terbaik"
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
        $("#plReligi").append(
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
      li = $("#plReligi li").click(function() {
        var id = parseInt($(this).index());
        if (id !== index) {
          playTrack(id);
        }
      }),
      loadTrack = function(id) {
        $(".plSel").removeClass("plSel");
        $("#plReligi li:eq(" + id + ")").addClass("plSel");
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
