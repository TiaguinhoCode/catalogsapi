export function formatData<T, U>(
  items: T | T[],
  fieldMap: Record<string, (value: any, item: T) => any>,
): U | U[] {
  if (Array.isArray(items)) {
    return items.map((item) => {
      const formattedItem: Partial<U> = {};
      for (const [key, transform] of Object.entries(fieldMap)) {
        const originalValue = (item as any)[key];
        formattedItem[key] = transform(originalValue, item);
      }
      return formattedItem as U;
    });
  } else {
    const formattedItem: Partial<U> = {};
    for (const [key, transform] of Object.entries(fieldMap)) {
      const originalValue = (items as any)[key];
      formattedItem[key] = transform(originalValue, items as T);
    }
    return formattedItem as U;
  }
}
