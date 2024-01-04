import React from 'react'
import { TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

// css
import './Tabbar.css'


const tabs = [
  {
    key: '/home/recomment',
    title: '推荐',
    icon: <span className='iconfont icon-music icon-tabbar'/>
  },
  {
    key: '/home/find',
    title: '发现',
    icon: <span className='iconfont icon-compass icon-tabbar'/>
  },
  {
    key: '/home/roam',
    title: '漫游',
    icon: <span className='iconfont icon-radio icon-tabbar'/>
  },
  {
    key: '/home/space',
    title: '动态',
    icon: <span className='iconfont icon-Chat icon-tabbar'/>
  },
  {
    key: '/home/center',
    title: '我的',
    icon: <span className='iconfont icon-user icon-tabbar'/>
  },
]


export default function Tabbar() {
  const navigate = useNavigate()
  return (
    <div className='home-tabbar'>
      <TabBar onChange={(key) => navigate(key)}>
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
