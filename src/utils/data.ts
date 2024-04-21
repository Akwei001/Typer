// An array of random words
const randomWords: string[] = [
    'apple', 'banana', 'carrot', 'dog', 'elephant', 'flower', 'guitar',
    'happiness', 'island', 'jungle', 'koala', 'lemon', 'mountain', 'ninja',
    'orange', 'penguin', 'queen', 'rainbow', 'sunset', 'tiger', 'unicorn',
    'victory', 'watermelon', 'xylophone', 'yoga', 'zebra'
  ];
  
  // Generate a string of 12 random words
   export const generateRandomWords = (count: number): string => {
    let result = '';
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      result += randomWords[randomIndex];
    }
    return result;
  };
  
  // Generate a string of 12 random words
  export const randomWordString: string = generateRandomWords(12);
  
  console.log('Random Words:', randomWordString);