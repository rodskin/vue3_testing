<template>
    <a class="page_link" :href="page_href">{{ page_title }}</a>
</template>

<script>
export default {
    name: 'page_link',
    props: ['page', 'title'],
    data() {
        return {
            page_href: '/page/' + this.page,
            page_title: this.title
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

