var postData = require('../../data/post-data.js')
Page({
    data: {
        postlist: [
            
        ]
    },
    onLoad:function(){
        this.setData({
            postlist:postData.postlist
        })
    },
    onPost:function(option){
        var postid = option.currentTarget.dataset.postid;
        wx.navigateTo({
          url: 'post-detail/post-detail?postid='+postid,
  
        })
    }
})