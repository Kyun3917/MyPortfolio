<template>
       <div id="prof" class="col-fluid" v-bind:style="{'background-color':myColor,cursor:'pointer'}" 
            type="checkbox" @click="showing">
            <div class="border-left border-primary" style="padding:10px">
                <h2 style='font-size:large'>{{myTitle}} [{{plusButton}}]</h2>
                <p class="col-sm-8 col-sm-offset-2" v-bind:style="{display:show}">
                {{myText}}
                </p>
            </div>
        </div>

</template>
<script>
    export default{
        data(){
            return{
                plusButton:"+",
                show:"none",
            }
        },
        props:[
            "myTitle",
            "myColor",
            "myText"
        ],
        methods:{
            showing(){
                if(this.show==="none"){
                    this.show="contents"
                    this.plusButton="-"
                }
                else{
                    this.show="none"
                    this.plusButton="+"
                } 
            }   
        },
    }
</script>