"use client"

import { Children, ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ( {children} : {children : ReactNode} ) => {
    return (
    <USCProvider 
     mode="payment"
     cartMode="client-only"
     stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
     successUrl="https://ecommerce-nine-snowy-23.vercel.app/stripe/success"
     cancelUrl="https://ecommerce-nine-snowy-23.vercel.app/stripe/error"
     currency="INR"
     billingAddressCollection={true}
     shouldPersist={true}
     language="en-US"
    >
        {children}
    </USCProvider>
    )
}

export default CartProvider;