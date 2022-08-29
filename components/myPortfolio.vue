<template class="scroll">
<div class="about">
    <nav  id="top" class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
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
                <ContentButton myColor="#98fb98" myTitle="プロフィール" myText="
                    年齢:21歳<br>
                    趣味:ゲーム、旅行<br/>
                    あああああああああああああああああああああああああああああああああああああああああああああああ
                    あああああああああああああああああああああああああああああああああああああああああああ"
                ></ContentButton>
                <ContentButton myColor="yellow" myTitle="スキル" myText="
                    使える言語:C, Python
                    勉強中:HTML, CSS, Javascript"
                ></ContentButton>
                <ContentButton myColor="aqua" myTitle="コンテンツ" myText="
                    404ページ"
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