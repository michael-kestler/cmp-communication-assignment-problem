<template>
    <header><h2>Username</h2></header>
    <h3>Age</h3>
</template>

<script>
export default{
    props: {
        userName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }

}
    


</script>