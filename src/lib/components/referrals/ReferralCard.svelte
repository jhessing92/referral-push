<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from './QRCode.svelte';
  import type { Referral } from '../../types/referral';
  
  export let referral: Referral;
  let showQR = false;
  
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(referral.code);
      // Show success toast or indicator
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showQR = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.querySelector(`#referral-${referral.id}`));
  });
</script>

<div id="referral-{referral.id}" class="bg-[#1A1A1A] rounded-xl p-6 space-y-4">
  <div class="flex justify-between items-start">
    <div>
      <h3 class="text-lg font-semibold">{referral.referrerName}</h3>
      <p class="text-gray-400 text-sm">{referral.referrerEmail}</p>
    </div>
    <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">
      {referral.status}
    </span>
  </div>
  
  {#if showQR}
    <div class="flex justify-center">
      <QRCode value={`https://yourapp.com/refer/${referral.code}`} />
    </div>
  {:else}
    <div class="w-32 h-32 mx-auto bg-[#242424] rounded-lg animate-pulse" />
  {/if}
  
  <div class="flex items-center justify-between bg-[#242424] rounded-lg p-3">
    <code class="text-sm text-gray-300">{referral.code}</code>
    <button 
      on:click={copyCode}
      class="text-gray-400 hover:text-white"
    >
      <span class="material-icons">content_copy</span>
    </button>
  </div>
  
  <div class="grid grid-cols-2 gap-4 pt-2">
    <div class="text-center">
      <p class="text-gray-400 text-sm">Referrals</p>
      <p class="text-xl font-bold">{referral.referralCount}</p>
    </div>
    <div class="text-center">
      <p class="text-gray-400 text-sm">Points</p>
      <p class="text-xl font-bold">{referral.rewardPoints}</p>
    </div>
  </div>
</div>