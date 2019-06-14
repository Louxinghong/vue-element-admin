<template>
    <div class="settinng-panel-container" :class="{'show': show}">
        <div class="setting-panel">
            <div class="handle-button" @click="show = !show">
                <i :class="show ? 'el-icon-close' : 'el-icon-setting'"/>
            </div>
            <div class="setting-panel-items">
                <h3 class="panel-title">系统配置</h3>

                <div class="panel-item">
                    <span>启用标签栏</span>
                    <el-switch class="panel-switch" v-model="panel_tag"/>
                </div>

                <div class="panel-item">
                    <span>固定头部</span>
                    <el-switch class="panel-switch" v-model="panel_fixed"/>
                </div>

                <div class="panel-item">
                    <span>侧边栏按钮</span>
                    <el-switch class="panel-switch" v-model="panel_side"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingPanel',
    data() {
        return {
            show: false,
            panel_tag: false,
            panel_fixed: false,
            panel_side: false

        }
    }
}
</script>

<style lang="less" scoped>

    .settinng-panel-container{
        .setting-panel {
            position: fixed;
            height: 100vh;
            width: 100%;
            max-width: 260px;
            top: 0;
            left: auto;
            right: 0;
            background: #fff;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
            transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
            transform: translate(100%);
            z-index: 40000;

            .handle-button {
                position: absolute;
                top: 250px;
                left: -48px;
                border-radius: 6px 0 0 6px !important;
                width: 48px;
                height: 48px;
                z-index: 0;
                cursor: pointer;
                pointer-events: auto;
                font-size: 24px;
                text-align: center;
                color: #fff;
                background-color: #c2c2c2;
                line-height: 48px;

                i {
                    font-size: 24px;
                    line-height: 48px;
                }
            }

            .setting-panel-items {
                padding: 24px;
                font-size: 14px;
                line-height: 1.5;
                word-wrap: break-word;

                .panel-title {
                    margin-bottom: 12px;
                    color: rgba(0, 0, 0, 0.85);
                    font-size: 14px;
                    line-height: 22px;
                }

                .panel-item {
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 14px;
                    padding: 12px 0;
                }

                .panel-switch {
                    float: right;
                }
            }
        }

        &.show {
            .setting-panel {
                transform: translate(0);
            }
        }
    }
</style>
