'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Terraform マスタークラス
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">
              講座概要
            </Link>
            <Link href="#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">
              カリキュラム
            </Link>
            <Link href="#instructor" className="text-gray-700 hover:text-blue-600 transition-colors">
              講師紹介
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              料金
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              お申込み
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#overview" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                講座概要
              </Link>
              <Link href="#curriculum" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                カリキュラム
              </Link>
              <Link href="#instructor" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                講師紹介
              </Link>
              <Link href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                料金
              </Link>
              <Link href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                FAQ
              </Link>
              <Link href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center mx-3">
                お申込み
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}