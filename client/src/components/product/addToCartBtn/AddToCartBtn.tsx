import React from 'react';
import styles from '../style.module.css';

type AddToCartBtnProps = {
  handleAddToCart: () => void;
};

function AddToCartBtn({ handleAddToCart }: AddToCartBtnProps) {
  return (
    <div className={styles.row}>
      <button
        className={styles.cartBtn}
        onClick={handleAddToCart}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddToCart();
          }
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartBtn;
