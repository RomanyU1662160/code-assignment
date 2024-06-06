'use client';

import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

function MainNav() {
  const { getCartLength } = useCart();
  return (
    <nav className={styles.mainNav}>
      <Image
        className={styles.logo}
        src='/octopus-logo.svg'
        alt='Octopus logo'
        width={150}
        height={100}
      />
      <div>
        {getCartLength() > 0 && (
          <span title='Basket items' className={styles.badge}>
            {getCartLength()}
          </span>
        )}

        <Image
          className={styles.basket}
          src='/basket.svg'
          alt='basket icon'
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
}

export default MainNav;
