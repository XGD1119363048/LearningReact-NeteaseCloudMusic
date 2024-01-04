import React, { useRef, useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'

// css
import './Playinglist.css'

const tabItems = [
  { key: 'historyPlay', title: '历史播放' },
  { key: 'nowPlay', title: '当前播放' }
]

export default function PlayingList() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={key => {
          const index = tabItems.findIndex(item => item.key === key)
          setActiveIndex(index)
          swiperRef.current?.swipeTo(index)
        }}
      >
        {tabItems.map(item => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction='horizontal'
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={index => {
          setActiveIndex(index)
        }}
      >
        <Swiper.Item>
          <div className='playlist-content'>历史播放</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className='playlist-content'>当前播放</div>
        </Swiper.Item>
      </Swiper>
    </>
  )
}
