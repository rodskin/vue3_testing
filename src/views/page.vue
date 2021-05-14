<template>
    <div class="page">
        <component :is="pageLoaded"/>
    </div>
</template>

<script>
    //import test from '@/pages/start'
    import { shallowRef, defineAsyncComponent } from 'vue'    
    export default {
        name: 'page',
        data () {
            return {
                pageLoaded: ''
            }
        },
        computed: {
            loader() {
                let page = this.$router.currentRoute.value.params.page
                return () => import(`@/pages/${page}`)
            }
        },
        created () {
            this.pageLoaded = shallowRef(defineAsyncComponent(() => this.loader()));
        }
    }
</script>
