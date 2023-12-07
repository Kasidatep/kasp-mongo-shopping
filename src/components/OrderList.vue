<script setup>
defineProps(['dataList'])

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = [hours, minutes, remainingSeconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');

  return formattedTime;
}
</script>
<template>
    <div v-for="(data, index) in dataList" class="m-2 rounded">
        <!-- {{ data }} -->
        <div class="w-full border text-md p-3">
            <div class="flex justify-between">
                <span class=" rounded-full text-md font-bold px-2 inline-block">{{ index + 1 }}) Order: {{ data.id }} -

                    <span class=" bg-pink-700 right-0 ml-2 rounded-full text-sm px-2 text-white"> Total Amount ${{
                        data.totalAmount }}
                    </span>

                </span>
                <span class="bg-gray-900 rounded-full text-sm px-2 text-white"> {{ data.status }}</span>
            </div>

            <div class="border">
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Customer:
                    </div>
                    {{ data.customerUsername }}
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        shipping address:
                    </div>
                    {{ data.shippingAddress?.street }}, {{ data.shippingAddress?.city }},{{ data.shippingAddress?.country }}
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        OrderDate:
                    </div>
                    {{ new Date(data.orderDate?.seconds) }}
                </div>
                
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Customer:
                    </div>
                    {{ data.customerUsername }}
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Payment Detail:
                    </div>{{ data.paymentMethod?.toUpperCase() }}
                    <span class=" bg-pink-300  ml-2 rounded-full text-sm px-2 text-white"> {{ data.paymentStatus }} </span>
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Delivery Method:
                    </div>
                    {{ data.deliveryMethod }}
                </div>
            </div>
            <div class="border m-1 p-3">
                <div class="font-bold flex justify-between">
                    <div>
                        Order Detail [{{ data.products?.length }} Product]
                    </div>
                    <div>
                        Total .
                    </div>
                </div>
                <div v-for="(product, index) in data.products" class="flex justify-between border mt-1">
                    <div class="ml-2 my-1 ">
                        {{ index + 1 }}) {{ product.productId }} <sp an
                            class=" bg-pink-700 right-0 ml-2 rounded-full text-sm px-2 text-white">{{ product.quantity }}
                            item</sp>
                        <span class=" bg-green-700 right-0 ml-2 rounded-full text-sm px-2 text-white">${{ product.price
                        }}</span>
                    </div>
                    <div class="  right-0 ml-2 rounded-full text-sm px-2 text-green-800 font-bold">${{ product.price *
                        product.quantity }}</div>
                </div>
            </div>
        </div>
    </div>
</template>