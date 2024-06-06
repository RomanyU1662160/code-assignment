import Image from 'next/image';
import React, { ReactElement } from 'react';

type ProductImageProps = {
  imageUrl: string;
  alt?: string;
};

function ProductImage({ imageUrl, alt }: ProductImageProps): ReactElement {
  return (
    <Image
      src={imageUrl}
      width={320}
      height={320}
      alt={alt ?? 'product image'}
      priority
      quality={100}
    />
  );
}

export default ProductImage;
