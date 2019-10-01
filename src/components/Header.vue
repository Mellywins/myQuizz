<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled>Fancy Quizz App</b-nav-item>
            <b-nav-item disabled>Counter: {{counting}}/10</b-nav-item>
            
        </b-nav>
    </div>
</template>

<script>
export default {
    props:{
        counting: Number,
    }
}
</script>