import { NextRequest, NextResponse } from "next/server";
import { i18n, LanguageType } from "./i18n.config";

function getLocale(request: NextRequest): string {
  // 1. تحقق من اللغة في المسار (أولوية أعلى)
  const pathname = request.nextUrl.pathname;
  const pathLocale = i18n.locales.find(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathLocale) {
    return pathLocale;
  }

  // 2. تحقق من اللغة المحفوظة في cookies
  const cookieLocale = request.cookies.get("language")?.value as LanguageType | undefined;
  if (cookieLocale && i18n.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 3. استخدم Accept-Language من رأس الطلب
  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].split("-")[0]);
  const locale =
    languages.find((lang) => i18n.locales.includes(lang as LanguageType)) ||
    i18n.defaultLocale;

  return locale;
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // تحقق مما إذا كان المسار يحتوي على لغة بالفعل (مثل /en/ أو /ar/)
  const pathnameHasLocale = i18n.locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // إذا كان المسار يحتوي على لغة، لا حاجة لإعادة توجيه
  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // إذا لم يكن هناك لغة في المسار، قم بإعادة التوجيه إلى اللغة المناسبة
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname || "/"}`, request.url)
  );
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};