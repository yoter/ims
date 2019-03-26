<template>
    <div>
        <div style="display: flex;flex-flow: row nowrap;align-items:center;margin: 30px auto;" v-for="n in 10">
            <div style="width: 200px;">
                <p style="text-align: center;font-size: 48px;">{{n}}</p>
            </div>
            <div style="flex-grow: 1;padding-bottom: 30px;">
                <!--<el-card class="box-card">-->
                    <!---->
                <!--</el-card>-->
                <el-row class="m20">
                    <el-col :span="22">
                        <h3>冷机</h3>
                    </el-col>
                    <el-col :span="2">
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                    </el-col>
                </el-row>
                <div  v-for="m in 5" style="display:inline-flex;margin:10px 10px 10px 0;height:80px;width:150px;padding: 14px 26px 14px 0;">
                    <div :style="{backgroundImage:'url('+require('../../../../../assets/images/all_small_icons.png')+')'}"
                         style="width: 50px;background-position: -1049px -376px;">
                    </div>
                    <div>
                        <h3>故障</h3>
                        <div><p>fault</p></div>
                    </div>
                </div>
                <!--<h3 class="m20">描述</h3>-->
                <ul class="m20">
                    <li><h3>描述</h3></li>
                    <li>属性名称:test</li>
                    <li>属性编码:123</li>
                    <li>值2:</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return {

            }
        }
    }

</script>