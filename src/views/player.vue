<template>
  <div class="player">
    <h1>{{ this.$player.name }}</h1>
    <arrayAttributes :attributes="this.$player.attributes"/>
  </div>
</template>

<script>
import arrayAttributes from '@/components/array_attributes.vue'
import races from '@/datas/races.js'

export default {
    name: 'player',
    components: {
        arrayAttributes
    },
    created () {
        console.log(races.demi_elfe)
    },
    mounted () {
    }
}

</script>
