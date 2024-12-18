<script lang="ts">
  import { referrals, referralStats } from '../../stores/referralStore';
  import { analyticsStore } from '../../stores/analyticsStore';
  import ReferralStats from './ReferralStats.svelte';
  import ReferralList from './ReferralList.svelte';
  import CreateReferral from './CreateReferral.svelte';
  import TimeSeriesChart from '../analytics/TimeSeriesChart.svelte';
  import ConversionFunnel from '../analytics/ConversionFunnel.svelte';
  import TopReferrers from '../analytics/TopReferrers.svelte';
  import RewardDistribution from '../analytics/RewardDistribution.svelte';

  let activeTab = 'referrals';
  let showCreateForm = false;

  const tabs = [
    { id: 'referrals', label: 'Referrals', icon: 'people' },
    { id: 'analytics', label: 'Analytics', icon: 'analytics' },
    { id: 'performance', label: 'Performance', icon: 'trending_up' },
    { id: 'rewards', label: 'Rewards', icon: 'payments' }
  ];

  const handleCreate = (event: CustomEvent) => {
    referrals.update(refs => [...refs, event.detail]);
    showCreateForm = false;
  };
</script>

<div class="p-6 max-w-7xl mx-auto">
  <div class="flex justify-between items-center mb-8">
    <div>
      <h1 class="text-2xl font-bold">Referral Program</h1>
      <p class="text-gray-400">Manage your referrals and track performance</p>
    </div>
    
    {#if activeTab === 'referrals'}
      <button 
        class="btn-primary flex items-center space-x-2"
        on:click={() => showCreateForm = !showCreateForm}
      >
        <span class="material-icons">{showCreateForm ? 'close' : 'add'}</span>
        <span>{showCreateForm ? 'Cancel' : 'Create New'}</span>
      </button>
    {/if}
  </div>

  <ReferralStats stats={$referralStats} />

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

  {#if activeTab === 'referrals'}
    {#if showCreateForm}
      <div class="mb-8">
        <CreateReferral on:create={handleCreate} />
      </div>
    {/if}
    <ReferralList referrals={$referrals} />
  {:else if activeTab === 'analytics'}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TimeSeriesChart data={$analyticsStore.dailyStats} />
      <ConversionFunnel data={$analyticsStore.conversionFunnel} />
    </div>
  {:else if activeTab === 'performance'}
    <TimeSeriesChart data={$analyticsStore.dailyStats} showAll={true} />
    <div class="mt-6">
      <TopReferrers data={$analyticsStore.topReferrers} />
    </div>
  {:else if activeTab === 'rewards'}
    <RewardDistribution data={$analyticsStore.rewardDistribution} />
  {/if}
</div>