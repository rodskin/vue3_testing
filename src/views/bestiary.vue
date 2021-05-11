<template>
  <div class="monster">
    <h1>{{ $route.params.monster }}</h1>
    <monsterSheet/>
  </div>
</template>

<script>
import monsterSheet from '@/components/monster_sheet.vue'

export default {
    name: 'Monster',
    components: {
        monsterSheet
    },
    mounted () {
    }
}

</script>
