import FormFields from '@/components/form-fields/form-fields';
import { Button } from '@/components/ui/button';
import { Pages } from '@/constants/enums';
import useFormFields from '@/Hooks/useFormFields';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';
import React from 'react';

export default async function Form() {
  const locale = await getCurrentLocale();

  const { t } = await getTrans(locale);
  const { getFormFields } = useFormFields({
    slug: Pages.RESET_PASSWORD,
    t,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <form className="space-y-6 w-full">
        {getFormFields().map((field) => (
          <div key={field.name}>
            <FormFields {...field} />
          </div>
        ))}
      </form>
      <Button className="w-full bg-secondary cursor-pointer text-white py-3 px-10 rounded-md shadow-md hover:bg-red-700 transition-all duration-300">
        Reset Password
      </Button>
    </div>
  );
}