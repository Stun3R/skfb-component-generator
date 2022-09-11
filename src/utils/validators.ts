/**
 * Handles component's name validation
 * @param name - user input for component name
 * @returns Error message to display
 */
export const validateComponent = (name: string): string | null => {
  if (!name || name === "") {
    return "Component's name can not be empty";
  }
  if (!name.match(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/)) {
    return "Component's name must follow PascalCase convention";
  }
  return null;
};

/**
 * Handles HTML Element's validation
 * @param value - user input for HTML element
 * @returns Error message to display
 */
export const validateHtmlElement = (value: string): string | null => {
  if (!value || value === "") {
    return "HTML Element can not be empty";
  }
  return null;
};
