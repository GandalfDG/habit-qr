export default {
    root: './src/',
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                add: 'add_task.html'
            }
        }
    }
}