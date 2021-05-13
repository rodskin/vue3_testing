<template>
    <pageCover/>
</template>

<script>
// @ is an alias to /src
import pageCover from '@/pages/cover.vue'

export default {
    name: 'home',
    components: {
        pageCover
    }
}
</script>
<style scoped lang="scss">
    .bestiary_link {
        color: red;
        text-decoration: none;
    }
</style>
