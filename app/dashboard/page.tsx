'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function Dashboard() {
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
          <h1 className="text-4xl font-bold tracking-tight">Mantle Overview Terminal</h1>
          <p className="text-gray-400">Real-time ecosystem metrics and AI insights</p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'TVL', value: '$-', subtext: 'Loading...' },
            { label: 'RWA TVL', value: '$-', subtext: 'Loading...' },
            { label: 'MNT Price', value: '$-', subtext: 'Loading...' },
            { label: 'Market Cap', value: '$-', subtext: 'Loading...' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-lg"
            >
              <div className="text-gray-500 text-sm font-mono">{item.label}</div>
              <div className="text-3xl font-bold mt-2 text-mantle-400">{item.value}</div>
              <div className="text-gray-600 text-xs mt-1">{item.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-lg h-80 flex items-center justify-center"
            >
              <div className="text-center space-y-4">
                <TrendingUp className="w-12 h-12 text-mantle-400/30 mx-auto" />
                <p className="text-gray-500 text-sm">TVL Chart - Phase 2</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-lg"
            >
              <div className="text-mantle-400 font-mono text-xs font-semibold mb-3">AI Daily Insight</div>
              <p className="text-gray-300 text-sm leading-relaxed">Fetching latest ecosystem analysis...</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
