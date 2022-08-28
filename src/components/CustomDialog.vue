<template>
    <div>
        <el-dialog title="打开二次封装Dialog" :visible.sync="dialogVisible" width="30%">
            <span>这是二次封装的一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        visible: Boolean
    },
    data() {
        return {
        };
    },
    computed: {
        dialogVisible: {
            get() {
                return this.visible
            },
            set(val) {
                this.$emit('update:visible', val)
            }
        }
    }
};
</script>