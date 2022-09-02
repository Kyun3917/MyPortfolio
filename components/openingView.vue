<template>
    <transition-group name="op" tag="opAnimation">
        <li class="circle" v-bind:style="{width:radius+'px',height:radius+'px',top:cPosX+'px',left:cPosY+'px',
        animation:'fCircle 2s linear infinite'}" v-show="Move" key="op3"></li>
        <li class="stripe1" v-bind:style="{width:fullwidth,height:fullheight}" v-show="Move" key="op2"></li>
        <li class="click" ref="click2" key="op1" v-bind:style="{left:Tx+'px',top:Ty+'px',cursor:'pointer',overflow:prohibitedScr}" v-show="Move"
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
.circle{
position:fixed;
background:rgba(255, 166, 0, 0);
border:solid 5px rgb(38, 163, 0);
height:100px;
width:100px;
top:100px;
left:100px;
border-radius:50%;
z-index:2002;
}
@keyframes fCircle{
    0%{
        opacity:1;
        transform:scale(0);
    }
    50%{
        opacity:0;
        transform:scale(1);
    }
    100%{
        opacity:0;
    }
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
            prohibitedScr:"hidden",
            radius:100,
            cPosX:Math.random()*10,
            cPosY:Math.random()*10,
        };
    },
    methods:{
        handleResize(){
            this.fullwidth=window.innerWidth+'px'
            this.fullheight=window.innerHeight+'px'
        },
        Moving(){
            this.Move=!this.Move
            this.prohibitedScr="visible"
            
        },
        getTarget(){
            this.Tx=(-1*this.$refs.click2.clientWidth+window.innerWidth)/2
            this.Ty=(-1*this.$refs.click2.clientHeight+window.innerHeight)/2
        },
        cClick(e){
            this.radius=Math.random()*400
            this.cPosX=e.clinetX
            this.cPosY=e.clientY
        }
    },
    mounted(){
        window.addEventListener('resize',this.handleResize)
        this.getTarget()
        window.addEventListener('resize',this.getTarget)
        window.addEventListener('click',this.cClick)
    
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.handleResize)
    }
}
</script>, 