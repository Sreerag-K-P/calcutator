function buttonClick(val){
    document.getElementById("output").value += val
}
function clrButton(){
    document.getElementById("output").value = ""
}
function finalOutput(){
    var text = document.getElementById("output").value
    var result = eval(text)
    document.getElementById("output").value = result
}