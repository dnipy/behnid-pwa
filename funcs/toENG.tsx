function toEnglishNumber(strNum : string) {
    var pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var an = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    var cache = strNum;
    for (var i = 0; i < 10; i++) {
        var regex_fa = new RegExp(pn[i], 'g');
        var regex_ar = new RegExp(an[i], 'g');
        cache = cache.replace(regex_fa, en[i]);
        cache = cache.replace(regex_ar, en[i]);
    }
    return cache;
}


export {toEnglishNumber}