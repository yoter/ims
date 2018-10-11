<template>
    <div>
        <el-row>
            <el-form :inline="true" size="small" style="text-align:left;margin: 30px 0 10px 0;">
                <el-form-item>
                    <el-input v-model="name" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-on:click="search" type="primary" icon="el-icon-search">搜索</el-button>
                </el-form-item>
                <el-form-item style="float: right;">
                    <el-button type="text" v-on:click="add">添加</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-card class="box-card">
                <div class="text item">
                    <div>
                        <el-table
                                :data="tableData"
                                stripe
                                style="width: 100%">
                            <el-table-column
                                    prop="code"
                                    label="编码">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="名称">
                            </el-table-column>
                            <el-table-column
                                    prop="genTime"
                                    label="创建时间">
                            </el-table-column>
                            <el-table-column
                                    prop="description"
                                    label="描述">
                            </el-table-column>
                            <el-table-column label="操作" width="180px">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                                    <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div v-if="tableData.length > 0" style="margin: 50px 0 20px 0;text-align: center;">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[10, 20, 30, 40]"
                                :page-size="pageSize"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                        </el-pagination>
                    </div>
                </div>
            </el-card>
        </el-row>

        <el-dialog title="编辑" width="30%" :visible.sync="dialogVisible">
            <el-form :inline="false" size="small" :model="entity" >
                <el-form-item label="项目编码" :required="true">
                    <el-input v-model="entity.code"></el-input>
                </el-form-item>
                <el-form-item label="项目名称" :required="true">
                    <el-input v-model="entity.name"></el-input>
                </el-form-item>
                <el-form-item label="项目描述">
                    <el-input type="textarea" v-model="entity.description"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import request from '../../api/project'

    export default {
        name: 'project',
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pageSize: 20,
                total: 0,
                name: '',
                dialogVisible: false,
                entity: {}
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.list(1, this.pageSize, {});
            });
        },
        methods: {
            /**
             * 消息提示
             */
            success() {
                this.$message({
                    type: 'success',
                    message: '操作成功!',
                    showClose: false
                });
                /*this.$notify({
                    title: '成功',
                    message: '操作成功!',
                    type: 'success',
                    showClose: false
                });*/
            },
            /**
             * 分页函数
             */
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.list(val, this.pageSize, {});
            },
            /**
             * 获取项目列表
             * @param page
             * @param size
             * @param data
             */
            list(page, size, data) {
                const self = this;
                request.list(page, size, data).then(function (response) {
                    if (response.status === 200) {
                        self.tableData = response.data.content;
                        self.total = response.data.totalElements;
                    }
                });
            },
            /**
             * 搜索
             */
            search() {
                const data = this.name === "" ? {} : {'name': this.name};
                this.list(1, this.pageSize, data);
            },
            /**
             * 添加项目
             */
            add() {
                this.entity = {};
                this.dialogVisible = true;
            },
            /**
             * 编辑项目
             * @param row
             */
            edit(row) {
                this.entity = row;
                this.dialogVisible = true;
            },
            /**
             * 保存项目
             */
            save() {
                const self = this;
                self.dialogVisible = false;
                request.save(this.entity).then(function (response) {
                    if (response.status === 200) {
                        self.success();
                        self.list(1,self.pageSize,{});
                    }
                });
            },
            /**
             * 删除项目
             * @param id
             */
            del(id) {
                const self = this;
                this.$confirm('此操作将永久删除该项目, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    request.del(id).then(function (response) {
                        if (response.status === 200) {
                            self.success();
                            self.list(1,self.pageSize,{});
                        }
                    });
                }).catch(() => {

                });
            }
        }
    }
</script>