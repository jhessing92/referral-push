<script lang="ts">
  import { referrals, referralStats } from '../stores/referralStore';
  import Header from './dashboard/Header.svelte';
  import Stats from './dashboard/Stats.svelte';
  import ReferralTable from './dashboard/ReferralTable.svelte';
  import NewReferralModal from './modals/NewReferralModal.svelte';
  
  let showNewReferralModal = false;
  
  function handleNewReferral(event: CustomEvent) {
    referrals.update(refs => [...refs, event.detail]);
    showNewReferralModal = false;
  }
</script>

<div class="p-6">
  <Header on:newReferral={() => showNewReferralModal = true} />
  <Stats stats={$referralStats} />
  <ReferralTable referrals={$referrals} />
  <NewReferralModal
    show={showNewReferralModal}
    on:submit={handleNewReferral}
  />
</div>