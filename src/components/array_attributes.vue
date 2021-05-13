<template>
    <table class="array_attributes">
        <thead>
            <tr>
                <th v-for="(item, index) in attributes" :item="item" :key="index">{{ index }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="(item, index) in attributes" :item="item" :key="index">{{ item }} <span>({{ calculBonus(item) }})</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import library from '../lib'

export default {
    name: 'array_attributes',
    props: ['attributes'],
    data () {
        return {
            monster: this.attributes,
        }
    },
    methods: {
       calculBonus: library.calculBonus
    }
}
</script>
