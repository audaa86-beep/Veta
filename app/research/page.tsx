'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function Research() {
  return (
    <div className="min-h-screen pt-20 px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Research Library</h1>
          <p className="text-gray-400">Structured research on Mantle ecosystem trends and opportunities</p>
        </div>

        {/* Research Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-lg hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-6 h-6 text-mantle-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Research Paper {i}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">Loading research content...</p>
              <div className="flex items-center space-x-2 text-mantle-400 text-sm font-mono">
                <span>View</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
