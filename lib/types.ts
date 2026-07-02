// Ecosystem Types
export interface MantleMetrics {
  tvl: number
  rwatvl: number
  mntPrice: number
  marketCap: number
  volume24h: number
}

export interface EcosystemProject {
  id: string
  name: string
  description: string
  category: string
  tvl?: number
  url?: string
}

// Research Types
export interface ResearchReport {
  id: string
  title: string
  author: string
  summary: string
  evidence: string[]
  narrativeAnalysis: string
  counterarguments: string[]
  conclusion: string
  confidenceScore: number
  sources?: string[]
  createdAt: Date
}

// Narrative Types
export interface Narrative {
  id: string
  name: string
  description: string
  momentumScore: number
  timeline: NarrativeEvent[]
  projects: string[]
  supportingData: any[]
}

export interface NarrativeEvent {
  date: Date
  title: string
  description: string
}

// API Response Types
export interface CoinGeckoPrice {
  mnt: { usd: number; usd_24h_vol: number; usd_market_cap: number }
}

export interface DeFiLlamaData {
  tvl: number
  breakdown: Record<string, number>
}
