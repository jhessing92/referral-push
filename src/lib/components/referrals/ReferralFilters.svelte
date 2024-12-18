<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Referral } from '../../types/referral';
  
  const dispatch = createEventDispatcher<{
    filter: Partial<Record<keyof Referral, any>>;
  }>();
  
  let search = '';
  let status: Referral['status'] | '' = '';
  let dateRange = '';
  
  $: {
    const filters: Partial<Record<keyof Referral, any>> = {};
    if (search) filters.referrerName = search;
    if (status) filters.status = status;
    if (dateRange) {
      const [start, end] = dateRange.split(',');
      filters.createdAt = { start: new Date(start), end: new Date(end) };
    }
    dispatch('filter', filters);
  }
</script>

<div class="bg-[#1A1A1A] rounded-xl p-4 mb-6 flex flex-wrap gap-4">
  <div class="flex-1 min-w-[200px]">
    <input
      type="text"
      bind:value={search}
      placeholder="Search referrers..."
      class="input-field w-full"
    />
  </div>
  
  <div class="w-[150px]">
    <select bind:value={status} class="input-field w-full">
      <option value="">All Status</option>
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="expired">Expired</option>
    </select>
  </div>
  
  <div class="w-[200px]">
    <input
      type="date"
      bind:value={dateRange}
      class="input-field w-full"
      placeholder="Filter by date"
    />
  </div>
</div>