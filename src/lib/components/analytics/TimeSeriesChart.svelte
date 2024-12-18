<script lang="ts">
  import type { DailyStats } from '../../types/analytics';
  
  export let data: DailyStats[];
  export let showAll = false;
  
  $: chartData = showAll ? data : data.slice(0, 7);
  $: maxValue = Math.max(...chartData.map(d => Math.max(d.referrals, d.conversions)));
  
  function getHeight(value: number): string {
    return `${(value / maxValue) * 100}%`;
  }
</script>

<div class="stat-card h-[400px]">
  <h3 class="text-lg font-semibold mb-4">Performance Trends</h3>
  
  <div class="h-[300px] flex items-end space-x-4">
    {#each chartData as day}
      <div class="flex-1 flex flex-col items-center space-y-2">
        <div class="w-full relative h-[250px]">
          <div
            class="absolute bottom-0 w-full bg-[#FF4405] opacity-20 rounded-t"
            style="height: {getHeight(day.referrals)}"
          />
          <div
            class="absolute bottom-0 w-1/2 bg-[#FF4405] rounded-t mx-auto left-0 right-0"
            style="height: {getHeight(day.conversions)}"
          />
        </div>
        <span class="text-xs text-gray-400 rotate-45 origin-left">
          {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </span>
      </div>
    {/each}
  </div>
  
  <div class="flex justify-center space-x-4 mt-4">
    <div class="flex items-center space-x-2">
      <div class="w-3 h-3 bg-[#FF4405] opacity-20 rounded" />
      <span class="text-sm text-gray-400">Referrals</span>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-3 h-3 bg-[#FF4405] rounded" />
      <span class="text-sm text-gray-400">Conversions</span>
    </div>
  </div>
</div>