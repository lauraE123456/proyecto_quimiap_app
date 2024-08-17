/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< HEAD
      StaticRoutes: `` | `/` | `/(auth)` | `/(tabs)` | `/_sitemap` | `/bookmark` | `/create` | `/home` | `/profile` | `/sign-in` | `/sign-up`;
      DynamicRoutes: `/${Router.SingleRoutePart<T>}` | `/(search)/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(search)/[query]` | `/[query]`;
=======
      StaticRoutes: `/` | `/(tabs)\profile` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
>>>>>>> d5f7a298a8f4cfd9e1c6b83b1d3e43612d444527
    }
  }
}
