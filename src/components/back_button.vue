<template>
    <button class="go_back" @click="goBack">
        <font-awesome-icon icon="undo-alt" />
    </button>
</template>

<script>
export default {
    methods: {
        goBack () {
            return this.$router.go(-1)
        }
    }
}
</script>
