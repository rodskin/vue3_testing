<template>
    <div class="player">
        <goBack />
        <h1><input v-model="player.name" /></h1>
        <arrayAttributes :attributes="this.$player.attributes"/>
    </div>
</template>

<script>
    import arrayAttributes from '@/components/array_attributes'
    import goBack from '@/components/back_button'

    export default {
        name: 'player',
        components: {
            arrayAttributes, goBack
        },
        data () {
            return {
                player: this.$player
            }
        }
    }
</script>
