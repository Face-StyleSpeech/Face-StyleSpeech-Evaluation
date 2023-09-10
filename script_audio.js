
function saveMos(speaker) {
    const table1 = document.querySelector(`#mos #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/mos/${speaker}/0.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#mos #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/mos/${speaker}/1.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table3 = document.querySelector(`#mos #c`)
    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/mos/${speaker}/2.wav" type="audio/mpeg">`
    table3.appendChild(raw_data3)

    const table4 = document.querySelector(`#mos #d`)
    let raw_data4 = document.createElement('td')
    raw_data4.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/mos/${speaker}/3.wav" type="audio/mpeg">`
    table4.appendChild(raw_data4)

    const table6 = document.querySelector(`#mos #speaker`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${speaker}`)
    table6.appendChild(raw_data6)
    
    const table0 = document.querySelector(`#mos #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/mos/${speaker}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

}

function saveAB(speaker1, speaker2, index) {
    const table1 = document.querySelector(`#ab #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/ab/${speaker1}/0.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#ab #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/ab/${speaker2}/0.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table0 = document.querySelector(`#ab #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/ab/${speaker1}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table6 = document.querySelector(`#ab #index`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${index}`)
    table6.appendChild(raw_data6)

}

function saveABX(speaker, index) {
    const table1 = document.querySelector(`#abx #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_shuffle/abx/${speaker}/0.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table0 = document.querySelector(`#abx #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_shuffle/abx/${speaker}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table6 = document.querySelector(`#abx #index`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${index}`)
    table6.appendChild(raw_data6)

}


const speakerArray_mos = [
    "NEW_I_VOX_Woman_U1", "NEW_I_VOX_Man_U1", "NEW_I_VOX_Woman_U2", "NEW_I_VOX_Man_U2",
    "NEW_I_VOX_Woman_U3", "NEW_I_VOX_Man_U3", "NEW_I_VOX_Woman_U4", "NEW_I_VOX_Man_U4"
]
const speakerArray_ab = [
    "NEW_I_VOX_Woman_U5", "NEW_I_VOX_Man_U5", "NEW_I_VOX_Woman_U6", "NEW_I_VOX_Man_U6",
    "NEW_I_VOX_Woman_U7", "NEW_I_VOX_Man_U7", "NEW_I_VOX_Woman_U8", "NEW_I_VOX_Man_U8",
    "NEW_I_VOX_Woman_U9", "NEW_I_VOX_Man_U9", "NEW_I_VOX_Woman_U10", "NEW_I_VOX_Man_U10",
    "NEW_I_VOX_Woman_U11", "NEW_I_VOX_Man_U11", "NEW_I_VOX_Woman_U12", "NEW_I_VOX_Man_U12"
]
const speakerArray_abx = [
    "NEW_I_VOX_Woman_U13", "NEW_I_VOX_Man_U13", "NEW_I_VOX_Woman_U14", "NEW_I_VOX_Man_U14",
    "NEW_I_VOX_Woman_U15", "NEW_I_VOX_Man_U15", "NEW_I_VOX_Woman_U16", "NEW_I_VOX_Man_U16"
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

for (var i = 0; i < speakerArray_mos.length; i++) {
    let speaker = speakerArray_mos[i]
    saveMos(speaker)
}

for (var i = 0; i < 8; i++) {
    let speaker1 = speakerArray_ab[i]
    let speaker2 = speakerArray_ab[i+8]
    if (i % 2 == 0){
        saveAB(speaker1, speaker2, i+1)
    }
    else{
        saveAB(speaker2, speaker1, i+1)
    }
}

for (var i = 0; i < 8; i++) {
    let speaker = speakerArray_abx[i]
    saveABX(speaker, i+1)
}
