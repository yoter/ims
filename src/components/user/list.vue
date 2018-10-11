<template>
    <div>
        <el-row>
            <el-form :inline="true" size="small" style="text-align:left;">
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
                                    prop="username"
                                    label="用户名">
                            </el-table-column>
                            <el-table-column label="操作" width="130px">
                                <template slot-scope="scope">
                                    <!--<el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                                    <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>-->
                                    <el-button type="primary" @click="edit(scope.row)" icon="el-icon-edit"
                                               circle></el-button>
                                    <el-button type="danger" @click="del(scope.row.id)" icon="el-icon-delete"
                                               circle></el-button>
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


                <el-form-item label="用户名" :required="true">
                    <el-input v-model="entity.loginName"></el-input>
                </el-form-item>
                <el-form-item label="密码" :required="true">
                    <el-input v-model="entity.password"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" :required="true">
                    <el-input v-model="entity.username"></el-input>
                </el-form-item>
                <el-form-item label="部门" :required="true">
                    <el-input v-model="organization.name" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="选择角色" :required="true">
                    <el-select v-model="entity.roles" multiple placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系方式" :required="true">
                    <el-input v-model="entity.mobile"></el-input>
                </el-form-item>
                <el-form-item label="Email" :required="true">
                    <el-input v-model="entity.email"></el-input>
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
    import Bus from '../../bus'
    import request from '../../api/user'
    import role_request from '../../api/role'


    export default {
        name: 'users',
        data() {
            return {
                options: [],


                tableData: [],
                currentPage: 1,
                pageSize: 20,
                total: 0,
                name: '',
                dialogVisible: false,
                entity: {},
                organization: {}
            }
        },
        mounted: function () {
            const self = this;
            this.$nextTick(function () {
                Bus.$on('handleNodeClick', (e) => {
                    self.organization = e;
                    self.entity['orgId'] = e.id;
                    self.list(1, self.pageSize, {'project': 'PF', 'orgId': e.id});
                });
                self.role_list();
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
            },
            /**
             * 分页函数
             */
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                //console.log(`当前页: ${val}`);
                this.list(val, this.pageSize, {});
            },
            /**
             * 获取用户列表
             * @param page
             * @param size
             * @param data
             */
            list(page, size, data) {
                //console.log(data);
                const self = this;
                request.list(page, size, data).then(function (response) {
                    if (response.status === 200) {
                        self.tableData = response.data.content;
                        self.total = response.data.totalElements;
                        //console.log(self.tableData);
                    }
                });
            },
            role_list(){
                const self = this;
                role_request.list(0, 0, {'project': 'PF'}).then(function (response) {
                    if (response.status === 200) {
                        self.options = response.data.content;
                    }
                });
            },
            /**
             * 搜索
             */
            search() {
                const self = this;
                const data = this.name === "" ? {'project': 'PF', 'orgId': self.organization.id} : {
                    'project': 'PF',
                    'orgId': self.organization.id,
                    'name': this.name
                };
                this.list(1, this.pageSize, data);
            },
            /**
             * 添加项目
             */
            add() {
                this.entity = {'orgId': this.organization.id};
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
                if (typeof(self.organization.id) === 'undefined') {
                    this.$message({
                        type: 'error',
                        message: '添加失败,请选择部门!',
                        showClose: false
                    });
                    return;
                }
                self.entity['project'] = 'PF';
                console.log(self.entity);


                request.save(this.entity).then(function (response) {
                    if (response.status === 200) {
                        self.success();
                        self.list(1, self.pageSize, {'project': 'PF'});
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
                            self.list(1, self.pageSize, {});
                        }
                    });
                }).catch(() => {

                });
            }
        }
    }
</script>