const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',function(){
    console.log(sideBar.classList)
    sideBar.classList.remove('show-sidebar')
})