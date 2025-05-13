import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function CheckoutForm({t, locale}: {t: any, locale: string}) {

  return (
    <div>
      {/* form */}
      <div className="my-10  rounded-md">
        <h4 className="text-3xl font-medium leading-1.5 mb-10">
            {t.checkout.billingDetails}
        </h4>
        <form className="flex flex-col gap-4 w-full md:w-[470px]  h-[766px] gap-8 ">
          {/* first name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm text-gray-400">
              {t.checkout.firstName}
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/*  Street Address**/}
          <div className="flex flex-col gap-2">
            <Label htmlFor="street-address" className="text-sm text-gray-400">
              {t.checkout.streetAddress}
            </Label>
            <Input
              type="text"
              id="street-address"
              name="street-address"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/* Apartment, floor, etc. (optional)    */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="apartment-floor" className="text-sm text-gray-400">
              {t.checkout.apartmentFloor}
            </Label>
            <Input
              type="text"
              id="apartment-floor"
              name="apartment-floor"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="country" className="text-sm text-gray-400">
              {t.checkout.country}
            </Label>
            <Input
              type="text"
              id="country"
              name="country"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/* City */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="city" className="text-sm text-gray-400">
              {t.checkout.city}
            </Label>
            <Input
              type="text"
              id="city"
              name="city"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/* phone number    */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone-number" className="text-sm text-gray-400">
              {t.checkout.phoneNumber}
            </Label>
            <Input
              type="text"
              id="phone-number"
              name="phone-number"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm text-gray-400">
              {t.checkout.email}
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 h-[50px] rounded-lg"
            />
          </div>
        </form>
        {/* save details */}
        <div className="flex items-center justify-start gap-4" dir={locale === "ar" ? "rtl" : "ltr"}>
          <Checkbox
            id="save-details"
            name="save-details"
            className="w-6 h-6 "
          />
          <Label htmlFor="save-details" className="text-md text-black">
            {t.checkout.saveDetails}
          </Label>
        </div>
      </div>
    </div>
  );
}
