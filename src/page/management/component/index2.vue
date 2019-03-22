<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="组件管理" name="first">
            <com></com>
        </el-tab-pane>
        <el-tab-pane label="监视管理" name="second">
            <monitor></monitor>
        </el-tab-pane>
        <el-tab-pane label="控制管理" name="third">
            <control></control>
        </el-tab-pane>
        <el-tab-pane label="事件管理" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="变量管理" name="fifth">

        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import com from "./component/index.vue";
    import monitor from "./monitor/index.vue"
    import control from "./control/index.vue"
    export default {
        components:{
            com,
            monitor,
            control
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>