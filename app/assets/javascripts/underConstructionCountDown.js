$(function () {
  var today = new Date();
  finishedProject = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  $('#countdown').countdown({until: finishedProject});
});
