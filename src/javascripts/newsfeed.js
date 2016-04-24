function load() {
  var feed ="https://news.google.de/news/feeds?pz=1&cf=all&ned=de&hl=de&q=wesley_safadao&output=rss";
  new GFdynamicFeedControl(feed, "news");
}

google.load("feeds", "1");
google.setOnLoadCallback(load);