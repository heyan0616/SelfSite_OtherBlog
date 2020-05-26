module.exports = {
  "title": "Yan's Other Blog",
  "description": "None Technical Blogs",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Other Blog Home",
        "link": "/",
        "icon": "reco-blog",
        "target": "_self" 
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date",
        "target": "_self"  
      },
      {
        "text": "Blog Home",
        "link": "https://heyan.site:8001/",
        "icon": "reco-blog", 
        "target": "_self" 
      },
      {
        "text": "Technical Blog Home",
        "link": "https://heyan.site:8001/index/",
        "icon": "reco-blog",
        "target": "_self"  
      },
      { 
        text: 'Site Home', 
        link: 'https://heyan.site/', 
        "icon": "reco-home",
        target:'_self' 
      },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Yan",
    "authorAvatar": "/avatar.png",
    // "record": "0",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}