<template class="scroll">
<div id="top" class="about" style="scroll-behavior: smooth;">
    <OpeningView/>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
     <a class="navbar-brand" href="#top">My Portfolio</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation"
     @click="toggleButton=!toggleButton">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav4">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#top">TOP<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#prof">プロフィール</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#skill">スキル</a>
              </li>
              <li class="nav-item">
                    <a class="nav-link" href="#contet">コンテンツ</a>
              </li>
         </ul>
     </div>
    </nav>
    <div class="toggleBar" v-show="toggleButton">
        <ToggleMenu selfHref="#prof" title="プロフィール"/>
    </div>
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
                    <p>
                    趣味:ゲーム:オンラインゲームやスマブラ、アクションゲームを中心に遊んでいます.
                    旅行鉄道旅にはまっています。
                    </p>
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

                <ContentButton selfId="contet" myColor="aqua" myTitle="コンテンツ">
                    <a href="404.html" target="_blank">
                        404ページ<br>
                        <img src="404thumbnail.jpg" title="404 not found" width="192px" height="108px">
                    </a>
                </ContentButton>
            </div>
        </div>
    </div>
    <div v-if="FLAG===true">
    <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px','border-radius':50+'%',
    'border-style':'solid','border-width':2+'px','border-color':'black',cursor:'pointer'}"
     @click="addLine"></div>
     </div><div v-else-if="FLAG===false">
     <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px','border-radius':50+'%',
    'border-style':'solid','border-width':2+'px','border-color':'black',cursor:'pointer'}"
     @click="removeLine"></div>
     </div>
     <div v-if="count>=1">
        <p>aaaaaa</p>
    </div>
     <a @click="smoothly" style="cursor:pointer">
        <div class="topScr">
            <p v-bind:style="{'padding-top':10+'%', position:fixed, 'z-index':20}">TOP</p>
        </div>
    </a>
    <AbcDefg/>
</div>
</template>
<style>
.lines1{
    position:relative;
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
.toggleBar{
    transition:fixed;
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
</style>
<script>
import ContentButton from './ContentButton.vue'
import OpeningView from './openingView.vue';
import ToggleMenu from './toggleMenu.vue';
    export default{
    data() {
        return {
            sqPos: 100,
            FLAG: true,
            toggleButton:false,
            count:0,
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
        smoothly(){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        },
    },
    components: { ContentButton, OpeningView, ToggleMenu}
}
</script>