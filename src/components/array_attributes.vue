<template>
    <table class="array_attributes">
        <thead>
            <tr>
                <th v-for="(item, index) in attributes" :item="item" :key="index">{{ index }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="(item, index) in attributes" :item="item" :key="index">{{ item }} <span>({{ this.$library.calculBonus(item) }})</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'array_attributes',
    props: ['attributes']
}
</script>
