loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 30)



funtion blurring() {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `$(load)%`
    loadText.style.opacity = 1 - load/100

    bi.style.filter = `blur(${30-(load/10(0*30}10px)`



}
