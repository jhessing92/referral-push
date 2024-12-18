<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  import { nanoid } from 'nanoid';

  let referralCode = nanoid(8);
  let qrCodeUrl = '';
  let copySuccess = false;
  let referralCount = 0; // In a real app, this would come from your backend
  let rewards = 0; // In a real app, this would come from your backend

  const generateQRCode = async () => {
    try {
      const referralUrl = `https://yourapp.com/refer/${referralCode}`;
      qrCodeUrl = await QRCode.toDataURL(referralUrl);
    } catch (err) {
      console.error(err);
    }
  };

  const copyReferralLink = async () => {
    const referralUrl = `https://yourapp.com/refer/${referralCode}`;
    await navigator.clipboard.writeText(referralUrl);
    copySuccess = true;
    setTimeout(() => {
      copySuccess = false;
    }, 2000);
  };

  onMount(() => {
    generateQRCode();
  });
</script>

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
  <div class="text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Share & Earn Rewards</h2>
    <p class="text-gray-600">Invite friends and earn rewards for each referral</p>
  </div>

  <div class="stats grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
    <div class="stat text-center">
      <div class="text-gray-600 text-sm">Referrals</div>
      <div class="text-2xl font-bold text-gray-800">{referralCount}</div>
    </div>
    <div class="stat text-center">
      <div class="text-gray-600 text-sm">Rewards</div>
      <div class="text-2xl font-bold text-gray-800">${rewards}</div>
    </div>
  </div>

  <div class="qr-section flex justify-center">
    {#if qrCodeUrl}
      <img src={qrCodeUrl} alt="Referral QR Code" class="w-48 h-48" />
    {/if}
  </div>

  <div class="referral-code-section text-center space-y-3">
    <div class="flex items-center justify-center space-x-2">
      <input
        type="text"
        readonly
        value={referralCode}
        class="bg-gray-50 px-4 py-2 rounded-lg text-center font-mono"
      />
      <button
        on:click={copyReferralLink}
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {copySuccess ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  </div>

  <div class="how-it-works space-y-3">
    <h3 class="text-lg font-semibold text-gray-800">How it works</h3>
    <ol class="list-decimal list-inside text-gray-600 space-y-2">
      <li>Share your unique QR code or referral link with friends</li>
      <li>Friends join using your referral</li>
      <li>You both get rewards when they make their first purchase</li>
    </ol>
  </div>
</div>

<style>
  /* Any additional component-specific styles can go here */
</style>