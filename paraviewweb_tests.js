Tinytest.add("ParaViewWeb package found", function(test) {
  test.equal(ParaViewWeb.test(), "success");
});

Tinytest.add("ParaViewWeb initialize JavaScriptRenderer", function(test) {
  var renderer = new ParaViewWeb.JavaScriptRenderer("rendererName", 'http://localhost:8080/PWService');
  renderer.interactiveRatio = 1;
  test.equal(renderer.interactiveRatio, 1);
});