<template>
    <div id="app">
        <el-container style="width:1100px;margin: 0 auto;">
            <!--<el-header v-show="$route.path !== '/project'">
                <el-row>
                    <el-col :span="2">
                        <h1>
                            <img src="./assets/timg.jpg" style="height: 100px;"/>
                        </h1>
                        <img src="./assets/timg1.jpg" style="height: 100px;"/>
                    </el-col>
                    <el-col :span="22" style="margin-top: 20px;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                                 @select="handleSelect">


                            <el-menu-item index="1">
                                <router-link to="/system">系统管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link to="/view">视图管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <router-link to="/product">产品管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <router-link to="/device">设备管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <router-link to="/property">属性管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="6">
                                <router-link to="/point">数据采集点</router-link>
                            </el-menu-item>
                            <el-menu-item index="7">
                                <router-link to="/parser">数据解析</router-link>
                            </el-menu-item>
                            <el-menu-item index="8">
                                <router-link to="/image">图库管理</router-link>
                            </el-menu-item>


                            <el-menu-item index="9">
                                <router-link to="/organization">组织结构</router-link>
                            </el-menu-item>
                            <el-menu-item index="10">
                                <router-link to="/user">用户管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="11">
                                <router-link to="/role">角色管理</router-link>
                            </el-menu-item>
                            <el-submenu index="12">
                                <template slot="title">权限管理</template>
                                <el-menu-item index="12-1">
                                    <router-link to="/menu">菜单</router-link>
                                </el-menu-item>
                                <el-menu-item index="12-2">
                                    <router-link to="/item">元素</router-link>
                                </el-menu-item>
                                <el-menu-item index="12-3">
                                    <router-link to="/resource">资源</router-link>
                                </el-menu-item>
                                <el-menu-item index="12-4">
                                    <router-link to="/operation">操作</router-link>
                                </el-menu-item>
                            </el-submenu>

                            <el-menu-item index="14">
                                <router-link to="/subsys">子系统</router-link>
                            </el-menu-item>

                            <el-menu-item index="13" style="float: right;">
                                <router-link to="/project">返回</router-link>
                            </el-menu-item>


                        </el-menu>

                    </el-col>
                </el-row>
            </el-header>
            <el-main style="margin-top: 80px;">
                <router-view></router-view>
            </el-main>-->
            <el-main style="">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import organization from './components/management/organization/index.vue'


    export default {
        name: 'app',
        components: {
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
