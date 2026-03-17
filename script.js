(function setUpdatedTime() {
  var nodes = document.querySelectorAll('.updated-time');
  if (!nodes.length) {
    return;
  }

  var now = new Date();
  var formatted = now.toLocaleString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  nodes.forEach(function (node) {
    node.textContent = 'Updated on ' + formatted;
    node.setAttribute('datetime', now.toISOString());
  });
})();
