<template>
      <div class="row">
          <div class="selector" 
               v-for="(classData, index) in ClassesData" :key="classData.class" 
               v-bind:class="{selected: classData.isSelected}" v-on:click="changeClass(index)">
              {{index + 1 + ' класс'}}              
          </div>
      </div>
</template>

<script>
export default {
    props: ['ClassesData'],
    name: 'DivideByClassesComponent',
    methods: {
        changeClass: function (index) {
            this.ClassesData.forEach(classData => classData.isSelected = false)
            this.ClassesData[index].isSelected = true
        }
    }
}
</script>

<style scoped>
    .row {                
        display: flex;
        justify-content: space-around;
        width: 33%;
        font-size: 25px;        
        padding: 64px;        
    }
    .selector {
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-style: dotted;
    }
    .selected {
        background-color: cornflowerblue;
        color: white;
        text-decoration: none;
    }
</style>