
chrome.runtime.onMessage.addListener(req => {
  if (req !== 'PIP') return

  if (document.pictureInPictureElement) {
    return document.exitPictureInPicture()
  }

  Array.from(document.querySelectorAll('video')).some(video => {
    if (video.paused) return false
    video.requestPictureInPicture()
    return true
  })
})
