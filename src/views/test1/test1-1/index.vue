<template>
<!--    //参数设置-->
    <div>
        <div  v-for="iteam in tableData">

            <div    v-if="iteam.nCSLX==1"> <el-input  v-model="data1"   placeholder="iteam.cCSBL"> </el-input>  </div>

            <div    v-if="iteam.nCSLX==2">

                <el-select v-model="data1" placeholder="请选择">
                    <el-option
                            v-for="itema in iteam.cCSBL"
                            :key="itema.value"
                            :label="itema.label"
                            :value="itema.value">
                    </el-option>
                </el-select>

            </div>
            <div    v-if="iteam.nCSLX==3">
<!--   // v-model预选状态 ['上海', '北京'],-->
                <el-checkbox-group v-model="data1" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="value in iteam.cCSBL" :label="value" :key="value">{{value}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>


<!--        <vxe-table :data="tableData">-->
<!--            <vxe-table-column type="seq" title="Seq" width="60"></vxe-table-column>-->
<!--            <vxe-table-column field="name" title="Name"></vxe-table-column>-->
<!--            <vxe-table-column field="sex" title="Sex"></vxe-table-column>-->
<!--            <vxe-table-column field="address" title="Address"></vxe-table-column>-->
<!--        </vxe-table>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                data1:'',
                a:1,
                tableData: [
                    { cCSMZ: "单选框", nCSLX: 2, cCSBL: [{
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
                        }


                        ]},
                    { cCSMZ: "输入框", nCSLX: 1, cCSBL: 'Develop' },
                    { cCSMZ: "复选框", nCSLX: 3, cCSBL: [{
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
                        }] }

                ]


            }
        },
        methods:{

            handleCheckedCitiesChange(){
                console.log("复选框进来了");
            },

        }
    }
</script>