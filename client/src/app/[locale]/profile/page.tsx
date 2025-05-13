

import Link from "next/link";
import Sidebar from "@/components/account/Sidebar";
import ProfileForm from "@/components/account/ProfileForm";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";


export default async function ProfilePage() {
  const locale = await getCurrentLocale();
  const { t } = await getTrans(locale);
  return (
    <div className="min-h-screen py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb and Welcome */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-500">
            <Link href={Routes.ROOT} className="hover:underline">{t.navigation.home}</Link> /{" "}
            <span className="text-black">{t.navigation.profile}</span>
          </div>
          <p className="text-sm text-gray-500"></p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          <Sidebar t={t} locale={locale} />
          <ProfileForm t={t} />
        </div>
      </div>
    </div>
  );
}
