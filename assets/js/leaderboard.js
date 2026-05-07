(function() {
  document.querySelectorAll('table.leaderboard').forEach(function(table) {
    var thead = table.tHead;
    var tbody = table.tBodies[0];
    if (!thead || !tbody) return;
    var headers = thead.rows[0].cells;
    var state = { col: null, dir: null };

    function cellValue(row, idx) {
      var cell = row.cells[idx];
      if (!cell) return '';
      var v = cell.getAttribute('data-value');
      return v !== null ? v : cell.textContent.trim();
    }

    function sortBy(colIdx) {
      var dir = (state.col === colIdx && state.dir === 'desc') ? 'asc' : 'desc';
      var rows = Array.prototype.slice.call(tbody.rows);
      rows.sort(function(a, b) {
        var av = cellValue(a, colIdx);
        var bv = cellValue(b, colIdx);
        var an = parseFloat(av);
        var bn = parseFloat(bv);
        var bothNumeric = !isNaN(an) && !isNaN(bn);
        var cmp = bothNumeric ? (an - bn) : av.localeCompare(bv);
        return dir === 'asc' ? cmp : -cmp;
      });
      rows.forEach(function(r) { tbody.appendChild(r); });
      state.col = colIdx;
      state.dir = dir;
      Array.prototype.forEach.call(headers, function(th, i) {
        th.classList.remove('sort-asc', 'sort-desc');
        if (i === colIdx) th.classList.add(dir === 'asc' ? 'sort-asc' : 'sort-desc');
      });
    }

    Array.prototype.forEach.call(headers, function(th, idx) {
      th.setAttribute('role', 'button');
      th.setAttribute('tabindex', '0');
      th.addEventListener('click', function() { sortBy(idx); });
      th.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sortBy(idx); }
      });
    });
  });
})();
