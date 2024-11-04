let DSA = [];
let PL = [];
let Networks = [];

function displayEnrolledStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled in this subject.");
    } else {
        console.log("Currently enrolled students: " + subjectArray.join(", "));
    }
}

function enrollmentSystem() {
    let subjects = { A: DSA, B: PL, C: Networks };
    let subjectChoice;
    
    while (true) {
        subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
        
        if (subjectChoice === 'D') {
            console.log("Exiting program...");
            console.log("DSA Students: ", DSA);
            console.log("PL Students: ", PL);
            console.log("Networks Students: ", Networks);
            break;
        }
        
        if (!subjects[subjectChoice]) {
            console.log("Invalid choice. Please select a valid option.");
            continue;
        }
        
        let currentSubject = subjects[subjectChoice];
        
        while (true) {
            let operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();
            
            if (operation === 'D') {
                console.log("Exiting program...");
                console.log("DSA Students: ", DSA);
                console.log("PL Students: ", PL);
                console.log("Networks Students: ", Networks);
                return;
            }
            
            if (operation === 'C') {
                break; 
            }
            
            if (operation === 'A') {
                let studentName = prompt("Enter the name of the student to enroll:");
                currentSubject.push(studentName);
                console.log("${studentName} has been enrolled in ${subjectChoice === 'A' ? 'DSA' : subjectChoice === 'B' ? 'PL' : 'Networks'}");
            } else if (operation === 'B') {
                displayEnrolledStudents(currentSubject);
                let studentName = prompt("Enter the name of the student to unenroll:");
                
                let index = currentSubject.indexOf(studentName);
                if (index !== -1) {
                    currentSubject.splice(index, 1);
                    console.log("${studentName} has been unenrolled from ${subjectChoice === 'A' ? 'DSA' : subjectChoice === 'B' ? 'PL' : 'Networks'}");
                } else {
                    console.log("${studentName} is not found in the enrolled students");
                }
            } else {
                console.log("Invalid operation. Please select a valid option.");
            }
          }
    }
}
startProgram()