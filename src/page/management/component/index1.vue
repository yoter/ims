<template>
    <div>
        <el-card class="box-card">

            <!--<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="left">组件管理</el-radio-button>
            </el-radio-group>-->

            <el-tabs :tab-position="tabPosition" style="">
                <el-tab-pane label="组件列表">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="基础信息" name="1">
                            <el-form :inline="true" :model="ruleForm" ref="ruleForm" label-width="100px"
                                     class="demo-ruleForm">
                                <el-form-item label="组件名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="组件编码" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                        <!--<el-collapse-item title="组件值" name="2">
                            <el-row style="margin: 10px auto 35px auto;text-align: right;">
                                <el-button type="success" icon="el-icon-plus" circle></el-button>
                            </el-row>
                            <ul>
                                <li>值</li>
                                <li>描述</li>
                                <li style="width: 10%;">操作</li>
                            </ul>
                            <ul>
                                <li>1</li>
                                <li>开</li>
                                <li style="width: 10%;">编辑 删除</li>
                            </ul>
                            <ul>
                                <li>1</li>
                                <li>开</li>
                                <li style="width: 10%;">编辑 删除</li>
                            </ul>
                        </el-collapse-item>-->
                        <el-collapse-item title="监视器" name="3">
                            <el-row style="margin: 10px 20px 10px auto;text-align: right;">
                                <i class="el-icon-search" style="margin-right: 10px;"></i>
                                <i class="el-icon-delete" style="margin-right: 10px;"></i>
                                <!--<el-button icon="el-icon-search" circle></el-button>-->
                                <!--<el-button type="success" icon="el-icon-plus" circle></el-button>-->
                                <!--<el-button type="success" icon="el-icon-check" circle></el-button>
                                <el-button type="info" icon="el-icon-message" circle></el-button>
                                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>-->
                            </el-row>


                            <!--<div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;border: 1px solid #ebeef5;border-radius:8px; ">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>-->
                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <!--<ul>
                                <li>组件值</li>
                                <li>标签</li>
                                <li>图标</li>
                                <li style="width: 10%;">操作</li>
                            </ul>
                            <ul>
                                <li>1</li>
                                <li>开</li>
                                <li><img src=""/></li>
                                <li style="width: 10%;">编辑 删除</li>
                            </ul>
                            <ul>
                                <li>1</li>
                                <li>开</li>
                                <li><img src=""/></li>
                                <li style="width: 10%;">编辑 删除</li>
                            </ul>-->
                        </el-collapse-item>
                        <el-collapse-item title="控制器" name="4">
                            <el-row style="margin: 10px 20px 10px auto;text-align: right;">
                                <i class="el-icon-search" style="margin-right: 10px;" @click="dialogVisible = true"></i>
                                <!--<i class="el-icon-edit" style="margin-right: 10px;"></i>-->
                                <i class="el-icon-delete" style="margin-right: 10px;"></i>
                                <!--<el-button icon="el-icon-search" circle @click="dialogVisible = true"></el-button>-->
                                <!--<el-button type="success" icon="el-icon-plus" circle></el-button>-->
                                <!--<el-button type="success" icon="el-icon-check" circle></el-button>
                                <el-button type="info" icon="el-icon-message" circle></el-button>
                                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>-->
                            </el-row>
                            <el-row>
                                <div>
                                    <el-row>
                                        <h2 style="display: inline-block;width: 95%;">按钮</h2>
                                        <!-- <i class="el-icon-edit"></i>
                                         <i class="el-icon-delete"></i>-->
                                    </el-row>
                                    <el-row style="margin-top: 20px;">
                                        <!--<h3>按钮:</h3>-->
                                        <div class="block" style="margin: 20px auto 10px auto;">
                                            <el-switch
                                                    v-model="value2"
                                                    active-color="#13ce66"
                                                    inactive-color="#ff4949">
                                            </el-switch>
                                        </div>
                                    </el-row>
                                    <el-row style="margin-top: 20px;">
                                        <h2>配置信息:</h2>
                                        <div class="block" style="margin: 20px auto 10px auto;">
                                            <ul>
                                                <li>最小值：0</li>
                                                <li>最大值：10</li>
                                                <li>步长：2</li>
                                            </ul>
                                        </div>
                                    </el-row>
                                </div>
                                <!--<el-card class="box-card card" style="width: inherit;">

                                </el-card>-->
                            </el-row>
                        </el-collapse-item>
                        <el-collapse-item title="事件" name="5">
                            <el-row style="margin: 10px 20px 10px auto;text-align: right;">
                                <i class="el-icon-search" style="margin-right: 10px;" @click="dialogVisible = true"></i>
                                <!--<i class="el-icon-edit" style="margin-right: 10px;"></i>-->
                                <i class="el-icon-delete" style="margin-right: 10px;"></i>
                                <!--<el-button icon="el-icon-search" circle @click="dialogVisible = true"></el-button>-->
                                <!--<el-button type="success" icon="el-icon-plus" circle></el-button>-->
                                <!--<el-button type="success" icon="el-icon-check" circle></el-button>
                                <el-button type="info" icon="el-icon-message" circle></el-button>
                                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle></el-button>-->
                            </el-row>
                            <el-row>
                                <div style="display: flex;margin-bottom: 10px;">
                                    <div style="flex-grow: 1;">单击鼠标左键</div>
                                    <div style="flex-grow: 1;">展示设备属性面板</div>
                                    <div style="flex-grow: 1;">发送...指令</div>
                                </div>
                                <div style="display: flex;margin-bottom: 10px;">
                                    <div style="flex-grow: 1;">单击鼠标左键</div>
                                    <div style="flex-grow: 1;">展示设备属性面板</div>
                                    <div style="flex-grow: 1;">发送...指令</div>
                                </div>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                    <el-row style="text-align: right;margin-top: 20px;">
                        <el-button round>返回</el-button>
                        <el-button type="primary" round>保存</el-button>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="监视器">
                    <monitor></monitor>
                </el-tab-pane>
                <el-tab-pane label="控制器">
                    <control></control>
                </el-tab-pane>
                <el-tab-pane label="事件列表">事件管理</el-tab-pane>
            </el-tabs>


        </el-card>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>
                <el-radio v-model="radio" label="1">输入框</el-radio>
                <el-radio v-model="radio" label="2">开关</el-radio>
                <el-radio v-model="radio" label="3">选择器</el-radio>
                <el-radio v-model="radio" label="4">按钮</el-radio>
                <el-radio v-model="radio" label="5">滑块</el-radio>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>
    ul {
        list-style: none;
        margin: 10px auto;
    }

    ul li {
        display: inline-block;
        /*width: 42%;*/

    }

    .box-card {
        width: 1050px;
    }

    a {
        margin-right: 10px;
    }
</style>
<script>
    import ElRow from "element-ui/packages/row/src/row";
    import monitor from "./monitor/index.vue"
    import control from "./control/index.vue";

    export default {
        name: "com",
        components: {
            ElRow,
            monitor,
            control
        },
        data() {
            return {
                tabPosition: 'left',
                radio: '1',
                input: "",
                value: '',
                value2: true,
                value1: 0,
                activeNames: ['1', '2', '3', '4', '5'],
                dialogVisible: false,
                ruleForm: {
                    name: '',
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }]
            };
        },
        mounted: function () {
            this.$nextTick(function () {

            });
        },
        methods: {
            handleChange(val) {
                console.log(val);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    }
</script>