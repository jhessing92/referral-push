<script lang="ts">
  import { onMount } from 'svelte';
  import ReferralCard from './ReferralCard.svelte';
  import ReferralFilters from './ReferralFilters.svelte';
  import type { Referral } from '../../types/referral';
  import { filterReferrals, sortReferrals } from '../../utils/referral';
  import { DEFAULT_PAGE_SIZE, getPaginationRange } from '../../utils/pagination';
  
  export let referrals: Referral[];
  
  let filteredReferrals: Referral[] = [];
  let displayedReferrals: Referral[] = [];
  let currentPage = 1;
  let filters: Partial<Record<keyof Referral, any>> = {};
  let sortConfig = { field: 'createdAt' as keyof Referral, order: 'desc' as const };
  
  $: {
    filteredReferrals = filterReferrals(referrals, filters);
    filteredReferrals = sortReferrals(filteredReferrals, sortConfig.field, sortConfig.order);
    
    const start = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const end = start + DEFAULT_PAGE_SIZE;
    displayedReferrals = filteredReferrals.slice(start, end);
  }
  
  $: totalPages = Math.ceil(filteredReferrals.length / DEFAULT_PAGE_SIZE);
  $: paginationRange = getPaginationRange(currentPage, totalPages);
  
  function handleFilter(event: CustomEvent) {
    filters = event.detail;
    currentPage = 1;
  }
</script>

<ReferralFilters on:filter={handleFilter} />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  {#each displayedReferrals as referral (referral.id)}
    <ReferralCard {referral} />
  {/each}
</div>

{#if totalPages > 1}
  <div class="flex justify-center space-x-2 mt-8">
    <button
      class="btn-secondary px-3 py-1"
      disabled={currentPage === 1}
      on:click={() => currentPage = Math.max(1, currentPage - 1)}
    >
      Previous
    </button>
    
    {#each paginationRange as page}
      <button
        class="px-3 py-1 rounded {currentPage === page ? 'bg-[#FF4405] text-white' : 'bg-[#1A1A1A] text-gray-400 hover:text-white'}"
        on:click={() => currentPage = page}
      >
        {page}
      </button>
    {/each}
    
    <button
      class="btn-secondary px-3 py-1"
      disabled={currentPage === totalPages}
      on:click={() => currentPage = Math.min(totalPages, currentPage + 1)}
    >
      Next
    </button>
  </div>
{/if}