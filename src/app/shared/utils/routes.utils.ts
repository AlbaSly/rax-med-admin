export namespace RoutesUtils {
    export function replaceRouteIdParam(route: string, value: any): string {
        return route.replace(':id', value.toString());
    }

    export function buildRoute(...routes: string[]): string {
        let route: string = '/';

        for (let i = 0; i < routes.length; i++) {
            route += routes[i] + (i === routes.length-1 ? '' : '/');
        }

        return route;
    }
}