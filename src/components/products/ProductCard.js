import React from "react"

import prodCSS from "../../styles/productCard.module.css"

const ProductCard = props => {
  return (
    <div className={prodCSS.container}>
      <div className={prodCSS.imageContainer}></div>
      <div className={prodCSS.textContainer}>
        <span className={prodCSS.brandText}>{props.productBrand}</span>
        <br></br>
        <span className={prodCSS.nameText}>{props.productName}</span>
        <br></br>
        <span className={prodCSS.priceText}>{props.productPrice}</span>
      </div>
    </div>
  )
}

export default ProductCard
