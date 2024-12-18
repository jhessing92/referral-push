<script lang="ts">
  import { referrals, referralStats } from '../../stores/referralStore';
  import ReferralStats from './ReferralStats.svelte';
  import ReferralList from './ReferralList.svelte';
  import CreateReferral from './CreateReferral.svelte';
  
  let showCreateForm = false;
  
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
    
    <button 
      class="btn-primary flex items-center space-x-2"
      on:click={() => showCreateForm = !showCreateForm}
    >
      <span class="material-icons">{showCreateForm ? 'close' : 'add'}</span>
      <span>{showCreateForm ? 'Cancel' : 'Create New'}</span>
    </button>
  </div>

  <ReferralStats stats={$referralStats} />
  
  {#if showCreateForm}
    <div class="mb-8">
      <CreateReferral on:create={handleCreate} />
    </div>
  {/if}
  
  <ReferralList referrals={$referrals} />
</div>