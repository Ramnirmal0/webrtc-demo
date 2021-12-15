var showchannel = document.querySelectorAll('#show-channel');
var channelname = document.querySelector('#channelName');
showchannel[0].innerText= `Channel :  ${channelname.value}`;
showchannel[1].innerText= `Channel :  ${channelname.value}`;
function router(e){
    var showchannel = document.querySelectorAll('#show-channel');
    var channelname = document.querySelector('#channelName');
    showchannel[0].innerText= `Channel :  ${channelname.value}`;
    showchannel[1].innerText= `Channel :  ${channelname.value}`;
    var master= document.querySelectorAll('[name="btn-master"]');
    var viewer= document.querySelector('[name="btn-viewer"]')
    if(e==='master'){
 
       master[0].className="btn btn-primary";
       master[1].className="btn btn-primary";
       viewer.className="btn btn-primary display-none";
    }
    else{
        master[0].className="btn btn-primary display-none";
        master[1].className="btn btn-primary display-none";
        viewer.className="btn btn-primary ";
    }
}