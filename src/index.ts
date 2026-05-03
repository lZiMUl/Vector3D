/**
 * A class representing a 3D vector.
 * @author lZiMUl <lZiMUl@lzimul.com>
 * @description This class provides methods to manipulate 3D vectors such as addition, subtraction, scaling, and normalization.
 * @public
 */
class Vector3D {
  private sourceX: number;
  private sourceY: number;
  private sourceZ: number;

  /**
   * Creates an instance of Vector3D.
   * @param x - The x component of the vector. Default is 0.
   * @param y - The y component of the vector. Default is 0.
   * @param z - The z component of the vector. Default is 0.
   * @returns A new Vector3D instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Constructor to initialize a vector with optional x, y, and z components.
   * @public
   */
  public constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.sourceX = x;
    this.sourceY = y;
    this.sourceZ = z;
  }

  /**
   * Returns the length (magnitude) of the vector.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public get length(): number {
    return Math.sqrt(this.lengthSquared);
  }

  /**
   * Returns the squared length of the vector.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public get lengthSquared(): number {
    return this.sourceX ** 2 + this.sourceY ** 2 + this.sourceZ ** 2;
  }

  // Getters for x, y, and z components
  public get x(): number {
    return this.sourceX;
  }

  public get y(): number {
    return this.sourceY;
  }

  public get z(): number {
    return this.sourceZ;
  }

  /**
   * Creates a zero vector.
   * @returns A vector with all components equal to zero.
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
   * Checks if the vector is a zero vector (i.e., (0, 0, 0)).
   * @returns `true` if the vector is zero, otherwise `false`.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Determines if the vector is the zero vector, meaning all its components are zero.
   * @public
   */
  public isZero(): boolean {
    return this.sourceX === 0 && this.sourceY === 0 && this.sourceZ === 0;
  }

  /**
   * Floors the components of the vector.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Floors each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public floor(): this {
    this.sourceX = Math.floor(this.sourceX);
    this.sourceY = Math.floor(this.sourceY);
    this.sourceZ = Math.floor(this.sourceZ);
    return this;
  }

  /**
   * Ceil the components of the vector.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Ceil each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public ceil(): this {
    this.sourceX = Math.ceil(this.sourceX);
    this.sourceY = Math.ceil(this.sourceY);
    this.sourceZ = Math.ceil(this.sourceZ);
    return this;
  }

  /**
   * Rounds the components of the vector.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Rounds each component of the vector to the nearest integer less than or equal to the current value.
   * @public
   */
  public round(): this {
    this.sourceX = Math.round(this.sourceX);
    this.sourceY = Math.round(this.sourceY);
    this.sourceZ = Math.round(this.sourceZ);
    return this;
  }

  /**
   * Clones the vector, returning a new instance.
   * @returns A new vector that is a copy of the current vector.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Creates and returns a new instance of the vector, leaving the original intact.
   * @public
   */
  public clone(): Vector3D {
    return new Vector3D(this.sourceX, this.sourceY, this.sourceZ);
  }

  /**
   * Returns a new vector with the absolute values of the current vector's components.
   * @returns A new vector with absolute values.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector with the absolute values of the current vector's components.
   * @public
   */
  public abs(): Vector3D {
    return new Vector3D(
      Math.abs(this.sourceX),
      Math.abs(this.sourceY),
      Math.abs(this.sourceZ)
    );
  }

  /**
   * Computes the volume of the vector (product of the components).
   * @returns The volume of the vector.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Computes the volume as the product of the vector's components.
   * @public
   */
  public volume(): number {
    return this.sourceX * this.sourceY * this.sourceZ;
  }

  /**
   * Compares this vector with another vector.
   * @param target - The vector to compare.
   * @returns `true` if both vectors have identical components.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public equals(target: Vector3D): boolean {
    return (
      this.sourceX === target.x &&
      this.sourceY === target.y &&
      this.sourceZ === target.z
    );
  }

  /**
   * Sets new values for the vector components.
   * @param x - The new x component of the vector.
   * @param y - The new y component of the vector.
   * @param z - The new z component of the vector.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Updates the vector components with new values for x, y, and z.
   * @public
   */
  public set(x: number = 0, y: number = 0, z: number = 0): this {
    this.sourceX = x;
    this.sourceY = y;
    this.sourceZ = z;
    return this;
  }

  /**
   * Sets all vector components to the same scalar value.
   * @param scalar - Value applied to x, y, z.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public setScalar(scalar: number): this {
    this.sourceX = scalar;
    this.sourceY = scalar;
    this.sourceZ = scalar;
    return this;
  }

  /**
   * Updates the vector with the values of another vector.
   * @param target - The target vector to copy values from.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Copies the values from another `Vector3D` instance and updates the current vector.
   * @public
   */
  public update(target: Vector3D): this {
    this.sourceX = target.x;
    this.sourceY = target.y;
    this.sourceZ = target.z;
    return this;
  }

  /**
   * Adds a vector to the current vector (component-wise).
   * @param target - The vector to add.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Adds the components of another vector to the current vector.
   * @public
   */
  public add(target: Vector3D): this {
    this.sourceX += target.x;
    this.sourceY += target.y;
    this.sourceZ += target.z;
    return this;
  }

  /**
   * Subtracts another vector from the current vector (component-wise).
   * @param target - The vector to subtract.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Subtracts the components of another vector from the current vector.
   * @public
   */
  public subtract(target: Vector3D): this {
    this.sourceX -= target.x;
    this.sourceY -= target.y;
    this.sourceZ -= target.z;
    return this;
  }

  /**
   * Multiplies the current vector with another vector component-wise.
   * @param target - The vector to multiply.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Multiplies the current vector's components with those of another vector.
   * @public
   */
  public multiply(target: Vector3D): this {
    this.sourceX *= target.x;
    this.sourceY *= target.y;
    this.sourceZ *= target.z;
    return this;
  }

  /**
   * Divides the current vector by another vector component-wise.
   * @param target - The vector to divide by.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Divides the current vector's components by those of another vector.
   * @public
   */
  public divide(target: Vector3D): this {
    this.sourceX = target.x !== 0 ? this.sourceX / target.x : 0;
    this.sourceY = target.y !== 0 ? this.sourceY / target.y : 0;
    this.sourceZ = target.z !== 0 ? this.sourceZ / target.z : 0;
    return this;
  }

  /**
   * Scales the vector by a scalar.
   * @param scalar - The scalar to scale the vector by.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Scales the vector by a scalar, modifying its components proportionally.
   * @public
   */
  public scale(scalar: number): this {
    this.sourceX *= scalar;
    this.sourceY *= scalar;
    this.sourceZ *= scalar;
    return this;
  }

  /**
   * Negates the vector.
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public negate(): this {
    this.sourceX = -this.sourceX;
    this.sourceY = -this.sourceY;
    this.sourceZ = -this.sourceZ;
    return this;
  }

  /**
   * Returns a new vector that is the sum of the current vector and the target vector.
   * @param target - The vector to add.
   * @returns A new vector representing the sum.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector representing the sum of the current vector and the target vector.
   * @public
   */
  public plus(target: Vector3D): Vector3D {
    return new Vector3D(
      this.sourceX + target.x,
      this.sourceY + target.y,
      this.sourceZ + target.z
    );
  }

  /**
   * Returns a new vector that is the difference between the current vector and the target vector.
   * @param target - The vector to subtract.
   * @returns A new vector representing the difference.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector representing the difference between the current vector and the target vector.
   * @public
   */
  public minus(target: Vector3D): Vector3D {
    return new Vector3D(
      this.sourceX - target.x,
      this.sourceY - target.y,
      this.sourceZ - target.z
    );
  }

  /**
   * Offsets the current vector by given x, y, and z values, and returns a new vector.
   * @param x - The amount to offset in the x direction.
   * @param y - The amount to offset in the y direction.
   * @param z - The amount to offset in the z direction.
   * @returns A new vector with the offset values.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Offsets the current vector's components and returns a new vector.
   * @public
   */
  public offset(x: number = 0, y: number = 0, z: number = 0): Vector3D {
    return new Vector3D(this.sourceX + x, this.sourceY + y, this.sourceZ + z);
  }

  /**
   * Returns the component-wise minimum of the current vector and the target vector.
   * @param target - The vector to compare.
   * @returns A new vector with the minimum values.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector where each component is the minimum of the current and target vectors' corresponding components.
   * @public
   */
  public min(target: Vector3D): Vector3D {
    return new Vector3D(
      Math.min(this.sourceX, target.x),
      Math.min(this.sourceY, target.y),
      Math.min(this.sourceZ, target.z)
    );
  }

  /**
   * Returns the component-wise maximum of the current vector and the target vector.
   * @param target - The vector to compare.
   * @returns A new vector with the maximum values.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Returns a new vector where each component is the maximum of the current and target vectors' corresponding components.
   * @public
   */
  public max(target: Vector3D): Vector3D {
    return new Vector3D(
      Math.max(this.sourceX, target.x),
      Math.max(this.sourceY, target.y),
      Math.max(this.sourceZ, target.z)
    );
  }

  public clamp(min: Vector3D, max: Vector3D): this {
    this.sourceX = Math.max(min.x, Math.min(max.x, this.sourceX));
    this.sourceY = Math.max(min.y, Math.min(max.y, this.sourceY));
    this.sourceZ = Math.max(min.z, Math.min(max.z, this.sourceZ));
    return this;
  }

  /**
   * Normalizes the vector (makes its length equal to 1).
   * @returns The updated vector instance.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Normalizes the vector so its length (magnitude) is 1.
   * @public
   */
  public normalize(): this {
    const norm: number = Math.sqrt(
      this.sourceX ** 2 + this.sourceY ** 2 + this.sourceZ ** 2
    );
    if (norm < 1e-8) return this.set(0, 0, 0);
    this.sourceX /= norm;
    this.sourceY /= norm;
    this.sourceZ /= norm;
    return this;
  }

  /**
   * Computes the distance from the current vector to another vector.
   * @param target - The target vector.
   * @returns The distance between the two vectors.
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
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Computes the squared Euclidean distance to avoid the square root calculation.
   * @public
   */
  public distanceSquared(target: Vector3D): number {
    const dx: number = target.x - this.sourceX;
    const dy: number = target.y - this.sourceY;
    const dz: number = target.z - this.sourceZ;
    return dx ** 2 + dy ** 2 + dz ** 2;
  }

  /**
   * Computes the dot product between this vector and another vector.
   * @param target - The vector to compute the dot product with.
   * @returns The scalar dot product result.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Calculates the dot product of two vectors using the formula:
   * @public
   */
  public dot(target: Vector3D): number {
    return (
      this.sourceX * target.x +
      this.sourceY * target.y +
      this.sourceZ * target.z
    );
  }

  /**
   * Computes the cross product between this vector and another vector.
   *
   * @param target - The vector to compute the cross product with.
   * @returns A new vector that is perpendicular to both vectors.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Calculates the cross product of two 3D vectors using the formula:
   * @public
   */
  public cross(target: Vector3D): Vector3D {
    return new Vector3D(
      this.sourceY * target.z - this.sourceZ * target.y,
      this.sourceZ * target.x - this.sourceX * target.z,
      this.sourceX * target.y - this.sourceY * target.x
    );
  }

  /**
   * Calculates the angle between two vectors in radians.
   * @param target - The target vector.
   * @returns Angle in radians.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public angleTo(target: Vector3D): number {
    const denom: number = this.length * target.length;
    if (denom === 0) return 0;
    const cos: number = this.dot(target) / denom;
    return Math.acos(Math.min(1, Math.max(-1, cos)));
  }

  /**
   * Linearly interpolates the vector towards another vector.
   * @param target - Target vector.
   * @param t - Interpolation factor (0–1).
   * @returns Updated vector.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @public
   */
  public lerp(target: Vector3D, t: number): this {
    this.sourceX += (target.x - this.sourceX) * t;
    this.sourceY += (target.y - this.sourceY) * t;
    this.sourceZ += (target.z - this.sourceZ) * t;
    return this;
  }

  /**
   * Converts the vector to an array form.
   * @returns An array representing the vector's components.
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Converts the vector into an array `[x, y, z]`.
   * @public
   */
  public toArray(): readonly [number, number, number] {
    return [this.sourceX, this.sourceY, this.sourceZ];
  }

  /**
   * Converts the vector to a string representation.
   * @returns A string representing the vector in the form (x, y, z).
   * @author lZiMUl <lZiMUl@lzimul.com>
   * @description Converts the vector to a string formatted as "(x, y, z)".
   * @public
   */
  public toString(): string {
    return `(${this.sourceX}, ${this.sourceY}, ${this.sourceZ})`;
  }
}

export { Vector3D };
export default Vector3D;
