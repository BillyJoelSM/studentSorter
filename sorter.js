var students =[var students = ["Amaree", "Alan", "Edgar", "When a Manuel loves a woman", "Billy", "Marlene Gallardo",
"Marlene Hernandez", "Allyson Dixon-Duart-heeeeey", "Emily Garcia", "Lupito", "Cardo", "Geo", "Kevin", "Gilberto",
"Clemente", "Arianna", "Jerry Fonseca-Garcia", "Flower", "GERRRSSSSOOOOOON", "Jose Carbajal-Lopez",
"Christian Vences-Cabrera", "Estefani", "Abel", "Eric Tobon","Jose", "Owens", "Daddy Anthony" ]

function sortStudents(studentsArray, size){
    var group = [ ]
    var currentGroup = [ ]

    while (studentsArray.length > 0){
        var roundNumber = Math.random() * studentsArray.Length
        var randomStudents =studentsArray[randomNumber]
        currentGroup.push(randomStudents)
        studentsArray.splice(randomNumber, 1)
        
        if (currentGroup.length >= size) {
            groups.push(curentGroup)
            currentGroup = [ ]
        }
    }
    for (var i = 0; i< group.length; i++){
        console.log('Group @' + (i+i) + ': ' + groups[i])
    }
}
sortStudents(students, 3)