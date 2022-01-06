const p = document.querySelector(".info-title")
const heading = document.querySelector(".info-content")
const button = document.querySelector(".random")
const wrapperDiv = document.querySelector(".icons")
const image = document.querySelector(".profile-image")

button.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]
            console.log(user)
            image.src = user.picture.large
            heading.innerHTML = user.name.first 
            let content = `
                <div class="name icon active" data-title="Hi, my name is" data-value=${user.name.first}>
                    <img src="https://img.icons8.com/ios/50/000000/user--v1.png" alt="">
                </div>
                <div class="email icon" data-title="Hi, my email is" data-value=${user.email}>
                    <img src="https://img.icons8.com/ios/50/000000/email-open.png" alt="">
                </div>
                <div class="date icon" data-title="Hi, my date of birth is" data-value=${user.dob.date}>
                    <img src="https://img.icons8.com/ios/50/000000/calendar--v1.png
                    " alt="">
                </div>
                <div class="address icon" data-title="Hi, my address is" data-value=${user.location.city}>
                    <img src="https://img.icons8.com/ios/50/000000/map-marker--v1.png" alt="">
                </div>
                <div class="phone icon" data-title="Hi, my phone is" data-value=${user.phone}>
                    <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="">
                </div>
                <div class="password icon" data-title="Hi, my password is" data-value=${user.login.password}>
                    <img src="https://img.icons8.com/ios/50/000000/password-window.png" alt="">
                </div>`
            wrapperDiv.innerHTML = content
            const divList = document.querySelectorAll(".icon")
            console.log(divList)
            divList.forEach(el => {
                el.addEventListener("click", () => {
                    p.innerHTML = el.getAttribute("data-title")
                    heading.innerHTML = el.getAttribute("data-value")
                    //add class active on clicked icon 
                    
                })
            })
        })
})