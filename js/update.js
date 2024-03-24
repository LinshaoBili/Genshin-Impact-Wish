function update() {
  //原石
  var primogem = document.getElementsByClassName("currency_primogem");
  for (var i = 0; i < primogem.length; i++) {
    primogem[i].innerHTML = localStorage.getItem("primogem");
  }
  //无主的星辉
  var star = document.getElementsByClassName("currency_star");
  for (var i = 0; i < star.length; i++) {
    star[i].innerHTML = localStorage.getItem("star");
  }
  //无主的星尘
  var dust = document.getElementsByClassName("currency_dust");
  for (var i = 0; i < dust.length; i++) {
    dust[i].innerHTML = localStorage.getItem("dust");
  }
  //纠缠之缘
  var intertwined_fate = document.getElementsByClassName(
    "currency_intertwined_fate"
  );
  for (var i = 0; i < intertwined_fate.length; i++) {
    intertwined_fate[i].innerHTML = localStorage.getItem("intertwined_fate");
  }
  //相遇之缘
  var acquaint_fate = document.getElementsByClassName("currency_acquaint_fate");
  for (var i = 0; i < acquaint_fate.length; i++) {
    acquaint_fate[i].innerHTML = localStorage.getItem("acquaint_fate");
  }
  var gold_probability = document.getElementsByClassName("gold_probability");
  for (var i = 0; i < gold_probability.length; i++) {
    gold_probability[i].innerHTML = JSON.parse(
      localStorage.getItem("probability")
    )[0];
  }
  var purple_probability =
    document.getElementsByClassName("purple_probability");
  for (var i = 0; i < purple_probability.length; i++) {
    purple_probability[i].innerHTML = JSON.parse(
      localStorage.getItem("probability")
    )[1];
  }
  var blue_probability = document.getElementsByClassName("blue_probability");
  for (var i = 0; i < blue_probability.length; i++) {
    blue_probability[i].innerHTML = JSON.parse(
      localStorage.getItem("probability")
    )[2];
  }
  wish_up_1 = JSON.parse(localStorage.getItem("role_up_1"));
  wish_up_2 = JSON.parse(localStorage.getItem("role_up_2"));
  wish_up_3 = JSON.parse(localStorage.getItem("collection_up"));
  object_up_1 = document.getElementById("wish_object_up_1");
  object_up_1.style.backgroundImage =
    "url('resource/object/Genshin Impact/" + wish_up_1[0] + ".png')";
  object_up_1.setAttribute("class", wish_up_1[0] + " wish_object_up_img");
  object_up_2 = document.getElementById("wish_object_up_2");
  object_up_2.style.backgroundImage =
    "url('resource/object/Genshin Impact/" + wish_up_2[0] + ".png')";
  object_up_2.setAttribute("class", wish_up_2[0] + " wish_object_up_img");
  object_up_3 = document.getElementById("wish_object_up_3");
  object_up_3.style.backgroundImage =
    "url('resource/object/Genshin Impact/" + wish_up_3[0] + ".png')";
  object_up_3.setAttribute("class", wish_up_3[0] + " wish_object_up_img");
  if (wish_up == 1) {
    document
      .getElementById("wish_up_img")
      .setAttribute("src", "resource/wish/" + wish_up_1[0] + ".png");
  }
  if (wish_up == 2) {
    document
      .getElementById("wish_up_img")
      .setAttribute("src", "resource/wish/" + wish_up_2[0] + ".png");
  }
  if (wish_up == 3) {
    document
      .getElementById("wish_up_img")
      .setAttribute("src", "resource/wish/" + wish_up_3[0] + ".png");
  }
}
function wish_update(wish) {
  wish_up = wish;
  audio_buttom("click");
  update();
}
function interface_on(id) {
  if (id != null) {
    document.getElementById(id).style.display = "block";
  }
  document.getElementById("interface").style.zIndex = "10";
  var filter = document.getElementById("filter");
  filter.style.zIndex = "5";
  setTimeout((filter.style.opacity = "0.65"), 500);
}
function interface_off(id) {
  document.getElementById("interface").style.zIndex = "-10";
  var filter = document.getElementById("filter");
  setTimeout((filter.style.opacity = "0"), 1000);
  filter.style.zIndex = "-10";
  if (id != null) {
    document.getElementById(id).style.display = "none";
  }
}
function prompt_update() {
  if (Number(localStorage.getItem("prompt")) == 1) {
    var prompt = document.getElementById("prompt");
    prompt.style.opacity = "1";
    prompt.style.zIndex = "0";
    interface_on();
  } else {
    interface_off("prompt");
  }
  update();
}

// 确保DOM加载完成后再执行JavaScript代码
function audio_buttom(name) {
  const audio = document.createElement("audio");
  audio.src = "resource/" + name + ".ogg"; // 确保这里是正确的音频文件路径
  audio.controls = false; // 可选：显示音频控件，以便用户可以控制播放
  // 当音频播放结束时，删除audio元素
  function removeAudio() {
    const audioContainer = document.getElementById("audio");
    audioContainer.removeChild(audio);
  }
  // 清空audio元素的事件监听器，避免重复添加
  audio.removeEventListener("ended", removeAudio);
  audio.addEventListener("ended", removeAudio);
  // 将audio元素添加到id为'audio'的div中
  const audioContainer = document.getElementById("audio");
  audioContainer.innerHTML = ""; // 清空容器中的旧内容
  audioContainer.appendChild(audio);
  // 播放音频
  audio.play();
}

function plus() {
  var number =
    Number(Math.ceil(Math.random() * 10086)) +
    Number(localStorage.getItem("primogem"));
  localStorage.setItem("primogem", number);
  update();
}
function list_width_update() {
  var list = document.getElementById("portrait_list");
  list.style.minWidth =
    document.getElementsByClassName("portrait_list").length * 75 + "px";
  list.style.marginLeft = "-" + Number(list.style.minWidth.split("px")[0]) / 2 + "px";
}
