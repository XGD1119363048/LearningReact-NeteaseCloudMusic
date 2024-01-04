import React, { useState } from 'react'
import { Image } from 'antd-mobile'
import { Drawer } from 'antd'

// css
import './Playing.css'
import PlayingList from './playinglist/PlayingList'

export default function Playing() {
  const [isPlay, setIsPlay] = useState(false)
  const [isPlaylistShow, setIsPlaylistShow] = useState(false)
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
        <div className={`pr1 ${isPlay ? 'active' : 'paused'}`} />
        <div className={`pr2 ${isPlay ? 'active' : 'paused'}`} />
        <div className={`iconfont play-icon ${isPlay ? 'icon-pause' : 'icon-play1'}`} onClick={() => setIsPlay(!isPlay)} />
      </div>
      <div className='now-playing-item'>
        <div className="iconfont icon-playlist playlist-icon" onClick={() => setIsPlaylistShow(true)} />
      </div>
      <Drawer
        className='playing-list-drawer'
        placement='bottom'
        width={500}
        closable={false}
        onClose={() => setIsPlaylistShow(false)}
        open={isPlaylistShow}
        size='large'
      >
        <PlayingList />
      </Drawer>
    </div>
  )
}
