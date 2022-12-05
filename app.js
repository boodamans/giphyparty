console.log("Let's get this party started!");

const search = document.getElementById('search');
const gifSpace = document.getElementById('gifSpace');
const delBtn = document.getElementById('delBtn');


search.addEventListener('submit', function(e){
    e.preventDefault();
    getGIF();
})


async function getGIF(){
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: document.getElementById('searchTxt').value, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}})
    console.log(res)
    let rngIdx = Math.floor(Math.random() * res.data.data.length);
    const newGIF = document.createElement('img');
    newGIF.src = `${res.data.data[rngIdx].images.original.url}`;
    gifSpace.appendChild(newGIF);
}

delBtn.addEventListener('click', function(e){
    e.preventDefault();
    for (let gif of document.querySelectorAll('img')) {
        gif.remove()
    }
})