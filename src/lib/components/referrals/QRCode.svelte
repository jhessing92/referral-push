<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  
  export let value: string;
  let qrCodeUrl = '';
  
  onMount(async () => {
    try {
      qrCodeUrl = await QRCode.toDataURL(value, {
        width: 200,
        margin: 1,
        color: {
          dark: '#FFFFFF',
          light: '#00000000'
        }
      });
    } catch (err) {
      console.error('QR Code generation failed:', err);
    }
  });
</script>

{#if qrCodeUrl}
  <img src={qrCodeUrl} alt="QR Code" class="w-32 h-32" />
{:else}
  <div class="w-32 h-32 bg-[#242424] rounded-lg animate-pulse" />
{/if}