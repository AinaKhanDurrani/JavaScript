let day_of_week=prompt("Enter the day").toLowerCase()

switch(true){
    case day_of_week=='monday' || day_of_week=='mon':
        alert("Chicken Karahi")
        break
    case day_of_week=='tuesday' || day_of_week=='tue':
        alert("Bindi Gosht")
        break
    case day_of_week=='wednesday' || day_of_week=='wed':
        alert("Biryani")
        break
    case day_of_week=='thursday' || day_of_week=='thr':
        alert("Aalo Gosht")
        break
    case day_of_week=='friday' || day_of_week=='fri':
        alert("Chineese")
        break
    case day_of_week=='saturday' || day_of_week=='sat':
        alert("Dal Chawal")
        break
    case day_of_week=='sunday' ||day_of_week=='sun':
        alert("Outing")
        break
    default :
        alert("you enter the wrong day")
}