<template>
    <div v-bind="{id:selfId}">
       <div class="col-fluid" v-bind:style="{'background-color':myColor,cursor:'pointer'}" type="checkbox" @click="showing" 
       @mouseover="gageFlag=true" @mouseleave="gageFlag=false">
            <div class="border-left border-primary" style="padding:10px">
                <h2 style='font-size:large'>{{myTitle}} [{{plusButton}}]</h2>
                <div class="col-sm-8 col-sm-offset-2">
                    <div class="gage gageLeft" ></div>
                    <transition name="text">
                        <div  id="mainText"  v-show="show"><slot /></div>
                    </transition>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.col-fluid:before{
    position:relative;
    border:none 2px;
    border-width:0%;
}
.col-fluid:hover{
    border:solid 2px;
    border-width:100%;
    border-color:black;
    transition:all 0.3s;
}

.text-enter,.text-leave-to{
    opacity:0;
    transform-origin:left;
    transform:scaleX(0);

}
.text-enter-to,.text-leave{
    opacity:1;
    transform:scaleX(1);
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
                gradRate:0,
                mouseFlag:false,
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
                    this.gradRate=100
                }else{
                    this.plusButton="+"
                    this.gradRate=0
                }
            },
        },
    }
</script>