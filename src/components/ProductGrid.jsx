import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductGrid = ({ products }) => {
  return (
    <div className="
    grid 
    grid-cols-2 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-3 
    sm:gap-4 
    md:gap-5 
    px-3 
    sm:px-4 
    md:px-6
">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
