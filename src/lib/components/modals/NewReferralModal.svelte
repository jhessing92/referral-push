<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { nanoid } from 'nanoid';
  
  const dispatch = createEventDispatcher();
  export let show = false;
  
  let referrerName = '';
  let referrerEmail = '';
  let rewardAmount = 10;
  
  function handleSubmit() {
    const newReferral = {
      id: nanoid(),
      code: nanoid(8).toUpperCase(),
      createdAt: new Date(),
      referrerName,
      referrerEmail,
      referralCount: 0,
      rewardAmount,
      status: 'active'
    };
    
    dispatch('submit', newReferral);
    handleClose();
  }
  
  function handleClose() {
    show = false;
    referrerName = '';
    referrerEmail = '';
    rewardAmount = 10;
  }
</script>

{#if show}
  <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
    <div class="bg-[#1A1A1A] rounded-xl p-6 w-full max-w-md border border-gray-800">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Create New Referral</h2>
        <button class="text-gray-400 hover:text-white" on:click={handleClose}>
          <span class="material-icons">close</span>
        </button>
      </div>
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label class="block text-sm text-gray-400 mb-1">Referrer Name</label>
          <input
            type="text"
            bind:value={referrerName}
            class="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label class="block text-sm text-gray-400 mb-1">Referrer Email</label>
          <input
            type="email"
            bind:value={referrerEmail}
            class="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label class="block text-sm text-gray-400 mb-1">Reward Amount ($)</label>
          <input
            type="number"
            bind:value={rewardAmount}
            min="1"
            class="input-field w-full"
            required
          />
        </div>
        
        <div class="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            on:click={handleClose}
            class="px-4 py-2 text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button type="submit" class="btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}