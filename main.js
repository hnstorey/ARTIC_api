
// Function to get painting info when image is clicked
async function clickedEvent(img_index) {
  let artwork_id = document.getElementsByTagName('img')[img_index].attributes[1].value;
  let artwork_name = document.getElementsByTagName('img')[img_index].attributes[2].value;
  let artist = document.getElementsByTagName('img')[img_index].attributes[3].value;
  
  let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork_id}`, {
    method: 'GET',
  });

  let result = await fetch(request)

  let response = await result.json();

  console.log(response)
  console.log(response.data.title);
  console.log(response.data.artist_display)
  info_js = document.getElementById("info")
  info_js.innerHTML = (`The painting you have chosen is: <br> <i>${response.data.title}</i> <br> by ${response.data.artist_display}`)
  my_img = document.getElementById(`${artwork_id}`)
}

function getArt(id, event) {
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
    }
    switch(id){
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
    }
    switch(id){
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
    }
    switch(id){
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
    }
    switch(id){
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
    switch(id){
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
    }
    switch(id){
        case 'fig7': {
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
    switch(id){
        case 'fig8': {
            event.stopPropagation();
            clickedEvent(8,0)
            break;
        }
    }
    switch(id){
        case 'fig9': {
            event.stopPropagation();
            clickedEvent(9,0)
            break;
        }
    }
}

function clearScreen() {
    window.location.reload()
}