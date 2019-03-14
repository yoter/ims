<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
            <template slot="title">视图管理</template>
            <el-menu-item index="1-1">视图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">资产管理</template>
            <el-menu-item index="2-1">分类</el-menu-item>
            <el-menu-item index="2-2">资产</el-menu-item>
            <el-menu-item index="2-3">属性</el-menu-item>
            <el-menu-item index="2-4">变量</el-menu-item>
            <el-submenu index="2-5">
                <template slot="title">扩展</template>
                <el-menu-item index="2-5-1">变量值</el-menu-item>
                <el-menu-item index="2-5-2">状态</el-menu-item>
                <el-menu-item index="2-5-3">控制</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">知识库</template>
            <el-menu-item index="3-1">KKS编码</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">用户管理</template>
            <el-menu-item index="4-1">用户</el-menu-item>
            <el-menu-item index="4-2">角色</el-menu-item>
            <el-menu-item index="4-3">权限</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">系统配置</template>
            <el-menu-item index="5-1">基础配置</el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>