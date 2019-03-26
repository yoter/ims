<template>
    <div>
        <h2>变量</h2>
        <el-row style="margin: 20px auto;">
            <el-button type="primary">生成组件</el-button>
        </el-row>
        <el-row style="margin: 10px auto;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="系统">
                    <el-select v-model="formInline.region" placeholder="系统">
                        <el-option label="暖通" value="shanghai"></el-option>
                        <el-option label="视频" value="beijing"></el-option>
                        <el-option label="门禁" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分类">
                    <el-select v-model="formInline.region" placeholder="系统">
                        <el-option label="冷机" value="shanghai"></el-option>
                        <el-option label="新风机" value="beijing"></el-option>
                        <el-option label="组合空调" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备">
                    <el-select v-model="formInline.region" placeholder="设备">
                        <el-option label="冷机1" value="shanghai"></el-option>
                        <el-option label="冷机2" value="beijing"></el-option>
                        <el-option label="冷机3" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="编码">
                    <el-input v-model="formInline.user" placeholder="编码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    :default-sort="{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                        prop="name"
                        label="系统"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="分类"
                        :formatter="formatter">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="名称">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" @click="dialogVisible = true"
                                   circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"
                                   circle></el-button>
                        <el-popover
                                placement="right"
                                width="400"
                                trigger="click">
                            <el-button type="success" icon="el-icon-check" circle></el-button>
                            <el-button type="info" icon="el-icon-message" circle></el-button>
                            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                            <el-button icon="el-icon-more" circle slot="reference"
                                       style="margin-left: 10px;"></el-button>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

        <!-- Form -->
        <!--<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
                <span>
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
                                <div :style="{backgroundImage:'url('+require('../../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../../assets/images/all_small_icons.png')+')'}"
                                     style="width: 50px;background-position: -1049px -376px;">
                                </div>
                                <div>
                                    <h2>故障</h2>
                                    <div><p>fault</p></div>
                                </div>
                            </div>

                            <div style="display:inline-flex;margin:20px 10px;height:80px;width:150px;padding: 14px 26px 14px 13px;">
                                <div :style="{backgroundImage:'url('+require('../../../../assets/images/all_small_icons.png')+')'}"
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
    export default {
        components: {ElRow},
        data() {
            return {
                dialogVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                formInline: {
                    user: '',
                    region: ''
                },
                activeNames: ['1', '2', '3', '4', '5'],
                ruleForm: {
                    name: '',
                },
                value2: true,
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            formatter(row, column) {
                return row.address;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            handleChange(val) {
                console.log(val);
            },
        }
    };
</script>