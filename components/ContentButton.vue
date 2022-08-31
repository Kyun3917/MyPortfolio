<template>
    <div v-bind="{id:selfId}">
       <div class="col-fluid" v-bind:style="{'background-color':myColor,cursor:'pointer'}" 
            type="checkbox" @click="showing">
            <div class="border-left border-primary" style="padding:10px">
                <h2 style='font-size:large'>{{myTitle}} [{{plusButton}}]</h2>
                <div class="col-sm-8 col-sm-offset-2">
                    <transition name="text">
                        <div  id="mainText"  v-show="show"><slot /></div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .text-enter,.text-leave-to{
        opacity:0;
    }
    .text-enter-to,.text-leave{
        opacity:1;
    }
    .text-enter-active,.text-leave-active{
        transition:all 500ms;
    }
</style>
<script>
    export default{
        data(){
            return{
                plusButton:"+",
                clear:100,
                show:false,
            }
        },
        props:[
            "myTitle",
            "myColor",
            "selfId",
        ],
        methods:{
            showing(){
                this.show=!this.show
                if(this.show===true){
                    this.plusButton="-"
                }else{
                    this.plusButton="+"
                }
            },
        },
    }
</script>