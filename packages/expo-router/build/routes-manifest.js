"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutesManifest = void 0;
// no relative imports
const getMatchableManifest_1 = require("./getMatchableManifest");
const getRoutes_1 = require("./getRoutes");
function createMockContextModule(map = []) {
    const contextModule = (key) => ({ default: function () { } });
    Object.defineProperty(contextModule, 'keys', {
        value: () => map,
    });
    return contextModule;
}
function createRoutesManifest(paths) {
    const routeTree = (0, getRoutes_1.getRoutes)(createMockContextModule(paths), {
        preserveApiRoutes: true,
        ignoreRequireErrors: true,
    });
    if (!routeTree) {
        return null;
    }
    return (0, getMatchableManifest_1.getServerManifest)(routeTree);
}
exports.createRoutesManifest = createRoutesManifest;
//# sourceMappingURL=routes-manifest.js.map