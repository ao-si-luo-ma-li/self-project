import Hls from 'hls.js';
import DPlayer from 'dplayer';

export function dplayerFn(domId, videoPath) {
  const dp = new DPlayer({
    container: document.getElementById(domId),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    video: {
      url: videoPath,
      type: 'customHls',
      customType: {
        customHls: function(video, player) {
          const hls = new Hls();
          hls.loadSource(video.src);
          hls.attachMedia(video);
        },
      },
    },
  });
  
  return dp
}