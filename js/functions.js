// this functions shuffles the rows of an array
function shuffleArray(array) {

    // remove and store first 2 elems
    var tempf1 = array.shift();
    var tempf2 = array.shift(); 

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    // reinsert first 2 elems at start array
    array.unshift(tempf2); 
    array.unshift(tempf1); 
}


function addImages(obj,data,n) {

    // create emtpy div element
    var img_divs = '';
    var descri = '';
    var file = 'url_medium';
    if(window.innerWidth>1000) file = 'url_medium2';
    if(window.innerWidth>1700) file = 'url_large';
    console.log(file)
    var file_path = '';

    // loop over data 
    for( i = 0; i < n; i++){

        //!!!!!! FOR CHECKING ONLY, COMMENT TO TURN OFF
        //descri = data[i].file_title[0];
        descri = i;
        //!!!!!! FOR CHECKING ONLY, COMMENT TO TURN OFF

        file_path = data[i][file][0]
        // console.log(file_path)

        if(data[i].orientation[0]=="P"){ // is portrait
   
            // no animation
            img_divs +=	'<div class="grid-item item" >' +
                            '<a id="image_a" href="' + file_path + '" class="image-popup hoverable" title="' + descri + '">' +
                                '<div class="img-wrap"><img src="images/placeholder/portrait_w2.png" alt="" class="img-responsive" ></div>' +
                                '<div class="text-wrap"><div class="text-inner popup"><div><h2>' + descri + '</h2></div></div></div>' +
                            '</a>' +
                        '</div>';

        }else{ // is landscape
     
            // no animation
            img_divs +=	'<div class="grid-item item">' +
                            '<a id="image_a" href="' + file_path + '" class="image-popup hoverable" title="' + descri + '">' +
                                '<div class="img-wrap"><img src="images/placeholder/landscape_w2.png" alt="" class="img-responsive" ></div>' +
                                '<div class="text-wrap"><div class="text-inner popup"><div><h2>' + descri + '</h2></div></div></div>' +
                            '</a>' +
                        '</div>';

  
        }

        data[i].img_loaded = false;
    }

    // add newly created html to object
    obj.innerHTML = img_divs
}
