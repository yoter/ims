<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="2">
                        <!--<h1>
                            <img src="./assets/timg.jpg" style="height: 100px;"/>
                        </h1>-->
                        <img src="./assets/timg1.jpg" style="height: 100px;"/>
                    </el-col>
                    <el-col :span="22" style="margin-top: 20px;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                                 @select="handleSelect">
                            <el-menu-item index="1">
                                <router-link to="/project">项目管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link to="/organization">组织结构</router-link>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <router-link to="/user">用户管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <router-link to="/role">角色管理</router-link>
                            </el-menu-item>
                            <el-submenu index="5">
                                <template slot="title">权限管理</template>
                                <el-menu-item index="5-1">
                                    <router-link to="/menu">菜单</router-link>
                                </el-menu-item>
                                <el-menu-item index="5-2">
                                    <router-link to="/item">元素</router-link>
                                </el-menu-item>
                                <el-menu-item index="5-3">
                                    <router-link to="/resource">资源</router-link>
                                </el-menu-item>
                                <el-menu-item index="5-4">
                                    <router-link to="/operation">操作</router-link>
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>

                    </el-col>
                </el-row>
            </el-header>
            <el-main style="margin-top: 80px;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import organization from './components/organization/index.vue'


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
