<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="5">
                <org-tree ref="tree" @handleNodeClick = "handleNodeClick"></org-tree>
            </el-col>
            <el-col :span="19">
                <!--<div>
                    <el-button type="primary" >保 存</el-button>
                    <el-button type="danger" >删 除</el-button>
                </div>-->
                <el-row>
                    <el-form :inline="true" size="small" style="text-align:left;">
                        <!-- <el-form-item>
                             <el-input v-model="name" placeholder="请输入名称"></el-input>
                         </el-form-item>
                         <el-form-item>
                             <el-button v-on:click="search" type="primary" icon="el-icon-search">搜索</el-button>
                         </el-form-item>-->


                        <el-form-item>
                            <el-button type="text" v-on:click="addRoot">添加根节点</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="text" v-on:click="addChildren">添加子节点</el-button>
                        </el-form-item>

                        <!--<el-form-item style="float: right;">
                            <el-button type="text" v-on:click="add">添加子节点</el-button>
                        </el-form-item>
                        <el-form-item style="float: right;">
                            <el-button type="text" v-on:click="add">添加父节点</el-button>
                        </el-form-item>-->
                    </el-form>
                </el-row>
                <el-row>
                    <el-card class="box-card">
                        <div class="text item">
                            <el-form :inline="false" :model="form" size="small" style="height: 500px;">
                                <!--<el-form-item label="父节点" :required="true">
                                    <el-input readonly="true" v-model="form.parent">
                                        <i slot="suffix" class="el-input__icon el-icon-close" @click="clear"></i>
                                    </el-input>
                                </el-form-item>-->
                                <el-form-item label="编码" :required="true">
                                    <el-input v-model="form.code"></el-input>
                                </el-form-item>
                                <el-form-item label="名称" :required="true">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="描述" :required="true">
                                    <el-input type="textarea" v-model="form.description"></el-input>
                                </el-form-item>
                                <el-form-item style="margin-top: 50px;">
                                    <!--<el-button type="primary" plain>新 增</el-button>-->
                                    <el-button type="primary" @click="save">保 存</el-button>
                                    <el-button type="danger">删 除</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    import orgTree from './tree.vue'
    import request from '../../api/organization'

    export default {
        name: 'organization',
        components: {
            orgTree
        },
        data() {
            return {
                form: {}
            }
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
            addRoot() {
                this.form = {'parent': 0};
            },
            addChildren() {
                this.form = {'parent': this.form.id};
            },
            save() {
                const self = this;
                if (typeof(this.form.parent) === 'undefined') {
                    this.form.parent = 0;
                }
                this.form.project = 'PF';
                //console.log(this.form);
                request.save(this.form).then(function (response) {
                    if (response.status === 200) {
                        self.success();
                        self.$refs.tree.list();
                    }
                });
            },
            handleNodeClick(data) {
                this.form = data;
            }
        }
    }
</script>