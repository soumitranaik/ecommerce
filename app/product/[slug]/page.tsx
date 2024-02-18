import AddToBag from '@/app/components/AddToBag';
import ImageGallery from '@/app/components/ImageGallery';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import product from '@/sanity/schemas/product';
import { Star, Truck } from 'lucide-react';
import React from 'react';

const getData = async(slug : string) => {
    const query = `*[_type=="product" && slug.current == '${slug}'][0]{
        _id,
          name,
          price,
          Description,
          images,
          "slug": slug.current,
          "categoryName": category -> name,
          price_id
      }`;

      const data = await  client.fetch(query);

      return data;
      
}

export const ProductPage = async({params} : {params: {slug: string}}) => {

    const Productdata : fullProduct = await getData(params.slug);
    console.log ("data",Productdata);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={Productdata.images} id={Productdata._id} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {Productdata.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {Productdata.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.5</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="flex-small text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex gap-2 items-end">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ₹{Productdata.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ₹{Productdata.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Inclusive of Shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">2 - 4 Days Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                name={Productdata.name}
                currency="INR"
                description={Productdata.Description}
                price={Productdata.price}
                image={Productdata.images[0]}
                key={Productdata._id}
                price_id={Productdata.price_id}
              />
              <Button variant="secondary">Checkout</Button>
            </div>

            <p className="mt-12 text-gray-500 tracking-wide text-base">
              {Productdata.Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
