<template>
  <ul>
    <li v-for="item in items">
      {{item.message}}
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      items :[
        {message : 'foo'},
        {message: 'bar'}
      ]
    }
  }
}
</script>
