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
    audio_buttom("wish_appear");
    new_portrait();
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
  // result = result.map((item) => item.split("/")[1]);
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
function new_portrait() {
  player = 0;
  number = result.length;
  document.getElementById("portrait_color").src =
    "resource/wish_background_" + Math.ceil(Math.random() * 5) + ".png";
  portrait();
}
function portrait() {
  var portrait_name = document.getElementById("portrait_name_div");
  var portrait_main = document.getElementById("portrait_main");
  var portrait_name_star = document.getElementById("portrait_name_star");
  var portrait = document.getElementById("portrait");
  portrait_main.style.backgroundImage = "";
  portrait_main.style.backgroundPositionX = "0px";
  portrait_main.style.backgroundPositionY = "0px";
  portrait_main.style.filter = "contrast(0%)";
  portrait_name.style.transition = "none";
  while (portrait_name_star.firstChild) {
    portrait_name_star.removeChild(portrait_name_star.firstChild);
  }
  function off() {
    sort();
    interface_off("role_portrait");
    document.getElementById("portrait_list").innerHTML = "";
    if (result.length > 1) {
      interface_on("list");
      for (var i = 0; i < result.length; i++) {
        var number = Number(result[i].split("/")[0]);
        if (number == 5) {
          var color = "gold";
        } else {
          if (number == 4) {
            var color = "purple";
          } else {
            var color = "blue";
          }
        }
        new_list(result[i].split("/")[1], color);
        list_width_update();
      }
    }
  }
  function star() {
    for (var i = 0; i < name[0]; i++) {
      var newElement = document.createElement("div");
      newElement.className = "star";
      portrait_name_star.appendChild(newElement);
    }
  }
  if (number <= 0) {
    off();
  } else {
    interface_on("role_portrait");
    try {
      if (Number(player) != 0) {
        player = 0;
        number -= 1;
        audio_buttom("wish_appear");
      }
      var name = result[number - 1].split("/");
    } catch (err) {
      off();
    }
    try {
      name[0] = Number(name[0]);
      portrait_name.innerHTML = name[1];
    } catch (err) {
      name = [3, "dubug"];
    }
    star();
    if (name[0] > 3) {
      portrait_main.style.transition = "0.5s";
      portrait_main.style.backgroundImage =
        "url(resource/portrait/Genshin_Impact/" + name[1] + ".png)";
      portrait_main.style.backgroundPositionX = "center";
      portrait_main.style.backgroundPositionY = "center";
      setTimeout(function () {
        portrait_main.style.filter = "contrast(100%)";
      }, 500);
      portrait.style.opacity = "1";
    } else {
      portrait_main.style.backgroundImage = "";
      portrait.style.opacity = "0";
    }
  }
}
function incomplete() {
  window_prompt_text("未完成", "很抱歉此功能暂未制作完成<br />敬请期待");
  interface_on("window_prompt");
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

function new_list(role, color) {
  var portrait_list = document.createElement("div");
  portrait_list.className = "portrait_list";
  portrait_list.style.opacity = "0";
  for (let i = 0; i < 3; i++) {
    const list_div = document.createElement("div");
    const name = ["light_top", "list", "light_bottom"];
    list_div.className = name[i];
    if (name[i] == "list") {
      list_div.className = name[i] + " " + role;
      list_div.style.backgroundImage =
        "url(resource/portrait/Genshin_Impact/" + role + ".png)";
    } else {
      if (color == "gold") {
        list_div.className = list_div.className + " gold";
      } else {
        if (color == "purple") {
          list_div.className = list_div.className + " purple";
        } else {
          list_div.className = list_div.className + " blue";
        }
      }
    }
    portrait_list.appendChild(list_div);
  }
  document.getElementById("portrait_list").appendChild(portrait_list);
  setTimeout(function () {
    const y = "55";
    var portrait_list = document.getElementsByClassName("portrait_list");
    for (var i = 0; i < portrait_list.length; i++) {
      portrait_list[i].style.opacity = "1";
    }
    setTimeout(function () {
      var light_top = document.getElementsByClassName("light_top gold");
      for (var i = 0; i < light_top.length; i++) {
        light_top[i].style.boxShadow = "0px -" + y + "px 20px -5px goldenrod";
      }
      var light_top = document.getElementsByClassName("light_top purple");
      for (var i = 0; i < light_top.length; i++) {
        light_top[i].style.boxShadow = "0px -" + y + "px 20px -5px blueviolet";
      }
      var light_top = document.getElementsByClassName("light_top blue");
      for (var i = 0; i < light_top.length; i++) {
        light_top[i].style.boxShadow = "0px -" + y + "px 20px -5px deepskyblue";
      }
      var light_bottom = document.getElementsByClassName("light_bottom gold");
      for (var i = 0; i < light_bottom.length; i++) {
        light_bottom[i].style.boxShadow = "0px " + y + "px 20px -5px goldenrod";
      }
      var light_bottom = document.getElementsByClassName("light_bottom purple");
      for (var i = 0; i < light_bottom.length; i++) {
        light_bottom[i].style.boxShadow =
          "0px " + y + "px 20px -5px blueviolet";
      }
      var light_bottom = document.getElementsByClassName("light_bottom blue");
      for (var i = 0; i < light_bottom.length; i++) {
        light_bottom[i].style.boxShadow =
          "0px " + y + "px 20px -5px deepskyblue";
      }
    }, 200);
  }, 150);
}
