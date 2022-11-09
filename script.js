const getUsers = async () => {
    const request = await fetch('https://api.github.com/users');
    const requestInfos = await request.json();
    console.log(requestInfos)

    let userImg = document.querySelector('img')
    let name = document.getElementById('name')
    let btn = document.querySelector('button')
    let span1 = document.getElementById('1')
    let span2 = document.getElementById('2')


// requestInfos.map(user => {
//     `<img src=${user.avatar_url}/>
//     <span id="name">${user.login}</span>
//     <button>Show more</button>
//     <span id="plus" class="plusInfo">
//                 <span id ="1"></span>
//                 <span id ="2"></span></span>
// })



    for (let user of requestInfos) {
        userImg.setAttribute('src', user.avatar_url)
        name.innerText = user.login
        span1.innerText = "Rank:" + user.type
        span2.innerText = "Admin:" + user.site_admin

        //     container.insertAdjacentHTML = ("afterbegin", `
        //     <input type="text" placeholder="Search">
        //     <div id="table">
        //         <div id="user">
        //             <img src="${user.avatar_url}" />
        //             <span id="name">${user.login}</span>
        //             <button>Show more</button>
        //             <span class="plusInfo">Rank:${user.type}</span>
        //             <span class="plusInfo">Admin:${user.site_admin}</span>
        //         </div>
        //     </div>
        //     `
        //     )
        // }

        btn.addEventListener('click', showInfo)

        function showInfo() {
            let showBtn = document.getElementById('plus').style.display = "block";


        }
    }
}
getUsers()

