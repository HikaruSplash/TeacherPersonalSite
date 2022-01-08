<template>
    <div class="container">
        <div class="image-container">
            <div v-for="image in Images" :key="image.id"
                class="quarter-image-container">
                <img v-bind:src="image.imageSource" class="thumbnail"
                     v-on:click="selectImage(image.id);toggleModal();"/>
            </div>
        </div>
        <div v-if="isModalActive" class="modal">            
            <div class="close-btn-container">
                <span class="modal-btn close-btn"
                      v-on:click="unselectImages();toggleModal()">
                &times;
                </span>
            </div>
            <div class="modal-image-container">    
                <div class="side-btn-container">            
                    <span v-on:click="selectPrevImage"
                          class="modal-btn side-btn">
                        &lt;
                    </span>
                </div>
                <div class="full-image-container">
                    <img v-bind:src="Images.find(img => img.isSelected).imageSource">
                </div>   
                <div class="side-btn-container">            
                    <span v-on:click="selectNextImage"
                          class="modal-btn side-btn">
                        &gt;
                    </span>
                </div>  
            </div>
            <div class="modal-miniatures-container">
                <div v-for="image in getNearImages()" :key="image.id"
                     class="miniature">
                    <img v-bind:src="image.imageSource"
                         v-on:click="unselectImages();selectImage(image.id);">
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalActive: false,
            Images: [
                {
                    id:1, 
                    imageSource: 'https://sun9-53.userapi.com/impg/c857724/v857724948/15aa54/UHyUVwAAYg0.jpg?size=210x240&quality=96&sign=e9e03e32453dd63994b093836cfcf2f8&type=album',
                    isSelected: false
                },
                {
                    id:2, 
                    imageSource: 'https://sun9-17.userapi.com/impg/c858320/v858320413/15f6a6/3M1s43N19y8.jpg?size=300x300&quality=96&sign=67f87299572cad0e87503a3e4e3aa8b7&type=album',
                    isSelected: false
                    },
                {   
                    id:3, 
                    imageSource: 'https://sun1-13.userapi.com/impg/5tZf4FmcRstydmMc1jDHc26lwZitAeja0XWDfw/SYCZBAj8EAU.jpg?size=654x654&quality=96&sign=83b1c118f154995f702e1a0e79bb2885&type=album',
                    isSelected: false                    
                }
            ],
            slideIndex: 1
        }
    },
    methods : {
        selectImage: function (id) {       
          this.Images.find(img => img.id == id).isSelected = true;
        },
        unselectImages: function() {
            this.Images.forEach(img => img.isSelected = false);
        },
        toggleModal: function () {
            this.isModalActive = !this.isModalActive
        },
        getSelectedImage: function () {
            var index = this.Images.findIndex(image => image.isSelected)            
            return index < 0 ? 0 : index;
        },
        getPrevImageIndex: function (imageIndex) {
            return (imageIndex - 1 < 0 ? this.Images.length : imageIndex) - 1
        },
        getNextImageIndex: function (imageIndex) {
            return imageIndex + 1 == this.Images.length ? 0 : imageIndex + 1
        },
        selectPrevImage: function () {
          var index = this.getSelectedImage();
          this.selectImageByIndex(this.getPrevImageIndex(index));
        },
        selectNextImage: function () {
          var index = this.getSelectedImage();
          this.selectImageByIndex(this.getNextImageIndex(index));
        },
        selectImageByIndex: function (imageIndex) {
            this.unselectImages();
            this.Images[imageIndex].isSelected = true;
        },
        getNearImages: function () {
            var index = this.getSelectedImage();     
            return [
                this.Images[this.getPrevImageIndex(index)],
                this.Images[index],
                this.Images[this.getNextImageIndex(index)]
            ];
        }
    },
    name: 'GalleryPage'
}
</script>

<style scoped>
    .container {
        display: block;
    }
    .image-container {
        padding: 64px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }  
    .quarter-image-container {                       
        width: 15%;
        height: 15%;
        max-width: 200px;
        max-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .quarter-image-container > img {
        height: 100%;
        width: 100%;
        object-fit: contain;              
    }
    .thumbnail {
        border: 1px solid gainsboro;
        border-radius: 4px;
        padding: 5px;
    }
    .thumbnail:hover {
        box-shadow: 0 0 2px 1px darkcyan;
    } 

    .modal {    
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0;
        top: 0;
        overflow: auto;
        background-color: black;
        opacity: 1;  
        
        display: flex;
        flex-direction: column;
        align-content: center;
    }   
    .modal-btn {
        color: white;
        font-size: 100px;
        font-weight: bold;        
        cursor: pointer;
        text-shadow: 0px 0px 5px white;
    }
    .modal-btn:hover {
        color: gainsboro;
        text-shadow: none;
    }
    .close-btn-container {    
        height: 10%;    
        width: 100%;
        text-align: right;        
    }
    .close-btn {
        margin-right: 30px;
    }

    .modal-image-container {
        height: 70%;
        display: flex;
        flex-direction: row;        
        align-items: center;
        justify-content: center;
    }
    .side-btn-container {        
        width: 10%;
    }
    .side-btn {
        width: auto;
    }
    .full-image-container {        
        display: flex;
        align-content: center;
        justify-content: center;
        width: 60%;        
        max-height: 100%;
    }
    .full-image-container > img { 
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
    }

    .modal-miniatures-container {
        height: 20%;
        display: flex;
        align-content: center;
        justify-content: center;        
    }
    .miniature {
        max-height: 100%;
        max-width: 30%;
        padding: 10px 10px 0px 10px;        
    }
    .miniature > img {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
    }
    .miniature > img:hover {
        opacity: 0.5;
        cursor: pointer;
    }
</style>