/**
 * A class representing a 3D vector.
 * @version 1.0.0
 * @author lZiMUl <lZiMUl@lzimul.com>
 * @description This class provides methods to manipulate 3D vectors such as addition, subtraction, scaling, and normalization.
 * @public
 */
class Vector3D {
  private SourceX: number;
  private SourceY: number;
  private SourceZ: number;

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
  public isZero(): boolean {
    return this.SourceX === 0 && this.SourceY === 0 && this.SourceZ === 0;
  }

  /**
   * Returns the length (magnitude) of the vector.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public get length(): number {
    return Math.sqrt(this.lengthSquared);
  }

  /**
   * Returns the squared length of the vector.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public get lengthSquared(): number {
    return this.SourceX ** 2 + this.SourceY ** 2 + this.SourceZ ** 2;
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
   * Ceil the components of the vector.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Ceil each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public ceil(): this {
    this.SourceX = Math.ceil(this.SourceX);
    this.SourceY = Math.ceil(this.SourceY);
    this.SourceZ = Math.ceil(this.SourceZ);
    return this;
  }

  /**
   * Rounds the components of the vector.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Rounds each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public round(): this {
    this.SourceX = Math.round(this.SourceX);
    this.SourceY = Math.round(this.SourceY);
    this.SourceZ = Math.round(this.SourceZ);
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
   * Returns a new vector with the absolute values of the current vector's components.
   * @returns A new vector with absolute values.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector with the absolute values of the current vector's components.
   * @public
   */
  public abs(): Vector3D {
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
  public volume(): number {
    return this.SourceX * this.SourceY * this.SourceZ;
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

  /**
   * Creates a zero vector.
   * @returns A vector with all components equal to zero.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   * @static
   */
  public static zero(): Vector3D {
    return new Vector3D(0, 0, 0);
  }

  /**
   * Creates a vector from an array.
   * @param target - Array containing `[x, y, z]`.
   * @returns A new vector created from the array.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   * @static
   */
  public static fromArray(target: number[]): Vector3D {
    return new Vector3D(
      target.at(0) ?? 0,
      target.at(1) ?? 0,
      target.at(2) ?? 0
    );
  }

  /**
   * Compares this vector with another vector.
   * @param target - The vector to compare.
   * @returns `true` if both vectors have identical components.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public equals(target: Vector3D): boolean {
    return (
      this.SourceX === target.x &&
      this.SourceY === target.y &&
      this.SourceZ === target.z
    );
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
   * Sets all vector components to the same scalar value.
   * @param scalar - Value applied to x, y, z.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public setScalar(scalar: number): this {
    this.SourceX = scalar;
    this.SourceY = scalar;
    this.SourceZ = scalar;
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
    this.SourceX = target.x;
    this.SourceY = target.y;
    this.SourceZ = target.z;
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
    this.SourceX += target.x;
    this.SourceY += target.y;
    this.SourceZ += target.z;
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
    this.SourceX -= target.x;
    this.SourceY -= target.y;
    this.SourceZ -= target.z;
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
    this.SourceX *= target.x;
    this.SourceY *= target.y;
    this.SourceZ *= target.z;
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
    this.SourceX /= target.x;
    this.SourceY /= target.y;
    this.SourceZ /= target.z;
    return this;
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
   * Negates the vector.
   * @returns The updated vector instance.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public negate(): this {
    this.SourceX = -this.SourceX;
    this.SourceY = -this.SourceY;
    this.SourceZ = -this.SourceZ;
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
      this.SourceX + target.x,
      this.SourceY + target.y,
      this.SourceZ + target.z
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
      this.SourceX - target.x,
      this.SourceY - target.y,
      this.SourceZ - target.z
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
      Math.min(this.SourceX, target.x),
      Math.min(this.SourceY, target.y),
      Math.min(this.SourceZ, target.z)
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
      Math.max(this.SourceX, target.x),
      Math.max(this.SourceY, target.y),
      Math.max(this.SourceZ, target.z)
    );
  }

  public clamp(min: Vector3D, max: Vector3D): this {
    this.SourceX = Math.max(min.x, Math.min(max.x, this.SourceX));
    this.SourceY = Math.max(min.y, Math.min(max.y, this.SourceY));
    this.SourceZ = Math.max(min.z, Math.min(max.z, this.SourceZ));
    return this;
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
    const dx: number = target.x - this.SourceX;
    const dy: number = target.y - this.SourceY;
    const dz: number = target.z - this.SourceZ;
    return dx ** 2 + dy ** 2 + dz ** 2;
  }

  /**
   * Computes the dot product between this vector and another vector.
   * @param target - The vector to compute the dot product with.
   * @returns The scalar dot product result.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Calculates the dot product of two vectors using the formula:
   * @public
   */
  public dot(target: Vector3D): number {
    return (
      this.SourceX * target.x +
      this.SourceY * target.y +
      this.SourceZ * target.z
    );
  }

  /**
   * Computes the cross product between this vector and another vector.
   *
   * @param target - The vector to compute the cross product with.
   * @returns A new vector that is perpendicular to both vectors.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Calculates the cross product of two 3D vectors using the formula:
   * @public
   */
  public cross(target: Vector3D): Vector3D {
    return new Vector3D(
      this.SourceY * target.z - this.SourceZ * target.y,
      this.SourceZ * target.x - this.SourceX * target.z,
      this.SourceX * target.y - this.SourceY * target.x
    );
  }

  /**
   * Calculates the angle between two vectors in radians.
   * @param target - The target vector.
   * @returns Angle in radians.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public angleTo(target: Vector3D): number {
    const denom: number = this.length * target.length;
    if (denom === 0) return 0;
    return Math.acos(this.dot(target) / denom);
  }

  /**
   * Linearly interpolates the vector towards another vector.
   * @param target - Target vector.
   * @param t - Interpolation factor (0–1).
   * @returns Updated vector.
   * @version 1.0.0
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public lerp(target: Vector3D, t: number): this {
    this.SourceX += (target.x - this.SourceX) * t;
    this.SourceY += (target.y - this.SourceY) * t;
    this.SourceZ += (target.z - this.SourceZ) * t;
    return this;
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
}

export { Vector3D };
export default Vector3D;
