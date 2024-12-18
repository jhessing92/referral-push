<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let currentPage = 'dashboard';
  
  const menuItems = [
    { id: 'dashboard', icon: 'grid_view', label: 'Dashboard' },
    { id: 'customers', icon: 'group', label: 'Customers' },
    { id: 'analytics', icon: 'analytics', label: 'Analytics' },
    { id: 'wallet', icon: 'wallet', label: 'Wallet Passes' },
    { id: 'offers', icon: 'local_offer', label: 'Offers' },
    { id: 'notifications', icon: 'notifications', label: 'Push Notifications' },
    { id: 'geofences', icon: 'location_on', label: 'Geofences' },
    { id: 'business', icon: 'storefront', label: 'Business Page' },
    { id: 'integrations', icon: 'integration_instructions', label: 'Integrations' },
    { id: 'settings', icon: 'settings', label: 'Settings' }
  ];
  
  function handleNavigation(page: string) {
    currentPage = page;
    dispatch('navigate', { page });
  }
</script>

<aside class="w-64 h-screen fixed left-0 top-0 bg-[#0A0A0A] border-r border-gray-800 p-4">
  <div class="mb-8">
    <img src="/push-logo.svg" alt="Push Logo" class="h-8" />
  </div>
  
  <nav class="space-y-2">
    {#each menuItems as item}
      <button
        class="sidebar-item w-full text-left {currentPage === item.id ? 'active' : ''}"
        on:click={() => handleNavigation(item.id)}
      >
        <span class="material-icons">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    {/each}
  </nav>
</aside>