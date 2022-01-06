<template>  
    <div class="container">
        <divide-by-classes-component v-bind:ClassesData="WordGroups"/>
        <table>
            <tr>
                <th>English</th>
                <th>Russian</th>
            </tr>
            <tr v-for="word in WordGroups.find(classWords => classWords.isSelected).words" :key="word.eng">
                <td>
                    {{word.eng}}
                </td>
                <td>
                    {{word.rus}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import DivideByClassesComponent from "./DivideByClassesComponent.vue"
export default {
    data() {
        return {
            WordGroups: [
                {
                    isSelected: true,    
                    words: [
                        {eng: 'Bus', rus:'Автобус'},
                        {eng: 'Car', rus:'Машина'},
                        {eng: 'Cat', rus:'Кот'}
                    ]
                },
                {
                    isSelected: false,
                    words: [
                        {eng: 'Walk', rus:'Ходить'},
                        {eng: 'Drive', rus:'Водить'},
                        {eng: 'Run', rus:'Бежать'}
                    ]
                },
                {
                    isSelected: false,
                    words: [
                        {eng: 'He', rus:'Он'},
                        {eng: 'She', rus:'Она'},
                        {eng: 'It', rus:'Оно'}
                    ]
                },
                {
                    isSelected: false,
                    words: [
                    {eng: 'Sing', rus:'Петь'},
                    {eng: 'Climb', rus:'Лезть'},
                    {eng: 'Poop', rus:'Какать'}
                    ]
                }                
            ]
        }
    },
    name: 'DictionaryPage',
    components: {
        DivideByClassesComponent
    }
}
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 33%;
        border: 1px solid #ddd;
    }
    th, td {
        text-align: left;
        padding: 16px;
        font-size: 20px;
    }    
    tr:nth-child(even) {
        background-color: linen;
    }
    tr:nth-child(odd) {
        background-color: ghostwhite;
    }
</style>