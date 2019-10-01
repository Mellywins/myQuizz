<template>
    <div class="question-box container">
            <b-jumbotron >
         <template v-slot:header>Quizz App</template>

    <template v-slot:lead>
      {{question.question}}
    </template>

    <hr class="my-4">
    <ul class="list-group pb-5">
    <li class="list-group-item" :key="index" v-for="(answr,index) in answers" @click.prevent="selectAnswer(index)" :class="{curSelected:selected===index,
    correct:isCorrect(index)*(selected===correctIndex)*clickedSubmit, wrong:isNotCorrect(index)*clickedSubmit*(selected===index)}"> 
         {{answr}} </li>
    </ul>
    <b-button variant="primary"  @click="correctCounter(),$emit('updateCounter',correctAnswer),notify()" class="p-2">Submit</b-button>
    <b-button variant="success" @click="$emit('nextQ'),resetSel(),ranker()" class="m-4" >Next question</b-button>
    </b-jumbotron>
    </div>
</template>
<script>
export default {
    name:'QuestionBox',
    props:{
        question:Object,
    },
    data:function(){
        return {
            selected: null,
            correctAnswer:0,
            correctIndex:null,
            clickedSubmit:false,
            rank:1,
        }
    },
    computed:{
        answers:function(){
            let answers= [...this.question.incorrect_answers];
            function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                    }
                var cIndex=getRandomInt(answers.length)
                this.correctIndex=cIndex;
            answers.splice(cIndex,0,this.question.correct_answer)
            return answers
            
        },
    },
    methods:{
        selectAnswer:function(ind){
            // setTimeout(
            //     ()=>{this.selected=ind}
            // ,2000)
            this.selected=ind;
            
            
        },
        resetSel(){
            this.selected=null;
            this.clickedSubmit=false;
        },
        correctCounter:function(){
            if (this.answers[this.selected]===this.question.correct_answer && !this.clickedSubmit) {
                this.correctAnswer++;
                this.clickedSubmit=true;
            }
        },
        isCorrect:function(ind){
            return this.answers[ind]===this.question.correct_answer
        },
        notify:function(){
            return this.clickedSubmit=true;
        },
        isNotCorrect(ind){
            this.answers[ind]!=this.question.correct_answer
            return this.answers[ind]!=this.question.correct_answer
        
        },
        ranker:function(){
            this.rank++;
            if (this.rank>=10){
                return this.$emit('gameOver');
            }
        }
    }

}
</script>

<style scoped>
ul li{
    background-color: white;
}
ul li:hover{
    background-color: #EEE;
    cursor: pointer;
}
ul li:active{
    background-color: green
}
.curSelected{
    background-color: lightblue;
}
.correct{
    background-color: lightgreen;

}
.wrong{
    background-color: pink;
}
</style>