/// Enum of allergens
export enum Allergen {  Huevo = 1, Cacahuete = 2, Marisco = 4, Fresa = 8, 
  Tomate = 16, Chocolate = 32, Polen = 64, Gato = 128
}

/**
 * This function returns an array of allergens based on the punctuation passed as a parameter
 * @param punctuation 
 * @returns an array of allergens or undefined if the punctuation is not a positive integer
 */
export function getAllergens(punctuation: number): string[] | undefined {
  
  const allergens: string[] = [];
  /// Check if the number is an integer and is positive
  if (!Number.isInteger(punctuation) || punctuation < 0) {
    return undefined;
  }

  /// We make a for...in loop to iterate over the enum
  for (const key in Allergen) {

    /// We pick the value of the key (the name of the variable)
    const value: any = Allergen[key];

    /// We check if the value is a number and if the value is in the punctuation
    if (typeof value === 'number' && (punctuation & value) === value) {
      allergens.push(key);
    }
  }

  return allergens;
}



