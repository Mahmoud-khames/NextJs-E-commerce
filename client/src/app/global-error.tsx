'use client' // Error boundaries must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,

}: {
  error: Error & { digest?: string } 
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
    {/* Breadcrumbs */}
    <div className="w-full max-w-6xl mb-8">
      <nav className="text-[14px] text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span> 
        <span>404 Error</span>    
      </nav>
    </div>

    {/* 404 Content */}
    <div className="text-center">
      <h1 className="text-[72px] md:text-[120px] font-bold text-[#000000] leading-tight">
        404 Not Found
      </h1>
      <p className="text-[16px] md:text-[18px] text-gray-600 mt-4">
        Your visited page not found. You may go home page.
      </p>
      <Link href="/">
        <button className="mt-8 bg-[#DB4444] text-white px-8 py-3 rounded text-[16px] font-medium hover:bg-[#c13535] transition-colors">
          Back to home page
        </button>
      </Link>
    </div>
  </main>
  )
}