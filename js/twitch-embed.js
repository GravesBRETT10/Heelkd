let viewWidth = ($(window).width() * .9)
let viewHeight

if ($(window).width() > 480) {
    viewHeight = (viewWidth * .562)
} else {
    viewHeight = (viewWidth * 1.25)
}

new Twitch.Embed("twitch-embed", {
    width: viewWidth,
    height: viewHeight,
    channel: "jumpingterror"
})