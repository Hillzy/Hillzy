import React from "react"

import TopHeader from "./TopHeader"
import MidHeader from "./MidHeader"
import BotHeader from "./BotHeader"

import headerCSS from "../../styles/header.module.css"

const Header = () => {
  return (
    <div className={headerCSS.container}>
      <TopHeader></TopHeader>
      <MidHeader></MidHeader>
      <BotHeader></BotHeader>
    </div>
  )
}
export default Header
