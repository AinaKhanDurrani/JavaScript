let total_marks=Number(prompt("Enter totla marks"))
let obtained_marks=Number(prompt("Enter your obtained marks"))

let percentage=total_marks*100/obtained_marks

switch(true){
    case percentage<=90 && percentage>=100:
        alert("Grade A+")
        break
    case percentage<=80 && percentage>=90:
        alert("Grade A")
        break
    case percentage<=70 && percentage>=80:
        alert("Grade B")
        break
    case percentage<=60 && percentage>=70:
        alert("Grade C")
        break
    case percentage<=50 && percentage>=60:
        alert("Grade D")
        break
    default :
        alert("Student fail")
}