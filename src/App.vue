<template>
    <div id="app">
        <el-container style="width:1300px;margin: 0 auto;">
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-submenu index="1">
                        <template slot="title">视图管理</template>
                        <el-menu-item index="1-1">
                            <router-link to="/v">视图</router-link>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">资产管理</template>
                        <el-menu-item index="2-1">
                            <router-link to="/classification">分类</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <router-link to="/asset">资产</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-3">
                            <router-link to="/attribute">属性</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-4">
                            <router-link to="/variable">变量</router-link>
                        </el-menu-item>
                        <el-submenu index="2-5">
                            <template slot="title">扩展</template>
                            <el-menu-item index="2-5-1">
                                <router-link to="/value">变量值</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-5-2">
                                <router-link to="/state">状态</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-5-3">
                                <router-link to="/ctrl">控制</router-link></el-menu-item>
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
            </el-header>
            <el-main style="">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import organization from './components/management/organization/index.vue'
    import ElRow from "element-ui/packages/row/src/row";
    import ElHeader from "../node_modules/element-ui/packages/header/src/main";


    export default {
        name: 'app',
        components: {
            ElHeader,
            ElRow,
            organization
        },
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
