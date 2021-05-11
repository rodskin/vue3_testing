<template>
  <div class="monster">
    <h1>{{ $route.params.monster }}</h1>
    <monsterSheet :attributes="attributes"/>
  </div>
</template>

<script>
import monsterSheet from '@/components/monster_sheet.vue'
import bestiary from '../datas/bestiary.js'

export default {
    name: 'Monster',
    components: {
        monsterSheet
    },
    data () {
        let monster_id = this.$router.currentRoute.value.params.monster
        return {
            attributes: bestiary[monster_id]
        }
    },
    mounted () {
    }
}

</script>
