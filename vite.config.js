export default {
    root: './src/',
    build: {
        rollupOptions: {
            input: {
                index: 'src/index.html',
                add: 'src/add_task.html'
            }
        }
    }
}