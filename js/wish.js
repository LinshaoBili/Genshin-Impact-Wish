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
  return up;
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
  return up;
}

function wish_start(number) {
  wish_classification();
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
            up = blue[Math.ceil(Math.random() * blue[0])];
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

function start(number) {
  var primogem = JSON.parse(localStorage.getItem("primogem"));
  if (number * 160 <= primogem) {
  }else{
    alert("")
  }
}
