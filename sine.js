
function sineWaveInit(frequency){
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); 
    oscillator.connect(audioCtx.destination);
    return oscillator;
}
function sineWave(){
    oscillator.stop()
    frequency -= 500
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); 
    oscillator.start()
    window.document.getElementById('Numero').innerHTML = frequency;
    timeout = setTimeout(sineWave, 1000)
}
function startStop(){
    if(ss){
        sineWave();
    }else{
        oscillator.stop()
        clearTimeout(timeout);
    }
}
var timeout
var ss = true;
var frequency = 20000
var oscillator = sineWaveInit();
