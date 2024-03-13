sounds = ['applause', 'boo', 'gasp, 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sound.forEach(sound => {
        song = document.getElementbyId(sound)
        song.pause()
        song.currentTime = 0
    })
}