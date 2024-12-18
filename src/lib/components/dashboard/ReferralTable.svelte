<script lang="ts">
  import type { Referral } from '../../types/referral';
  export let referrals: Referral[];
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };
  
  const getStatusColor = (status: Referral['status']) => {
    const colors = {
      active: 'bg-green-900 text-green-300',
      paused: 'bg-yellow-900 text-yellow-300',
      expired: 'bg-red-900 text-red-300'
    };
    return colors[status];
  };
</script>

<div class="bg-[#1A1A1A] rounded-xl overflow-hidden">
  <table class="w-full">
    <thead class="bg-[#242424]">
      <tr>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Referrer</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Code</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Created</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Referrals</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Rewards</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase">Status</th>
        <th class="px-6 py-4 text-left text-xs text-gray-400 uppercase"></th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-800">
      {#each referrals as referral}
        <tr class="hover:bg-[#242424] transition-colors">
          <td class="px-6 py-4">
            <div class="text-sm text-white">{referral.referrerName}</div>
            <div class="text-sm text-gray-400">{referral.referrerEmail}</div>
          </td>
          <td class="px-6 py-4 text-sm text-gray-300">{referral.code}</td>
          <td class="px-6 py-4 text-sm text-gray-300">{formatDate(referral.createdAt)}</td>
          <td class="px-6 py-4 text-sm text-white">{referral.referralCount}</td>
          <td class="px-6 py-4 text-sm text-white">${referral.rewardAmount}</td>
          <td class="px-6 py-4">
            <span class="px-3 py-1 text-xs font-medium rounded-full {getStatusColor(referral.status)}">
              {referral.status}
            </span>
          </td>
          <td class="px-6 py-4 text-right">
            <button class="text-gray-400 hover:text-white">
              <span class="material-icons">more_vert</span>
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>