Package.describe({
  summary: "The ParaViewWeb JavaScript API"
});

Package.on_use(function (api, where) {
  api.add_files(['paraviewweb.js'], 'client');

  if (api.export)
    api.export('ParaViewWeb');
});
