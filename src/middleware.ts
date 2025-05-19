import { defineMiddleware, sequence } from "astro/middleware";

// path uses a semver (2.0.1) instead of a directory name (2_0)
export const onRequest = sequence(redirectSemver, redirectVersionRoot);

function redirectSemver(context, next) {
  let parts = context.url.pathname.match(/^\/(?<major>[0-9]+)\.(?<minor>[0-9])+\.[0-9]+(?<rest>\/.*)?$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}${parts.groups['rest'] || ''}`, context.url), 302);
  }

  return next();
}


// redirect the version root (/2_0/) to quickstart (/2_0/tutorials/quickstart/)
function redirectVersionRoot(context, next) {
  let parts = context.url.pathname.match(/^\/(?<major>[0-9]+)_(?<minor>[0-9])+\/?$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}/tutorials/quickstart`, context.url), 302);
  }

  return next();
};
