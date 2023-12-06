<script setup>
import { query, collection, getDocs, getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { ref, onMounted } from 'vue'
import db from './firebase/init'
import { RouterLink, RouterView, } from 'vue-router'
import Nav from './components/Nav.vue'
import {
  findAllProduct,
  findProductsByPriceRange,
  findCustomerByNotification,
  findShippedOrdeByTotalAmountGreater,
  findOrdeByCustomerOrderByOrderDateDesc,
  findTopThreeProducAvalibleInStock,
  MatchProductReview,
  findProductCategoryInElectronicsOrAccessories,
  sumOfAllOrderAmountByCustomer,
  avgAmountOfOrder
} from './composables/query'

onMounted(async () => {
  // console.log(await findAllProduct())
  // console.log(await findProductsByPriceRange())
  // console.log(await findCustomerByNotification(false))
  // console.log(await findShippedOrdeByTotalAmountGreater())
  // console.log(await findOrdeByCustomerOrderByOrderDateDesc("john_doe"))
  // console.log(await findTopThreeProducAvalibleInStock())
  //  console.log(await MatchProductReview())
   console.log(await findProductCategoryInElectronicsOrAccessories())
   console.log(await sumOfAllOrderAmountByCustomer())
  console.log(await avgAmountOfOrder())



})
</script>

<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>

<style scoped></style>
