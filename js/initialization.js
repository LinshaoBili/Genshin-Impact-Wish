//初始化
skip = 0;
wish_up = 1;
cost = 160;
var initialization = localStorage.getItem("prompt");
if (initialization == null) localStorage.setItem("prompt", 1); //提示
var initialization = localStorage.getItem("primogem");
if (initialization == null) localStorage.setItem("primogem", 6480); //原石
var initialization = localStorage.getItem("star");
if (initialization == null) localStorage.setItem("star", 0); //无主的星辉
var initialization = localStorage.getItem("dust");
if (initialization == null) localStorage.setItem("dust", 0); //无主的星尘
var initialization = localStorage.getItem("intertwined_fate");
if (initialization == null) localStorage.setItem("intertwined_fate", 0); //纠缠之缘
var initialization = localStorage.getItem("acquaint_fate");
if (initialization == null) localStorage.setItem("acquaint_fate", 0); //相遇之缘
var initialization = localStorage.getItem("probability");
if (initialization == null)
  localStorage.setItem("probability", JSON.stringify([600, 5100, 94300])); //基础出率 5星,4星,3星
var initialization = localStorage.getItem("role_up_1");
if (initialization == null)
  localStorage.setItem(
    "role_up_1",
    JSON.stringify(["纳西妲", 0, 0, 0, "久岐忍/多莉/莱依拉"])
  ); //限定角色1名字,次数,保底次数,4星,4星角色
var initialization = localStorage.getItem("role_up_2");
if (initialization == null)
  localStorage.setItem(
    "role_up_2",
    JSON.stringify(["妮露", 0, 0, 0, "久岐忍/多莉/莱依拉"])
  ); //限定角色2名字,次数,保底次数,4星,4星角色
var initialization = localStorage.getItem("collection_up");
if (initialization == null)
  localStorage.setItem(
    "collection_up",
    JSON.stringify(["申鹤", 0, 0, 0, "迪奥娜/砂糖/米卡"])
  ); //集录祈愿池名字,次数,保底次数,4星,4星角色
var initialization = localStorage.getItem("list");
if (initialization == null)
  localStorage.setItem(
    "list",
    JSON.stringify([
      "5/阿贝多",
      "5/艾尔海森",
      "5/八重神子",
      "5/白术",
      "5/达达利亚",
      "5/no/迪卢克",
      "5/no/迪希雅",
      "5/芙宁娜",
      "5/甘雨",
      "5/胡桃",
      "5/荒泷一斗",
      "5/可莉",
      "5/no/刻晴",
      "5/莱欧斯利",
      "5/雷电将军",
      "5/林尼",
      "5/流浪者",
      "5/no/莫娜",
      "5/那维莱特",
      "5/纳西妲",
      "5/娜维娅",
      "5/妮露",
      "5/no/七七",
      "5/千织",
      "5/no/琴",
      "5/赛诺",
      "5/申鹤",
      "5/神里绫华",
      "5/神里绫人",
      "5/no/提纳里",
      "5/枫原万叶",
      "5/温迪",
      "5/闲云",
      "5/宵宫",
      "5/魈",
      "5/珊瑚宫心海",
      "5/夜兰",
      "5/优菈",
      "5/钟离",
      "安柏",
      "芭芭拉",
      "班尼特",
      "北斗",
      "迪奥娜",
      "多莉",
      "珐露珊",
      "菲米尼",
      "菲谢尔",
      "嘉明",
      "九条裟罗",
      "久岐忍",
      "卡维",
      "凯亚",
      "坎蒂丝",
      "柯莱",
      "莱依拉",
      "雷泽",
      "丽莎",
      "琳妮特",
      "鹿野院平藏",
      "米卡",
      "凝光",
      "诺艾尔",
      "绮良良",
      "砂糖",
      "托马",
      "五郎",
      "夏洛蒂",
      "夏沃蕾",
      "香菱",
      "辛焱",
      "行秋",
      "烟绯",
      "瑶瑶",
      "云堇",
      "早柚",
      "重云",
    ])
  ); //集录祈愿池名字,次数,保底次数
blue = [
  13,
  "答辩",
  "垃圾",
  "飞舞",
  "黎明神剑",
  "以理服人",
  "飞天御剑",
  "弹弓",
  "讨龙英杰谭",
  "神射手之誓",
  "黑缨枪",
  "翡玉法球",
  "沐浴龙血的剑",
  "冷刃",
];
setTimeout(function () {
  var up = JSON.parse(localStorage.getItem("list"));
  var select = document.getElementsByClassName("up5");
  var select_4 = document.getElementsByClassName("up4");
  for (var i = 0; i < up.length; i++) {
    if (up[i].split("/")[0] == 5) {
      if (up[i].split("/")[1] == "no") {
        var name = up[i].split("/")[2];
      } else {
        var name = up[i].split("/")[1];
      }
      for (let index = 0; index < select.length; index++) {
        var option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;
        select[index].appendChild(option);
      }
    } else {
      var name = up[i];
      for (var index = 0; index < select_4.length; index++) {
        var option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;
        select_4[index].appendChild(option);
      }
    }
  }
  select[0].value = JSON.parse(localStorage.getItem("role_up_1"))[0];
  for (var i = 0; i < select_4.length; i++) {
    select_4[i].value = JSON.parse(localStorage.getItem("role_up_1"))[4].split(
      "/"
    )[i];
  }
  select[1].value = JSON.parse(localStorage.getItem("role_up_2"))[0];
  for (var i = 3; i < select_4.length; i++) {
    select_4[i].value = JSON.parse(localStorage.getItem("role_up_2"))[4].split(
      "/"
    )[i-3];
  }
  var up5_wish = document.getElementsByClassName("up5_wish");
  var probability = JSON.parse(localStorage.getItem("probability"));
  for (var i = 0; i < up5_wish.length; i++) {
    up5_wish[i].value=probability[i];
  }
}, 1000);
