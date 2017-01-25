function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementById('nested')
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('ul.ranked-list li')
for (let i = 0; i < ranked.length; i++) {
  ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
}
}

function deepestChild() {
  return document.querySelectorAll("#grand-node")[0]
}
