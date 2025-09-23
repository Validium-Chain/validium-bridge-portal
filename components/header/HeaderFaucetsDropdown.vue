<template>
  <Menu v-slot="{ open }" as="div" class="network-dropdown-container">
    <MenuButton as="template">
      <CommonButtonDropdown :toggled="open">
        <template #left-icon>
          <GiftIcon />
        </template>
        <span>Faucets</span>
      </CommonButtonDropdown>
    </MenuButton>

    <transition v-bind="TransitionAlertScaleInOutTransition">
      <MenuItems class="network-options-container">
        <MenuItem v-for="faucet in faucets" :key="faucet.token" v-slot="{ active }" as="template">
          <CommonButtonDropdown
            as="a"
            :href="faucet.url"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            no-chevron
            :active="active"
            class="options-item"
          >
            <span>{{ faucet.label }}</span>
          </CommonButtonDropdown>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { GiftIcon } from "@heroicons/vue/24/outline";

import { faucets } from "~/data/faucets";
import { TransitionAlertScaleInOutTransition } from "~/utils/transitions";
</script>

<style lang="scss" scoped>
.network-dropdown-container {
  @apply relative;

  .network-options-container {
    @apply absolute right-0 top-full z-10 mt-0.5 h-max w-max min-w-full rounded-3xl bg-neutral-100 p-1 shadow-lg dark:bg-[#1F143C];

    .options-item {
      @apply w-full;
    }
  }
}
</style>
