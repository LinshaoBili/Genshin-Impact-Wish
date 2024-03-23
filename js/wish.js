function wish_classification() {
  text = [];
  star_5_up = [];
  star_5 = [];
  star_4 = [];
  star_5_up[0] = star_5[0] = star_4[0] = 0;
  var list = JSON.parse(localStorage.getItem("list"));
  var Cache = 0;
  console.log(list);
  while (true) {
    if (list[Cache] != null) {
      var text = list[Cache].split("/");
      if (text[0] != "5") {
        star_4[star_4[0] + 1] = text[0];
        star_4[0] = star_4[0] + 1;
      } else {
        if (text[1] != "no") {
          star_5_up[star_5_up[0] + 1] = text[1];
          star_5_up[0] = star_5_up[0] + 1;
        } else {
          star_5[star_5[0] + 1] = text[2];
          star_5[0] = star_5[0] + 1;
        }
      }
    } else {
      break;
    }
    Cache += 1;
  }
}
function animation(name, times) {
  var background = document.getElementById("background");
  var animationElement = document.getElementById("animation");
  var animation_ogg = document.getElementById("animation_ogg");
  background.style.zIndex = "10";
  animationElement.style.zIndex = "10";
  animationElement.src = "resource/" + name + ".mp4";
  animation_ogg.src = "resource/wish.ogg";
  animation_ogg.controls = false;
  animation_ogg.play();
  setTimeout(function () {
    background.style.zIndex = "";
    animationElement.style.zIndex = "";
    animationElement.src = "resource/background_video.mp4";
    animation_ogg.src = "";
  }, times);
}
function seek_wish(number) {
  if (number == -1) {
    if (wish_up == 1) {
      up = "role_up_1";
    } else {
      if (wish_up == 2) {
        up = "role_up_2";
      } else {
        if (wish_up == 3) {
          up = "collection_up";
        }
      }
    }
  } else {
    if (wish_up == 1) {
      up = JSON.parse(localStorage.getItem("role_up_1"))[number];
    } else {
      if (wish_up == 2) {
        up = JSON.parse(localStorage.getItem("role_up_2"))[number];
      } else {
        if (wish_up == 3) {
          up = JSON.parse(localStorage.getItem("collection_up")[number]);
        }
      }
    }
  }
  return up;
}
function gold(up) {
  if (up != "yes") {
    up = star_5[Math.ceil(Math.random() * star_5[0])];
    number = seek_wish(2) + 1;
  } else {
    up = seek_wish(0);
    number = 0;
  }
  localStorage.setItem(
    seek_wish(-1),
    JSON.stringify([seek_wish(0), 0, number, seek_wish(3), seek_wish(4)])
  );
  if (color != "gold") {
    color = "gold";
  }
  return "5/" + up;
}
function purple(up) {
  if (up != "yes") {
    up = star_4[Math.ceil(Math.random() * star_4[0])];
  } else {
    up = seek_wish(4).split("/");
    up = up[Math.ceil(Math.random() * 3) - 1];
  }
  localStorage.setItem(
    seek_wish(-1),
    JSON.stringify([seek_wish(0), seek_wish(1), seek_wish(2), 0, seek_wish(4)])
  );
  if (color == "blue" || color == null) {
    color = "purple";
  }
  return "4/" + up;
}

function sort() {
  result.sort((a, b) => {
    const numA = parseInt(a.split("/")[0]);
    const numB = parseInt(b.split("/")[0]);
    return numB - numA;
  });
  result = result.map((item) => item.split("/")[1]);
}
function wish_start(number) {
  wish_classification();
  color = null;
  max = 90;
  result = [];
  var probability = JSON.parse(localStorage.getItem("probability"));
  while (true) {
    function gold_50() {
      text = Math.ceil(Math.random() * 100);
      if (text >= 50) {
        up = gold("yes");
      } else {
        up = gold("no");
      }
      return up;
    }
    function purple_5() {
      text = Math.ceil(Math.random() * 5);
      if (text >= 4) {
        up = purple("no");
      } else {
        up = purple("yes");
      }
      return up;
    }
    localStorage.setItem(
      seek_wish(-1),
      JSON.stringify([
        seek_wish(0),
        seek_wish(1) + 1,
        seek_wish(2),
        seek_wish(3) + 1,
        seek_wish(4),
      ])
    );

    if (seek_wish(1) >= max) {
      if (seek_wish(2) >= 1) {
        up = gold("yes");
      } else {
        up = gold_50();
      }
    } else {
      if (seek_wish(3) >= 10) {
        up = purple_5();
      } else {
        text = Math.ceil(Math.random() * 100000);
        if (probability[0] > text) {
          up = gold_50();
        } else {
          if (probability[1] > text) {
            up = purple_5();
          } else {
            up = "3/" + blue[Math.ceil(Math.random() * blue[0])];
            if (color == null) {
              color = "blue";
            }
          }
        }
      }
    }

    result[number - 1] = up;
    number -= 1;
    if (number <= 0) {
      console.log(result);
      break;
    }
  }
}

function portrait() {
}

function window_prompt_text(title, text) {
  document.getElementById("window_prompt_title").innerHTML = title;
  document.getElementById("window_prompt_text").innerHTML = text;
}

function start(number) {
  update();
  var primogem = JSON.parse(localStorage.getItem("primogem"));
  if (number * 160 <= primogem) {
    localStorage.setItem("primogem", primogem - number * 160);
    wish_start(number);
    var name = color + "_" + number;
    animation(name, 6700);
  } else {
    window_prompt_text("原石不足", "请补充");
    interface_on("window_prompt");
  }
  update();
}
