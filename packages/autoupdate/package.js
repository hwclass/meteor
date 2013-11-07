Package.describe({
  summary: "Update the client when new client code is available",
  internal: true
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
  api.use(['livedata', 'mongo-livedata'], ['client', 'server']);
  api.use('reload', 'client', {weak: true});

  api.add_files('autoupdate_server.js', 'server');
  api.add_files('autoupdate_client.js', 'client');
});
