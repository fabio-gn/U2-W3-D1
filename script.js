class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location

    }
    whoIsOlder(otherUser){
        if(this.age > otherUser.age){
            console.log(`${this.firstName} is older than ${otherUser.firstName}`)
        } else{
            console.log(`${this.firstName} is younger than ${otherUser.firstName}`)
        }
    }
};

let myArray = [];
myArray.push(new User('fabio', 'giannasi', 26, 'Nuoro'));
myArray.push(new User('peppo', 'frizzi', 28, 'Genova'));

myArray[0].whoIsOlder(myArray[1]);


let petArray =[];
class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName,
        this.ownerName = _ownerName,
        this.species = _species,
        this.breed = _breed

    }
    hasSameOwner(otherPetName){
        petArray.forEach(pet => {
            if (pet.petName === otherPetName && pet.ownerName === this.ownerName){
                console.log('yeah')
                return true;
            }
        })
        
    }
}

const populateArray = function(){
let submit = document.getElementById('submit')

console.log(button);
submit.addEventListener('click', function(e){
    e.preventDefault();
    let ownerName = document.getElementById('pet-owner')
    let petName = document.getElementById('pet-name')
    let species = document.getElementById('species')
    let breed = document.getElementById('breed')
    // console.log(ownerName.value);
    
   

   petArray.push(new Pet(petName, ownerName, species, breed))
    console.log(petArray);


})
}
populateArray()