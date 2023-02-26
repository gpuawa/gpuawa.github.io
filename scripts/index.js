async function setUserName() {
    var welcome = document.querySelector('h2')
    var name = prompt('请输入你的名字')
    localStorage.setItem('name', name)
    welcome.textContent = `您好,${name}!`
}
setUserName() 
