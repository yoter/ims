<template>
    <div>
        <el-row type="flex">
            <el-col :span="24">
                <el-button type="text" @click="dialogVisible = true">+</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
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
                            <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true"
                                       circle></el-button>
                            <el-button type="danger" icon="el-icon-delete"
                                       @click="handleDelete(scope.$index, scope.row)" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-dialog
                title="视图模板"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>
                <el-radio v-model="radio" label="t1" @change="changeViewTemplate">模板</el-radio>
                <el-radio v-model="radio" label="t2" @change="changeViewTemplate">模板</el-radio>
                <el-radio v-model="radio" label="t3" @change="changeViewTemplate">模板</el-radio>
                <el-radio v-model="radio" label="t4" @change="changeViewTemplate">模板</el-radio>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleViewTemplate">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    export default{
        components: {
            ElCol,
            ElRow
        },
        data() {
            return {
                dialogVisible: false,
                radio: '1',
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
                routeName:'',
                routeParams:{'id': 1, 'age': '12'}
            }
        },
        methods: {
            handleViewTemplate() {
                this.dialogVisible = false;
                this.$router.push({name: this.routeName, params: this.routeParams});
            },
            changeViewTemplate(val) {
                console.log(val);
                this.routeName = val;
            },
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
            handleClose() {

            }
        }
    }
</script>