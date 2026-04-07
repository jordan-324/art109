
const hoverVideos = document.querySelectorAll(".hover-videos")
const clickVideos = document.querySelectorAll(".click-videos")


hoverVideos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    })
    video.addEventListener("mouseleave", () => {
        video.pause();
    })
})

clickVideos.forEach(video => {
    video.addEventListener("click", () => {
        video.play();
    })
})