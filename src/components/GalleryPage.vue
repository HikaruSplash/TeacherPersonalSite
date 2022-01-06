<template>
    <div>
        <div class="row">
            <div v-for="(image, index) in Images" :key="image.imageSource"
                     class="column">
                    <img v-bind:src="image.imageSource"
                         v-on:click="openModal();showSlides(index + 1)"
                         width="200px" height="200px">
                </div>
        </div>
        <div id="myModal" class="modal">
            <span class="close cursor" v-on:click="closeModal">&times;</span>
            <div class="modal-content">
                <div v-for="(image, index) in Images" :key="image.imageSource"
                     class="mySlides">
                    <div class="numbertext">{{index + 1}} / 4</div>
                    <img v-bind:src="image.imageSource" style="width:100%">
                </div>
                <!-- Next/previous controls -->
                <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
                <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
                <!-- Caption text -->
                <div class="caption-container">
                    <p id="caption"></p>
                </div>
                <!-- Thumbnail image controls -->
                <div v-for="(image, index) in Images" :key="image.imageSource"
                     class="column">
                    <img v-bind:src="image.imageSource"
                         v-on:click="showSlides(index + 1)"
                         class="demo">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Images: [
                {imageSource: 'https://sun9-53.userapi.com/impg/c857724/v857724948/15aa54/UHyUVwAAYg0.jpg?size=210x240&quality=96&sign=e9e03e32453dd63994b093836cfcf2f8&type=album'},
                {imageSource: 'https://sun9-17.userapi.com/impg/c858320/v858320413/15f6a6/3M1s43N19y8.jpg?size=300x300&quality=96&sign=67f87299572cad0e87503a3e4e3aa8b7&type=album'},
                {imageSource: 'https://sun1-13.userapi.com/impg/5tZf4FmcRstydmMc1jDHc26lwZitAeja0XWDfw/SYCZBAj8EAU.jpg?size=654x654&quality=96&sign=83b1c118f154995f702e1a0e79bb2885&type=album'}
            ],
            slideIndex: 1
        }
    },
    methods : {
        openModal: function () {
            document.getElementById("myModal").style.display = "block";
        },
        closeModal: function () {
            document.getElementById("myModal").style.display = "none";            
        },
        plusSlides : function (n) {
            showSlides(this.slideIndex += n);
        },
        currentSlide : function (n) {
            showSlides(this.slideIndex = n);
        },
        showSlides : function (n) {            
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) {this.slideIndex = 1}
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";
            dots[this.slideIndex-1].className += " active";
            captionText.innerHTML = dots[this.slideIndex-1].alt;
        }   
    },
    name: 'GalleryPage'
}
</script>

<style scoped>
    .row > .column {
        padding: 0 8px;
    }
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    /* Create four equal columns that floats next to eachother */
    .column {
        float: left;
        width: 25%;
    }
    /* The Modal (background) */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: black;
    }
    /* Modal Content */
    .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        width: 90%;
        max-width: 500px;
    }
    /* The Close Button */
    .close {
        color: white;
        position: absolute;
        top: 10px;
        right: 25px;
        font-size: 35px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: #999;
        text-decoration: none;
    cursor: pointer;
    }
    /* Hide the slides by default */
    .mySlides {
        display: none;
    }
    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -50px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }
    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
    /* Number text (1/3 etc) */
    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }
    /* Caption text */
    .caption-container {
        text-align: center;
        background-color: black;
        padding: 2px 16px;
        color: white;
    }
    img.demo {
        opacity: 0.6;
        width: 200px;
        height: 200px
    }
    .active,
    .demo:hover {
        opacity: 1;
    }
    img.hover-shadow {
        transition: 0.3s;
    }
    .hover-shadow:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>