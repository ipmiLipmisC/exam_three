const search = document.createElement('input')
search.id = "search"
search.setAttribute('placeholder', 'search')

document.getElementById('root').append(search)

const table = document.createElement('div')
table.id = "cards"
document.getElementById('root').append(table)

const whileLoad = document.createElement('div')
whileLoad.innerText = "Loading..."
document.getElementById('root').append(whileLoad)



const getUsers = async () => {
    let response = await fetch('https://api.github.com/users');
    let data = await response.json();
    // console.log(data)
    return data
}

const createCardForUserInfo = (user) => {
    const card = document.createElement("div")
    card.classList.add("card")

    const image = document.createElement("img")
    image.src = user.avatar_url
    card.append(image)

    const name = document.createElement("p")
    name.innerText = user.login
    card.append(name)

    const button = document.createElement("button")
    button.innerText = "Show more"
    card.append(button)

    const plusData = document.createElement("div")
    const rank = document.createElement("p")
    rank.innerText = `Rank: ${user.type}`
    plusData.append(rank)
    const admin = document.createElement("p")
    admin.innerText = `Admin: ${user.site_admin}`
    plusData.append(admin)

    plusData.style.display = "none"
    card.append(plusData)
    table.append(card)
}

const renderUsers = async () => {
    let users = await getUsers()
    console.log(users)
    users.forEach((user) => createCardForUserInfo(user))
    whileLoad.style.display = "none"
    buttonHandler()
  }
  
  
  const showPlusData = (e) => {
    const button = e.target
    if (button.innerText === "Show more") {
      button.innerText = "Show less"
      button.nextSibling.style.display = "block"
    }
    else {
      button.innerText = "Show more"
      button.nextSibling.style.display = "none"
    }
  } 
const buttonHandler = () => {
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
      button.addEventListener("click", showPlusData)
    })
  }
  window.addEventListener("load", renderUsers)

