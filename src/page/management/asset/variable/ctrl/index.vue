<template>
   <div>
       <div style="display: flex;flex-flow: row nowrap;align-items:center;margin: 30px auto;" v-for="n in 10">
           <div style="width: 200px;">
               <p style="text-align: center;font-size: 48px;">{{n}}</p>
           </div>
           <div style="flex-grow: 1;padding-bottom: 30px;">
               <my-switch v-if="n%2==0" :data="s"></my-switch>
               <my-button v-else :data="b"></my-button>
           </div>

       </div>
   </div>
</template>

<script>
    import MySwitch from './switch/index.vue'
    import MyButton from './button/index.vue'
    export default{
        components:{
            MySwitch,
            MyButton
        },
        data(){
            return {
                s:{
                    title:'冷机开关',
                    name:'开关'
                },
                b:{
                    title:'照明回路',
                    name:'按钮'
                }
            }
        }
    }

</script>