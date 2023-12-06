<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
  FwbAvatar ,
} from 'flowbite-vue'


</script>

<template>
    <fwb-navbar solid>
      <template #logo>
        <fwb-navbar-logo alt="Flowbite logo" image-url="https://www.kasidate.me/assets/images/kplusg.png" link="#">
          Shopping
        </fwb-navbar-logo>
      </template>
      <template theme="purple" class="bg-[#48216d]" #default="{isShowMenu}">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link link="#">
             <fwb-avatar size="sm"  initials="Log" rounded />
          </fwb-navbar-link>

        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </template>
<style>

</style>