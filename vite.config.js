export default {
    root: './src/',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: 'src/index.html',
                add: 'src/add_task.html',
                task_detail: 'src/task_detail.html'
            }
        }
    }
}