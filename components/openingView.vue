<template>
    <transition-group name="op" tag="opAnimation">
        <li class="stripe1" v-bind:style="{width:fullwidth,height:fullheight}" v-show="Move" key="op2"></li>
        <li class="click" ref="click2" key="op1" v-bind:style="{left:Tx+'px',top:Ty+'px',cursor:'pointer'}" v-show="Move"
        @click.once="Moving">CLICK</li>
    </transition-group>
</template>
<style>
opAnimation{
    list-style:none;
}
.click{
    position:fixed;
    left:50%;
    top:50%;
    font-size:50px;
    color:rgb(61, 17, 17);
    z-index:2001;

    animation:flash 2s linear infinite;
}
@keyframes flash{
    0%,100%{
        opacity: 1;
        color:black
    }
    50%{
        opacity:0;
        color:red;
    }
}
.stripe1{
    position:fixed;
    background:-moz-linear-gradient(
        left,white,orange
    );
    background:-webkit-linear-gradient(
        left, white,orange
    );
    background:linear-gradient(
        to right,white,orange
    );

    z-index: 2000;
}
.op-leave{
    opacity:1;
}
.op-leave-to{
    opacity:0;
    transform:translateX(1000px);
}
.op-leave-active{
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
            Tx:window.innerWidth/2+'px',
            Ty:window.innerHeight/2+'px',
        };
    },
    methods:{
        handleResize(){
            this.fullwidth=window.innerWidth+'px'
            this.fullheight=window.innerHeight+'px'
        },
        Moving(){
            this.Move=!this.Move
        },
        getTarget(){
            this.Tx=(-1*this.$refs.click2.clientWidth+window.innerWidth)/2
            this.Ty=(-1*this.$refs.click2.clientHeight+window.innerHeight)/2
        },
    },
    mounted(){
        window.addEventListener('resize',this.handleResize)
        this.getTarget()
        window.addEventListener('resize',this.getTarget)
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.handleResize)
    }
}
</script>, 