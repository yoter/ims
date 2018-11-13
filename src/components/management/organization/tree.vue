<template>
    <el-card class="box-card" style="height: 600px;overflow: auto;clear: right;">
        <!--<div slot="header" class="clearfix">
            <span>组织结构</span>
           &lt;!&ndash; <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>&ndash;&gt;
        </div>-->
        <div class="text item">
            <el-input size="small" style="margin: 15px 0 20px 0;"
                      placeholder="输入关键字进行过滤">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-tree
                    :data="data"
                    :props="defaultProps"
                    default-expand-all
                    :expand-on-click-node="false"
                    accordion
                    @node-click="handleNodeClick">
            </el-tree>
        </div>
    </el-card>
</template>


<script>
    import Bus from '../../../bus'
    import request from '../../../api/organization'

    export default {
        name: 'orgTree',
        data() {
            return {
                data: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                }
            };
        },
        mounted: function () {
            this.$nextTick(function () {
                this.list().then(function (data) {
                    Bus.$emit('handleNodeClick', data[0]);
                });
            });
        },
        methods: {
            handleNodeClick(data) {
                this.$emit('handleNodeClick',data);
                Bus.$emit('handleNodeClick', data);
            },
            list() {
                const self = this;
                return request.list("PF").then(function (response) {
                    if (response.status === 200) {
                        self.data = response.data;
                        return response.data;
                    }
                })
            }
        }
    }
</script>