const btn = document.getElementById('btn')
const video = document.getElementById('video')

btn.addEventListener('click', () => {
    if(video.paused){
        video.play()
        btn.innerHTML = 'Pause Video'
        
    } else {
        video.pause()
        btn.innerHTML = 'Play Video'
    }
})