



function AddPlaylist(form, Action){
var Addplaylist="";
var list="";

if(Action==1) {
if(list!=null) 
 
Addplaylist="<a href=\""+ form.URL.value+ "\" class=\"currentvid\" ><img src=\""+ form.IMG_URL.value+"\" width=\"200\" class=\"img-responsive\"><time datetime=\"&gt;2021-02-13\" class=\"duration\">"+ form.duration.value+"</time><p style=\"font-size: 10px; font-family: arial, verdana, helvetica, sans serif; margin-left: 1px; color:#000;\"class=\"f-title\">"+ form.description.value+"...</p></a>\r\n";

form.video_list.value+=Addplaylist;
     }
}