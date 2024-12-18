<script lang="ts">
  import { analyticsStore } from '../../stores/analyticsStore';
  import TimeSeriesChart from './TimeSeriesChart.svelte';
  import ConversionFunnel from './ConversionFunnel.svelte';
  import TopReferrers from './TopReferrers.svelte';
  import RewardDistribution from './RewardDistribution.svelte';
  
  let activeTab = 'overview';
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'performance', label: 'Performance', icon: 'trending_up' },
    { id: 'referrers', label: 'Top Referrers', icon: 'group' },
    { id: 'rewards', label: 'Rewards', icon: 'payments' }
  ];
</script>

<div class="p-6">
  <div class="mb-8">
    <h1 class="text-2xl font-bold mb-2">Analytics</h1>
    <p class="text-gray-400">Track and analyze your referral program performance</p>
  </div>
  
  <div class="flex space-x-4 mb-6 border-b border-gray-800">
    {#each tabs as tab}
      <button
        class="px-4 py-2 flex items-center space-x-2 {activeTab === tab.id ? 'text-[#FF4405] border-b-2 border-[#FF4405]' : 'text-gray-400'}"
        on:click={() => activeTab = tab.id}
      >
        <span class="material-icons text-xl">{tab.icon}</span>
        <span>{tab.label}</span>
      </button>
    {/each}
  </div>
  
  {#if activeTab === 'overview'}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TimeSeriesChart data={$analyticsStore.dailyStats} />
      <ConversionFunnel data={$analyticsStore.conversionFunnel} />
    </div>
  {:else if activeTab === 'performance'}
    <TimeSeriesChart data={$analyticsStore.dailyStats} showAll={true} />
  {:else if activeTab === 'referrers'}
    <TopReferrers data={$analyticsStore.topReferrers} />
  {:else if activeTab === 'rewards'}
    <RewardDistribution data={$analyticsStore.rewardDistribution} />
  {/if}
</div>