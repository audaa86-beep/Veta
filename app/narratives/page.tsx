'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Narratives() {
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
          <h1 className="text-4xl font-bold tracking-tight">Narrative Explorer</h1>
          <p className="text-gray-400">Track capital flows and ecosystem narratives in real-time</p>
        </div>

        {/* Narratives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['RWA Adoption', 'Tokenized Equities', 'AI Agents', 'Prediction Markets'].map((narrative, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-lg cursor-pointer hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{narrative}</h3>
                <Zap className="w-5 h-5 text-mantle-400" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-sm font-mono">Momentum Score</div>
                  <div className="text-mantle-400 text-2xl font-bold mt-1">--</div>
                </div>
                <div className="text-gray-400 text-sm">Loading narrative data...</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
