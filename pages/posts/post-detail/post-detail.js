var postData = require("../../../data/post-data.js")
Page({
  data:{},
  onLoad:function(options){
    
    var postid = options.postid;
    var index = -1;
    for(var i = 0; i < postData.postlist.length; i++){
      if(postData.postlist[i].postId == postid){
          this.setData({
            postdetail:postData.postlist[i]
          })
          break;
      }
    }
    
  }
})