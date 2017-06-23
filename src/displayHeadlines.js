function displayHeadlines(data) {
  var headlines = "<ul>";
  data.response.editorsPicks.forEach(function(article) {
    headlines += "<li><div>" + article.webTitle + "</div></li>"
  });
  headlines += "</ul>";
  return headlines;
};
