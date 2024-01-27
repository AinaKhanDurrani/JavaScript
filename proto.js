// a simple JS Object
let person={
    
    name:'Fazal',
    age:34,
    gender:'M',
}

let laptop={
    company : 'Lenovo',
    model :'IdeaPad',
    specifcation:{ram:'20GB', storage:'1Tb',gen:'11th'},
    users:['ammi','abbu','bhai','me']    
}

console.log(laptop.model)

console.log(laptop.specifcation)
console.log(laptop.specifcation.ram)
console.log(laptop.users[0])

for (property in laptop){

    console.log(property, laptop[property])
}


let car = {
    name : 'Honda',
    model:2024,

    start: function(){
        console.log("Car starts zrrrrrrrrr")
    },

    stop:function(){

        console.log('Break applied and car stoppped......')
    }
}


car.start()
car.stop()

//constructor function
function Laptop(company,model,specifcations,users)
{  
    this.company = company
    this.model = model
    this.specifcations = specifcations
    this.users = users
    
}

meralaptop = new Laptop('Lenovo','Ideapad',{ram:'20GB',storage:'ITB',gen:'11th'},['ammi','abbu','bhai','me'])
apkalaptop = new Laptop('HP','elitebok',{ram:'8GB',storage:'64TB',gen:'8th'},['me'])

console.log(typeof(meralaptop))
console.log(typeof(apkalaptop))

console.log(meralaptop.company)
