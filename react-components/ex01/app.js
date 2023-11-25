const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind metoda map pe arrayul skills, returneaza
  si afiseaza in consola un array in care fiecare
  consoana este scrisa cu litera mare (vocalele nu)
`);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrVowels = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseVowels = letters.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return upperCaseVowels.join('');
});

console.log(arrVowels);

console.warn(`
  Folosind map pe arrayul friends, returneaza un array
  in care fiecare pozitie contine propozitia
  “Ma numesc {name} {surname} si am {age} ani.  ”
`);
const sentences = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(sentences);

console.warn(`
Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
“Diferenta de varsta dintre {friendName} si {personName} este {diff}”
`);
const sentences1 = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Diferenta de varsta dintre ${name} ${surname} este ${age}`;
});
console.log(sentences1);

console.warn(`
Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill
`);
const diffsArray = person.skills.map((skill) => person.age - skill.length);
console.log(diffsArray);

console.warn(`
Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari.
`);
const sentences3 = person.skills.map((skill) => {
  const firstLetter = skill.charAt(0).toUpperCase();
  const lastLetter = skill.slice(-1).toUpperCase();
  return firstLetter + skill.slice(1, -1) + lastLetter;
});

console.log(sentences3);

console.warn(`
Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)
`);
const sentences4 = person.skills.map((skill) => {
  const reversedWord = skill.split('').reverse().join('');
  return reversedWord;
});

console.log(sentences4);

console.warn(`
Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”
`);
const sentences5 = person.friends.map(
  (friend) => `${friend.name} are ${friend.age} ani.`,
);

console.log(sentences5);

console.warn(`
Folosind metoda map pe arrayul friends, returneaza un array care contine numele inversat al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)
`);
const sentences6 = person.friends.map(
  (friend) => `${friend.surname} ${friend.name}`,
);

console.log(sentences6);

console.warn(`
Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare pozitie diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie
`);
const sentences7 = person.friends.map((friend) => {
  const message1 = (friend.name + friend.surname).replace(/\s/g, '');
  return message1.length - friend.age;
});

console.log(sentences7);

console.warn(`
Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si varsta prietenului
`);
const sentences8 = person.skills.map((skill) => skill.length - person.age);

// Afișarea array-ului cu diferențele de lungime
console.log(sentences8);
