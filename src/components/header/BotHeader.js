import React from "react"

import headerCSS from "../../styles/header.module.css"

const BotHeader = props => {
  return (
    <div className={headerCSS.botHeader}>
      <div className={headerCSS.botContent}>
        <a href="#home">MID YEAR SALE: UP TO 70% OFF</a>
      </div>
    </div>
  )
}
export default BotHeader
