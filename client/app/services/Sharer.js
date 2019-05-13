module.exports = [function () {
    return {
        shareOn: function (e) {
            "fb" == e && window.open("https://www.facebook.com/Uprising/", "_blank");
            "tw" == e && window.open("https://twitter.com/uprsg", "_blank")
        }
    }
}]