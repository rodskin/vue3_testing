<template>
    <div class="page">
        <h1>test page</h1>
        
        <component :is="pageLoaded"></component>
    </div>
</template>

<script>
    export default {
        name: 'page',
        components: {
            pageLoaded: () => import('@/pages/start.vue')
        }
    }
</script>
