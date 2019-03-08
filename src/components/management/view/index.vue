<template>
    <div>
        <el-row style="margin-bottom: 20px;">
           <span v-on:click="showSubSystem()" style="cursor: pointer;">
               <i :class="subsystem.icon"></i>
               <span class="icon-name">{{subsystem.name}}</span>
           </span>
        </el-row>
        <el-row>
            <el-button v-on:click="add" type="primary" @click="dialogFormVisible = true">添加视图</el-button>
        </el-row>
        <el-row style="width: 800px;">
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../../assets/images/timg2.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>门禁</span>
                        <div class="bottom clearfix">
                            <!--<time class="time">{{ currentDate }}</time>-->
                            <time class="time">1号楼5层A区</time>

                            <el-button type="text" class="button" @click="enter('v'+index)">
                                <!--<router-link tag="a" target="_blank" :to="{name:'vd',params:{id:'v'+index},query:{keywords:'手机'}}">
                                    Enter
                                </router-link>-->
                                Enter
                            </el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <SubsysModel ref="subsys"></SubsysModel>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="标题" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="编码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="底图" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>

        </el-row>
    </div>
</template>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        height: 260px;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>

<script>
    import SubsysModel from '../subsys/model.vue'
    import ElRow from "element-ui/packages/row/src/row";
    import request from '../../../api/subsystem'

    export default {
        components: {
            ElRow,
            SubsysModel
        },
        data() {
            return {
                currentDate: new Date(),
                dialogFormVisible:false,
                formLabelWidth: '120px',
                form:{},
                subsystem:{}
            };
        },
        mounted: function () {
            console.log('1');
            this.$nextTick(function () {
                this.subsystem = request.all()[0];
            });
        },
        methods: {
            setSubSystem(subsystem) {
                this.subsystem = subsystem;
            },
            showSubSystem() {
                this.$refs.subsys.show();
            },
            add(){

            },
            enter(model){
                console.log(model);
//                this.$router.push({ path: 'view/' + model, params: { userId: 123 }})
                this.$router.push({ name: 'vd', params: { id:model,userId: 123,k:'v' }})

            }
        }
    }
</script>