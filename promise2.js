let promise = new Promise((resolve, reject) => {
    let id = 1;
    let post = "This";
    if (id) {
        resolve({id, post});
    }
    else reject("Error");
});

function fetchPosts(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Fetched post for ID: ${id}`)
        }, 1000);
    });
}

promise
    .then(user => fetchPosts(user.id))
    .then(post => console.log(post))
    .catch(error => console.log(error));