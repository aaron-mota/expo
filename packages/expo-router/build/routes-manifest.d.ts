export type RouteInfo<TRegex = string> = {
    page: string;
    namedRegex: TRegex;
    routeKeys: {
        [named: string]: string;
    };
};
export type ExpoRoutesManifestV1<TRegex = string> = {
    dynamicRoutes: RouteInfo<TRegex>[];
    staticRoutes: RouteInfo<TRegex>[];
    notFoundRoutes: RouteInfo<TRegex>[];
};
export declare function createRoutesManifest(paths: string[]): ExpoRoutesManifestV1 | null;
//# sourceMappingURL=routes-manifest.d.ts.map