import type { Referral } from '../types/referral';

export function sortReferrals(referrals: Referral[], sortBy: keyof Referral, order: 'asc' | 'desc' = 'desc'): Referral[] {
  return [...referrals].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    
    if (order === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    }
    return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
  });
}

export function filterReferrals(referrals: Referral[], filters: Partial<Record<keyof Referral, any>>): Referral[] {
  return referrals.filter(referral => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      const referralValue = referral[key as keyof Referral];
      return typeof value === 'string' 
        ? referralValue.toString().toLowerCase().includes(value.toLowerCase())
        : referralValue === value;
    });
  });
}