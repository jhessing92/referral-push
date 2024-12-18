import { writable } from 'svelte/store';
import type { ReferralAnalytics } from '../types/analytics';

// Mock data for development
const mockAnalytics: ReferralAnalytics = {
  dailyStats: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
    referrals: Math.floor(Math.random() * 50),
    conversions: Math.floor(Math.random() * 30),
    points: Math.floor(Math.random() * 1000) * 10
  })),
  conversionFunnel: [
    { stage: 'Link Clicks', count: 1000, percentage: 100 },
    { stage: 'Sign Ups', count: 450, percentage: 45 },
    { stage: 'Completed Purchase', count: 200, percentage: 20 },
    { stage: 'Repeat Purchase', count: 80, percentage: 8 }
  ],
  topReferrers: Array.from({ length: 5 }, (_, i) => ({
    id: `ref-${i}`,
    name: `Top Referrer ${i + 1}`,
    referralCount: Math.floor(Math.random() * 100),
    conversionRate: Math.random() * 0.5,
    totalPoints: Math.floor(Math.random() * 500) * 10
  })),
  rewardDistribution: [
    { range: '0-500 pts', count: 150, percentage: 45 },
    { range: '501-1000 pts', count: 100, percentage: 30 },
    { range: '1001-2000 pts', count: 50, percentage: 15 },
    { range: '2000+ pts', count: 33, percentage: 10 }
  ]
};

export const analyticsStore = writable<ReferralAnalytics>(mockAnalytics);