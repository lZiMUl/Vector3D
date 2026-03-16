# 📦 Vector3D

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/lZiMUl/Vector3D?style=for-the-badge)](https://github.com/lZiMUl/Vector3D/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/lZiMUl/Vector3D?style=for-the-badge)](https://github.com/lZiMUl/Vector3D/network)
[![GitHub license](https://img.shields.io/github/license/lZiMUl/Vector3D?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/badge/Package%20Manager-npm-cb3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)


**A robust and type-safe 3D vector math library for JavaScript and TypeScript projects.**

</div>

## 🎯 Why Choose Vector3D?

`Vector3D` provides a comprehensive and intuitive API for performing common 3D vector operations. Built with TypeScript, it offers strong type safety, enhancing code reliability and developer experience. This library is designed for performance and ease of integration into any project requiring efficient 3D mathematical computations, from game development to graphics applications.

## ✨ Features

-   **Vector Initialization**: Easily create 3D vectors from components or other vectors.
-   **Basic Arithmetic**: Perform addition, subtraction, multiplication, and division of vectors and scalars.
-   **Scalar Operations**: Scale, negate, and clamp vector components.
-   **Geometric Calculations**: Compute dot products, cross products, magnitudes (lengths), distances, and normalize vectors.
-   **Comparison**: Check for vector equality with optional tolerance.
-   **Utility Methods**: Clone vectors, set components, and provide immutable operations for safer state management.
-   **Type-Safe API**: Fully written in TypeScript for robust development and compile-time error checking.

## 🚀 Installation

To use `Vector3D` in your project, install it via npm:

```bash
npm install vec3d
```

## 📖 Quick Start

Import the `vec3d` class and start performing 3D operations.

```typescript
import { Vector3D } from 'vec3d'; // Assuming main export

// Create vectors
const vecA = new Vector3D(1, 2, 3);
const vecB = new Vector3D(4, 5, 6);

// Perform addition
const sum = vecA.add(vecB); // Returns a new Vector3D (5, 7, 9)

// Calculate dot product
const dotProduct = vecA.dot(vecB); // Returns a number (1*4 + 2*5 + 3*6 = 32)

// Normalize a vector
const normalizedVecA = vecA.normalize();

// Get magnitude (length)
const magnitude = vecA.magnitude();

// Chain operations
const result = new Vector3D(10, 20, 30)
    .subtract(vecA)
    .scale(0.5)
    .add(normalizedVecA);

console.log('Vector A:', vecA.toString());
console.log('Vector B:', vecB.toString());
console.log('Sum:', sum.toString());
console.log('Dot Product:', dotProduct);
console.log('Normalized A:', normalizedVecA.toString());
console.log('Magnitude A:', magnitude);
console.log('Chained Result:', result.toString());
```

## 📚 API Documentation

Detailed API documentation, including all methods, parameters, and examples, can be generated using TypeDoc.

To generate the documentation locally:

1.  Clone the repository.
2.  Install development dependencies: `npm install`
3.  Run the docs script: `npm run docs`

The generated documentation will be available in the `docs` directory.

## 📁 Project Structure

```
Vector3D/
├── .github/                 # GitHub specific configurations (e.g., workflows, issue templates)
├── .idea/                   # IDE (IntelliJ/WebStorm) project configuration
├── src/                     # Source code directory for the Vector3D library
│   └── (vector-related files) # e.g., index.ts, Vector3D.ts, operations.ts
├── .gitignore               # Specifies intentionally untracked files to ignore
├── .prettierrc              # Prettier configuration for code formatting
├── LICENSE                  # MIT License file
├── README.md                # Project README file
├── SECURITY.md              # Security policy documentation
├── eslint.config.js         # ESLint configuration for code linting
├── package-lock.json        # npm lock file, detailing dependency tree
├── package.json             # Project metadata, scripts, and dependencies
├── tsconfig.json            # TypeScript compiler configuration
└── typedoc.json             # TypeDoc configuration for API documentation generation
```

## 🛠️ Tech Stack

-   **Language**: ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
-   **Package Manager**: ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
-   **Build Tool**: ![TypeScript Compiler](https://img.shields.io/badge/TSC-blue?style=for-the-badge)
-   **Testing**: ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
-   **Linting**: ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
-   **Formatting**: ![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=black)
-   **Documentation**: ![TypeDoc](https://img.shields.io/badge/TypeDoc-8C64B4?style=for-the-badge&logo=typedoc&logoColor=white)

## 🔧 Development

### Prerequisites

-   Node.js (LTS recommended)
-   npm (comes with Node.js)

### Installation for Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/lZiMUl/Vector3D.git
    cd Vector3D
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Available Scripts

| Command         | Description                                     |

| :-------------- | :---------------------------------------------- |

| `npm run build` | Compiles the TypeScript source code to JavaScript. |

| `npm run test`  | Runs the test suite using Jest.                 |

| `npm run lint`  | Lints the codebase using ESLint.                |

| `npm run format`| Formats the code using Prettier.                |

| `npm run docs`  | Generates API documentation using TypeDoc.      |

### Building the Library

To compile the TypeScript source files into JavaScript, run:

```bash
npm run build
```

This will output the compiled files to the `dist` directory.

## 🧪 Testing

The project uses Jest for testing. To run the tests:

```bash
npm run test
```

## 🤝 Contributing to Vector3D

We welcome contributions! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

Please ensure your code adheres to the project's coding style and passes all tests and linting checks.

### Contribution Guidelines:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Run tests (`npm run test`) and linting (`npm run lint`).
5.  Commit your changes (`git commit -am 'feat: Add new feature'`).
6.  Push to the branch (`git push origin feature/your-feature`).
7.  Open a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   Inspired by various vector math libraries in game development and graphics.
-   Built with modern TypeScript tooling for a robust development experience.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/lZiMUl/Vector3D/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [lZiMUl](https://github.com/lZiMUl)

</div>
```

