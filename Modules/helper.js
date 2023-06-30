function $g(selector) {
    //nodelist⾄少包含⼀個node - Element object
    //如果沒有符合的，則會是⼀個empty NodeList
    let nodelist = document.querySelectorAll(selector);
    if (nodelist.length == 0) {
        return null;
    }
    return nodelist.length == 1 ? nodelist[0] :
        nodelist;
}
export {$g}; 