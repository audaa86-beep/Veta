'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-mantle-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-mantle-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Logo/Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-white/5 border border-mantle-500/30 rounded-full">
              <Sparkles className="w-4 h-4 text-mantle-400" />
              <span className="text-xs font-mono text-mantle-400">Mantle Ecosystem Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">Research </span>
              <span className="text-mantle-400">Veta</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Premium AI-powered research platform. Understand what's happening in Mantle, why it matters, and where opportunity lives.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/dashboard">
              <button className="button-primary inline-flex items-center space-x-2 group">
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/research">
              <button className="button-secondary inline-flex items-center space-x-2">
                <span>Research Library</span>
              </button>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-16">
            {[
              { label: 'Real-time Data', desc: 'Live ecosystem metrics' },
              { label: 'AI Research', desc: 'Evidence-based insights' },
              { label: 'Narrative Tracking', desc: 'Capital flow analysis' },
            ].map((feature, i) => (
              <div key={i} className="glass p-6 rounded-lg">
                <div className="text-mantle-400 font-mono text-sm font-semibold">{feature.label}</div>
                <div className="text-gray-400 text-sm mt-1">{feature.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
