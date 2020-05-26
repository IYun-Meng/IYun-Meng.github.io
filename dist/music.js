const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    audio: [{
        name: '离人殇',
        artist: '赵方婧',
        url: '/music_song/赵方婧 - 离人殇.flac',
        cover: '/music_song/赵方婧 - 离人殇.jpg'
    },
    {
        name: '山鬼',
        artist: '锦零',
        url: '/music_song/锦零 - 山鬼.mp3',
        cover: '/music_song/锦零 - 山鬼.jpg'
    },
    {
        name: '霜降',
        artist: '赵方婧',
        url: '/music_song/赵方婧 - 霜降.flac',
        cover: '/music_song/赵方婧 - 霜降.jpg'
    },
    {
        name: '伽蓝经',
        artist: '子弥',
        url: '/music_song/子弥 - 伽蓝经.mp3',
        cover: '/music_song/子弥 - 伽蓝经.jpg'
    },
    {
        name: '摘星记',
        artist: '陆深',
        url: '/music_song/陆深 - 摘星记.mp3',
        cover: '/music_song/陆深 - 摘星记.jpg'
    }]
});