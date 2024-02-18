import { Button } from '@/components/ui/button'
import { CheckCheck, Link } from 'lucide-react'
import React from 'react'

export const stripeSuccess = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you purchase
          </p>
          <p>See you soon!</p>

          <Button asChild className="mt-5">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

 export default stripeSuccess