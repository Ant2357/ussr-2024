document.getElementById("collapse-target").addEventListener("click", function() {
  this.classList.add("collapse");
  setTimeout(() => {
    this.classList.remove('collapse');
    document.getElementsByClassName("content-body")[0].innerHTML = 
      "<p>同志達よ、歴史は終わってはいない。ソ連の崩壊は敗北ではなく、さらなる闘争への序章にすぎない。</p>" + 
      "<p>我々は労働者階級の団結を呼びかけ、搾取されるすべての人民とともに新たな世界を築き上げるであろう。</p>" + 
      "<p>赤旗は決して地に落ちず、共産主義の理想は再び燃え上がる。</p>" +
      "<p>この Web ページにコマンドを打てば同志達の夢は続く</p>";
    this.removeEventListener("click", arguments.callee);
    this.classList.add("animate__fadeIn");
  }, 2000);
});
