<template>
  <div class="bg-light-salmon px-9 py-[38px] rounded-box">
    <div class="text-center">
      <span class="text-h2">
        <span class="font-bold">Join us!</span>

        <br>

        Specific form description <br>goes here malesuada et faucibus
      </span>
    </div>

    <div class="flex items-center justify-center gap-5 mt-6">
      <InfoItem
        :icon="CalendarDaysIcon"
        :label="date"
      />

      <div class="h-6 w-[0.5px] bg-border" />

      <InfoItem
        :icon="Clock8Icon"
        :label="time"
      />
    </div>

    <form
      class="mt-6"
      @submit.prevent="submit"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[9px] gap-y-3">
        <TextInput
          v-model="form.first_name"
          label="First name"
          class="col-span-1"
          placeholder="Mary"
          required
        />

        <TextInput
          v-model="form.last_name"
          label="Last name"
          class="col-span-1"
          placeholder="Smith"
          required
        />

        <TextInput
          v-model="form.organization"
          label="Organization name"
          placeholder="BetterWorld"
          class="col-span-1"
          required
        />

        <TextInput
          v-model="form.email"
          label="Email"
          placeholder="mary@gmail.com"
          class="col-span-1"
          required
        />

        <TextInput
          v-model="form.email"
          label="Phone number"
          class="col-span-1"
          placeholder="(123) 456-7890"
          required
        />

        <TextInput
          v-model="form.fundraising_target"
          label="Fundraising target"
          class="col-span-1"
          placeholder="Please select"
          required
        />
      </div>

      <div class="mt-8">
        <BWCheckboxGroup
          v-model="form.type_of_funds"
          alignment="vertical"
          :checkboxes="TYPE_OF_FUNDRAISERS_OPTIONS"
        />
      </div>

      <div class="mt-6">
        <BWButton
          label="Reserve your seat"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CalendarDaysIcon, Clock8Icon } from 'lucide-vue-next';
import InfoItem from 'components/common/item/InfoItem.vue';
import dayjs from 'dayjs';
import TextInput from 'components/common/input/TextInput.vue';
import BWButton from 'components/common/button/BWButton.vue';
import BWCheckboxGroup from 'components/common/checkbox/BWCheckboxGroup.vue';

type JoinUsForm = {
	first_name: string;
	last_name: string;
	organization: string;
	email: string;
	phone_number: string;
	type_of_funds: string[] | null;
	fundraising_target: string | null;
};

const date = dayjs(new Date()).format('MMM ddd');
const time = dayjs(new Date()).format('HH:mm:ss');

const form = ref<JoinUsForm>({
	first_name: '',
	last_name: '',
	organization: '',
	email: '',
	phone_number: '',
	type_of_funds: null,
	fundraising_target: null,
});

const TYPE_OF_FUNDRAISERS_OPTIONS = [
	{
		label: 'Events or Galas',
		value: 'Events or Galas',
	},
	{
		label: 'Annual Giving Days / Giving Tuesday',
		value: 'Annual Giving Days / Giving Tuesday',
	},
	{
		label: 'Online Donation Forms',
		value: 'Online Donation Forms',
	},
	{
		label: 'Auctions',
		value: 'Auctions',
	},
	{
		label: 'Raffles',
		value: 'Raffles',
	},
	{
		label: 'Peer-to-Peer',
		value: 'Peer-to-Peer',
	},
	{
		label: 'Impact Giving',
		value: 'Impact Giving',
	},
	{
		label: 'Paddle Raise',
		value: 'Paddle Raise',
	},
	{
		label: 'A-Thons',
		value: 'A-Thons',
	},
];

const submit = (): void => {
	// Todo: handle submit form
	// console.log(form.value);
};
</script>
