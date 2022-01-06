<template>
  <div class="container">  
    <divide-by-classes-component v-bind:ClassesData="LearningPlan"/>   
     <div class="content">
        {{LearningPlan.find(classData => classData.isSelected).text}}
     </div>
  </div>
</template>

<script>
import DivideByClassesComponent from "./DivideByClassesComponent.vue"

export default {
  data() {
    return {
      LearningPlan : [
        {text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam illo animi ipsa quia quis impedit! Alias fugiat sint nam! Nihil assumenda voluptatem ab aliquid ex tempora ad fugiat natus!', isSelected: true},
        {text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam illo animi ipsa quia quis impedit! Alias fugiat sint nam! Nihil assumenda voluptatem ab aliquid ex tempora ad fugiat natus!', isSelected: false},
        {text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam illo animi ipsa quia quis impedit! Alias fugiat sint nam! Nihil assumenda voluptatem ab aliquid ex tempora ad fugiat natus!', isSelected: false},
        {text: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam illo animi ipsa quia quis impedit! Alias fugiat sint nam! Nihil assumenda voluptatem ab aliquid ex tempora ad fugiat natus!', isSelected: false},
      ]
    }
  },
  name: 'LearningPlanPage',
  components: {
    DivideByClassesComponent
  }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>