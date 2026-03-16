/**
 * A class representing a 3D vector.
 * @version 1.0.0
 * @author lZiMUl <lZiMUl@lzimul.com>
 * @description This class provides methods to manipulate 3D vectors such as addition, subtraction, scaling, and normalization.
 * @public
 */
class Vector3D {
  protected SourceX: number;
  protected SourceY: number;
  protected SourceZ: number;

  /**
   * Creates an instance of Vector3D.
   * @param x - The x component of the vector. Default is 0.
   * @param y - The y component of the vector. Default is 0.
   * @param z - The z component of the vector. Default is 0.
   * @returns A new Vector3D instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Constructor to initialize a vector with optional x, y, and z components.
   * @public
   */
  public constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.SourceX = x;
    this.SourceY = y;
    this.SourceZ = z;
  }

  /**
   * Checks if the vector is a zero vector (i.e., (0, 0, 0)).
   * @returns `true` if the vector is zero, otherwise `false`.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Determines if the vector is the zero vector, meaning all its components are zero.
   * @public
   */
  public get isZero(): boolean {
    return this.SourceX === 0 && this.SourceY === 0 && this.SourceZ === 0;
  }

  /**
   * Sets new values for the vector components.
   * @param x - The new x component of the vector.
   * @param y - The new y component of the vector.
   * @param z - The new z component of the vector.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Updates the vector components with new values for x, y, and z.
   * @public
   */
  public set(x: number = 0, y: number = 0, z: number = 0): this {
    this.SourceX = x;
    this.SourceY = y;
    this.SourceZ = z;
    return this;
  }

  /**
   * Updates the vector with the values of another vector.
   * @param target - The target vector to copy values from.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Copies the values from another `Vector3D` instance and updates the current vector.
   * @public
   */
  public update(target: Vector3D): this {
    this.SourceX = target.SourceX;
    this.SourceY = target.SourceY;
    this.SourceZ = target.SourceZ;
    return this;
  }

  /**
   * Adds a vector to the current vector (component-wise).
   * @param target - The vector to add.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Adds the components of another vector to the current vector.
   * @public
   */
  public add(target: Vector3D): this {
    this.SourceX += target.SourceX;
    this.SourceY += target.SourceY;
    this.SourceZ += target.SourceZ;
    return this;
  }

  /**
   * Subtracts another vector from the current vector (component-wise).
   * @param target - The vector to subtract.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Subtracts the components of another vector from the current vector.
   * @public
   */
  public subtract(target: Vector3D): this {
    this.SourceX -= target.SourceX;
    this.SourceY -= target.SourceY;
    this.SourceZ -= target.SourceZ;
    return this;
  }

  /**
   * Multiplies the current vector with another vector component-wise.
   * @param target - The vector to multiply.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Multiplies the current vector's components with those of another vector.
   * @public
   */
  public multiply(target: Vector3D): this {
    this.SourceX *= target.SourceX;
    this.SourceY *= target.SourceY;
    this.SourceZ *= target.SourceZ;
    return this;
  }

  /**
   * Divides the current vector by another vector component-wise.
   * @param target - The vector to divide by.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Divides the current vector's components by those of another vector.
   * @public
   */
  public divide(target: Vector3D): this {
    this.SourceX /= target.SourceX;
    this.SourceY /= target.SourceY;
    this.SourceZ /= target.SourceZ;
    return this;
  }

  /**
   * Returns a new vector that is the sum of the current vector and the target vector.
   * @param target - The vector to add.
   * @returns A new vector representing the sum.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector representing the sum of the current vector and the target vector.
   * @public
   */
  public plus(target: Vector3D): Vector3D {
    return new Vector3D(
      this.SourceX + target.SourceX,
      this.SourceY + target.SourceY,
      this.SourceZ + target.SourceZ
    );
  }

  /**
   * Returns a new vector that is the difference between the current vector and the target vector.
   * @param target - The vector to subtract.
   * @returns A new vector representing the difference.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector representing the difference between the current vector and the target vector.
   * @public
   */
  public minus(target: Vector3D): Vector3D {
    return new Vector3D(
      this.SourceX - target.SourceX,
      this.SourceY - target.SourceY,
      this.SourceZ - target.SourceZ
    );
  }

  /**
   * Offsets the current vector by given x, y, and z values, and returns a new vector.
   * @param x - The amount to offset in the x direction.
   * @param y - The amount to offset in the y direction.
   * @param z - The amount to offset in the z direction.
   * @returns A new vector with the offset values.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Offsets the current vector's components and returns a new vector.
   * @public
   */
  public offset(x: number = 0, y: number = 0, z: number = 0): Vector3D {
    return new Vector3D(this.SourceX + x, this.SourceY + y, this.SourceZ + z);
  }

  /**
   * Returns the component-wise minimum of the current vector and the target vector.
   * @param target - The vector to compare.
   * @returns A new vector with the minimum values.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector where each component is the minimum of the current and target vectors' corresponding components.
   * @public
   */
  public min(target: Vector3D): Vector3D {
    return new Vector3D(
      Math.min(this.SourceX, target.SourceX),
      Math.min(this.SourceY, target.SourceY),
      Math.min(this.SourceZ, target.SourceZ)
    );
  }

  /**
   * Returns the component-wise maximum of the current vector and the target vector.
   * @param target - The vector to compare.
   * @returns A new vector with the maximum values.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector where each component is the maximum of the current and target vectors' corresponding components.
   * @public
   */
  public max(target: Vector3D): Vector3D {
    return new Vector3D(
      Math.max(this.SourceX, target.SourceX),
      Math.max(this.SourceY, target.SourceY),
      Math.max(this.SourceZ, target.SourceZ)
    );
  }

  /**
   * Returns a new vector with the absolute values of the current vector's components.
   * @returns A new vector with absolute values.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector with the absolute values of the current vector's components.
   * @public
   */
  public get abs(): Vector3D {
    return new Vector3D(
      Math.abs(this.SourceX),
      Math.abs(this.SourceY),
      Math.abs(this.SourceZ)
    );
  }

  /**
   * Computes the volume of the vector (product of the components).
   * @returns The volume of the vector.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Computes the volume as the product of the vector's components.
   * @public
   */
  public get volume(): number {
    return this.SourceX * this.SourceY * this.SourceZ;
  }

  /**
   * Normalizes the vector (makes its length equal to 1).
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Normalizes the vector so its length (magnitude) is 1.
   * @public
   */
  public normalize(): this {
    const norm: number = Math.sqrt(
      this.SourceX ** 2 + this.SourceY ** 2 + this.SourceZ ** 2
    );
    if (norm !== 0) {
      this.SourceX /= norm;
      this.SourceY /= norm;
      this.SourceZ /= norm;
    }
    return this;
  }

  /**
   * Computes the distance from the current vector to another vector.
   * @param target - The target vector.
   * @returns The distance between the two vectors.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Calculates the Euclidean distance between the current vector and another vector.
   * @public
   */
  public distanceTo(target: Vector3D): number {
    return Math.sqrt(this.distanceSquared(target));
  }

  /**
   * Computes the squared distance from the current vector to another vector.
   * @param target - The target vector.
   * @returns The squared distance between the two vectors.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Computes the squared Euclidean distance to avoid the square root calculation.
   * @public
   */
  public distanceSquared(target: Vector3D): number {
    const dx: number = target.SourceX - this.SourceX;
    const dy: number = target.SourceY - this.SourceY;
    const dz: number = target.SourceZ - this.SourceZ;
    return dx ** 2 + dy ** 2 + dz ** 2;
  }

  /**
   * Scales the vector by a scalar.
   * @param scalar - The scalar to scale the vector by.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Scales the vector by a scalar, modifying its components proportionally.
   * @public
   */
  public scale(scalar: number): this {
    this.SourceX *= scalar;
    this.SourceY *= scalar;
    this.SourceZ *= scalar;
    return this;
  }

  /**
   * Floors the components of the vector.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Floors each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public floor(): this {
    this.SourceX = Math.floor(this.SourceX);
    this.SourceY = Math.floor(this.SourceY);
    this.SourceZ = Math.floor(this.SourceZ);
    return this;
  }

  /**
   * Clones the vector, returning a new instance.
   * @returns A new vector that is a copy of the current vector.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Creates and returns a new instance of the vector, leaving the original intact.
   * @public
   */
  public clone(): Vector3D {
    return new Vector3D(this.SourceX, this.SourceY, this.SourceZ);
  }

  /**
   * Converts the vector to an array form.
   * @returns An array representing the vector's components.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Converts the vector into an array `[x, y, z]`.
   * @public
   */
  public toArray(): number[] {
    return [this.SourceX, this.SourceY, this.SourceZ];
  }

  /**
   * Converts the vector to a string representation.
   * @returns A string representing the vector in the form (x, y, z).
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Converts the vector to a string formatted as "(x, y, z)".
   * @public
   */
  public toString(): string {
    return `(${this.SourceX}, ${this.SourceY}, ${this.SourceZ})`;
  }

  // Getters for x, y, and z components
  public get x(): number {
    return this.SourceX;
  }
  public get y(): number {
    return this.SourceY;
  }
  public get z(): number {
    return this.SourceZ;
  }
}

export { Vector3D };
export default Vector3D;
