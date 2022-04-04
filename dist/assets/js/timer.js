"use strict";document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".js_timer").forEach(function(e){var t=(new Date).getTime(),n=new Date(e.dataset.start).getTime(),r=new Date(e.dataset.end).getTime(),a=!1,o=function(){return t>n},i=function(){return t<r};n&&r&&(o()&&i()?a=!0:n&&!r&&(o()?a=!0:!n&&r&&(a=!!i()))),a||e.remove()})});
//# sourceMappingURL=maps/timer.js.map
