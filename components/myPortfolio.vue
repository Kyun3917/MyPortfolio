<template class="scroll">
<div id="top" class="about">
    <OpeningView/>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 sticky-top">
     <a class="navbar-brand" href="#top">My Portfolio</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        </span>
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
    <div class="lines">
    <div class="jumbotron" style='text-align:center'>
        <h1>ポートフォリオへようこそ</h1>
        <p>多くのコンテンツはありませんが、どうぞご覧ください。</p>
    </div>
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
    <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px',
    'border-style':'solid','border-width':2+'px','border-color':'black'}"
     @click="addLine"></div>
     </div><div v-else-if="FLAG===false">
     <div v-bind:style="{background:'yellow',width:sqPos+'px',height:100+'px',
    'border-style':'solid','border-width':2+'px','border-color':'black'}"
     @click="removeLine"></div>
     </div>
</div>
</template>
<style>
.lines{
    position:relative;
    border:solid 2px;
    animation:expandLine 2s linear infinite;
    transition:2s;
}
.lines:before{
    content:'';
    position:absolute;
    left:100%;
    bottom:0;
    width:0;
    transform:translateX(-100%);
    border-bottom:solid 2px black;
    animation:expandLine 3s linear infinite;
}
@keyframes expandLine{
    0%,100%{
       border-width:0px;
       border-color:black;
       width:0%;
    }
    50%{
        border-width:2px;
        border-color:red;
        width:100%;
    }

}
#top{
    transition:fixed;
}

.sq:hover{
    background:yellow;
    Height:100px;
    Width:200px;
    border:solid 2px black;
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
            plusButton: "+",
        };
    },
    methods: {
        addLine() {
            this.sqPos += 10;
            if (this.sqPos > 500)
                this.FLAG = false;
        },
        removeLine() {
            this.sqPos -= 10;
            if (this.sqPos < 100)
                this.FLAG = true;
        },

    },
    components: { ContentButton,OpeningView }
}
</script>