<template>
  <div class="monster">
    <h1>{{ monster.name }}</h1>
    <arrayAttributes :attributes="monster.attributes"/>
  </div>
</template>

<script>
import arrayAttributes from '@/components/array_attributes'

export default {
    name: 'monster',
    components: {
        arrayAttributes
    },
    data () {
        let monster_id = this.$router.currentRoute.value.params.monster
        return {
            monster: this.$bestiary[monster_id],
        }
    }
}

</script>
