var link = document.createElement('link');
link.href =  chrome.extension.getURL('css/darkjira.min.css');
link.rel = 'stylesheet';
document.documentElement.insertBefore(link);
