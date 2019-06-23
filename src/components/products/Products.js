import React from "react"
import ProductCard from "./ProductCard"

const Products = props => {
  const products = [
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
    { name: "product", brand: "adidas", price: "$110.00" },
  ]

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productBrand={product.brand}
          productName={product.name}
          productPrice={product.price}
        ></ProductCard>
      ))}
    </div>
  )
}

export default Products
