function doGet(e) {
  if (e.queryString.length == 0) {
    var htmlPage = HtmlService.createTemplateFromFile('index');;
    return htmlPage.evaluate().
      setFaviconUrl("https://pics.freeicons.io/uploads/icons/png/2396380601551941189-512.png").
      setTitle("Welcome to MaterializeCSS Framework").
      setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } // end of if  
} // end of doGet
