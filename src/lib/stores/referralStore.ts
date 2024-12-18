import { writable } from 'svelte/store';
import type { Referral, ReferralStats } from '../types/referral';

// Mock data - In production, this would come from your API
const mockReferrals: Referral[] = [
  {
    id: '1',
    code: 'REF123',
    createdAt: new Date('2024-03-01'),
    referrerName: 'John Doe',
    referrerEmail: 'john@example.com',
    referralCount: 15,
    rewardPoints: 1500,
    status: 'active'
  },
  // Add more mock data as needed
];

const mockStats: ReferralStats = {
  totalReferrals: 156,
  activeReferrers: 45,
  totalPointsAwarded: 15600,
  conversionRate: 32.5
};

export const referrals = writable<Referral[]>(mockReferrals);
export const referralStats = writable<ReferralStats>(mockStats);