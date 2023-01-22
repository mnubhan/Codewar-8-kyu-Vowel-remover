function shortcut (string) {
  return string.toLowerCase().split("").filter(x=>x !== "e" && x !== "o" && x !== "i" && x !== "a" && x !== "u" ).join("")
}

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}
