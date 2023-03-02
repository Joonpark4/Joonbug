for (var left = 2; left<=9; left++){
    document.write("<div>")
    document.write("<h3>" + left + "단</h3>")
    for(var right = 1; right<=9; right++){
        document.write(`${left} X ${right} = ${left * right}<br>`)
    }
    document.write("</div>")
}