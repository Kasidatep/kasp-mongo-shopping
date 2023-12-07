<script setup>
import { ref, onMounted } from 'vue'
import ProductList from '../components/ProductList.vue'
import CustomerList from '../components/CustomerList.vue'
import OrderList from '../components/OrderList.vue';
import Aggregate from '../components/Aggregate.vue';
import {
    findAllProducts,
    findProductsInPriceRange,
    findCustomersWithNotifications,
    findShippedOrdersWithTotalAmountAboveThreshold,
    findOrdersByCustomerOrderedByDateDescending,
    findTopThreeAvailableProductsInStock,
    matchProductReviews,
    findProductCategoriesInElectronicsOrAccessories,
    calculateTotalOrderAmountByCustomer,
    calculateAverageOrderAmount
} from '../composables/query'
import Nav from '../components/Nav.vue'
const queryName = ref("Select Query First!!")
const loadComponant = ref(null)
const dataList = ref('')
const currentQry = ref(0)
const getQuery = async (id) => {
    currentQry.value = id
    if(id===1){
        queryName.value = "List All Product"
        loadComponant.value = 'productList'
        dataList.value = await findAllProducts()
    }else if(id===2){
        queryName.value = "  List All Products Priced Between $100 and $200"
        loadComponant.value = 'productList'
        dataList.value = await findProductsInPriceRange(100,200)
    }else if(id===3){
        queryName.value = "  List All Customers with Notifications Enabled"
        loadComponant.value = 'customerList'
        dataList.value = await findCustomersWithNotifications()
    }else if(id===4){
        queryName.value = "  List Shipped Orders with Total Amount Greater Than $1000"
        loadComponant.value = 'orderList'
        dataList.value = await findShippedOrdersWithTotalAmountAboveThreshold(1000)
    }else if(id===5){
        queryName.value = "  List Orders By Customer [john_doe] Order By Order Date"
        loadComponant.value = 'orderList'
        dataList.value = await findOrdersByCustomerOrderedByDateDescending('john_doe')
    }else if(id===6){
        queryName.value = "  List Top Three Product Avaliable In Stock"
        loadComponant.value = 'productList'
        dataList.value = await findTopThreeAvailableProductsInStock()
    }else if(id===7){
        queryName.value = "  Find Product That Review By john_doe, Specific Comment `Great phone, very fast!`"
        loadComponant.value = 'productList'
        dataList.value = await matchProductReviews()
    }else if(id===8){
        queryName.value = "  List Product By Category Electronics Or Accessories"
        loadComponant.value = 'productList'
        dataList.value = await findProductCategoriesInElectronicsOrAccessories()
    }else if(id===9){
        queryName.value = "  Calculate Total Amount Of All Order By john_doe"
        loadComponant.value = 'aggregate'
        dataList.value = await calculateTotalOrderAmountByCustomer()
    }else if(id===10){
        queryName.value = "  Calculate Average Total Amount Of Orders"
        loadComponant.value = 'aggregate'
        dataList.value = await calculateAverageOrderAmount()
    }
}


</script>

<template>
    <div>
       <Nav></Nav>
       <div class="border">
        <div class="text-3xl font-extrabold">
            e-Shopping App - Demo Query
            <hr class="my-3">
        </div>
           <div class="flex justify-between">
            <div class="mr-3" style="width: 30% !important">
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==1?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(1)"> 1) List All Product </div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==2?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(2)"> 2) List All Products Priced Between $100 and $200 </div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==3?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(3)"> 3) List All Customers with Notifications Enabled</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==4?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(4)"> 4) List Shipped Orders with Total Amount Greater Than $1000</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==5?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(5)"> 5) List Orders By Customer [john_doe] Order By Order Date</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==6?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(6)"> 6) List Top Three Product Avaliable In Stock</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==7?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(7)"> 7) Match Product That Review By john_doe</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==8?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(8)"> 8) List Product By Category Electronics Or Accessories </div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==9?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(9)"> 9) Calculate Total Amount Of All Order By john_doe</div>
               <div class="query px-1 border-2 text-lg cursor-pointer" :class="currentQry==10?'bg-gray-500 text-white':'bg-gray-300'" @click="getQuery(10)"> 10) Calculate Average Total Amount Of Orders</div>

            </div>
                <div class="border-2 rounded-xl p-5  border-black w-full mx-3">
                    <div class="text-2xl  font-bold">
                        {{queryName}}
                    </div>
                    <hr>
                    <div>
                        <ProductList :dataList="dataList" v-if="loadComponant=='productList'" />
                        <CustomerList :dataList="dataList" v-if="loadComponant=='customerList'" />
                        <OrderList :dataList="dataList" v-if="loadComponant=='orderList'" />
                        <Aggregate :value="dataList" v-if="loadComponant=='aggregate'" />

                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<style scoped>
.border {
    border-color: rgba(82, 82, 82, 0.342);
    border-width: 3PX;
    width: 70%;
    padding: 10PX;
    margin: auto;
    margin-top: 120px;
    border-radius: 5px;
    background-color: rgb(240, 240, 240);
}

.query {
    padding: 3px;
    margin-bottom: 5px;
    border-radius: 10px;
}
.query:hover {
    background-color: rgb(161, 151, 151);
    padding: 3px;
    margin-bottom: 5px;
    border-radius: 10px;
}
</style>
