const searchBtn = document.getElementById('search-btn');
const usernameInput = document.getElementById('username');
const userInfo = document.getElementById('user-info');
const avatar = document.getElementById('avatar');
const nameElement = document.getElementById('name');

searchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (username !== '') {
        getUserData(username)
            .then(user => {
                displayUserInfo(user);
            })
            .catch(error => {
                console.error(error);
            });
    }
});

function getUserData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('User not found');
            }
        });
}

function displayUserInfo(user) {
    avatar.src = user.avatar_url;
    nameElement.textContent = user.name;
    userInfo.style.display = 'block';
}
