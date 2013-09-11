Package.describe({
  summary: "The ParaViewWeb JavaScript API"
});

Package.on_use(function (api) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.add_files(['lib/paraviewweb.js'], 'client');
  api.export(['ParaViewWeb'], 'client');
});
