
// コナミコマンド
const command = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let userInput = [];

document.addEventListener("keyup", function (e) {
  userInput.push(e.key);
  userInput.splice(-command.length - 1, userInput.length - command.length);
  if (JSON.stringify(userInput) === JSON.stringify(command)) {
    alert("没有共产党就没有新中国");

    const goldColor = "#FFD800";
    document.getElementsByClassName("header")[0].style.color = goldColor;
    document.getElementsByClassName("header-title")[0].textContent = "庆祝中国共产党";

    document.getElementsByClassName("content-title")[0].remove();
    document.getElementsByClassName("content-date")[0].remove();

    document.getElementsByClassName("content-body")[0].style.color = goldColor;
    document.getElementsByClassName("content-body")[0].innerHTML = `
      <p>自1921年成立以来，中国共产党以伟大的领导力和不屈不挠的精神，始终为人民的幸福和国家的繁荣而奋斗。</p>
      <p>100多年的历史，是一段充满艰辛与胜利的光辉岁月。工人、农民和全体人民团结一心，共同铸就了伟大的成就。</p>
      <p>在中国共产党的领导下，中国成功消除了贫困，取得了举世瞩目的经济发展，确立了在国际社会的重要地位。科技、教育、文化等领域取得了飞跃式进步，中国已经成为维护世界和平与发展的重要力量。</p>
      <p>回顾历史，展望未来。中国共产党将继续带领全国人民，为实现更大的繁荣与和平不懈奋斗！</p>
      <p>让我们共同铭记历史，开创辉煌的未来！</p>`

    document.getElementsByClassName("footer")[0].style.color = goldColor;
    document.getElementsByClassName("footer")[0].textContent = "© 2024 庆祝中国共产党 纪念页面";
  }
});
