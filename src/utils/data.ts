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

  const codeSnippets: string[] = [
    "const sum = (a: number, b: number): number => a + b;",
    "interface Person { name: string; age: number; }",
    "function isEven(num: number): boolean { return num % 2 === 0; }",
    "const fruits: string[] = ['apple', 'banana', 'orange'];",
    "type Status = 'pending' | 'approved' | 'rejected';",
    "class Circle { constructor(public radius: number) {} }",
    "const double = (arr: number[]): number[] => arr.map(x => x * 2);",
    "enum Direction { North, South, East, West }",
    "const greet = (name?: string): string => `Hello, ${name || 'Guest'}!`;",
    "interface Config { readonly apiKey: string; timeout?: number; }",
    "function identity<T>(arg: T): T { return arg; }",
    "const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];",
    "type Pair<T, U> = { first: T; second: U; };",
    "const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);",
    "interface Comparable { compareTo(other: this): number; }"
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