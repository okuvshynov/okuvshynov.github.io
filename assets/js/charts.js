(function() {
  var path = window.location.pathname;
  var match = path.match(/\/articles\/(.+)\.html$/);
  if (!match) return;
  var slug = match[1];
  fetch('/data/articles/' + slug + '.json')
    .then(function(r) { return r.ok ? r.json() : null; })
    .then(function(json) {
      if (!json || !json.charts) return;
      Object.keys(json.charts).forEach(function(id) {
        var canvas = document.getElementById(id);
        if (!canvas) return;
        var cfg = json.charts[id];
        new Chart(canvas, {
          type: cfg.type,
          data: cfg.data,
          options: cfg.options || {}
        });
      });
    })
    .catch(function() {});
})();
