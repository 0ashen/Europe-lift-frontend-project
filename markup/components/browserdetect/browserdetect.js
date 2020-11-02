if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
     document.documentElement.classList.add("_old-browser");
}
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
    document.documentElement.classList.add("_old-browser");
}
