export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const isSmallerScreen = () => window.innerWidth < 1440

export const debounce = (func, wait) => {
  let timerId = null

  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

export const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const keywords = ['android', 'iphone', 'ipod', 'ipad', 'windows phone', 'mqqbrowser']
  for (let i = 0; i < keywords.length; i++) {
    if (userAgent.indexOf(keywords[i]) > -1) {
      return true
    }
  }
  return false
}
