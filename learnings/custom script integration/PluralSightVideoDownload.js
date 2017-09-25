// setTimeout(function(){
//      var videoTag = document.getElementById("vjs_video_3_html5_api");
//       window.open(videoTag.src);
//      videoTag.addEventListener("loadedmetadata", function(){
//              var videoTag = document.getElementById("vjs_video_3_html5_api");
//              window.open(videoTag.src);
//         });
// },1000);
   

   var count = 1;
var DownloadVid= function(){
            count++;
            var videoTag = document.getElementById("vjs_video_3_html5_api");
             var link = document.createElement("a");
             link.name = "video" + count ;
            link.href = videoTag.src;
            link.target = "_blank";
            link.click();
}
setTimeout(function(){
    var videoTag = document.getElementById("vjs_video_3_html5_api");
     videoTag.addEventListener("loadedmetadata", DownloadVid);
},1000);