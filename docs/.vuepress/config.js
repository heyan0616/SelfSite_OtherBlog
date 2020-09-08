module.exports = {
  "title": "Yan's Other Blog",
  "description": "Always something to be recorded",
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
    mode: 'light',
    valineConfig: {
      appId: 'xTavBda2qKQ9UpbDpdzA8w6q-MdYXbMMI',// your appId
      appKey: 'Kzo9CkrxJJ46VRdqB9aqvQ9i', // your appKey
      avatar: 'mp',
    },
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
        link: 'http://heyan.site/', 
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
    "friendLink": [
      {
        "title": "md5转化",
        "desc": "加密解密工具",
        "logo": "https://www.cmd5.com/images/logo.png",
        "link": "https://www.cmd5.com"
      },
      {
        "title": "压缩图",
        "desc": "压缩图片大小",
        "logo": "https://img.yasuotu.com/yasuotu/images/logo.png",
        "link": "https://www.yasuotu.com"
      },
      {
        "title": "pdf工具集",
        "desc": "pdf工具集合 - 格式转换，加密解密，编辑排版等...",
        "logo": "https://smallpdf.com/build/95cf74e5f89f93cfd5f97d16fa673f05.svg",
        "link": "https://smallpdf.com/cn"
      }
    ],
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