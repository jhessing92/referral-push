<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="flex justify-between items-center mb-8">
  <div>
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p class="text-gray-400">Manage your referral program</p>
  </div>
  
  <div class="flex items-center space-x-4">
    <button class="btn-primary flex items-center space-x-2" on:click={() => dispatch('newReferral')}>
      <span class="material-icons">add</span>
      <span>Create New</span>
    </button>
  </div>
</div>