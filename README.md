# Vector3D Class

The `Vector3D` class is a utility for handling 3D vectors in JavaScript/TypeScript. It provides various methods for performing vector operations such as addition, subtraction, scaling, normalization, distance calculation, and more. This class is useful in scenarios involving 3D graphics, physics simulations, or any situation that requires vector calculations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [Constructor](#constructor)
    - [Methods](#methods)
        - [Getter Methods](#getter-methods)
        - [Setters and Updaters](#setters-and-updaters)
        - [Mathematical Operations](#mathematical-operations)
        - [Other Methods](#other-methods)
- [Examples](#examples)
- [API Documentation](#api-documentation)

---

## Installation

To install the `Vector3D` class, simply add the source code to your project or import it from an npm package if available.

```bash
# If you have npm support or plan to use bundlers
npm install vector3d

Or copy the class code directly into your project.
```

## Usage
### Constructor

#### You can create a new Vector3D instance by passing the x, y, and z coordinates to the constructor. All parameters are optional and default to 0.

```ts
import { Vector3D } from 'vector3d';

const v1 = new Vector3D(1, 2, 3);
const v2 = new Vector3D();
```