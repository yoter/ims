<template>
    <div>
        <drawer></drawer>
        <div  id="containment-wrapper"  class="wrapper" :style="style">
            <div id="draggable" class="draggable" style="height: 20px;width: 20px;background-color: darkmagenta;top: 10%;z-index: 1;"></div>

            <div id="draggable1" class="draggable" style="height: 20px;width: 20px;background-color: darkcyan;top: 60px;left:0px;z-index: 0;"></div>
        </div>
    </div>
</template>


<style>
    .wrapper {
        position: relative;

        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: .2s;

    }
    .draggable {
        position: absolute;
        display: inline-block;
    }
</style>

<script>
    import structure from '../view/structure.vue'
    import drawer from '../view/drawer.vue'
    import $ from "jquery";
    //    import 'jquery-ui/themes/base/all.css'
    import 'jquery-ui/ui/core'
    import 'jquery-ui/ui/widgets/draggable'
    export default {
        components: {
            structure,
            drawer
        },
        data() {
            return {
                style: {
                    width: '800px',
                    height: '500px'
                },
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                const x = 480/500;


                $( function() {
                    $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false ,
                        drag: function( event, ui ) {
                            console.log(ui.position);
                        },create: function( event, ui ) {
                            console.log(ui);
                        }
                    });

                    $( "#draggable1" ).draggable({ containment: "#containment-wrapper", scroll: false ,
                        drag: function( event, ui ) {
                            console.log(ui.position);
                        },create: function( event, ui ) {
                            console.log(ui);
                        }
                    });

                } );
            });
        },
    }
</script>