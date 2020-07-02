const data = [
  {
    name: "Richard Sergenov",
    age: 32,
    sex: "male",
    lookingfor: "female",
    location: "San Jose, CA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Monica Taylor",
    age: 25,
    sex: "female",
    lookingfor: "male",
    location: "Watertown, NY",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Johnson Peterson",
    age: 35,
    sex: "male",
    lookingfor: "male",
    location: "Seattle, WA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Li Feng",
    age: 38,
    sex: "female",
    lookingfor: "female",
    location: "Seattle, WA",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
];

const profiles = profileIterator(data);

// Next Events after clicking "Next" button
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name} </li>
        <li class="list-group-item">Age: ${currentProfile.age} </li>
        <li class="list-group-item">Sex: ${currentProfile.sex} </li>
        <li class="list-group-item">LookingFor: ${currentProfile.lookingfor} </li>
    `;
  document.getElementById(
    "imageDisplay"
  ).innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : //else function
          { done: true };
    },
  };
}
