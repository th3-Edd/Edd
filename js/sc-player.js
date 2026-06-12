/**
 * ==========================================================================
 * REPRODUCTOR DUAL: SOUNDCLOUD + YOUTUBE (sc-player.js)
 * Detecta automáticamente la plataforma según la URL y cambia de reproductor.
 * ==========================================================================
 */

// Estado del Reproductor
const MusicPlayer = {
  widget: null,          // Widget de SoundCloud
  ytPlayer: null,        // Instancia de YouTube IFrame API
  isApiReady: false,     // SC API lista
  isYTApiReady: false,   // YT API lista
  isPlaying: false,
  isMuted: false,
  autoplayEnabled: true,
  currentTrackIndex: 0,
  currentPlatform: null, // 'sc' | 'yt'
  ytProgressInterval: null,

  playlist: [
    {
      id: "track-1",
      title: "White Ferrari",
      artist: "Frank Ocean",
      scUrl: "https://soundcloud.com/emmanuel-igah/white-ferrari-outro-loop-frank-ocean?si=5122af0c350648cf8b6be236a55b25fa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-2",
      title: "Yebbas Heartbreak",
      artist: "Drake",
      scUrl: "https://soundcloud.com/user-4702748/yebbas-heartbreak-drake-slowed?si=87f48046b371470ea343013a4aac7b62&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-3",
      title: "Equation",
      artist: "Unknown",
      scUrl: "https://youtu.be/5egqUWAiRsE?si=hbSmwvOMoajiuLAc"
    },
    {
      id: "track-4",
      title: "i just wanna feel your love again",
      artist: "Montell Fish",
      scUrl: "https://soundcloud.com/user-477006161/montell-fish-i-just-wanna-feel-your-love-again-sped-up?si=b08a1f2327b849febd2b75b485466cc0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-4-1",
      title: "I Just Wanna Feel Your Love",
      artist: "Richy Lara",
      scUrl: "https://soundcloud.com/richy-lara-742455054/i-just-wanna-feel-your-love?si=7abb8cd7080740bd8116038ccdaef1b3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-5",
      title: "If It Only Gets Better",
      artist: "Unknown",
      scUrl: "https://soundcloud.com/ilovepotato666/neu-nhu-moi-thu-tot-dep-hon?si=66b749229ba648638bcd559ba298d0a7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-6",
      title: "Hello?",
      artist: "Clairo",
      scUrl: "https://soundcloud.com/donatoarmanidj/clairo-hello-donato-armani-remix-slowed-reverb?si=809f66101e934b06b70b4436cd507806&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-7",
      title: "We",
      artist: "Mac Miller",
      scUrl: "https://soundcloud.com/rhiannonshae/mac-miller-we-slowed?si=5e7bd80bdec64cd8b08808b8e29832cf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-8",
      title: "No One Noticed",
      artist: "Unknown",
      scUrl: "https://soundcloud.com/oswaldyke/no-one-noticed?si=26183c9bfc2f4dc29b00eea1b975a91b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-9",
      title: "Met A Girl",
      artist: "Tarune",
      scUrl: "https://soundcloud.com/tarunetheband/met-a-girl-tarune?si=7e727ccf06ef43d1895de37af1448be3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-10",
      title: "i'd find you",
      artist: "Unknown",
      scUrl: "https://soundcloud.com/user-581412663/id-find-you?si=5e0a35645c624fff8cad26bb77d7edac&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-11",
      title: "ONLY",
      artist: "LeeHi",
      scUrl: "https://soundcloud.com/l2share140/lee-hi-only?si=56b5bb215cee4d5d9ff69f6e796ed5f0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-12",
      title: "feel something",
      artist: "Bea Miller",
      scUrl: "https://soundcloud.com/user-760022478/bea-miller-feel-something-slowed-down?si=d2539a5a01bb4ce1ba746a1ad6f49cf7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-13",
      title: "Dunno",
      artist: "Mac Miller",
      scUrl: "https://soundcloud.com/larryfisherman/dunno?si=d1d48124c21d4d51ba9c70b5481a6726&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-14",
      title: "BIRDS OF A FEATHER",
      artist: "Billie Eilish",
      scUrl: "https://soundcloud.com/rayvault/billie-eilish-birds-of-a-feather-slowed-reverb-raymix?si=8556a80206b346888e2097107b2fa556&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-15",
      title: "World Star Money",
      artist: "Joji",
      scUrl: "https://soundcloud.com/chloeburbank/worldstarmoney?si=53de7236006349878707b98c06276f5d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-16",
      title: "Unsaved Info",
      artist: "Joji",
      scUrl: "https://soundcloud.com/user427947891/joji-unsaved-info-extended?si=7997eb08218d4076a2fc2062b65ea645&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-17",
      title: "I Thought I Saw Your Face Today",
      artist: "She & Him",
      scUrl: "https://soundcloud.com/fanix-music-378534075/she-him-i-thought-i-saw-your-face-today-slowed?si=864ce5f4c3344b43b1ff8f691e82f523&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-18",
      title: "I Wonder",
      artist: "Kanye West",
      scUrl: "https://soundcloud.com/teenxiv/kanye-west-i-wonder?si=0674c6ef9ae9409e8e5b7c9d8efd62b1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-19",
      title: "sit down beside me",
      artist: "Patrick Watson",
      scUrl: "https://soundcloud.com/user-632666518/sit-down-beside-me-patrick-watson-slowed?si=f1edc7e0400f476a9e593f635be99b99&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-20",
      title: "Creep",
      artist: "Ember Island",
      scUrl: "https://soundcloud.com/emberisland/creep-1?si=4d24c0fa71b144308316ff70e2eea408&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-21",
      title: "Love You More Than Me",
      artist: "Montell Fish",
      scUrl: "https://soundcloud.com/user-209377164-671696251/montell-fish-love-you-more?si=3398e194b64f40eb8a5463697b26c6af&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      id: "track-22",
      title: "Suis-moi",
      artist: "Camille",
      scUrl: "https://soundcloud.com/kaan-erhan-918372498/iar4ionplwml?si=16a4c96f37554d9eb187bf8a909ce5bc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  //  UTILIDADES DE DETECCIÓN DE PLATAFORMA
  // ─────────────────────────────────────────────────────────────

  /** Devuelve 'yt', 'sc' o null según la URL */
  detectPlatform: function(url) {
    if (!url) return null;
    if (/youtube\.com\/watch|youtu\.be\/|youtube\.com\/shorts/i.test(url)) return 'yt';
    if (/soundcloud\.com/i.test(url)) return 'sc';
    return null;
  },

  /** Extrae el video ID de una URL de YouTube */
  extractYouTubeId: function(url) {
    let match = url.match(/[?&]v=([^&]+)/);
    if (match) return match[1];
    match = url.match(/youtu\.be\/([^?&]+)/);
    if (match) return match[1];
    match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
    if (match) return match[1];
    return null;
  },

  /** Devuelve la URL guardada en la pista (admite tanto scUrl como ytUrl) */
  getTrackUrl: function(track) {
    return track.scUrl || track.ytUrl || track.url || '';
  },

  // ─────────────────────────────────────────────────────────────
  //  INICIALIZACIÓN
  // ─────────────────────────────────────────────────────────────

  init: function() {
    this.autoplayEnabled = localStorage.getItem('music_autoplay') !== 'false';
    this._initSoundCloudAPI();
    this._initYouTubeAPI();
  },

  _initSoundCloudAPI: function() {
    if (window.SC && window.SC.Widget) {
      this._createSCPlayer();
      return;
    }
    const tag = document.createElement('script');
    tag.src = "https://w.soundcloud.com/player/api.js";
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(tag, firstScript);

    const checkInterval = setInterval(() => {
      if (window.SC && window.SC.Widget) {
        clearInterval(checkInterval);
        this._createSCPlayer();
      }
    }, 100);
  },

  _initYouTubeAPI: function() {
    if (window.YT && window.YT.Player) {
      this.isYTApiReady = true;
      return;
    }
    // La API de YouTube llama a window.onYouTubeIframeAPIReady al cargarse
    window.onYouTubeIframeAPIReady = () => {
      this.isYTApiReady = true;
      // Si la pista actual es de YouTube, inicializarla ahora
      const track = this.getCurrentTrack();
      if (track && this.detectPlatform(this.getTrackUrl(track)) === 'yt') {
        this._createYTPlayer(this.getTrackUrl(track));
      }
    };
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(tag, firstScript);
  },

  // ─────────────────────────────────────────────────────────────
  //  CREACIÓN DE REPRODUCTORES
  // ─────────────────────────────────────────────────────────────

  _createSCPlayer: function() {
    const iframe = document.getElementById('sc-player-iframe');
    if (!iframe) return;

    const currentTrack = this.getCurrentTrack();
    const url = currentTrack ? this.getTrackUrl(currentTrack) : '';
    const platform = this.detectPlatform(url);

    // Establecer la plataforma actual basado en la primera pista
    this.currentPlatform = platform || 'sc';

    if (platform === 'sc') {
      iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&show_artwork=false&show_comments=false&visual=false&sharing=false&liking=false&download=false`;
    } else {
      // La primera pista no es SC; cargar SC widget silenciosamente
      iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/explore/trending%3Aall-music')}&show_artwork=false&show_comments=false`;
    }

    this.widget = SC.Widget(iframe);

    this.widget.bind(SC.Widget.Events.READY, () => {
      this.isApiReady = true;
      if (platform === 'sc') {
        this._onSCPlayerReady();
      } else {
        // SC listo en segundo plano, no reproducir
        this.updatePlayerUI();
        this.renderPlaylistMenu();
        this.renderAdminPlaylist();
      }
    });

    this.widget.bind(SC.Widget.Events.PLAY, () => {
      if (this.currentPlatform === 'sc') {
        this.isPlaying = true;
        this.onPlayStateChange(true);
        this._fetchSCMetadata();
      }
    });

    this.widget.bind(SC.Widget.Events.PAUSE, () => {
      if (this.currentPlatform === 'sc') {
        this.isPlaying = false;
        this.onPlayStateChange(false);
      }
    });

    this.widget.bind(SC.Widget.Events.FINISH, () => {
      if (this.currentPlatform === 'sc') {
        if (this.autoplayEnabled) {
          this.next();
        } else {
          this.isPlaying = false;
          this.onPlayStateChange(false);
        }
      }
    });

    this.widget.bind(SC.Widget.Events.PLAY_PROGRESS, (data) => {
      if (this.currentPlatform === 'sc') {
        this.updateProgressFill(data.currentPosition / 1000, data.relativePosition);
      }
    });
  },

  _createYTPlayer: function(url, autoPlay) {
    if (!this.isYTApiReady || !window.YT) return;
    const videoId = this.extractYouTubeId(url);
    if (!videoId) {
      showToast('No se pudo obtener el ID del video de YouTube', 'error');
      return;
    }

    // Destruir player anterior si existe
    if (this.ytPlayer) {
      try { this.ytPlayer.destroy(); } catch(e) {}
      this.ytPlayer = null;
    }

    // Resetear el iframe de YouTube
    const ytIframe = document.getElementById('yt-player-iframe');
    if (ytIframe) ytIframe.src = '';

    const playerDiv = document.createElement('div');
    playerDiv.id = 'yt-player-div';
    playerDiv.style.display = 'none';
    document.body.appendChild(playerDiv);

    this.ytPlayer = new YT.Player('yt-player-div', {
      height: '0',
      width: '0',
      videoId: videoId,
      playerVars: {
        autoplay: autoPlay ? 1 : 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        origin: window.location.origin
      },
      events: {
        onReady: (event) => {
          const savedVolume = parseInt(localStorage.getItem('music_volume')) || 80;
          event.target.setVolume(savedVolume);
          if (this.isMuted) event.target.mute();
          if (autoPlay) event.target.playVideo();
          this._startYTProgressTracking();
        },
        onStateChange: (event) => {
          if (this.currentPlatform !== 'yt') return;
          if (event.data === YT.PlayerState.PLAYING) {
            this.isPlaying = true;
            this.onPlayStateChange(true);
            this._fetchYTMetadata();
            this._startYTProgressTracking();
          } else if (event.data === YT.PlayerState.PAUSED) {
            this.isPlaying = false;
            this.onPlayStateChange(false);
          } else if (event.data === YT.PlayerState.ENDED) {
            this._stopYTProgressTracking();
            if (this.autoplayEnabled) {
              this.next();
            } else {
              this.isPlaying = false;
              this.onPlayStateChange(false);
            }
          }
        },
        onError: (event) => {
          console.warn('YouTube player error:', event.data);
          showToast('Error al cargar el video de YouTube. Puede estar bloqueado.', 'error');
        }
      }
    });
  },

  // ─────────────────────────────────────────────────────────────
  //  OBTENCIÓN DE METADATOS
  // ─────────────────────────────────────────────────────────────

  _onSCPlayerReady: function() {
    const savedVolume = parseInt(localStorage.getItem('music_volume')) || 80;
    this.widget.setVolume(savedVolume);
    document.getElementById('player-volume-slider').value = savedVolume;

    // Solo establecer como plataforma SC si la pista actual es SC
    const track = this.getCurrentTrack();
    const url = track ? this.getTrackUrl(track) : '';
    const platform = this.detectPlatform(url);

    if (platform === 'sc') {
      this.currentPlatform = 'sc';
    }
    // Si es YT, _createYTPlayer se encargará cuando la API de YT esté lista

    this.updatePlayerUI();
    this.renderPlaylistMenu();
    this.renderAdminPlaylist();
  },


  _fetchSCMetadata: function() {
    if (!this.isApiReady || !this.widget) return;
    this.widget.getCurrentSound((sound) => {
      if (sound) {
        const titleText = sound.title || 'Canción de SoundCloud';
        const artistText = (sound.user ? sound.user.username : '') || 'Artista';
        document.getElementById('player-track-title').textContent = titleText;
        document.getElementById('player-track-artist').textContent = artistText;

        const thumbImg = document.getElementById('player-track-thumb');
        if (sound.artwork_url) {
          thumbImg.src = sound.artwork_url.replace('-large.jpg', '-t300x300.jpg');
        } else if (sound.user && sound.user.avatar_url) {
          thumbImg.src = sound.user.avatar_url;
        } else {
          thumbImg.src = this._defaultThumb();
        }

        const currentTrack = this.getCurrentTrack();
        if (currentTrack && (currentTrack.title === 'Nueva Canción' || !currentTrack.title)) {
          currentTrack.title = titleText;
          currentTrack.artist = artistText;
          this.savePlaylistToStorage();
          this.renderPlaylistMenu();
          this.renderAdminPlaylist();
        }
      }
    });
  },

  _fetchYTMetadata: function() {
    const track = this.getCurrentTrack();
    if (!track) return;
    document.getElementById('player-track-title').textContent = track.title || 'Video de YouTube';
    document.getElementById('player-track-artist').textContent = track.artist || 'YouTube';

    // Miniatura de YouTube a partir del video ID
    const url = this.getTrackUrl(track);
    const videoId = this.extractYouTubeId(url);
    const thumbImg = document.getElementById('player-track-thumb');
    if (videoId) {
      thumbImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    } else {
      thumbImg.src = this._defaultThumb();
    }
  },

  _defaultThumb: function() {
    return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="%23aec6cf"><circle cx="12" cy="12" r="10" fill="%23f6efe6"/><path d="M12 3v9h5" stroke="%23aec6cf" stroke-width="2" stroke-linecap="round" fill="none"/></svg>';
  },

  // ─────────────────────────────────────────────────────────────
  //  PROGRESO (YOUTUBE)
  // ─────────────────────────────────────────────────────────────

  _startYTProgressTracking: function() {
    this._stopYTProgressTracking();
    this.ytProgressInterval = setInterval(() => {
      if (!this.ytPlayer || this.currentPlatform !== 'yt') return;
      try {
        const current = this.ytPlayer.getCurrentTime() || 0;
        const total = this.ytPlayer.getDuration() || 0;
        const rel = total > 0 ? current / total : 0;
        this.updateProgressFill(current, rel);
      } catch(e) {}
    }, 500);
  },

  _stopYTProgressTracking: function() {
    if (this.ytProgressInterval) {
      clearInterval(this.ytProgressInterval);
      this.ytProgressInterval = null;
    }
  },

  // ─────────────────────────────────────────────────────────────
  //  ACCIONES PÚBLICAS
  // ─────────────────────────────────────────────────────────────

  getCurrentTrack: function() {
    return this.playlist[this.currentTrackIndex];
  },

  playPause: function() {
    if (this.currentPlatform === 'yt') {
      if (!this.ytPlayer) return;
      if (this.isPlaying) {
        this.ytPlayer.pauseVideo();
      } else {
        this.ytPlayer.playVideo();
      }
    } else if (this.currentPlatform === 'sc') {
      if (!this.isApiReady || !this.widget) return;
      if (this.isPlaying) {
        this.widget.pause();
      } else {
        this.widget.play();
      }
    }
  },

  playTrack: function(index) {
    if (index < 0 || index >= this.playlist.length) return;
    this.currentTrackIndex = index;
    const track = this.getCurrentTrack();
    const url = this.getTrackUrl(track);
    const platform = this.detectPlatform(url);

    this.currentPlatform = platform;
    this.updatePlayerUI();
    this.highlightActivePlaylistItem();

    if (platform === 'yt') {
      // Pausar SC si estaba reproduciendo
      if (this.isApiReady && this.widget) {
        try { this.widget.pause(); } catch(e) {}
      }
      this._stopYTProgressTracking();

      // Limpiar player div anterior
      const oldDiv = document.getElementById('yt-player-div');
      if (oldDiv) oldDiv.remove();

      if (this.isYTApiReady) {
        this._createYTPlayer(url, true);
      } else {
        // YT API aún cargando, esperar
        const waitForYT = setInterval(() => {
          if (this.isYTApiReady) {
            clearInterval(waitForYT);
            this._createYTPlayer(url, true);
          }
        }, 200);
      }
    } else if (platform === 'sc') {
      // Detener YouTube si estaba corriendo
      this._stopYTProgressTracking();
      if (this.ytPlayer) {
        try { this.ytPlayer.stopVideo(); } catch(e) {}
      }

      if (!this.isApiReady || !this.widget) return;
      this.widget.load(url, {
        auto_play: true,
        show_artwork: false,
        show_comments: false,
        show_playcount: false,
        show_user: false,
        sharing: false,
        download: false
      });
    } else {
      showToast('Plataforma no reconocida. Usa YouTube o SoundCloud.', 'error');
    }
  },

  next: function() {
    if (this.playlist.length === 0) return;
    this.playTrack((this.currentTrackIndex + 1) % this.playlist.length);
  },

  prev: function() {
    if (this.playlist.length === 0) return;
    this.playTrack((this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length);
  },

  setVolume: function(volumeVal) {
    localStorage.setItem('music_volume', volumeVal);
    if (this.currentPlatform === 'sc' && this.widget && this.isApiReady) {
      this.widget.setVolume(volumeVal);
    } else if (this.currentPlatform === 'yt' && this.ytPlayer) {
      try { this.ytPlayer.setVolume(volumeVal); } catch(e) {}
    }

    const muteIcon = document.querySelector('#player-btn-mute i');
    if (volumeVal === 0) {
      this.isMuted = true;
      muteIcon.className = 'fa-solid fa-volume-xmark';
    } else {
      this.isMuted = false;
      muteIcon.className = volumeVal < 40 ? 'fa-solid fa-volume-low' : 'fa-solid fa-volume-high';
    }
  },

  toggleMute: function() {
    const volumeSlider = document.getElementById('player-volume-slider');
    const muteIcon = document.querySelector('#player-btn-mute i');

    if (this.isMuted) {
      this.isMuted = false;
      const savedVolume = parseInt(localStorage.getItem('music_volume')) || 80;
      volumeSlider.value = savedVolume;
      muteIcon.className = savedVolume < 40 ? 'fa-solid fa-volume-low' : 'fa-solid fa-volume-high';
      if (this.currentPlatform === 'sc' && this.widget && this.isApiReady) {
        this.widget.setVolume(savedVolume);
      } else if (this.currentPlatform === 'yt' && this.ytPlayer) {
        try { this.ytPlayer.unMute(); this.ytPlayer.setVolume(savedVolume); } catch(e) {}
      }
    } else {
      this.isMuted = true;
      volumeSlider.value = 0;
      muteIcon.className = 'fa-solid fa-volume-xmark';
      if (this.currentPlatform === 'sc' && this.widget && this.isApiReady) {
        this.widget.setVolume(0);
      } else if (this.currentPlatform === 'yt' && this.ytPlayer) {
        try { this.ytPlayer.mute(); } catch(e) {}
      }
    }
  },

  toggleAutoplay: function() {
    this.autoplayEnabled = !this.autoplayEnabled;
    localStorage.setItem('music_autoplay', this.autoplayEnabled);
    const autoplayBtn = document.getElementById('player-btn-autoplay');
    if (this.autoplayEnabled) {
      autoplayBtn.classList.add('active');
      autoplayBtn.title = 'Autoplay activado';
      showToast('Autoplay activado: Las canciones pasarán automáticamente', 'success');
    } else {
      autoplayBtn.classList.remove('active');
      autoplayBtn.title = 'Autoplay desactivado';
      showToast('Autoplay desactivado', 'success');
    }
  },

  seekToPercent: function(percent) {
    if (this.currentPlatform === 'sc') {
      if (!this.widget || !this.isApiReady) return;
      this.widget.getDuration((durationMs) => {
        if (durationMs > 0) {
          const targetMs = durationMs * percent;
          this.widget.seekTo(targetMs);
          this.updateProgressFill(targetMs / 1000, percent);
        }
      });
    } else if (this.currentPlatform === 'yt' && this.ytPlayer) {
      try {
        const total = this.ytPlayer.getDuration() || 0;
        if (total > 0) {
          const targetSec = total * percent;
          this.ytPlayer.seekTo(targetSec, true);
          this.updateProgressFill(targetSec, percent);
        }
      } catch(e) {}
    }
  },

  // ─────────────────────────────────────────────────────────────
  //  UI
  // ─────────────────────────────────────────────────────────────

  onPlayStateChange: function(playing) {
    const playBtnIcon = document.querySelector('#player-btn-play i');
    if (playing) {
      playBtnIcon.className = 'fa-solid fa-pause';
    } else {
      playBtnIcon.className = 'fa-solid fa-play';
    }
  },

  updateProgressFill: function(currentTimeSecs, relativePos) {
    const progressFill = document.getElementById('player-progress-fill');
    const progressHandle = document.getElementById('player-progress-handle');
    const timeCurrent = document.getElementById('player-time-current');
    const timeTotal = document.getElementById('player-time-total');

    const pct = relativePos * 100;
    progressFill.style.width = `${pct}%`;
    progressHandle.style.left = `${pct}%`;
    timeCurrent.textContent = this.formatTime(currentTimeSecs);

    if (this.currentPlatform === 'sc' && this.widget) {
      this.widget.getDuration((durationMs) => {
        timeTotal.textContent = this.formatTime(durationMs / 1000);
      });
    } else if (this.currentPlatform === 'yt' && this.ytPlayer) {
      try {
        timeTotal.textContent = this.formatTime(this.ytPlayer.getDuration() || 0);
      } catch(e) {}
    }
  },

  formatTime: function(secs) {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  },

  updatePlayerUI: function() {
    const track = this.getCurrentTrack();
    if (!track) return;
    document.getElementById('player-track-title').textContent = track.title;
    document.getElementById('player-track-artist').textContent = track.artist;

    // Miniatura inicial según plataforma
    const thumbImg = document.getElementById('player-track-thumb');
    const url = this.getTrackUrl(track);
    const platform = this.detectPlatform(url);
    if (platform === 'yt') {
      const videoId = this.extractYouTubeId(url);
      if (videoId) {
        thumbImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      } else {
        thumbImg.src = this._defaultThumb();
      }
    } else {
      thumbImg.src = this._defaultThumb();
    }

    this.highlightActivePlaylistItem();
  },

  renderPlaylistMenu: function() {
    const listContainer = document.getElementById('player-playlist-items');
    const songsCountBadge = document.getElementById('player-songs-count');

    songsCountBadge.textContent = this.playlist.length;
    listContainer.innerHTML = '';

    this.playlist.forEach((track, index) => {
      const url = this.getTrackUrl(track);
      const platform = this.detectPlatform(url);
      const platformIcon = platform === 'yt'
        ? '<i class="fa-brands fa-youtube" style="color:#ff4e45;font-size:0.7rem;"></i>'
        : '<i class="fa-brands fa-soundcloud" style="color:#ff5500;font-size:0.7rem;"></i>';

      const li = document.createElement('li');
      li.className = `playlist-item ${index === this.currentTrackIndex ? 'active' : ''}`;
      li.innerHTML = `
        <i class="fa-solid fa-play playlist-item-icon"></i>
        <span class="playlist-item-title">${track.title} ${platformIcon}</span>
        <span class="playlist-item-artist">${track.artist}</span>
      `;
      li.addEventListener('click', () => {
        this.playTrack(index);
        document.getElementById('player-playlist-menu').classList.remove('active');
      });
      listContainer.appendChild(li);
    });
  },

  highlightActivePlaylistItem: function() {
    const items = document.querySelectorAll('#player-playlist-items .playlist-item');
    items.forEach((item, index) => {
      item.classList.toggle('active', index === this.currentTrackIndex);
    });
  },

  // ─────────────────────────────────────────────────────────────
  //  ADMINISTRACIÓN DE CANCIONES
  // ─────────────────────────────────────────────────────────────

  renderAdminPlaylist: function() {
    const container = document.getElementById('playlist-manage-items-container');
    if (!container) return;
    container.innerHTML = '';

    if (this.playlist.length === 0) {
      container.innerHTML = '<li class="playlist-manage-item">No hay canciones en la lista.</li>';
      return;
    }

    this.playlist.forEach((track, index) => {
      const url = this.getTrackUrl(track);
      const platform = this.detectPlatform(url);
      const platformLabel = platform === 'yt'
        ? '<span style="color:#ff4e45;font-size:0.7rem;font-weight:600;"><i class="fa-brands fa-youtube"></i> YouTube</span>'
        : '<span style="color:#ff5500;font-size:0.7rem;font-weight:600;"><i class="fa-brands fa-soundcloud"></i> SoundCloud</span>';

      const li = document.createElement('li');
      li.className = 'playlist-manage-item';
      li.innerHTML = `
        <div class="playlist-manage-item-info">
          <span class="playlist-manage-item-title">${track.title} ${platformLabel}</span>
          <span class="playlist-manage-item-artist">${track.artist}</span>
        </div>
        <div class="playlist-manage-item-actions">
          <button class="btn-icon btn-small btn-danger" onclick="MusicPlayer.deleteTrack(${index})" title="Eliminar canción">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      container.appendChild(li);
    });
  },

  addTrack: function(title, artist, url) {
    const platform = this.detectPlatform(url);

    if (!platform) {
      showToast('Enlace no válido. Usa un enlace de YouTube (youtu.be, youtube.com) o SoundCloud (soundcloud.com)', 'error');
      return false;
    }

    const newTrack = {
      id: `track-${Date.now()}`,
      title: title || 'Nueva Canción',
      artist: artist || 'Artista',
      scUrl: url   // Guardamos en scUrl por compatibilidad (funciona para ambos)
    };

    this.playlist.push(newTrack);
    this.savePlaylistToStorage();
    this.renderPlaylistMenu();
    this.renderAdminPlaylist();

    if (this.playlist.length === 1) {
      this.currentTrackIndex = 0;
      if (this.isApiReady || this.isYTApiReady) {
        this.playTrack(0);
      }
    }

    const platformName = platform === 'yt' ? 'YouTube' : 'SoundCloud';
    showToast(`Canción de ${platformName} añadida correctamente`, 'success');
    return true;
  },

  deleteTrack: function(index) {
    if (index < 0 || index >= this.playlist.length) return;
    const deletedTrack = this.playlist[index];
    this.playlist.splice(index, 1);

    if (this.currentTrackIndex >= this.playlist.length) {
      this.currentTrackIndex = Math.max(0, this.playlist.length - 1);
    }

    this.savePlaylistToStorage();
    this.renderPlaylistMenu();
    this.renderAdminPlaylist();

    if (index === this.currentTrackIndex && this.playlist.length > 0) {
      this.playTrack(this.currentTrackIndex);
    }

    showToast(`Eliminada: ${deletedTrack.title}`, 'success');
  },

  savePlaylistToStorage: function() {
    if (window.syncDatabaseWithStorage) {
      window.syncDatabaseWithStorage();
    }
  },

  loadPlaylistFromStorage: function() {
    // La playlist ya fue cargada desde db.playlist en app.js antes de llamar a init().
    // Esta función es un no-op para mantener compatibilidad con llamadas existentes.
  }
};
