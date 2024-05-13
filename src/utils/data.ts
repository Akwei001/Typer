// An array of random words
const randomWords: string[] = [
    'apple', 'banana', 'carrot', 'dog', 'elephant', 'flower', 'guitar',
    'happiness', 'island', 'jungle', 'koala', 'lemon', 'mountain', 'ninja',
    'orange', 'penguin', 'queen', 'rainbow', 'sunset', 'tiger', 'unicorn',
    'victory', 'watermelon', 'xylophone', 'yoga', 'zebra', 'ant', 'butterfly',
    'chocolate', 'dolphin', 'eagle', 'fire', 'giraffe', 'honey', 'ice cream',
    'jaguar', 'kiwi', 'lizard', 'moon', 'night', 'ocean', 'panda', 'quill',
    'river', 'seahorse', 'tornado', 'umbrella', 'volcano', 'whale', 'xylophone',
    'yacht', 'zeppelin', 'astronaut', 'ballet', 'cactus', 'daisy', 'elephant'
  ];
  
  
  // Generate a string of 12 random words
  export const generateRandomWords = (count: number): string => {
        let result = '';
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * randomWords.length);
          result += randomWords[randomIndex];
          if (i < count - 1) {
            // Add a space after each word except the last one
            result += ' ';
          }
        }
        return result;
      };
  
  // Generate a string of 12 random words
  export const randomWordString: string = generateRandomWords(12);
  
  console.log('Random Words:', randomWordString);