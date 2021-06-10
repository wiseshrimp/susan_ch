import Startup from '../assets/sounds/startup.wav'
import Notification from '../assets/sounds/notification.ogg'
import StartupDistorted from '../assets/sounds/startup_distorted.mp3'

const SOUNDS = [
  {
    name: 'startup',
    sound: Startup,
    type: 'wav'
  },
  {
    name: 'notification',
    sound: Notification,
    type: 'ogg'
  },
  {
    name: 'startupDistorted',
    sound: StartupDistorted,
    type: 'mp3'
  }
]

const VIDEOS = {
    openingVideo: 'openingVideo',
    photosOpeningVideo: 'photosOpeningVideo',
    emptyRoomVideo: 'emptyRoomVideo',
    endEmptyRoomVideo: 'endEmptyRoomVideo',
    endPrivateVideo: 'endPrivateVideo',
    privateFolderVideo: 'privateFolderVideo',
    treeVideo: 'treeVideo',
    battery: 'battery',
    wifi: 'wifi',
    finder: 'finder',
    trash: 'trash',
    clockBeginning: 'clockBeginning',
    clockEnd: 'clockEnd',
    apple: 'apple',
    safariOpening: 'safariOpening',
    safariWork: 'safariWork',
    safariWorkEnd: 'safariWorkEnd',
    safariBing: 'safariBing',
    updateNotification0: 'updateNotification0',
    updateNotification1: 'updateNotification1',
    updateNotification2: 'updateNotification2',
    updateNotification3: 'updateNotification3',
    preUpdate: 'preUpdate',
    endingSequence: 'endingSequence',
    newSusan: 'newSusan',
    zoom: 'zoom'
  }

  const UPDATE_VIDEOS = [
    VIDEOS.updateNotification0,
    VIDEOS.updateNotification1,
    VIDEOS.updateNotification2,
    VIDEOS.updateNotification3,
    VIDEOS.preUpdate,
    VIDEOS.endingSequence,
    VIDEOS.newSusan
  ]
  
  const POPUPS = {
    PHOTOS: 'Photos',
    SAFARI: 'Safari',
    QUERETARO: 'Queretaro',
    PRIVATE: 'Private',
    TREE: 'Tree',
    FULLSCREEN: 'Fullscreen',
    CLOCK: 'Clock',
    CREDITS: 'Credits'
  }

  const VIDEO_LINKS_CH = {
    openingVideo: 'videos/OpeningCut_Ch.webm',
    finder: 'videos/Finder_Ch.webm',
    trash: 'videos/Recycle_Ch.webm',
    wifi: 'videos/WiFi_Ch.webm',
    battery: 'videos/Battery_Ch.webm',
    photosOpeningVideo: 'videos/Photos_Opening_Ch.webm',
    emptyRoomVideo: 'videos/Photos_EmptyRoom_Ch.webm',
    endEmptyRoomVideo: 'videos/Photos_EmptyRoom_EnoughOfThat_Ch.webm',
    treeVideo: 'videos/Photos_Trees_Ch.webm',
    privateFolderVideo: 'videos/Photos_Selfies_Ch.webm',
    endPrivateVideo: 'videos/Photos_Selfies_End_Ch.webm',
    clockBeginning: 'videos/Clock_Beginning_Ch.webm',
    clockEnd: 'videos/Clock_End_Ch.webm',
    safariWork: 'videos/Safari_Work_Ch.webm',
    safariWorkEnd: 'videos/Safari_Work_End_Ch.webm',
    safariBing: 'videos/Safari_Bing_Ch.webm',
    preUpdate: 'videos/PreUpdate_Ch.webm',
    endingSequence: 'videos/Ending_Ch.webm',
    zoom: 'videos/Zoom_Ch.webm'





  }
  
  const VIDEO_LINKS = {
    openingVideo: 'videos/OpeningCut.webm',
    finder: 'videos/Finder.webm',
    trash: 'videos/Recycle.webm',
    wifi: 'videos/WiFi.webm',
    battery: 'videos/Battery.webm',
    photosOpeningVideo: 'videos/Photos_Opening.webm',
    emptyRoomVideo: 'videos/Photos_EmptyRoom.webm',
    endEmptyRoomVideo: 'videos/Photos_EmptyRoom_EnoughOfThat.webm',
    treeVideo: 'videos/Photos_Trees.webm',
    privateFolderVideo: 'videos/Photos_Selfies.webm',
    endPrivateVideo: 'videos/Photos_Selfies_End.webm',
    clockBeginning: 'videos/Clock_Beginning.webm',
    clockEnd: 'videos/Clock_End.webm',
    safariWork: 'videos/Safari_Work.webm',
    safariWorkEnd: 'videos/Safari_Work_End.webm',
    safariBing: 'videos/Safari_Bing.webm',
    preUpdate: 'videos/PreUpdate.webm',
    endingSequence: 'videos/Ending.webm',
    zoom: 'videos/Zoom.webm'







    // apple: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/Apple.webm",
    // safariOpening: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/Safari_Opening.webm",
    // updateNotification0: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/UpdateNotification0.webm',
    // updateNotification1: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/UpdateNotification1.webm',
    // updateNotification2: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/UpdateNotification2.webm',
    // updateNotification3: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/UpdateNotification3.webm',
    // newSusan: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/New_Susan_1.webm',
  }

  const CHINESE_HEADERS = {
    [POPUPS.PHOTOS]: '相片',
    [POPUPS.QUERETARO]: 'Queretaro',
    [POPUPS.PRIVATE]: '私人的',
    [POPUPS.SAFARI]: 'Safari',
    [POPUPS.TREE]: '树',
    [POPUPS.FULLSCREEN]: '全屏',
    [POPUPS.CREDITS]: '致谢',
    [POPUPS.CLOCK]: '时钟'
  }
  

  const CAPTION_VIDEO_LINKS = {
    openingVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Opening.mp4",
    privateFolderVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_PrivateFolder.mp4",
    photosOpeningVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_PhotosOpening.mp4",
    emptyRoomVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_EmptyRoom.mp4",
    endEmptyRoomVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_EmptyRoomEnd.mp4",
    endPrivateVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_PrivateFolderEnd.mp4",
    apple: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Apple.mp4",
    clockBeginning: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_ClockStart.mp4",
    clockEnd: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_ClockEnd.mp4",    
    battery: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Battery.mp4",
    wifi: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Wifi.mp4",
    finder: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Finder.mp4",
    trash: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Trash.mp4", 
    treeVideo: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Trees.mp4",
    safariOpening: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_SafariOpening.mp4",
    safariWork: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Work.mp4",
    safariWorkEnd: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_WorkEnd.mp4",
    safariBing: "https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Bing.mp4",
    updateNotification0: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Update0.mp4',
    updateNotification1: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Update1.mp4',
    updateNotification2: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Update2.mp4',
    updateNotification3: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Update3.mp4',
    preUpdate: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_PreUpdate.mp4',
    endingSequence: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_EndingFull.mp4',
    newSusan: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_NewSusan.mp4',
    zoom: 'https://sues-website.s3.us-east-2.amazonaws.com/internetgirl/captions/Captions_Zoom.mp4'
  }

const POPUP_VIDEOS = {
  [POPUPS.PHOTOS]: [VIDEOS.photosOpeningVideo, VIDEOS.endPrivateVideo, VIDEOS.endEmptyRoomVideo],
  [POPUPS.SAFARI]: [VIDEOS.safariWork, VIDEOS.safariWorkEnd, VIDEOS.safariBing, VIDEOS.safariOpening],
  [POPUPS.QUERETARO]: [VIDEOS.emptyRoomVideo],
  [POPUPS.PRIVATE]: [VIDEOS.privateFolderVideo],
  [POPUPS.TREE]: [VIDEOS.treeVideo],
  [POPUPS.FULLSCREEN]: [],
  [POPUPS.CLOCK]: [VIDEOS.clockBeginning, VIDEOS.clockEnd]
}

const CREDITS = `
  <div>coded, written, and animated by <a href="https://www.sueroh.com" target="_blank">Sue Roh</a></div>
  <div>voiced by Abigail Thomas</div>
  <div>a big thanks to Matt Romein for your help + support!</div>
  <div>inspired by Susan Bennet and Susan Caplin, the voices behind Siri and Alexa respectively</div>
`

const CREDITS_CHINESE = `
  <div>编程、撰写和动画 ：<a href="https://www.sueroh.com" target="_blank">Sue Roh</a></div>
  <div>配音 ：Nikki Huang</div>
  <div>非常感谢Matt Romein的帮助和支持</div>
  <div>灵感来源于Susan Bennet和Susan Caplin，她们是Siri和Alexa背后的配音</div>
  <div>在 <a href="https://susan.works">www.susan.works</a> 查看体验</div>
`

  export {CHINESE_HEADERS, CREDITS, CREDITS_CHINESE, VIDEOS, POPUPS, VIDEO_LINKS, VIDEO_LINKS_CH, UPDATE_VIDEOS, POPUP_VIDEOS, SOUNDS, CAPTION_VIDEO_LINKS}