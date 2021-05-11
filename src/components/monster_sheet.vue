<template>
    <div class="monster_sheet">
        <h1>MONSTER_SHEET</h1>
        <table>
            <thead>
                <tr>
                    <th v-for="(item, index) in monster.attributes" :item="item" :key="index">{{ index }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for="(item, index) in monster.attributes" :item="item" :key="index">{{ item }} <span>({{ calculBonus(item) }})</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import library from '../lib'
import bestiary from '../datas/bestiary.js'

export default {
    name: 'monster_sheet',
    created () {
    },
    data () {
        console.log(bestiary)
        let monster_id = this.$router.currentRoute.value.params.monster
        return {
            monster: bestiary[monster_id],
        }
    },
    methods () {
       calculBonus = library.calculBonus 
    }
}
</script>
