<script setup>
defineProps(['dataList'])
</script>
<template>
    <div>
        <div v-for="(data, index) in dataList">
            <div class="w-full border text-md p-3">
                <div class="flex justify-between">
                    <span class=" rounded-full text-md font-bold px-2 inline-block">{{ index + 1 }}) {{ data.name }}, 
                        <span class="border-yellow-700 ml-2 font-light rounded-full text-sm px-2 text-yellow-700 opacity-75"> {{ data.brand }}</span>
                    </span> 
                    <span class="bg-gray-900 rounded-full text-sm px-2 text-white">${{ data.price }}</span>
                </div>

                <span class="bg-red-500 ml-2 rounded-full text-sm px-2 text-white">Category: {{ data.category }}</span>
                
                <span class=" bg-pink-700 right-0 ml-2 rounded-full text-sm px-2 text-white">Stock: {{ data.stock }}</span>
                <div class="border m-2">
                    <div class="font-bold">
                        comment [{{ data.reviews?.length }}]
                    </div>
                    <div v-for="(review, index) in data.reviews">
                        <div class="ml-2">
                            <span class=" bg-pink-700 right-0 ml-2 rounded-full text-sm px-2 text-white">{{ review.user }}</span>
                             {{ review.comment }} 
                        </div>
                    </div>
                </div>

            </div>
            <!-- {{ data }} -->
        </div>
    </div>
</template>