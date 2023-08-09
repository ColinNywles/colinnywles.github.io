function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function LoadIMGsWithDelay(img_data,img_start,img_stop,sec) {
  await sleep(sec*1000);
  console.log("loading images... index start: " + img_start + ', index stop: ' + img_stop);
  
  // load thumbnails
  for( i = img_start; i < img_stop; i++){
    $(".img-responsive").eq(i).attr("src", img_data[i].url_small[0])
    $(".img-responsive")[i].className = "img-responsive fadein"
  }
}

function LoadIMGsNow(data,img_start,img_stop) {
  console.log("loading images now!!! index start: " + img_start + ', index stop: ' + img_stop);
  
  // load thumbnails
  for( i = img_start; i < img_stop; i++){
    $(".img-responsive").eq(i).attr("src", data[i].url_small[0]);
    data[i].img_loaded = true;
  }

}

function LoadIMGSBackup() {
  if($(window).scrollTop()>500){
    console.log("running ShowIMGSBackup")
    var image_elements = document.getElementsByClassName("image-popup");
    for(var i = 0; i < image_elements.length; i++) {
      elsrc = $(".img-responsive").eq(i).attr("src");
      if(elsrc.includes("placeholder")){
        console.log("no src set");
        $(".img-responsive").eq(i).attr("src", data[i].url_small[0]);
        $(".img-responsive")[i].className = "img-responsive fadein"
      }
    }
  }

}

function waitForImg(nth_elem, timeout=0){
  const startTime = new Date().getTime();
  return new Promise((resolve, reject)=>{
    const timer = setInterval(()=>{
      const now = new Date().getTime();
      if(document.querySelectorAll(".img-responsive")[nth_elem]){
        clearInterval(timer);
        resolve();
      }else if(timeout && now - startTime >= timeout){
        clearInterval(timer);
        reject();
      }
    }, 100);
  });
}

// preload first load image thumbnails
n_preload = 20;
if(window.innerWidth<426) n_preload = 3;
LoadIMGsNow(data,0,n_preload);
waitForImg(n_preload-1,3000).then(function(){
  console.log("img n_preload loaded, fading in images", n_preload);
  for( i = 0; i < n_preload; i++) $(".img-responsive")[i].className = "img-responsive fadein"
})

$(window).on('scroll resize', function() { }).one('scroll resize', function() {

  if (Math.abs(100 - $(this).scrollTop()) < 1000) {

    // loading batch settings
    var initial_load_n_imgs = 0;
    for( i = 1; i < data.length; i++) {
      if(data[i].img_loaded) initial_load_n_imgs++;
    }
    var n_load_batches = 3;		
    var n_imgs_per_batch = Math.round( (data.length-initial_load_n_imgs) / n_load_batches);
    let stops = [initial_load_n_imgs]; // image to start at
    for( i = 1; i < (n_load_batches+1); i++) stops.push(initial_load_n_imgs + n_imgs_per_batch*i)
    stops[stops.length-1] = data.length
    
    // load thumbnails in batches
    var b = 0;
    LoadIMGsWithDelay(data,stops[b],stops[b+1],0); b++
    LoadIMGsWithDelay(data,stops[b],stops[b+1],1); b++		
    LoadIMGsWithDelay(data,stops[b],stops[b+1],2); b++					
    // LoadIMGsWithDelay(data,stops[b],stops[b+1],file_ext,folder,5); b++
    // LoadIMGsWithDelay(data,stops[b],stops[b+1],file_ext,folder,6); b++

  }
});