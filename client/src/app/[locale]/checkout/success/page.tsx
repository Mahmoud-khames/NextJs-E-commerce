

import SuccessContent from './_components/SuccessContent';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function CheckoutSuccessPage() {
  const locale = await getCurrentLocale();
  const {t} = await getTrans(locale);
  
  return (
    <div >
      <SuccessContent locale={locale} t={t.checkout}/>
    </div>
  );
}
