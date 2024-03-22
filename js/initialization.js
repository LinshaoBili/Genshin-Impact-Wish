//初始化
let interface = 0;
wish_up = 1;
var initialization = localStorage.getItem("prompt");
if (initialization == null) localStorage.setItem("prompt", 1); //提示
var initialization = localStorage.getItem("primogem");
if (initialization == null) localStorage.setItem("primogem", 648); //原石
var initialization = localStorage.getItem("star");
if (initialization == null) localStorage.setItem("star", 0); //无主的星辉
var initialization = localStorage.getItem("dust");
if (initialization == null) localStorage.setItem("dust", 0); //无主的星尘
var initialization = localStorage.getItem("intertwined_fate");
if (initialization == null) localStorage.setItem("intertwined_fate", 0); //纠缠之缘
var initialization = localStorage.getItem("acquaint_fate");
if (initialization == null) localStorage.setItem("acquaint_fate", 0); //相遇之缘
var initialization = localStorage.getItem("role_up_1");
if (initialization == null)
  localStorage.setItem("role_up_1", JSON.stringify(["纳西妲", 0, 0])); //限定角色1名字,次数,保底次数
var initialization = localStorage.getItem("role_up_2");
if (initialization == null)
  localStorage.setItem("role_up_2", JSON.stringify(["妮露", 0, 0])); //限定角色2名字,次数,保底次数
var initialization = localStorage.getItem("collection_up");
if (initialization == null)
  localStorage.setItem("collection_up", JSON.stringify(["申鹤", 0, 0])); //集录祈愿池名字,次数,保底次数
