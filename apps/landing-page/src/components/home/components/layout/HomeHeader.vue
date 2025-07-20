<template>
  <header>
    <nav
      class="container"
      aria-label="Global"
    >
      <div class="w-full flex items-center justify-between h-18">
        <img
          src="/images/logo/main-logo.png"
          class="max-w-[158px]"
        >

        <div class="ml-auto flex items-center">
          <ul class="items-center gap-3 hidden md:flex">
            <li
              v-for="item in HEADER_NAV_ITEMS"
              :key="item.value"
            >
              <div class="flex items-center gap-0.5 cursor-pointer">
                <span class="lg:text-nav md:text-body2 text-nav font-medium">
                  {{ item.label }}
                </span>

                <ChevronDownIcon
                  v-if="item.children"
                  :size="12"
                />
              </div>
            </li>
          </ul>

          <div class="items-center gap-[7px] ml-5 hidden sm:flex">
            <BWButton
              variant="transparent"
              label="Sign In"
              to="/sign-in"
            />

            <BWButton
              label="Start fundraising for free"
            />
          </div>

          <button
            class="z-20 relative p-2 rounded-md transition-colors md:hidden inline-block"
            aria-label="Toggle mobile menu"
            @click="toggleMobileMenu"
          >
            <div
              class="burger-menu"
              :class="{ 'active': isMenuActive }"
            >
              <span />

              <span />

              <span />
            </div>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next';
import BWButton from 'components/common/button/BWButton.vue';
import { ref } from 'vue';

const HEADER_NAV_ITEMS = [
	{
		label: 'Platform',
		value: 'platform',
		children: [],
	},
	{
		label: 'Solutions',
		value: 'solutions',
		children: [],
	},
	{
		label: 'Pricing',
		value: 'pricing',
	},
	{
		label: 'Resources',
		value: 'resources',
		children: [],
	},
	{
		label: 'Contact Us',
		value: 'contact_us',
		children: [],
	},
	{
		label: 'Fundraising Ideas',
		value: 'fundraising_ideas',
	},
];

const isMenuActive = ref(false);

const toggleMobileMenu = (): void => {
	isMenuActive.value = !isMenuActive.value;
};
</script>

<style scoped>
/* Burger Menu Animation */
.burger-menu {
	width: 24px;
	height: 18px;
	position: relative;
	cursor: pointer;
}

.burger-menu span {
	display: block;
	position: absolute;
	height: 2px;
	width: 100%;
	background: #333;
	border-radius: 1px;
	opacity: 1;
	left: 0;
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
}

.burger-menu span:nth-child(1) {
	top: 0px;
}

.burger-menu span:nth-child(2) {
	top: 8px;
}

.burger-menu span:nth-child(3) {
	top: 16px;
}

.burger-menu.active span:nth-child(1) {
	top: 8px;
	transform: rotate(135deg);
}

.burger-menu.active span:nth-child(2) {
	opacity: 0;
	left: -60px;
}

.burger-menu.active span:nth-child(3) {
	top: 8px;
	transform: rotate(-135deg);
}

/* Custom z-index utilities */
.z-15 {
	z-index: 15;
}

/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
	transition: all 0.2s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}

/* Chevron rotation */
.rotate-180 {
	transform: rotate(180deg);
}

/* Responsive text sizing */
@media (min-width: 1024px) and (max-width: 1320px) {
	.text-nav {
		font-size: 0.875rem; /* 14px */
	}
}

/* Smooth transitions */
.transition-colors {
	transition-property: color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}

/* Mobile dropdown animation */
.max-h-0 {
	max-height: 0;
}

.max-h-96 {
	max-height: 24rem;
}
</style>
