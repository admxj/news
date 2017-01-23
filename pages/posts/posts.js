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
    }
})