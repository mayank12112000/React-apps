import React from 'react'
import "./component-styling/featuredCategory.css"

export default function FeaturedCategory({category}) {
  return (
    <div className='featured-category'>
        <main className='text'>
            <b>{category.name}</b>
            <p>{category.description}</p>
        </main>
    </div>
  )
}
