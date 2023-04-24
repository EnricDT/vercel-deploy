import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sd/login",
  app: () => System.import("@sd/login"),
  activeWhen: ["/login"],
});

registerApplication({
  name: "@sd/dashboard",
  app: () => System.import("@sd/dashboard"),
  activeWhen: ["/dashboard"],
});

registerApplication({
  name: "@sd/dashboard-admin",
  app: () => System.import("@sd/dashboard-admin"),
  activeWhen: ["/dashboard-admin"],
});

start({
  urlRerouteOnly: true,
});
