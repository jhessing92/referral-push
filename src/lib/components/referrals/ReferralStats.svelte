<script lang="ts">
  import type { ReferralStats } from '../../types/referral';
  
  export let stats: ReferralStats;
</script>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  <div class="stat-card">
    <h3 class="text-gray-400 text-sm mb-1">Total Referrals</h3>
    <p class="text-2xl font-bold">{stats.totalReferrals}</p>
  </div>
  
  <div class="stat-card">
    <h3 class="text-gray-400 text-sm mb-1">Active Referrers</h3>
    <p class="text-2xl font-bold">{stats.activeReferrers}</p>
  </div>
  
  <div class="stat-card">
    <h3 class="text-gray-400 text-sm mb-1">Total Points Awarded</h3>
    <p class="text-2xl font-bold">{stats.totalPointsAwarded.toLocaleString()} pts</p>
  </div>
  
  <div class="stat-card">
    <h3 class="text-gray-400 text-sm mb-1">Conversion Rate</h3>
    <p class="text-2xl font-bold">{stats.conversionRate}%</p>
  </div>
</div>