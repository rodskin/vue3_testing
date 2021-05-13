<template>
    <a class="bestiary_link" v-bind:href="bestiary_href">{{ monster.name }}</a>
</template>

<script>
export default {
    name: 'bestiary_link',
    props: ['id'],
    created () {
        console.log(this.$bestiary)
    },
    data() {
        console.log(this.id)
        return {
            bestiary_href: '/bestiary/gobelin',
            monster: this.$bestiary.gobelin
        }
    }
}
</script>

<style scoped lang="scss">
    .bestiary_link {
        color: red;
        text-decoration: none;
    }
</style>
