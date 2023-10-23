const apiOrigin = 'https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json'

fetch(apiOrigin).then(response => response.json()).then(data => {
    data.forEach(surat => {
        const translate = surat.name_translations
        const containerSurah = document.getElementById('container-surah')
        const containerSurat = document.createElement('div')
        const leftSide = document.createElement('div')
        const up = document.createElement('div')
        const down = document.createElement('div')
        const rightSide = document.createElement('div')
        containerSurat.classList.add('container-surat')
        up.classList.add('up')
        down.classList.add('down')
        rightSide.classList.add('right-side')
        leftSide.classList.add('left-side')

        const title = document.createElement('p')
        title.classList.add('title-surat')
        title.textContent = surat.name + ' (' + translate.id + ')'

        const NoSurat = document.createElement('p')
        NoSurat.classList.add('no-surat')
        NoSurat.textContent = 'Surat ke - ' + surat.number_of_surah + ' ·'

        const type = document.createElement('p')
        type.classList.add('type')
        type.textContent = surat.type + ' ·'

        const ayat = document.createElement('p')
        ayat.classList.add('ayat')
        ayat.textContent = surat.number_of_ayah + ' Ayat'

        const audio = document.createElement('audio')
        audio.classList.add('audio')
        // const play = document.createElement('div')
        // audio.classList.add('audio-player')
        // play.classList.add('play')
        audio.src = surat.recitation
        audio.controls = true

        containerSurah.appendChild(containerSurat)
        containerSurat.appendChild(leftSide)
        containerSurat.appendChild(rightSide)
        leftSide.appendChild(up)
        leftSide.appendChild(down)
        up.appendChild(title)
        down.appendChild(NoSurat)
        down.appendChild(type)
        down.appendChild(ayat)
        rightSide.appendChild(audio)
        // audio.appendChild(play)
    })
    console.log(data)
})

