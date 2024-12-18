<script lang="ts">
  import type { ConversionStep } from '../../types/analytics';
  
  export let data: ConversionStep[];
</script>

<div class="stat-card h-[400px]">
  <h3 class="text-lg font-semibold mb-4">Conversion Funnel</h3>
  
  <div class="space-y-4">
    {#each data as step}
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-gray-400">{step.stage}</span>
          <span class="text-white">{step.count.toLocaleString()}</span>
        </div>
        <div class="h-2 bg-[#242424] rounded-full overflow-hidden">
          <div
            class="h-full bg-[#FF4405] rounded-full"
            style="width: {step.percentage}%"
          />
        </div>
        <div class="text-right text-xs text-gray-400">
          {step.percentage}% Conversion Rate
        </div>
      </div>
    {/each}
  </div>
</div>