export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:showModal', false)
        },
    },
}