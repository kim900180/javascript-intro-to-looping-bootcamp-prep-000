function forLoop(array){
  for (let i = 1; i < 25; i++) {
    array[i].push(`I am ${i} strange loops.`)
    return array
  }
}