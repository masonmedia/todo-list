// get nav menu

export async function getNav() {
    fetch('./nav.html')
    .then(function(res) {
        return res.text();
    })
    .then(function(data){
        let output = document.getElementById('nav');
        output.innerHTML = data; 
    })
    .catch(function(err){
        console.log(err);
    })
}

getNav();