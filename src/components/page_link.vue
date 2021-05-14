<template>
    <a class="page_link" :href="page_href">test</a>
</template>

<script>
export default {
    name: 'page_link',
    props: ['filename', 'title'],
    data() {
        return {
            page_href: '/page/' + this.filename,
        }
    }
}
</script>

<style scoped lang="scss">
    .page_link {
        color: cyan;
        text-decoration: none;
        font-weight: bold;
    }
</style>

