"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';



const CheckOutNow = ({ name, description, price, currency, image, price_id} : ProductCart) => {
const { checkoutSingleItem } = useShoppingCart();

const buyNow = (priceID : string) => {
    checkoutSingleItem(priceID)
}
const product = {
  name: name,
  description: description,
  price: price,
  currency: "INR",
  image: urlFor(image).url(),
  price_id: price_id,
};
  return (
    <Button onClick={() => buyNow(product.price_id) }>Add to Bag</Button>
  )
}

export default CheckOutNow