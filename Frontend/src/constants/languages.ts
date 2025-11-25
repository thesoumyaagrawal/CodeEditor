export type LanguageKey =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "cpp";

export type LanguageItem = {
  key: LanguageKey;
  label: string;
  version: string;
  boilerplate: string;
};

export const LANGUAGES: LanguageItem[] = [
  {
    key: "javascript",
    label: "JavaScript",
    version: "ES2023",
    boilerplate: `// JavaScript
console.log("Hello, world!");
`,
  },
  {
    key: "typescript",
    label: "TypeScript",
    version: "5.x",
    boilerplate: `// TypeScript
const msg: string = "Hello, world!";
console.log(msg);
`,
  },
  {
    key: "python",
    label: "Python",
    version: "3.x",
    boilerplate: `# Python
print("Hello, world!")
`,
  },
  {
    key: "java",
    label: "Java",
    version: "17+",
    boilerplate: `// Java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
`,
  },
  {
    key: "cpp",
    label: "C++",
    version: "17",
    boilerplate: `// C++
#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "Hello, world!\\n";
  return 0;
}
`,
  },
];
