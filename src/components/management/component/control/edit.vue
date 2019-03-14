<template>
    <div>
        <el-card class="box-card card">
            <el-row>
                <h2 style="display: inline-block;width: 95%;">标题</h2>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>按钮:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <el-input v-model="input" placeholder="请输入内容" style="width: 230px;"></el-input>
                </div>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>配置信息:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <ul>
                        <li>最小值：0</li>
                        <li>最大值：10</li>
                        <li>步长：2</li>
                    </ul>
                </div>
            </el-row>
        </el-card>

        <el-card class="box-card card">
            <el-row>
                <h2 style="display: inline-block;width: 95%;">标题</h2>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>按钮:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <el-switch
                            v-model="value2"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </div>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>配置信息:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <ul>
                        <li>最小值：0</li>
                        <li>最大值：10</li>
                        <li>步长：2</li>
                    </ul>
                </div>
            </el-row>
        </el-card>

        <el-card class="box-card card">
            <el-row>
                <h2 style="display: inline-block;width: 95%;">标题</h2>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>按钮:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>配置信息:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <ul>
                        <li>最小值：0</li>
                        <li>最大值：10</li>
                        <li>步长：2</li>
                    </ul>
                </div>
            </el-row>
        </el-card>

        <el-card class="box-card card">
            <el-row>
                <h2 style="display: inline-block;width: 95%;">标题</h2>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>按钮:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <!--<span class="demonstration">默认</span>
                    <el-slider v-model="value1"></el-slider>-->
                    <el-button type="primary" round>主要按钮</el-button>
                </div>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>配置信息:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <ul>
                        <li>最小值：0</li>
                        <li>最大值：10</li>
                        <li>步长：2</li>
                    </ul>
                </div>
            </el-row>
        </el-card>

        <el-card class="box-card card">
            <el-row>
                <h2 style="display: inline-block;width: 95%;">标题</h2>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>按钮:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <span class="demonstration">默认</span>
                    <el-slider v-model="value1"></el-slider>
                </div>
            </el-row>
            <el-row style="margin-top: 20px;">
                <h3>配置信息:</h3>
                <div class="block" style="margin: 20px auto 10px auto;">
                    <ul>
                        <li>最小值：0</li>
                        <li>最大值：10</li>
                        <li>步长：2</li>
                    </ul>
                </div>
            </el-row>
        </el-card>
    </div>
</template>
<style>
    i{
        margin-right: 10px;
    }
    ul {
        list-style: none;
        margin: 10px auto;
    }

    ul li {
        display: inline-block;
        /*width: 42%;*/

    }
    .card{
        margin: 10px auto;
    }
</style>
<script>
    export default {
        name:"control",
        data(){
            return{
                input:"",
                value1:0,
                value2: true,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''

            }
        }
    }
</script>