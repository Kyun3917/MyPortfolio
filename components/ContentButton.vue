<template>
    <div v-bind="{id:selfId}">
       <div class="col-fluid box" v-bind:style="{'background-color':myColor,cursor:'pointer'}" type="checkbox" @click="showing">
            <div class="border-left border-primary" style="padding:10px">
                <h2 v-bind:style="{'font-size':large}">{{myTitle}} [{{plusButton}}]</h2>
                <div class="col-sm-8 col-sm-offset-2">
                    <transition name="text">
                        <div  id="mainText" v-show="show"><slot /></div>
                    </transition>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style>
h2{
    position:relative;
    z-index:10;
}
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
.box{
    position:relative;
}
.box::before{
    position:absolute;
    content:'';
    width:100%;
    height:100%;
    top:0;
    left:0;
    transform-origin:left;
    transform:scaleX(0);
    transition:all 0.5s;
    z-index:0;
}
.box:hover::before{
    transform:scaleX(1);
    background:rgb(252, 200, 200);
    z-index:0;
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