<template>
    <div class="page">
        <h1>test page</h1>
        
        <component :is="pageLoaded"></component>
    </div>
</template>

<script>
    import myPages from '@/pages'
    export default {
        name: 'page',
        components: {
            pageLoaded: myPages.start
        }
    }
</script>
