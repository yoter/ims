<template>
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
</template>
<script>
    export default{
        data(){
            return {
                dialogVisible: false,
            }
        },
        methods: {
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