<script lang="ts">
  import type { ReferralStats } from '../../types/referral';
  export let stats: ReferralStats;
</script>

<div class="grid grid-cols-4 gap-4 mb-6">
  <div class="stat-card">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-gray-400 text-sm mb-1">Active Pass Holders</h3>
        <p class="text-2xl font-bold">{stats.activeReferrers}</p>
      </div>
      <span class="material-icons text-gray-600">person</span>
    </div>
  </div>
  
  <div class="stat-card">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-gray-400 text-sm mb-1">Pass Revenue</h3>
        <p class="text-2xl font-bold">${stats.totalRewardsGiven}</p>
      </div>
      <span class="material-icons text-gray-600">payments</span>
    </div>
  </div>
  
  <div class="stat-card">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-gray-400 text-sm mb-1">Active Offers</h3>
        <p class="text-2xl font-bold">{stats.totalReferrals}</p>
      </div>
      <span class="material-icons text-gray-600">local_offer</span>
    </div>
  </div>
  
  <div class="stat-card">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-gray-400 text-sm mb-1">Active Passes</h3>
        <p class="text-2xl font-bold">{stats.conversionRate}</p>
      </div>
      <span class="material-icons text-gray-600">credit_card</span>
    </div>
  </div>
</div>