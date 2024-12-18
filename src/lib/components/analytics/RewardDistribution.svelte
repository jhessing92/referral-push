<script lang="ts">
  import type { RewardTier } from '../../types/analytics';
  
  export let data: RewardTier[];
</script>

<div class="stat-card">
  <h3 class="text-lg font-semibold mb-4">Reward Distribution</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-4">
      {#each data as tier}
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">{tier.range}</span>
            <span class="text-white">{tier.count} referrers</span>
          </div>
          <div class="h-2 bg-[#242424] rounded-full overflow-hidden">
            <div
              class="h-full bg-[#FF4405] rounded-full"
              style="width: {tier.percentage}%"
            />
          </div>
        </div>
      {/each}
    </div>
    
    <div class="flex items-center justify-center">
      <div class="w-48 h-48 rounded-full border-8 border-[#242424] relative">
        {#each data as tier, i}
          <div
            class="absolute inset-0"
            style="
              clip-path: conic-gradient(from {i * 90}deg, currentColor {tier.percentage}%, transparent 0);
              color: {`hsl(16, 100%, ${45 + i * 10}%)`}
            "
          />
        {/each}
      </div>
    </div>
  </div>
</div>