Package.describe({
  summary: "The ParaViewWeb JavaScript API"
});

Package.on_use(function (api) {
  api.add_files(['paraviewweb.js'], 'client');
  api.export(['ParaViewWeb'], 'client');
});
