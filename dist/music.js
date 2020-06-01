const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    audio: [
        // {
        //     name: '',
        //     artist: '',
        //     url: '/music_song/',
        //     cover: '/music_song/'
        // },
        {
            name: '不还',
            artist: 'Winky诗',
            url: '/music_song/Winky诗 - 不还.flac',
            cover: '/music_song/Winky诗 - 不还.png'
        },
        {
            name: '清明梦',
            artist: '李佳思',
            url: '/music_song/李佳思 - 清明梦.flac',
            cover: '/music_song/李佳思 - 清明梦.png'
        },
        {
            name: '月满清爵',
            artist: '李蚊香',
            url: '/music_song/李蚊香 - 月满清爵.flac',
            cover: '/music_song/李蚊香 - 月满清爵.png'
        },
        {
            name: '清风未老',
            artist: 'Winky诗',
            url: '/music_song/Winky诗 - 清风未老.flac',
            cover: '/music_song/Winky诗 - 清风未老.png'
        },
        {
            name: '是风动',
            artist: '银临,河图',
            url: '/music_song/银临,河图 - 是风动.flac',
            cover: '/music_song/银临,河图 - 是风动.png'
        },
    {
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