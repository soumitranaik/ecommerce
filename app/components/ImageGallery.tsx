"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

interface iAppProps {
  images: any
  id: string
}

const ImageGallery = ({images, id} : iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0])

  const handleBigImage = (clickedimage : any) => {
    setBigImage(clickedimage);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: any) => (
          <div className="overflow-hidden rounded-lg bg-gray-100" key={id}>
            <Image
              src={urlFor(image).url()}
              width={300}
              height={300}
              alt="product-image"
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => handleBigImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          className="h-full w-full object-center object-cover"
          width={500}
          height={500}
          alt="Main-Product"
          key={id}
        />
        <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm tracking-wider uppercase text-white'>Sale</span>
      </div>
    </div>
  );
}

export default ImageGallery