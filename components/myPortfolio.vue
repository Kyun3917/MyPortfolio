<template>
<div class="about">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
     <a class="navbar-brand" href="#">My Portfolio</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav4">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#">TOP<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">使い方</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">サイトについて</a>
              </li>
         </ul>
     </div>
    </nav>
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
</style>
<script>
    export default{
        data(){
            return{
                sqPos:100,
                FLAG:true
            }
        },
        methods:{
            addLine(){
                this.sqPos+=10
                if(this.sqPos>500)
                    this.FLAG=false
            },
            removeLine(){
                this.sqPos-=10
                if(this.sqPos<100)
                    this.FLAG=true
            }      
        },
    }
</script>