<template>
    <a :class="link_class" :href="page_href">
        <font-awesome-icon icon="exclamation-triangle" v-if="link_class.indexOf('link_ko') != -1" />
        <span v-if="link_class == 'page_link_ko'">{{ page_slug }} -> </span>{{ page_title }}
    </a>
</template>

<script>
export default {
    name: 'page_link',
    props: ['page', 'title'],
    data() {
        return {
            link_class: 'page_link',
            page_href: '/page/' + this.page,
            page_slug: this.page,
            page_title: this.title
        }
    },
    created() {
        try {
            // test pour vérifier si le fichier de la page existe
            this.storyToRead = require('@/pages/' + this.page)
        } catch (e) {
            this.link_class = [
                'page_link_ko',
                'link_ko'
            ].join(' ')
        }
    }
}
</script>
