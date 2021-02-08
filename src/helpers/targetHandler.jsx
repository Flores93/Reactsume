export const targetHandler = (currentPath) => {
    switch (currentPath) {
        case '/resume':
            return '#skillsGrid'
        case '/portfolio':
            return '#workThumbnailGrid'
        default:
            return '#hobbiesDiv'
    }
}