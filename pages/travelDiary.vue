<template>
    <div class="blurBg">
        <p>MY TRAVEL DIARY</p>
        <div class="discription">
            <p>ここでは、私が旅した記録をテキトーに記しています。</p>
            <p>2022年９月８日～ 北海道旅</p>  
        </div>
        <div class="boxA discription">
            <img src="/TDimg/TDsunrise.jpg" height="108px" width="192px" />
            <p>９月８日の夜に北海道へ向けて出発. 旅路の始まりを担うのはサンライズ号</p>
        </div>
        <div class="boxA">
            <img src="/TDimg/TDroom.jpg" height="108px" width="192px"/>
        </div>
    </div>
    
</template>
<style>
.discription{
    font-size:15px;
    color:rgb(157, 157, 157);
    line-height:20px;
}
.boxA{
    display:flex;
    padding-top:10px;
}
.blurBg{
  width: 100%;
  height: 100%;
  font-size: 32px;
  line-height: 100px;
  padding-left:10px;
  background: url(/TDimg/TDBackground.jpg) no-repeat center;
  background-size: cover;
  position: fixed;
  z-index: 0;
  overflow: hidden;
}
.blurBg:before{
  content: '';
  background: inherit;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
}
</style>
<script>
    export default{
        data(){
            return{

            };
        },
        methods:{

        },
    }
</script>