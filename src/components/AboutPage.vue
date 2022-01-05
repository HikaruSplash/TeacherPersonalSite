<template>  
  <div class="container">        
    <div class="row">      
      <div class="column-66">
        <p align="left">
          &emsp;
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita sed similique sapiente praesentium, voluptas necessitatibus aperiam, reiciendis tenetur sunt perferendis fuga quo, soluta minus cumque esse sequi facilis quae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita sed similique sapiente praesentium, voluptas necessitatibus aperiam, reiciendis tenetur sunt perferendis fuga quo, soluta minus cumque esse sequi facilis quae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita sed similique sapiente praesentium, voluptas necessitatibus aperiam, reiciendis tenetur sunt perferendis fuga quo, soluta minus cumque esse sequi facilis quae!
        </p>
      </div>
      <div class="column-33">        
        <img src="https://www.w3schools.com/howto/img_avatar.png" style="width: 250px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    box-sizing: border-box;
  }
  .container {
    padding: 64px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .row div {    
    padding: 20px;
  }
  .row p {
    font-size: 18px;
  }
</style>
