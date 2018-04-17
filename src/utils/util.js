import wepy from 'wepy'

/**
 * 将表示星星数的字符串转化为数组 '35' => [1,1,1,0,0] '50' => [1,1,1,1,1]
 * @param stars
 * @return {Array}
 */
export const formateStars = (stars) => {
  const num = stars.substring(0, 1)
  let arr = []
  for (let i = 0; i < 5; i++) {
    if (i < num) {
      arr.push(1)
    } else {
      arr.push(0)
    }
  }
  return arr
}

/**
 * 网络请求
 * @param url
 * @param cb
 */
export const http = (url, cb) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      method: 'GET',
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        cb(res.data)
        resolve()
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

/**
 * 处理演员
 * @param casts
 * @return {string}
 */
export const formateCasts = (casts) => {
  const temArr = []
  casts.forEach((item) => {
    temArr.push(item.name)
  })
  return temArr.join('/')
}

/**
 * 处理演员信息
 * @param casts
 * @return {Array}
 */
export const formateCastsInfo = (casts) => {
  const arr = []
  casts.forEach((item) => {
    const obj = {}
    obj.avatar = item.avatars ? item.avatars.large : ''
    obj.name = item.name
    arr.push(obj)
  })
  return arr
}
