export const navigate = (navigation, screen, params) => {
    if (typeof navigation === 'object' && typeof screen === 'string') {
        navigation.navigate(screen, params);
    }
};
