// 获取需要使用到的元素
var toggleModal = document.getElementById("toggleModal");
var container = document.getElementsByClassName("container")[0];
var mask = document.getElementsByClassName("mask")[0];
var modal = document.getElementsByClassName("modal")[0];
var zczc = document.getElementsByClassName('zczc')[0]
// var closes = document.getElementsByClassName("close");
// document.onclick = show;
toggleModal.onclick = function(e){
    mask.style.display = "block";
    modal.style.display = "block";
    // e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
};
zczc.onclick = function(e){
  mask.style.display = "block";
  modal.style.display = "block";
  // e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
};



mask.addEventListener('click', function(e){
  if (e.target.ClassName == 'modal'){
    console.log('模态框被点击了')
  } else {
    modal.style.display = 'none'
    mask.style.display = 'none';
  }
})




