<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>

    /*import Stock from './Stock.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }*/



import Stock from './Stock.vue'

export default {
    data(){
        return{
            stocks:[
                {id:1,name:'BMW',price:120},
                {id:2,name:'RTE1',price:121},
                {id:3,name:'TED',price:122}
            ]
        }
    },
    components:{
        appStock:Stock
    }
}

</script>