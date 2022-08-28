<style>
.page-guide {
    padding: 55px 30px 95px;
    box-sizing: border-box;

    .content {
        padding-left: 25px;
        margin-left: -1px;

        h2 {
            margin-bottom: 10px;
        }

        h3 {
            font-size: 22px;
            font-weight: normal;
            margin: 0 0 30px;
            color: #1f2d3d;
        }

        p {
            line-height: 1.6;
            font-size: 14px;
            color: #5e6d82;
        }

        ul {
            margin-bottom: 50px;
            padding-left: 0;
        }

        li {
            font-size: 14px;
            margin-bottom: 10px;
            color: #99a9bf;
            list-style: none;

            &:before {
                content: '';
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                vertical-align: middle;
                background-color: #5e6d82;
                margin-right: 5px;
            }

            strong {
                color: #5e6d82;
                font-weight: 400;
            }
        }
    }
}

@media (max-width: 768px) {
    .page-guide {
        .content {
            padding-left: 0;
        }
    }
}
</style>
<template>
    <div class="page-container page-guide page-component">
        <el-row>
            <el-col :xs="24" :sm="5">
                <SideNav :data="navsData" :base="`/fe`"></SideNav>
            </el-col>
            <el-col :xs="24" :sm="19">
                <component :is="'md-' + $route.params.name"></component>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import navsData from './nav.config.js'
import SideNav from './SideNav.vue'
import Vue from 'vue'
const requireComponents = require.context('../docs/', false, /\.md/)
const loadDocsComponents = {}
requireComponents.keys().forEach(fileName => {
    // 组件实例
    const reqCom = requireComponents(fileName)
    // 截取路径作为组件名
    const reqComName = fileName.replace(/\.\//, '').replace(/\.md/, '')
    // 组件挂载
    loadDocsComponents['md-' + reqComName] = reqCom.default || reqCom
})

const components = require.context('../', false, /\.vue/)
components.keys().forEach(fileName => {
    // 组件实例
    const reqCom = components(fileName)
    // 截取路径作为组件名
    const reqComName = fileName.replace(/\.\//, '').replace(/\.vue/, '')
    // 组件挂载
    Vue.component(reqComName, reqCom.default || reqCom)
})
export default {
    components: { SideNav, ...loadDocsComponents },
    data() {
        return {
            navsData: navsData
        };
    }
};
</script>
