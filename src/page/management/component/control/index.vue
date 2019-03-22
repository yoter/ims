<template>
    <div>
        <el-card class="box-card">
            <div>

                <el-table
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">
                    <el-table-column
                            label="日期"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="名称"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="类型"
                            prop="type">
                    </el-table-column>
                    <el-table-column
                            label="描述"
                            prop="description">
                    </el-table-column>
                    <el-table-column
                            align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                                    v-model="search"
                                    size="mini"
                                    placeholder="输入关键字搜索"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default{
        name:"monitor",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '冷机',
                    type:'switch',
                    description: '1#冷机冷机冷机冷机冷机冷机冷机冷机冷机冷机'
                }, {
                    date: '2016-05-04',
                    name: '门禁',
                    type:'button',
                    description: ''
                }, {
                    date: '2016-05-01',
                    name: '视频',
                    type:'input',
                    description: ''
                }, {
                    date: '2016-05-03',
                    name: '消防',
                    type:'select',
                    description: ''
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>