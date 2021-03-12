var figure = $(".video");
var vid = figure.find("video");

[].forEach.call(figure, function (item, index) {
  item.addEventListener("mouseover", hoverVideo.bind(item, index), false);
  item.addEventListener("mouseout", hideVideo.bind(item, index), false);
});

function hoverVideo(index, e) {
  vid[index].play();
}

function hideVideo(index, e) {
  vid[index].pause();
}

// var $polystar = $(".polystart");
// $polystar.on("mouseenter focus", function () {
//   $polystar.get(0).play();
// });
// $polystar("mouseout blur", function () {
//   $polystar.get(0).pause();
// });
