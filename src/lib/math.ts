export const randomNormalDist = () => {
  var rand = 0
  for (var i = 0; i < 6; i += 1) {
    rand += Math.random()
  }

  return rand / 6
}