import React, { useContext } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./ProductCard.css"
const ProductCard = ({book}) => {


  return (
   <div className='product-card-box'>
    <div className='product-img-card'>
      <img className='card-img' src={book.imgLink} alt="ikigai" />
      <span className='wishlist-icon'><FavoriteBorderIcon/></span>
    </div>
    <div className='info'>
      <div className='card-title'>
        <h3 className='card-title-header'>{book.title}</h3>
        <div className="rating">
          <div className='rated'>{book.rating}</div>
          <StarBorderIcon className='star'/>
        </div>
      </div>
      <p className='author'>{book.author}</p>
      <div className='price'>
        <p className='disc-price'>{book.discountedPrice}</p>
        <p className='actual-price'>{book.price}</p>
        <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
      </div>
      <button className='btn default add-cart'>
        <ShoppingCartOutlinedIcon/>Add to cart
      </button>
    </div>

   </div>
  );
};

export default ProductCard;
