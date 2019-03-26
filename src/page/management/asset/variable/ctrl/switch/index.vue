<template>
    <div>
        <el-row class="m20">
            <el-col :span="22">
                <h3>{{data.title}}</h3>
            </el-col>
            <el-col :span="2">
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-col>
        </el-row>
        <el-switch
                class="m20"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>
        <h3 class="m20">配置</h3>
        <ul class="m20">
            <li>名称:{{data.name}}</li>
            <li>值1:</li>
            <li>值2:</li>
        </ul>
    </div>
</template>

<style>
    ul{
        list-style: none;
    }
    ul li{
        display: inline-block;
        margin-right: 30px;
    }
    i{
        font-size: 18px;
        margin-left: 1.17em;
    }
    .m20{
        margin: 10px auto;
    }

</style>
<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    export default {
        components: {
            ElCol,
            ElRow},
        name:'MySwitch',
        props:['data'],
        data() {
            return {
                value1: true,
                value2: true
            }
        }
    };
</script>