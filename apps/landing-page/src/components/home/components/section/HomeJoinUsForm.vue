<template>
  <div class="bg-light-salmon px-9 py-[38px] rounded-box">
    <div class="text-center">
      <span class="text-h2">
        <span class="font-bold">Join us!</span>

        <br>

        Specific form description <br>goes here malesuada et faucibus
      </span>
    </div>

    <div class="flex items-center justify-center gap-2 md:gap-5 mt-6">
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
      class="mt-6 relative"
      @submit.prevent="submit"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[9px] gap-y-3">
        <TextInput
          v-model="form.first_name"
					:error-message="errorMessages.first_name"
          label="First name"
          class="col-span-1"
          placeholder="Mary"
          required
        />

        <TextInput
          v-model="form.last_name"
					:error-message="errorMessages.last_name"
          label="Last name"
          class="col-span-1"
          placeholder="Smith"
          required
        />

        <TextInput
          v-model="form.organization"
					:error-message="errorMessages.organization"
          label="Organization name"
          placeholder="BetterWorld"
          class="col-span-1"
          required
        />

        <TextInput
          v-model="form.email"
					:error-message="errorMessages.email"
          label="Email"
          placeholder="mary@gmail.com"
          class="col-span-1"
          required
        />

        <TextInput
          v-model="form.phone_number"
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
			
			<span class="absolute bottom-0 left-0 -translate-x-[110%] -translate-y-[10px]">
				<img src="/images/home/arrow.png" width="69" height="59">
			</span>
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
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import useForm, { required, email, type ValidationRules } from 'src/composables/useForm.ts';
import { useFetch } from 'src/utils/api.ts';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);

type JoinUsForm = {
	first_name: string;
	last_name: string;
	organization: string;
	email: string;
	phone_number: string;
	type_of_funds: string[] | null;
	fundraising_target: string | null;
};

const date = dayjs(new Date()).format('MMMM Do');
const time = dayjs(new Date()).format('h:mm A');

const form = ref<JoinUsForm>({
	first_name: '',
	last_name: '',
	organization: '',
	email: '',
	phone_number: '',
	type_of_funds: null,
	fundraising_target: null,
});

const rules: ValidationRules<typeof form.value> = {
	first_name: { required },
	last_name: { required },
	organization: { required },
	email: { required, email, },
	phone_number: { },
	type_of_funds: { },
	fundraising_target: { },
};

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

const {
	errorMessages, isFormValid, validate,
} = useForm<typeof form.value>({ form, labels: {}, rules });

const submit = (): void => {
	validate();
	
	if (!isFormValid.value) {
		return;
	}
	
	useFetch({
		method: 'POST',
		endpoint: 'form-submissions',
		options: {
			body: JSON.stringify({ data: form.value }),
		}
	})
};
</script>
