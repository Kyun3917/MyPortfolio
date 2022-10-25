<template class="scroll">
<div id="top" class="about" style="scroll-behavior: smooth;">
    <OpeningView/>
    <b-navbar toggleable type="dark" variant="dark" fixed='top'>
    <b-navbar-brand href="#">MyPortfolio</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-up"></b-icon>
        <b-icon v-else icon="chevron-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="smoothly('top')">TOP</b-nav-item>
        <b-nav-item href="#" @click="smoothly('prof')">Profile</b-nav-item>
        <b-nav-item href="#" @click="smoothly('hobby')">Hobby</b-nav-item>
        <b-nav-item href="#" @click="smoothly('skill')">Skill</b-nav-item>
        <b-nav-item href="#" @click="smoothly('content')">Contrnts</b-nav-item>
        <!-- b-nav-item href="#" disabled>Disabled</b-nav-item -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <div class="lines1"></div>
    <div class="jumbotron lines1" style='text-align:center'>
        <h1>ポートフォリオへようこそ</h1>
        <p>多くのコンテンツはありませんが、どうぞご覧ください。</p>
    </div>
    <div class="jumbotron" style="{margin:auto}">
        <div class="container-fluid">
            <div class="line">
                <ContentButton selfId="prof" myColor="#98fb98" myTitle="プロフィール" >
                    <p>名前：マオ</p>
                    <p>年齢:21歳</p>
                </ContentButton>
                <ContentButton selfId="hobby" myColor="#CCCCFF" myTitle="趣味">
                    <p>趣味:ゲーム、旅行</p>
                    <p>オンラインゲームやスマブラ、アクションゲームを中心に遊んでいます.
                    旅行鉄道旅にもはまっています。</p>
                </ContentButton>
                <ContentButton selfId="skill" myColor="yellow" myTitle="スキル">
                    <p>使える言語</p>
                    <p>C：大学1回生から使い始めた。ポインタが難しい…ｗ</p>
                    <p>Python：大学３回生から始めた。Cと比べると、シンプルだが、なかなか慣れない。</p>
                    <p>勉強中</p>
                    <p>HTML：大学３回生の夏に始めた。テーブル操作のついでに勉強し始めた。</p>
                    <p>CSS:HTMLを学ぶついでに一緒にやった。Javascriptとかと絡むとややこしい</p>
                    <p>Javascript：インターンシップで勉強を始めた。フレームワーク独自の文法にてこずっている。</p>
                </ContentButton>
                <ContentButton selfId="content" myColor="aqua" myTitle="コンテンツ">
                    <ul>
                        <li>
                            <a href="404.html" target="_blank">
                            404ページ<br>
                            <img src="/image/404thumbnail.jpg" title="404 not found" width="192px" height="108px">
                    </a>
                        </li>
                        <li>
                            <a href="/microbit/microbitMyGyro.html" target="_blank">
                            microbitジャイロページ<br>
                            <img src="/image/microbit_thumbnail.jpg" title="microbitジャイロ" width="192px" height="108px">
                    </a>
                        </li>
                    </ul>
                    <!--<a href="microbitSampleGetTemp.html" target="_blank">microBit温度計</a>
                    <a href="microbitGyroSample.html" target="_blank">microbitゲーム</a>
                    <a href="microbitButtonSample.html" target="_blank">microbitボタンサンプル</a>--> 
                </ContentButton>
            </div>
        </div>
    </div>
    <!--<div v-if="FLAG===true">
    <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px','border-radius':50+'%',
    'border-style':'solid','border-width':2+'px','border-color':'black',cursor:'pointer'}"
     @click="addLine"></div>
     </div><div v-else-if="FLAG===false">
     <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px','border-radius':50+'%',
    'border-style':'solid','border-width':2+'px','border-color':'black',cursor:'pointer'}"
     @click="removeLine"></div>
     </div>
     <div v-if="count>=1">
    </div>-->
    <p class="view"></p>
     <a @click="smoothly('top')" style="cursor:pointer">
        <div class="topScr">
            <p v-bind:style="{'padding-top':10+'%', position:fixed, 'z-index':20}">TOP</p>
        </div>
    </a>
</div>
</template>
<style>
.line{
    position:relative;
}
.lines1{
    position:relative;
    margin-top:50px;
}
.lines1::before{
    position:absolute;
    content:"";
    height:101%;
    width:100%;
    left:0;
    top:0;
    padding-bottom:1px;
    background:linear-gradient(
       to right,white 0%, orange 50%,white 100%
    );
    animation:expandLine 2s  infinite;
    z-index:-1;
}
@keyframes expandLine{
    0%,100%{
        transform:scaleX(0);
    }
    50%{
        transform:scaleX(1);
    }
}

.sq{
    background:yellow;
    Height:100px;
    Width:200px;
    border:solid 2px black;
}
.topScr{
    position:fixed;
    color:rgba(0, 0, 0, 0.4);
    right:0;
    bottom:0;
    background:rgba(255, 250, 175, 0.4);
    border:solid 1px;
    height:50px;
    width:50px;
    border-radius:50%;
    text-align:center;
}
.topScr::before{
    position:absolute;
    content:"↑";
    font-size:medium;
    height:100%;
    width:100%;
    left:0;
    top:0;
    padding-top:10%;
    transform-origin:bottom;
    transform:scaleY(0);
    transition:0.3s;
    border-radius:50%;
}
.topScr:hover::before{
    transform:scaleY(1);
    background:rgb(255, 204, 115,1);
    border:solid 2px rgb(255, 204, 115,1);
}
ul{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
}
</style>
<script>
import ContentButton from './ContentButton.vue'
import OpeningView from './openingView.vue';
    export default{
    data() {
        return {
            sqPos: 100,
            FLAG: true,
            toggleButton:false,
            count:0,
            scrY:100,
        };
    },
    methods: {
        addLine() {
            this.count++
            this.sqPos += 10;
            if (this.sqPos > 500)
                this.FLAG = false;
        },
        removeLine() {
            this.sqPos -= 10;
            if (this.sqPos < 100)
                this.FLAG = true;
        },
        smoothly(scrId){
            document.getElementById(scrId).scrollIntoView({
                behavior:"smooth",
                
                
            })
        },
    },
    components: { ContentButton, OpeningView}
}
</script>

