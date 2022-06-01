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


function addImages(obj,data,n,webp) {

    // create emtpy div element
    var img_divs = '';
    var file = '';
    var descri = '';
    var extention = '.jpg';
    var dir = 'medium';

    
    if(window.innerWidth>1800){
        var dir = 'large';
    }

    if(webp) {
        extention = '.webp';
        dir = dir + '_webp';
    }


    // loop over data 
    for( i = 0; i < n; i++){

        //!!!!!! FOR CHECKING ONLY, COMMENT TO TURN OFF
        descri = data[i].file
        //!!!!!! FOR CHECKING ONLY, COMMENT TO TURN OFF

        file = data[i].file.split(".")[0];


        if(data[i].format=="portrait"){ // is portrait

            img_divs +=	'<div class="grid-item item animate-box" data-animate-effect="fadeIn">' +
                            '<a href="images/' + dir + "/" + file + extention + '" class="image-popup" title="' + descri + '">' +
                                '<div class="img-wrap"><img src="images/placeholder/portrait_w2.png" alt="" class="img-responsive" ></div>' +
                                '<div class="text-wrap"><div class="text-inner popup"><div><h2>' + descri + '</h2></div></div></div>' +
                            '</a>' +
                        '</div>';

        }else{ // is landscape

            img_divs +=	'<div class="grid-item item animate-box" data-animate-effect="fadeIn">' +
                            '<a href="images/' + dir + "/" + file + extention + '" class="image-popup" title="' + descri + '">' +
                                '<div class="img-wrap"><img src="images/placeholder/landscape_w2.png" alt="" class="img-responsive" ></div>' +
                                '<div class="text-wrap"><div class="text-inner popup"><div><h2>' + descri + '</h2></div></div></div>' +
                            '</a>' +
                        '</div>';
                
        }
    }

    // add newly created html to object
    obj.innerHTML = img_divs
}

// check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, isSupported)' will be passed back the detection result (in an asynchronous way!)
function canUseWebP() {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // very old browser like IE 8, canvas not supported
    return false;
}