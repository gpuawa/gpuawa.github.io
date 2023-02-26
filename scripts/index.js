async function setUserName() {
    let myHeading = document.querySelector('h1');
    var name = prompt('请输入你的名字');
    localStorage.setItem('name', name);
    myHeading.textContent = `您好,${name}!`;
}
setUserName();
