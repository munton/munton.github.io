const ap = new APlayer({
    container: document.getElementById('aplayer'),
    volume: 0.3,
    autoplay: false,
    loop: 'all',
    listFolded: true,
    listMaxHeight: 60,
    mutex: true,
    audio: [
        {
        name: '等到烟火清凉',
        artist: '许嵩',
        url: 'https://www.ytmp3.cn/down/30350.mp3',
        cover: '/images/烟火.jpg'
        },
        {
        name: '千秋',
        artist: '古剑3-天予风流',
        url: 'https://xp.hifini.com:233/music/%E5%8F%A4%E5%89%91%E5%A5%87%E8%B0%AD3_%E5%8D%83%E7%A7%8B.m4a',
        cover: '/images/天予风流.jpg'
        },
        {
        name: '绝代风华',
        artist: '天下3-许嵩',
        url: '/juedaifenghua.mp3',
        cover: '/images/xusong.png'
        }
    ]
});