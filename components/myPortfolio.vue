<template class="scroll">
<div class="stripe"></div>
<div id="top" class="about">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 sticky-top">
     <a class="navbar-brand" href="#top">My Portfolio</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
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
    <div class="jumbotron" style='text-align:center'>
        <h1>ポートフォリオへようこそ</h1>
        <p>多くのコンテンツはありませんが、どうぞご覧ください。</p>
    </div>
    <div class="jumbotron" style="{margin:auto}">
        <div class="container-fluid">
            <div class="line">
                <ContentButton selfId="prof" myColor="#98fb98" myTitle="プロフィール" 
                myText="
                名前:マオ
                年齢:21歳
                趣味:ゲーム:オンラインゲームやスマブラ、アクションゲームを中心に遊んでいます
                旅行
                鉄道旅にはまっています。"
                ></ContentButton>
                <ContentButton selfId="skill" myColor="yellow" myTitle="スキル"
                myText="使える言語
                C:大学1回生から使い始めた。ポインタが難しい…ｗ
                Python:大学３回生から始めた。Cと比べると、シンプルだが、なかなか慣れない。
                勉強中
                HTML:大学３回生の夏に始めた。テーブル操作のついでに勉強し始めた。
                CSS:HTMLを学ぶついでに一緒にやった。Javascriptとかと絡むとややこしい
                Javascript:インターンシップで勉強を始めた。文法がCと似ていてなれるのに時間がかからなかった。
                だけど、フレームワーク独自の文法もあるのでそこにはてこずっている。"
                ></ContentButton>
                <ContentButton selfId="contet" myColor="aqua" myTitle="コンテンツ" myText="404ページ"
                ></ContentButton>
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
#top{
    transition:fixed;
    position:(0,0);
}
.sq{
    background:yellow;
    Height:100px;
    Width:200px;
    border:solid 2px black;
}
.stripe{
    Height:100%;
    background:repeating-linear-gradient(
        yellow 0,yellow 20px, orange 20px, orange 40px
    );
}
</style>
<script>
import ContentButton from './ContentButton.vue'
    export default{
    data() {
        return {
            sqPos: 100,
            FLAG: true,
            plusButton: "+",
            show: "none"
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
        showing() {
            if (this.show === "none") {
                this.show = "contents";
                this.plusButton = "-";
            }
            else {
                this.show = "none";
                this.plusButton = "+";
            }
        }
    },
    components: { ContentButton }
}
</script>