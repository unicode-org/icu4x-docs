import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {

  // path uses a semver (2.0.1) instead of a directory name (2_0)
  let parts = context.url.pathname.match(/\/(?<major>[0-9]+)\.(?<minor>[0-9])+\.[0-9]+\/(?<rest>.*)$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}/${parts.groups['rest']}`, context.url), 301);
  }

  return next();
});
