<template>
    <div class="page">
        <h1>test page</h1>
        
        <component :is="pageLoaded"/>
    </div>
</template>

<script>
    import test from '@/pages/start'
    
    export default {
        name: 'page',
        components: {
            test
        },
        data() {
            return {
                pageLoaded: "test"
            }
        }
    }
</script>
