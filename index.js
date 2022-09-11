function radiusGuy(options) {
    let element = document.querySelectorAll(".radiuswizard")
    element.forEach(el => {
        if (options.circle) {
            el.style.borderRadius = "50%"
        }
        else {
            el.style.borderRadius = '25px';
        }
    })
}
module.exports.radiusGuy = radiusGuy