// load pets

const loadPetsData = async () => {
    document.getElementById('spinner').classList.add('hidden')
    document.getElementById('pet-container').classList.remove('hidden')
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displayPets(data.pets)
}

const spinner = () => {
    document.getElementById('pet-container').classList.add('hidden')
    document.getElementById('spinner').classList.remove('hidden')
    setTimeout(() => {
        loadPetsData()
    }, 2000);
}

const displayPets= (data) => {
    console.log(data);
}
spinner()
// loadPetsData()