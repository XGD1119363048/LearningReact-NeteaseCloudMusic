import React from 'react'
// import {} from ''

import Navbar from '../../components/common/navbar/Navbar'
import '../../assets/icons/iconfont.css'
import Tabbar from '../../components/common/tabbar/Tabbar'
import Playing from '../../components/common/playing/Playing'

export default function Home() {
  return (
    <div>
      <Navbar right={<div style={{
        width: '3rem',
        display: 'flex',
        justifyContent: 'space-around'
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
      
      <Playing />
      <Tabbar />
    </div>
  )
}
