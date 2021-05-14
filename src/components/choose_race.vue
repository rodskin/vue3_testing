<template>
    <select>
        <option value="-">Choisir ta race</option>
        <option v-for="(item, index) in races" :item="item" :key="index">
            {{ item.label }}
        </option>
    </select>

</template>

<script>
    import races from '@/datas/races.js'

    export default {
        data () {
            return {
                races: races,
                player: this.$player
            }
        }
    }
</script>
