export const socialsColors = (net) => {
    switch (net) {
        case 'facebook':
            return 'facebookColor'
        case 'twitter':
            return 'twitterColor'
        case 'github':
            return 'githubColor'
        case 'linkedin':
            return 'linkedinColor'
        default:
            return 'defaultNetColor'
    }
}
