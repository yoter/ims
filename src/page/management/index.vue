<template>
    <el-container style="width:1300px;margin: 0 auto;">
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">视图管理</template>
                    <el-menu-item index="1-1">
                        <router-link to="/management/v">视图</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">组件管理</template>
                    <el-menu-item index="2-1">
                        <router-link to="/management/component">组件</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">资产管理</template>
                    <el-menu-item index="3-1">
                        <router-link to="/management/classification">分类</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <router-link to="/management/asset">资产</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                        <router-link to="/management/attribute">属性</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-4">
                        <router-link to="/management/variable">变量</router-link>
                    </el-menu-item>
                    <el-submenu index="3-5">
                        <template slot="title">扩展</template>
                        <el-menu-item index="3-5-1">
                            <router-link to="/management/value">变量值</router-link>
                        </el-menu-item>
                        <el-menu-item index="3-5-2">
                            <router-link to="/management/state">状态</router-link>
                        </el-menu-item>
                        <el-menu-item index="3-5-3">
                            <router-link to="/management/ctrl">控制</router-link>
                        </el-menu-item>
                        <el-menu-item index="3-5-4">
                            <router-link to="/management/ctrl">服务</router-link>
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">知识库</template>
                    <el-menu-item index="4-1">KKS编码</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">用户管理</template>
                    <el-menu-item index="5-1">用户</el-menu-item>
                    <el-menu-item index="5-2">角色</el-menu-item>
                    <el-menu-item index="5-3">权限</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">系统配置</template>
                    <el-menu-item index="6-1">基础配置</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <el-main style="">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'management',

        data() {
            return {
                activeIndex: '1'
            };
        },
        mounted: function () {
            //console.log(this.$route);
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

