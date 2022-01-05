<template>
    <div class="navbar">
        <div class="logo">
            Learn English With Us
        </div>
        <div class="nav-right">
            <div class="nav-element subnav-p">
                Родителям
                <fawicon icon="caret-down"/>
                <div class="subnav-content">
                    <div class="nav-element subnav-c">
                        Содержание курса
                    </div>
                </div>
            </div>
            <div class="nav-element subnav-p">
                Ученикам
                <fawicon icon="caret-down"/>
                <div class="subnav-content">
                    <div class="nav-element subnav-c">
                        Словарь
                    </div>
                    <div class="nav-element subnav-c">
                        Рекомендации
                    </div>
                    <div class="nav-element subnav-c">
                        Ссылки на ресурсы
                    </div>
                </div>
            </div>
            <div class="nav-element subnav-p">
                Галлерея
                <fawicon icon="caret-down"/>
                <div class="subnav-content">
                    <div class="nav-element subnav-c">
                        Фото
                    </div>
                    <div class="nav-element subnav-c">
                        Видео
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default ({
    name: 'HeaderComponent'
})
</script>


<style scoped>
    .navbar {
        overflow: hidden;
        background-color: midnightblue;     
    }
    .navbar .nav-element {
        float: left;
        padding: 14px 16px;
        color: white;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
        cursor: pointer;
    }
    .navbar .logo {
        color: white;
        float: left;
        padding: 14px 16px;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
    }
    .navbar .nav-right {
        float: right;
    }
    .navbar .nav-element:hover {
        background-color: slateblue;        
    }
    .navbar .nav-element.subnav-p {
        cursor: default;   
        overflow: hidden;
    }
    .navbar .nav-element.subnav-c {                
        cursor: pointer;   
        overflow: hidden;
        float: right;
    }
    .navbar .nav-element.nav-element.subnav-p .subnav-content {
        display: none;
        position: absolute;
        left: 0;
        background-color: slateblue;
        width: 100%;
        z-index: 1;
    }    
    .navbar .nav-element.nav-element.subnav-p:hover .subnav-content {        
        display: block;
        margin: 7px 0px;
    }
</style>