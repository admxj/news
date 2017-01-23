Page({

    startApp:function(){
        // wx.navigateTo({
        //   url: '/pages/posts/posts'
        // })
        
        wx.redirectTo({
          url: '/pages/posts/posts'
        })
    },

})