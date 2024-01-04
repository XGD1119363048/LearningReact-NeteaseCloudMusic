import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../../components/common/navbar/Navbar'
import '../../assets/icons/iconfont.css'
import Tabbar from '../../components/common/tabbar/Tabbar'
import Playing from '../../components/common/playing/Playing'

// css
import style from './Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar right={<div style={{
        width: '3rem',
        display: 'flex',
        justifyContent: 'space-around',
        position: 'sticky',
        top: 0
      }}>
        <span className='iconfont icon-skin' />
        <span className='iconfont icon-microphone' />
      </div>}>
        <div style={{
          height: '1.3rem',
          backgroundColor: '#EAEAEA',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          padding: '0.1rem 0.5rem'
        }}>
          <span className='iconfont icon-search' style={{width: '1rem'}}></span>
          <span style={{flex: 1, textAlign: 'left'}}>aaa</span>
          <span className='iconfont icon-scan' style={{width: '1rem'}}></span>
        </div>
      </Navbar>
      
      <div className={style['home-content']}>
        <Outlet />
      </div>

      <Playing />
      <Tabbar />
    </div>
  )
}
