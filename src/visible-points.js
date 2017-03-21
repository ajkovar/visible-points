function length(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))
}

function dotProduct(a, b) {
  return a[0]*b[0] + a[1]*b[1]
}

function crossProduct(a, b) {
  return a[1]*b[0] - a[0]*b[1]
}

function angle(a, b) {
  return Math.acos(dotProduct(a, b) / (length(a) * length(b))) * 180 / Math.PI
}

export { length, dotProduct, crossProduct, angle }

function visiblePoints(points) {
  let highest = 1
  for(let i=0;i<points.length;i++) {
    let a = points[i]
    let count = 1
    for(let j=0;j<points.length;j++) {
      let b = points[j]
      if(a!==b
         && crossProduct(a, b) <= 0
         && Math.round(angle(a, b)) <= 45){
        count++
      }
    }
    highest = Math.max(count, highest)
  }
  return highest
}

export default visiblePoints
