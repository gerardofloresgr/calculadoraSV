export const global = {
    toNavigate(router, name) {
        router.push('/' + name);
    },
    round(number) {
        return Math.round((number + Number.EPSILON) * 100) / 100;
    }
};