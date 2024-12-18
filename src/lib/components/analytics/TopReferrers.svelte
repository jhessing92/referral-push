<script lang="ts">
  import type { TopReferrer } from '../../types/analytics';
  
  export let data: TopReferrer[];
</script>

<div class="stat-card">
  <h3 class="text-lg font-semibold mb-4">Top Performing Referrers</h3>
  
  <div class="space-y-6">
    {#each data as referrer}
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium">{referrer.name}</p>
          <div class="flex space-x-4 text-sm text-gray-400">
            <span>{referrer.referralCount} referrals</span>
            <span>{(referrer.conversionRate * 100).toFixed(1)}% conversion</span>
          </div>
        </div>
        <div class="text-right">
          <p class="font-medium">{referrer.totalPoints.toLocaleString()} pts</p>
          <p class="text-sm text-gray-400">earned</p>
        </div>
      </div>
    {/each}
  </div>
</div>