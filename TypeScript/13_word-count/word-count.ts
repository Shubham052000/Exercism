export function count(input: string): Map<string, number> {
  const wordCount = new Map<string, number>();
    const words = input.match(/\b[\w']+\b/g);
    if (words) {
        for (const word of words) {
            const lowercaseWord = word.toLowerCase();
            const count = wordCount.get(lowercaseWord) || 0;
            wordCount.set(lowercaseWord, count + 1);
        }
    }
    return wordCount;
}
