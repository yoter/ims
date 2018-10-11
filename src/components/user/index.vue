<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="5">
                <org-tree></org-tree>
            </el-col>
            <el-col :span="19">
                <users></users>
                <!--<el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">
                        <users></users>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">
                        <role></role>
                    </el-tab-pane>
                </el-tabs>-->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import orgTree from '../organization/tree.vue'
    import role from '../role/index.vue'
    import users from './list.vue'
    import request from '../../api/project'

    export default {
        name: 'user',
        components: {
            users,
            orgTree,
            role
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            });
        },
        methods: {
            handleClick() {

            }
           /* handleNodeClick(data) {
                console.log("-user-");
                console.log(data);
                console.log("-user-");
                this.org = data;
            }*/
        }
    }
</script>