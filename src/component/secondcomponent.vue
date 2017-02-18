<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <ul>
      <li v-for ="article in articles">
        {{article.title}}
      </li>
    </ul>
    <a>wrrtten by {{author}}</a>
     <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>

</template>

<script>
  export default {
    name:'second',
    data(){
      return {
        author : "jinkey-love",
        articles : [],
      }
    },
    mounted : function (){
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
        headers: {
        },emulateJSON:false,
      }).then((response)=>{
        this.articles = response.data.subjects;
      }).catch((err)=>{
        console.log(err);
      })
    }
  }

</script>
<style></style>
