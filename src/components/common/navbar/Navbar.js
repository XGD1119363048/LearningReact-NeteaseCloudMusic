import React from 'react'
import { NavBar } from 'antd-mobile'
// import { UnorderedListOutline } from 'antd-mobile-icons'

import '../../../assets/icons/iconfont.css'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div>
      <NavBar back={<span className='iconfont icon-menu' />} backArrow={null} right={props.right}>
        {props.children}
      </NavBar>
    </div>
  )
}
