// Get:
//thumbnail, title, description, date_display, artist_display, place_of_origin (manifest.json)

// Function to get painting info when image is clicked
async function clickedEvent(img_index, item_index) {
  let artwork_id = document.getElementsByTagName('img')[img_index].attributes[1].value;
  
  let headers = new Headers([
    ['Content-Type', 'application/json']
    ['Accept', 'application/json']
    ['AIC-User-Agent', 'codingtempleproject/heathernstorey@gmail.com']
  ]);

  let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork_id}`, {
    method: 'GET',
    headers: headers
  });

  let result = await fetch(request)

  let response = await result.json();

  console.log(response);

  if (showArt) {
    artInfo();
  }
}

function getArt(id, event) {
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
    }
    switch(id){
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
    }
    switch(id){
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
    }
    switch(id){
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
    }
    switch(id){
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
    }
    switch(id){
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
    switch(id){
        case 'fig7': {
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
    }
    switch(id){
        case 'fig8': {
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
    switch(id){
        case 'fig9': {
            event.stopPropagation();
            clickedEvent(8,0)
            break;
        }
    }
}

function artInfo(url) {
    let showArt = new alert(url);
    return showArt.alert
}