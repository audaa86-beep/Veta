'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/research', label: 'Research' },
  { href: '/narratives', label: 'Narratives' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mantle-400 to-mantle-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-mantle-500/50 transition-all">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Veta</span>
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link key={item.href} href={item.href}>
                <motion.button
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-mantle-500/20 text-mantle-300 border border-mantle-500/30'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu (placeholder) */}
        <div className="md:hidden">
          <button className="button-secondary px-3 py-2 text-sm">Menu</button>
        </div>
      </div>
    </nav>
  )
}
