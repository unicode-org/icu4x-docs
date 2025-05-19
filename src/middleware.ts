import { sequence } from "astro/middleware";
import { latest_dir_name } from "../astro.config.mjs";

export const onRequest = sequence(redirectLatest, redirectSemver, redirectVersionRoot, redirectTutorialsRoot);

// redirect /latest to the latest version
function redirectLatest(context, next) {
  if (context.url.pathname.slice(0, 7) == '/latest') {
    let rest = context.url.pathname.slice(context.url.pathname.length == 7 ? 7 : 8);
    return Response.redirect(new URL(`/${latest_dir_name}/${rest}`, context.url), 302);

  }

  return next();
}

// redirect a semver (/2.0.1) to a directory name (/2_0)
function redirectSemver(context, next) {
  let parts = context.url.pathname.match(/^\/(?<major>[0-9]+)\.(?<minor>[0-9])+\.[0-9]+(?<rest>\/.*)?$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}${parts.groups['rest'] || ''}`, context.url), 302);
  }

  return next();
}

// redirect the version root (/2_0) to quickstart (/2_0/tutorials/quickstart)
function redirectVersionRoot(context, next) {
  let parts = context.url.pathname.match(/^\/(?<major>[0-9]+)_(?<minor>[0-9])+\/?$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}/tutorials/quickstart`, context.url), 302);
  }

  return next();
};


// redirect the tutorials root (/2_0/tutorials) to quickstart (/2_0/tutorials/quickstart)
function redirectTutorialsRoot(context, next) {
  let parts = context.url.pathname.match(/^\/(?<major>[0-9]+)_(?<minor>[0-9])+\/tutorials\/?$/);
  if (parts?.groups) {
    return Response.redirect(new URL(`/${parts.groups['major']}_${parts.groups['minor']}/tutorials/quickstart`, context.url), 302);
  }

  return next();
};
