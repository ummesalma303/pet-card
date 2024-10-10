// category button
const loadCategory=async () => {
    const res = await fetch(
      " https://openapi.programming-hero.com/api/peddy/categories"
    );
    const data = await res.json()
    displayCategory(data.categories);
}
/*
{
    "id": 1,
    "category": "Cat",
    "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
} */
const displayCategory = (data) => {
    const categoryContainer = document.getElementById("category-container");
    data.forEach(categories => {
        const { category, category_icon } = categories;
        const div = document.createElement('div')

        div.innerHTML = `
         <button onclick="loadCategoryPets('${category}')" class="btn flex items-center w-full border-[1px] border-solid border-[rgba(14, 122, 129, 0.15)] bg-transparent hover:bg-transparent category-btn"
              >
               <img class="w-8 h-8" src=${category_icon}/>
                <h2>${category}</h2>
              </button>
        `;

        categoryContainer.appendChild(div)
    });
}

// load category pets
const loadCategoryPets = async (category) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
    const data = await res.json();
    displayPets(data.data)
}

// load pets

const loadPetsData = async () => {
  document.getElementById("spinner").classList.add("hidden");
  document.getElementById("container").classList.remove("hidden");
  const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
  const data = await response.json();
  displayPets(data.pets);
};

const spinner = () => {
  document.getElementById("container").classList.add("hidden");
  document.getElementById("spinner").classList.remove("hidden");
  setTimeout(() => {
    loadPetsData();
  }, 2000);
};
/*
{
    "petId": 10,
    "breed": "Labrador Retriever",
    "category": "Dog",
    "date_of_birth": "2023-05-15",
    "price": 1100,
    "image": "https://i.ibb.co.com/hg9XBJV/pet-10.jpg",
    "gender": "Female",
    "pet_details": "This cheerful female Labrador is a playful bundle of joy. Born on May 15, 2023, she loves water and outdoor activities. Fully vaccinated and priced at $1100, she's perfect for families who enjoy active lifestyles.",
    "vaccinated_status": "Fully",
    "pet_name": "Daisy"
} */

const displayPets = (pets) => {
console.log(pets);
  const petContainer = document.getElementById("pet-container");
  const container = document.getElementById('container');
  petContainer.innerHTML = '';
  if (pets.length === 0) {
    petContainer.classList.remove('grid')
    petContainer.innerHTML = `
     <div class="w-3/4 mx-auto my-10 text-center bg-[rgba(19, 19, 19, 0.03)] rounded-2xl">
    <div>
          <img class="m-auto" src="./assets/error.webp" alt="">
        </div>
        <div>
        <h2 class="text-3xl font-bold my-4">No Information Available</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.</p>
                </div>
        </div>
    `;
    
    return
  } else {
    petContainer.classList.add('grid')
    
  }
    pets.forEach((pet) => {
      console.log(pet);
    const { breed, date_of_birth, price, image, gender, pet_name } =
      pet;
    const div = document.createElement("div");
    div.innerHTML = `
         <div id="card" class="mb-4 card border-[1px] border-solid border-[rgba(19, 19, 19, 0.1)]">
            <figure class=" p-5 pt-5">
              <img
                src=${image}
                class="rounded-xl w-full aspect-video"
              />
            </figure>
            <div class="card-body pt-0 rounded-b-xl ">
              <h2 class="card-title text-xl font-bold">${pet_name}</h2>
              <ul>
                <li>
                  <i class="fa-solid fa-border-all"></i> Bread: ${breed}
                </li>
                <li><i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth} </li>
                <li><i class="fa-solid fa-mercury"></i> Gender: ${gender}</li>
                <li><i class="fa-solid fa-dollar-sign"></i> Price: ${price}</li>
              </ul>
              <hr class="py-2">
              <div class="grid grid-cols-3 gap-2">
              <button class="btn hover:text-primary hover:bg-white text-2xl border-[1px] border-solid border-[rgba(14, 122, 129, 0.15)]"><i class="fa-regular fa-thumbs-up"></i></button>

                </button>
                <button class=" btn rounded-lg border-[1px] border-solid text-primary font-bold border-[rgba(14, 122, 129, 0.15)] hover:bg-primary hover:text-white">
                  Adopt
                </button>
                <button class="btn details-btn  rounded-lg border-[1px] border-solid text-primary font-bold border-[rgba(14, 122, 129, 0.15)] hover:bg-primary hover:text-white">
                  Details
                </button>
              </div>

            </div>
          </div>
        `;

    petContainer.appendChild(div);
  });
};

spinner();
loadCategory();
