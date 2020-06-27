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
          file: "nano-separuhku/Nano-Separuhku",
          name: "Nano Separuhku | Cinta suci",
          length: "Nano Band"
        },
        {
          track: 3,
          file: "ilir-7-2019/ilir-7-02",
          name: "Cinta Terlarang",
          length: "ilir 7"
        },
        {
          track: 4,
          file: "ilir-7-2019/ilir-7-01",
          name: "Salah Apa Aku",
          length: "ilir 7"
        },
        {
          track: 5,
          file: "ilir-7-2019/ilir-7-03",
          name: "Honey",
          length: "ilir 7"
        },
        {
          track: 6,
          file: "ilir-7-2019/ilir-7-04",
          name: "Jangan Kau Coba",
          length: "ilir 7"
        },
        {
          track: 7,
          file: "ilir-7-2019/ilir-7-05",
          name: "Jangan Nakal Sayang",
          length: "ilir 7"
        },
        {
          track: 8,
          file: "ilir-7-2019/ilir-7-06",
          name: "Kekasih Gelap",
          length: "ilir 7"
        },
        {
          track: 9,
          file: "ilir-7-2019/ilir-7-07",
          name: "Lemah Letih Lesu",
          length: "ilir 7"
        },
        {
          track: 10,
          file: "ilir-7-2019/ilir-7-08",
          name: "Sakit Sungguh Sakit",
          length: "ilir 7"
        },
        {
          track: 11,
          file: "ilir-7-2019/ilir-7-09",
          name: "Sandiwara",
          length: "ilir 7"
        },
        {
          track: 12,
          file: "ilir-7-2019/ilir-7-10",
          name: "Sella Selli",
          length: "ilir 7"
        },
        {
          track: 13,
          file: "ilir-7-2019/ilir-7-11",
          name: "Hormati Kekasih Mu",
          length: "ilir 7"
        },
        {
          track: 14,
          name: "Cinta itu kamu",
          length: "Geisha",
          file: "webpulsa/GEISHA%20-%20Cinta%20Itu%20Kamu"
        },
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
        $("#plIndo").append(
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
      li = $("#plIndo li").click(function() {
        var id = parseInt($(this).index());
        if (id !== index) {
          playTrack(id);
        }
      }),
      loadTrack = function(id) {
        $(".plSel").removeClass("plSel");
        $("#plIndo li:eq(" + id + ")").addClass("plSel");
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