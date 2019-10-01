<template>
    <div>
        <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Game Over!</h1>
                        <p class="lead">You scored {{score}}</p>
                        <button type="button" class="btn btn-dark" @click="$emit('playAgain')">Play again!</button>
                    </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'End',
    props:{
        score:Number,
    }
}
</script>


<style scoped>

</style>