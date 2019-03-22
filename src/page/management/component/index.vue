<template>
    <div>
        <el-row style="margin: 10px auto;">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">组件管理</el-breadcrumb-item>
                <el-breadcrumb-item>组件</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row style="margin-top: 10px;">
            <!--<h3>组件列表</h3>-->
            <el-row style="display: flex;flex-flow: row-reverse nowrap;margin-top: 10px;">
                <i class="el-icon-plus" style="margin-left: 20px;font-size: 1.5em;" @click="dialogFormVisible = true"></i>
                <i class="el-icon-share" style="margin-left: 20px;font-size: 1.5em;"></i>
                <i class="el-icon-edit" style="margin-left: 20px;font-size: 1.5em;"></i>
                <!--<el-button type="primary" style="margin-left: 10px;">新建</el-button>-->
                <!--<el-button type="primary">新建</el-button>
                <el-button type="primary">新建</el-button>
                <el-button type="primary">新建</el-button>
                <el-button type="primary">新建</el-button>-->
            </el-row>
            <el-row style="margin-top: 20px;margin-bottom: 10px;">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="分类">
                        <el-select v-model="formInline.region" placeholder="分类">
                            <el-option label="按钮" value="shanghai"></el-option>
                            <el-option label="设备" value="beijing"></el-option>
                            <el-option label="输入框" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="编码">
                        <el-input v-model="formInline.user" placeholder="编码"></el-input>
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
                        :default-sort = "{prop: 'date', order: 'descending'}"
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
                            <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true" circle></el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </el-row>
        <el-row>
            <el-dialog title="编辑" :visible.sync="dialogFormVisible">

                <el-form ref="form" :model="form" label-width="80px">
                    <h3 style="margin-bottom: 20px;">组件类型</h3>
                    <el-form-item label="组件类型">
                        <el-select v-model="form.region" placeholder="请选择组件类型" style="width: 100%;">
                            <el-option label="静态" value="shanghai"></el-option>
                            <el-option label="监视" value="device"></el-option>
                            <el-option label="控制" value="device"></el-option>

                        </el-select>
                    </el-form-item>
                    <h3 style="margin-bottom: 20px;">设备信息</h3>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-form>
                <h3 style="margin-bottom: 20px;">变量列表</h3>
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        :default-sort = "{prop: 'date', order: 'descending'}"
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
                            <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true" circle></el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-row>
    </div>
</template>


<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
    import ElForm from "../../../../node_modules/element-ui/packages/form/src/form";
    export default {
        components: {
            ElForm,
            ElButton,
            ElRow},
        data() {
            return {
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
                form: {
                    name: '',
                    region: 'device',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formInline: {
                    user: '',
                    region: ''
                },
                dialogFormVisible: false,
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
            }

        }
    }
</script>