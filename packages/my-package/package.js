Package.describe({
  name: 'my-package',
});

Package.onUse(function (api) {

  api.use([
    'vulcan:core@1.12.3',
    'vulcan:forms@1.12.3',
    'vulcan:accounts@1.12.3',
  ]);

  api.addFiles('lib/stylesheets/bootstrap.min.css');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});