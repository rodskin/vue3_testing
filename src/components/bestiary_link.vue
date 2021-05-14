<template>
    <a class="bestiary_link" :href="bestiary_href">{{ monster_name }}</a>
</template>

<script>
export default {
    name: 'bestiary_link',
    props: ['id'],
    data() {
        return {
            bestiary_href: '/bestiary/' + this.id,
            monster_name: this.$bestiary[this.id].name
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
