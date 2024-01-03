import React from 'react'
import { Image } from 'antd-mobile'

// css
import './Playing.css'

export default function Playing() {
  return (
    <div className='now-playing'>
      <div className='now-playing-item'>
        <Image
          src={'/404'}
          width={40}
          height={40}
          fit='cover'
          style={{ borderRadius: 20 }}
        />
      </div>
      <div className='now-playing-item now-playing-title'>
        aaa
      </div>
      <div className='now-playing-item now-playing-icon'>
        <div className="bg1" />
        <div className="bg2" />
        <div className="pr1" />
        <div className="pr2" />
        <div className="iconfont icon-compass play-icon"></div>
      </div>
      <div className='now-playing-item'>
        icon2
      </div>
    </div>
  )
}
