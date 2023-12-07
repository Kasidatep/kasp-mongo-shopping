<script setup>
defineProps(['dataList'])
</script>
<template>
        <div v-for="(data, index) in dataList">
            <div class="w-full border text-md p-3">
                <div class="flex justify-between">
                    <span class=" rounded-full text-md font-bold px-2 inline-block">{{ index + 1 }}) {{ data.username }}
                                       <span class=" bg-pink-700 right-0 ml-2 rounded-full text-sm px-2 text-white"> {{ data.gender }}</span>

                    </span>
                    <span class="bg-gray-900 rounded-full text-sm px-2 text-white">Notification: {{ data.notification?'Enabled':'Disabled' }}</span>
                </div>

        <div  class="border mt-2">
              <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        address:
                    </div>
                    {{ data.address?.street }}, {{ data.address?.city }},{{ data.address?.country }}
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Email:
                    </div>
                   {{ data.email }}
                </div>
                <div class=" m-2 flex">
                    <div class="font-bold mr-2">
                        Tel:
                    </div>
                    {{ data.tel }}
                </div>

        </div>
              
            </div>
            <!-- {{ data }} -->
        </div>
</template>