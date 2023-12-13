const countries = [
  "Pakistan",
  "India",
  "Tajikistan",
  "Russia",
  "Kazakhstan",
  "Greece",
  "Turkmenistan",
  "Turkey",
  "Kyrgyzstan",
  "Ukraine",
  "Uzbekistan",
];

console.log("----------------------  // 1. Countries array-ində sonu 'stan' ilə bitən ölkələrdən array yaratmaq------------------------------");

const countriesStan = countries.filter((country) => country.endsWith('stan'));
console.log(countriesStan);

const sentence = "In the end, we only regret the chances we didn't take.";

console.log("-----------------------// 2. Sentence dəyişənindəki bütün sözlərin baş hərfləri böyük şəkildə yazmaq. (In The End - bu formada)-----------------------------");

const wordsInSentence = sentence.split(' ');

for (let i = 0; i < wordsInSentence.length; i++) {
  wordsInSentence[i] = wordsInSentence[i][0].toUpperCase() + wordsInSentence[i].slice(1);
}

const modifiedSentence = wordsInSentence.join(' ');
console.log(modifiedSentence);

console.log("----------------------// 3. Sentence dəyişənini tərsinə yazmaq. (In the end, we only regret the chances we didn't take. - bu formada)------------------------------");

const reversedSentence = sentence.split('').reverse().join('');
console.log(reversedSentence);

console.log("-------------------------- // 4. Sentence dəyişənində olan ən uzun sözü tapmaq.--------------------------");

const wordsFromSentence = sentence.split(' ');

let longestWord = '';

for (let i = 0; i < wordsFromSentence.length; i++) {
  if (wordsFromSentence[i].length > longestWord.length) {
    longestWord = wordsFromSentence[i];
  }
}

console.log("En uzun soz:", longestWord);

const books = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Lord of the Rings",
  "Animal Farm",
  "Brave New World",
  "The Grapes of Wrath",
  "The Hobbit",
  "One Hundred Years of Solitude",
  "The Catcher in the Rye",
  "Catch-22",
  "The Brothers Karamazov",
  "Moby Dick",
  "The Odyssey",
  "Frankenstein",
  "Alice's Adventures in Wonderland",
  "The Picture of Dorian Gray",
  "War and Peace",
];

console.log("-------------------------// 5. Books array-ini əlifba sırasına uyğun yazılmış array-ə çevirmək---------------------------");

books.sort();
console.log(books)
console.log("------------------------  // 6. Books array-ində adi ən uzun olan kitabı tapmaq.----------------------------");

const longestBook = books.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
console.log("longest book:", longestBook);

console.log("------------------------  // 7. Books array-ində olan kitabların ümumi olaraq hərflərinin sayını hesablamaq.----------------------------");

const totalCharacters = books.join('').length;
console.log("Total number of characters of books:", totalCharacters);
