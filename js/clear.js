function clear_save() {
  if (skip == -2) {
    location.reload();
  } else {
    if (skip != -1) {
      skip = -1;
      alert(
        "删除存档将移除所有存在本地的数据\n例如 抽卡记录.原石数量.星辉数量\nUP角色.陪跑4星 等...\n若确定删除存档请再次点击删除存档"
      );
    } else {
      skip = -2;
      localStorage.clear();
      alert("删除存档完成\n稍后将刷新网页(5s)或手动刷新(再次点击)");
      setTimeout(function () {
        location.reload();
      }, 5000);
    }
  }
}
