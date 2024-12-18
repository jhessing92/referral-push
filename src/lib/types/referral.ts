export interface Referral {
  id: string;
  code: string;
  createdAt: Date;
  referrerName: string;
  referrerEmail: string;
  referralCount: number;
  rewardPoints: number;
  status: 'active' | 'paused' | 'expired';
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrers: number;
  totalPointsAwarded: number;
  conversionRate: number;
}