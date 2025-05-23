import Image from "next/image";
import Form from "./_components/Form";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Page() {    
  const locale = await getCurrentLocale();
  const { t } = await getTrans(locale);
  return (
    <div className="flex items-center justify-between py-10 min-h-screen gap-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-2/3">
          <Image
            src="/signup.png"
            alt="Cart with phone and shopping bags"
            width={805}
            height={781}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-start justify-start w-full lg:w-1/3 gap-8">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl font-bold leading-tight">{t.auth.resetPassword}</h2>
            <p className="text-gray-500 mt-2">{t.auth.enterDetails}</p>
          </div>

          {/* Form */}
          <Form />

        </div>
      </div>
    </div>
  );
}