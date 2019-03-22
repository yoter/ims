<template>
    <el-dialog  :visible.sync="dialogVisible" :show-close="false" width="55%">
        <div class="content">
            <ul class="icon-list">
                <li v-for="item in items" v-bind:style="{borderLeftColor : item.color}" @click="change(item)"><span><i :class="item.icon"></i><span
                        class="icon-name">{{item.name}}</span></span></li>

                <!--<li style="border-left-color: rgba(255, 215, 0, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">门禁系统</span></span></li>
                <li style="border-left-color: rgba(144, 238, 144, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">暖通空调</span></span></li>
                <li style="border-left-color: rgba(0, 206, 209, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">消防系统</span></span></li>
                <li style="border-left-color: rgba(30, 144, 255, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">安防系统</span></span></li>
                <li style="border-left-color: rgba(199, 21, 133, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">停车系统</span></span></li>
                <li style="border-left-color: rgba(255, 69, 0, 0.68);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">给排水</span></span></li>
                <li style="border-left-color: rgba(250, 212, 0, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">照明系统</span></span></li>

                <li style="border-left-color: rgba(30, 144, 255, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">安防系统</span></span></li>
                <li style="border-left-color: rgba(199, 21, 133, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">停车系统</span></span></li>
                <li style="border-left-color: rgba(255, 69, 0, 0.68);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">给排水</span></span></li>
                <li style="border-left-color: rgba(250, 212, 0, 1);"  @click="change('A')"><span><i class="el-icon-info"></i><span
                        class="icon-name">照明系统</span></span></li>-->
            </ul>
        </div>
    </el-dialog>
</template>

<style>
    /*.el-dialog{
        background: none!important;
        box-shadow:none!important;
        -webkit-box-shadow:none!important;
    }*/
    .content{
        /*margin: 0 auto;*/
        width: 800px;
    }
    .icon-list{
        overflow: hidden;
        list-style: none;
        padding: 0;
        /*border: 1px solid #eaeefb;*/
        /*border-radius:4px;*/
    }
    .icon-list li {
        cursor: pointer;
        float: left;
        width: 32.5%;
        text-align: center;
        height: 130px;
        line-height: 130px;
        color: #666;
        /*color: white;*/
        font-size: 13px;
        transition: color .15s linear;
        /*border-right: 1px solid #eee;*/
        /*border-bottom: 1px solid #eee;*/
        /*margin-right: -1px;*/
        /*margin-bottom: -1px;*/
        margin: 3px;
        border: 1px solid #eee;
        border-radius:4px;
        border-left-width:3px;
    }
</style>

<script>
    import request from '../../../api/subsystem'
    import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";

    export default {
        components: {ElFormItem},
        name:'SubsysModel',
        data() {
            return {
                dialogVisible: false,
                form:{},
                items:[]
            };
        },
        mounted: function () {
            this.$nextTick(function () {
                this.list();
            });
        },
        methods: {
            list() {
                this.items = request.all();
            },
            show(){
                this.dialogVisible = true;
            },
            change(subsystem) {
                this.$parent.$parent.setSubSystem(subsystem);
                this.dialogVisible = false;
            }
        }
    };
</script>