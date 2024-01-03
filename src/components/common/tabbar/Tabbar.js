import React from 'react'
import { TabBar } from 'antd-mobile'

// css
import './Tabbar.css'

const tabs = [
  {
    key: 'recommend',
    title: '推荐',
    icon: <span className='iconfont icon-music icon-tabbar'/>
  },
  {
    key: 'find',
    title: '发现',
    icon: <span className='iconfont icon-compass icon-tabbar'/>
  },
  {
    key: 'roam',
    title: '漫游',
    icon: <span className='iconfont icon-radio icon-tabbar'/>
  },
  {
    key: 'space',
    title: '动态',
    icon: <span className='iconfont icon-Chat icon-tabbar'/>
  },
  {
    key: 'center',
    title: '我的',
    icon: <span className='iconfont icon-user icon-tabbar'/>
  },
]


export default function Tabbar() {
  return (
    <div className='home-tabbar'>
      <TabBar>
        {tabs.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </TabBar>
    </div>
  )
}
