window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js");
    }
});


function check(note){
    if(note != ""){
        if(isNaN(note) == false){
            var n = parseInt(note)
            if(n >=1 && n <=6){
                return n
            } else {
                document.getElementById("ErrorH3").innerHTML = "Bitte nur Zahlen zwischen 1 und 6 eingeben."
                return false
            }
        }else{
            document.getElementById("ErrorH3").innerHTML = "Bitte nur Zahlen eingeben"
            return false
        }
    }
}


function deleteOld(){
    let errorn = document.getElementById("ErrorH3").innerHTML
    if(errorn != ""){
        document.getElementById("ErrorH3").innerHTML = ""
    }
    let NoteNode = document.getElementById("NoteH5").innerHTML
    if(NoteNode != ""){
        document.getElementById("NoteH5").innerHTML = ""
    }
}

function Rechnung(KA, Normal){
    var Gesamt

    var NormalAddiert = 0
    var KAAddiert = 0
    for(var i = 0; i<Normal.length; i++){
        var n = Normal[i]
        NormalAddiert += n
    }
    for(var i = 0; i<KA.length; i++){
        var n = KA[i]
        KAAddiert += n
    }
    var KAready = KAAddiert / Normal.length
    var NormalReady = NormalAddiert / Normal.length
    
    if(KA.length == 0){Gesamt = NormalReady}
    if(KA.length == 1){Gesamt = NormalReady * 0.75+KAready*0.25}
    if(KA.length == 2){Gesamt = NormalReady * 0.6+KAready*0.4}
    if(KA.length == 3 || KA.length == 4){Gesamt = NormalReady * 0.5+KAready*0.5}

    var fertig = Gesamt.toFixed(2)

    document.getElementById("NoteH5").innerHTML = `Durchschnitt: ${fertig}`

}

function onClick() {
    var KA1Note = document.getElementById('KA1').value
    var KA2Note = document.getElementById('KA2').value
    var KA3Note = document.getElementById('KA3').value
    var KA4Note = document.getElementById('KA4').value
    var LK1Note = document.getElementById('LK1').value
    var LK2Note = document.getElementById('LK2').value
    var LK3Note = document.getElementById('LK3').value
    var LK4Note = document.getElementById('LK4').value
    var LK5Note = document.getElementById('LK5').value
    var LK6Note = document.getElementById('LK6').value
    var LK7Note = document.getElementById('LK7').value
    var LK8Note = document.getElementById('LK8').value
    var LK9Note = document.getElementById('LK9').value
    var LK10Note = document.getElementById('LK10').value
    var LK11Note = document.getElementById('LK11').value
    var LK12Note = document.getElementById('LK12').value
    var LK13Note = document.getElementById('LK13').value

    var KA = []
    var Normal = []

    var Noten = [KA1Note, KA2Note, KA3Note, KA4Note, LK1Note, LK2Note, LK3Note, LK4Note, LK5Note, LK6Note, LK7Note, LK8Note, LK9Note, LK10Note, LK11Note, LK12Note, LK13Note]
    
    for(var i=0; i<Noten.length; i++){
        if(i < 4){
            var noteKA = Noten[i]
            noteKA = check(noteKA)
            if(noteKA == false){
                return
            }
            else if(noteKA != undefined){
                KA.push(noteKA)
                
            }
        }
        if(i >= 4){
            var noteN = Noten[i]
            noteN = check(noteN)
            if(noteN == false){
                return
            }
            else if(noteN != undefined){
                Normal.push(noteN)
                
            }
        }
    }
    Rechnung(KA, Normal)
}
