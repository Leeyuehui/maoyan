<template>
   <div id="circle"></div>
</template>

<style scoped>
#circle{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 80px;
    height: 80px;
    border: 5px solid transparent;
    border-left:5px solid #ff5500;
    border-right-color:#0c80fe;
    border-radius: 100%;
    animation: loading1 1s infinite linear;
}
@keyframes loading1{
    from{transform: rotate(0deg)}to{transform: rotate(360deg)}
}
</style>