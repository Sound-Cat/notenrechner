function onFocus(){
    var errornode = document.getElementById('ErrorNode')
    var NoteNode = document.getElementById('NoteNode')
    if(typeof(errornode) != 'undefined' && errornode != null){
        errornode.remove()
    }
    if(typeof(NoteNode) != 'undefined' && NoteNode != null){
        NoteNode.remove()
    } 
}

function onClick() {
    var Noteungerundet = document.getElementsByClassName("Note")
    var KA1 = document.getElementById('KA1').value
    var KA2 = document.getElementById('KA2').value
    var KA3 = document.getElementById('KA3').value
    var KA4 = document.getElementById('KA4').value
    var LK1 = document.getElementById('LK1').value
    var LK2 = document.getElementById('LK2').value
    var LK3 = document.getElementById('LK3').value
    var LK4 = document.getElementById('LK4').value
    var LK5 = document.getElementById('LK5').value
    var LK6 = document.getElementById('LK6').value
    var LK7 = document.getElementById('LK7').value
    var LK8 = document.getElementById('LK8').value
    var LK9 = document.getElementById('LK9').value
    var LK10 = document.getElementById('LK10').value
    var LK11 = document.getElementById('LK11').value
    var LK12 = document.getElementById('LK12').value
    var LK13 = document.getElementById('LK13').value
    if(isNaN(KA1) || isNaN(KA2) || isNaN(KA1) || isNaN(KA3) || isNaN(KA4) || isNaN(LK1) || isNaN(LK2) || isNaN(LK3) || isNaN(LK4) || isNaN(LK5) || isNaN(LK6) 
    || isNaN(LK7) || isNaN(LK8) || isNaN(LK9) || isNaN(LK10) || isNaN(LK11) || isNaN(LK12) || isNaN(LK13)){
        var errornode = document.createElement('h3') 
        var errortextnode = document.createTextNode('Bitte nur Zahlen eingeben') 
        errornode.appendChild(errortextnode)
        var currentDiv = document.getElementById("ErrorH3");
        errornode.id = 'ErrorNode'
        document.body.insertBefore(errornode, currentDiv);
        
    } else {
    Rechung()
    }
}


function Rechung(){
    var KA1 = document.getElementById('KA1').value
    var KA2 = document.getElementById('KA2').value
    var KA3 = document.getElementById('KA3').value
    var KA4 = document.getElementById('KA4').value

    var LK1 = document.getElementById('LK1').value
    var LK2 = document.getElementById('LK2').value
    var LK3 = document.getElementById('LK3').value
    var LK4 = document.getElementById('LK4').value
    var LK5 = document.getElementById('LK5').value
    var LK6 = document.getElementById('LK6').value
    var LK7 = document.getElementById('LK7').value
    var LK8 = document.getElementById('LK8').value
    var LK9 = document.getElementById('LK9').value
    var LK10 = document.getElementById('LK10').value
    var LK11 = document.getElementById('LK11').value
    var LK12 = document.getElementById('LK12').value
    var LK13 = document.getElementById('LK13').value


    var KA1Note =parseInt(KA1)
    var KA2Note =parseInt(KA2)
    var KA3Note =parseInt(KA3)
    var KA4Note =parseInt(KA4)

    var LK1Note =parseInt(LK1)
    var LK2Note =parseInt(LK2)
    var LK3Note =parseInt(LK3)
    var LK4Note =parseInt(LK4)
    var LK5Note =parseInt(LK5)
    var LK6Note =parseInt(LK6)
    var LK7Note =parseInt(LK7)
    var LK8Note =parseInt(LK8)
    var LK9Note =parseInt(LK9)
    var LK10Note =parseInt(LK10)
    var LK11Note =parseInt(LK11)
    var LK12Note =parseInt(LK12)
    var LK13Note =parseInt(LK13)
if(KA1Note < 1 || KA1Note > 6 || KA2Note < 1 || KA2Note > 6 || KA3Note < 1 || KA3Note > 6 || KA4Note < 1 || KA4Note > 6 || 
    LK1Note < 1 || LK1Note > 6 || LK2Note < 1 || LK2Note > 6 || LK3Note < 1 || LK3Note > 6 ||LK4Note < 1 || LK4Note > 6 || LK5Note < 1 || LK5Note > 6 ||
    LK6Note < 1 || LK6Note > 6 || LK7Note < 1 || LK7Note > 6 || LK8Note < 1 || LK8Note > 6 || LK9Note < 1 || LK9Note > 6 || LK10Note < 1 || LK10Note > 6 ||
    LK11Note < 1 || LK11Note > 6 || LK12Note < 1 || LK12Note > 6 || LK13Note < 1 || LK13Note > 6){
        var errornode = document.createElement('h3') 
        var errortextnode = document.createTextNode('Bitte nur Zahlen zwischen 2-6 eingeben!') 
        errornode.appendChild(errortextnode)
        var currentDiv = document.getElementById("ErrorH3");
        errornode.id = 'ErrorNode'
        document.body.insertBefore(errornode, currentDiv);
       
    }else{

        if(KA4 =="" && KA2 == "" && KA3== "" && KA1 == ""){
            var KANote = 0;
            
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13!=""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note) + (LK13Note)) /13
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2)
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            } else
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note)) /12;
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note)) /11
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note)) /10
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note)) /9
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note)) /8
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note)) /7
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note)) /6
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note)) /5
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note)) /4
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note)) /3
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note)) /2
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = LK1Note
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1=="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = 0
                var Noteungerundet = LKNote
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
        }
        if(KA4 =="" && KA2 == "" && KA3== "" && KA1 != ""){
            var KANote = KA1Note / 1

            
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13!=""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note) + (LK13Note)) /13
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            } else
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note)) /12;
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note)) /11
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note)) /10
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note)) /9
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note)) /8
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note)) /7
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note)) /6
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note)) /5
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note)) /4
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note)) /3
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note)) /2
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = LK1Note
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1=="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = 0
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
        }
        if(KA3== "" && KA4=="" && KA1!="" && KA2!=""){
            var KANote = ((KA1Note) + (KA2Note)) /2

            
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13!=""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note) + (LK13Note)) /13
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            } else
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note)) /12;
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note)) /11
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note)) /10
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note)) /9
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note)) /8
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note)) /7
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note)) /6
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note)) /5
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note)) /4
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note)) /3
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note)) /2
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = LK1Note
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1=="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = 0
                var Noteungerundet = ((KANote)*0.4)+((LKNote)*0.6)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
        }
        if(KA3!= "" && KA4=="" && KA1!="" && KA2!=""){
            var KANote = ((KA1Note) + (KA2Note) + (KA3Note)) /3

            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13!=""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note) + (LK13Note)) /13
                var Noteungerundet = ((KANote)*0.25)+((LKNote)*0.75)
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            } else
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note)) /12;
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note)) /11
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note)) /10
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note)) /9
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note)) /8
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note)) /7
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note)) /6
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note)) /5
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note)) /4
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note)) /3
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note)) /2
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = LK1Note
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1=="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = 0
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
        }
        if(KA3!= "" && KA4!="" && KA1!="" && KA2!=""){
            var KANote = ((KA1Note) + (KA2Note) + (KA3Note) + (KA4Note)) /4

            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13!=""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note) + (LK13Note)) /13
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            } else
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12!=""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note) + (LK12Note)) /12;
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11!=""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note) + (LK11Note)) /11
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10!=""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note) + (LK10Note)) /10
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9!=""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note) + (LK9Note)) /9
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8!=""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note) + (LK8Note)) /8
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7!=""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note) + (LK7Note)) /7
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6!=""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note) + (LK6Note)) /6
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5!=""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note) + (LK5Note)) /5
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4!=""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note) + (LK4Note)) /4
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3!="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note) + (LK3Note)) /3
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2!="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = ((LK1Note) + (LK2Note)) /2
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1!="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = LK1Note
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
            if(LK1=="" && LK2=="" && LK3=="" && LK4==""&& LK5==""&& LK6==""&& LK7==""&& LK8==""&& LK9==""&& LK10==""&& LK11==""&& LK12==""&& LK13==""){
                var LKNote = 0
                var Noteungerundet = ((KANote)+(LKNote))/2
                var Notenode = document.createElement('h4')
var Note = Noteungerundet.toFixed(2) 
                var Notetextnode = document.createTextNode(`Durchschnitt: ${Note}`) 
                Notenode.appendChild(Notetextnode)
                var currentDiv = document.getElementById("NoteH5");
                Notenode.id = 'NoteNode'
                document.body.insertBefore(Notenode, currentDiv);
            }
        }
    }
}
