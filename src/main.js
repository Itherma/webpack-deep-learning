/*
 * @Description: 演示代码
 * @Author: xujian
 * @Date: 2020-10-26 16:11:00
 */
const { show } = require('./utils.js')

show(document.querySelector('#app'),'hello webpack!')

import'./style.scss'

const img = document.createElement('img')
img.width = 200
import image from './jihui.jpg'
img.src = image

document.body.append(img)