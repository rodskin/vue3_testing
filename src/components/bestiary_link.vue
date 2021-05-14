<template>
    <a :class="link_class" :href="bestiary_href">
        <font-awesome-icon icon="exclamation-triangle" v-if="link_class.indexOf('link_ko') != -1" />
        {{ monster_name }}
    </a>
</template>

<script>
export default {
    name: 'bestiary_link',
    props: ['id'],
    data() {
        let bestiary = {
            name: ''
        }
        return {
            bestiary: bestiary,
            link_class: 'bestiary_link',
            bestiary_href: '/bestiary/' + this.id,
            monster_name: this.id
        }
    },
    created () {
        if (typeof this.$bestiary[this.id] === 'undefined') {
            this.link_class = [
                'bestiary_link_ko',
                'link_ko'
            ].join(' ')

        } else {
            this.bestiary = this.$bestiary[this.id]
            this.monster_name = this.$bestiary[this.id].name
        }
    }
}
</script>
