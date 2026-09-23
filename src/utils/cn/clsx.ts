export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: unknown }
  | ClassValue[];

export function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    // 1. Игнорируем falsy значения (false, null, undefined, 0, "")
    if (!input) continue;

    // 2. Если это строка или число — просто добавляем
    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
    }
    // 3. Если это массив — рекурсивно обрабатываем каждый элемент
    else if (Array.isArray(input)) {
      const inner = clsx(...input);
      if (inner) classes.push(inner);
    }
    // 4. Если это объект — берем ключи, у которых значение истинно (true)
    else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          classes.push(key);
        }
      }
    }
  }

  // Объединяем все найденные классы через пробел
  return classes.join(" ");
}
