<template>
  <div id="app">
    <Header :counting="corCount"/>
    <QuestionBox v-if="questions.length && displayValue" :question="questions[index]" @nextQ="incrementQ" @updateCounter="update" @gameOver="display" />
    <End v-if="questions.length &&(displayValue==false)" :score="corCount" @playAgain="resetGame()"/>
  </div>
</template>

<script>
import Header from './components/Header'
import QuestionBox from './components/QuestionBox'
import End from './components/End'
export default {
  name: 'app',
  components: {
    Header,
    QuestionBox,
    End,
  },
  data(){
    return{
      questions:[],
      index:0,
      corCount:0,
      displayValue:true,
    }
  },

  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple',{
      method:'get'
    }).then((respon)=>{
      return respon.json()
    }).then((jsonData)=>{
      this.questions=jsonData.results
      
    })
  },
  methods:{
    incrementQ:function(){
      this.curSel=null;
      if(this.index===9) {
        this.index=0;
      } else {
      this.index++;}


    },
    update:function(val){
      this.corCount=val;
      
    },
    display:function(){
    this.displayValue=false;
  },
  resetGame:function(){
      this.index=0;
      this.corCount=0;
      this.displayValue=true;
  }
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
