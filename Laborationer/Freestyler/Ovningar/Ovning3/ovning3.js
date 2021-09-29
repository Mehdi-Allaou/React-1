/*class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super (name);
      this._certifications = certifications;
      
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics'])
  
  console.log(nurseOlynyk);

  */

//   // Parent class
// class Media {
//   constructor(info) {
//     this.publishDate = info.publishDate;
//     this.name = info.name;
//   }
// }
 
// // Child class
// class Song extends Media {
//   constructor(songData) {
//     super(songData);
//     this.artist = songData.artist;
//   }
// }
 
// const mySong = new Song({ 
//   artist: 'Queen', 
//   name: 'Bohemian Rhapsody', 
//   publishDate: 1975
// });


// console.log(Song);


// class School {
//   constructor(name, level, numberOfStudents) {
//     this._name = name;
//     this._level = level;
//     this._numberOfStudents = numberOfStudents;
//   } 
//   get name() {
//     return this._name;
//   }
//   get level() {
//     return this._level;
//   }
//   get numberOfStudents() {
//     return this._numberOfStudents;
//   }

//   quickFacts() {
//     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
//   }

//   static pickSubstituteTeacher(substituteTeachers) {
//   const random = Math.floor(Math.random() * substituteTeachers.length)
//   return substituteTeachers[random];
//   }

//   set numberOfStudents(value) {
//     //value.isNaN() ? console.log('Invalid input: numberOfStudents must be set to a Number') : value;
//   if(value.isNaN()) {
//     console.log('Invalid input: numberOfStudents must be set to a Number')
//   } else {
//     this._numberOfStudents = value;
//   }
//   }
// }



// class PrimarySchool extends School {
//   constructor(name, numberOfStudents, pickupPolicy) {
//     super(name, 'primary', numberOfStudents);
//     this._pickupPolicy = pickupPolicy;
//   } 
//   get pickupPolicy() {
//     return this._pickupPolicy;
//   }
// }

// class HighSchool extends School {
//   constructor(name, numberOfStudents, sportsTeams) {
//     super(name, 'high', numberOfStudents);
//     this.sportsTeam = ['sportsTeam'];
//   } 
//   get sportsTeam() {
//     console.log(this.sportsTeam);
//   }
// }

// const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

// lorraineHansbury.quickFacts()

// const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'Manu Ginobli'])

// const alSmith = ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

// console.log(alSmith.sportsTeam());

// class Middle extends School {
//   constructor() {
//     super(name);
//   }
// }


// class School {
//   constructor(name, level, numberOfStudents) {
//     this._name = name;
//     this._level = level;
//     this._numberOfStudents = numberOfStudents;
//   } 
//   get name() {
//     return this._name;
//   }
//   get level() {
//     return this._level;
//   }
//   get numberOfStudents() {
//     return this._numberOfStudents;
//   }
  
//     set numberOfStudents(value) {
//       //value.isNaN() ? console.log('Invalid input: numberOfStudents must be set to a Number') : value;
//     if(value.isNaN()) {
//       console.log('Invalid input: numberOfStudents must be set to a Number')
//     } else {
//       this._numberOfStudents = value;
//     }
//   }
  
//   quickFacts() {
//     console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
//   }

//   static pickSubstituteTeacher(substituteTeachers) {
//   const random = Math.floor(Math.random() * substituteTeachers.length);
//   return substituteTeachers[random];
//   }
  
// }



// class PrimarySchool extends School {
//   constructor(name, numberOfStudents, pickupPolicy) {
//     super(name, 'primary', numberOfStudents);
//     this._pickupPolicy = pickupPolicy;
//   } 
//   get pickupPolicy() {
//     return this._pickupPolicy;
//   }
// }

// class HighSchool extends School {
//   constructor(name, numberOfStudents, sportsTeam) {
//     super(name, 'high', numberOfStudents);
//     this.sportsTeam = sportsTeam;
//   } 
//   get sportsTeam() {
//     return this.sportsTeam;
//   }
// }

// const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

// lorraineHansbury.quickFacts()

// // School.pickSubstituteTeacher

// const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'Manu Ginobli']);


// const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// console.log(alSmith.sportsTeam);


const formatNumber = number => {
  let pureNr = String(Math.floor(number));
  
  for (let i = pureNr.length - 3; i > 0; i -= 3) {
    pureNr = pureNr.slice(0, i) + ',' + pureNr.slice(i);
  }
  return pureNr;
  };
  
  console.log(formatNumber()); 
