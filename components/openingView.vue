<template>
    <transition-group name="list" tag="ul">
        <li class="click" v-bind:style="{position:(Tx,Ty)}" key="op1">クリック</li>
        <li class="stripe1" v-bind:style="{width:fullwidth,height:fullheight}" v-show="Move"
        @click="Moving" key="op2"></li>
    </transition-group>
</template>
<style>
.click{
    position:absolute;
    font-size:large;
    z-index:2001;
}
.stripe1{
    position:fixed;
    background:repeating-linear-gradient(
        yellow 0px,yellow 50px, orange 50px, orange 100px
    );
    z-index: 2000;
}
.ul-leave{
    opacity:1;
}
.ul-leave-to{
    opacity:0;
    transform:translateX(1000px);
}
.ul-leave-active{
    transition:all 3s;
}
</style>
<script>
export default{
    data(){
        return{
            fullwidth:window.innerWidth+'px',
            fullheight:window.innerHeight+'px',
            Move:true,
            Tx:window.innerWidth/2,
            Ty:window.innerHeight/2,
        };
    },
    methods:{
        handleResize(){
            this.fullwidth=window.innerWidth+'px'
            this.fullheight=window.innerHeight+'px'
        },
        Moving(){
            this.Move=!this.Move
        }
    },
    mounted(){
        window.addEventListener('resize',this.handleResize);
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.handleResize)
    }
}
</script>, 