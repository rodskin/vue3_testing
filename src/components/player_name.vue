<template>
    <span class="player_name">{{ playerName }}</span>
</template>

<script>
export default {
    name: 'player_name',
    data() {
        return {
            playerName: this.$player.name
        }
    }
}
</script>
