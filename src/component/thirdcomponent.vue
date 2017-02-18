<template >
<div id="loging">
    <div class="loading-overlay">
        <div
          v-bind:class="{'danger' : bounce1}"
          class="sk-child">
          333
        </div>
        <div
          v-bind:class="{'danger': bounce2}"
          class="sk-child ">
          {{showLoading}}</div>
        <div
          v-bind:class="classObject"
        class="sk-child">
          33333
        </div>
        <div v-bind:class="[obje1,obje2]"></div>
        <div v-bind:class="[bounce2?obje1:obje2]"></div>
        <a v-if="ok">link</a>
        <a v-else>ok is not ok</a>
        <answer-com></answer-com>
    </div>
</div>
</template>

<script>
import answerCom from './answer.vue';
export default {
  data(){
    return {
      ok:false,
      showLoading :false,
      bounce1:false,
      bounce2:true,
      bounce3:false,
      classObject : {
        first : true,
        second : false,
      },
      obje1: 'ni',
      obje2 :'hao'
    }
  },
  components: {
    answerCom
  }
}

</script>
