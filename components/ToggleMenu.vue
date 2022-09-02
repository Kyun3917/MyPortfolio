<template>
    <div class="toggleMenu">
        <a v-bind:href="{selfHref}">
            <h1>{{title}}</h1>
        </a>
    </div>
</template>
<style>
.toggleMenu{
    position:fixed;
    right:0;
    background:green;
    cursor:pointer;
    z-index:20;
}
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        props:[
            "title",
        ]
    }
</script>