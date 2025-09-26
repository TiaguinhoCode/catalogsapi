export function formatData<T, U>(
  items: T | T[], 
  fieldMap: Record<string, (value: any) => any>,
): U | U[] {
  if (Array.isArray(items)) {
    return items.map((item) => {
      const formattedItem: Partial<U> = {};
      for (const [key, transform] of Object.entries(fieldMap)) {
        const keys = key.split('.');
        let value = item;
        for (const k of keys) {
          value = value ? value[k] : undefined;
        }
        formattedItem[key] = transform(value);
      }
      return formattedItem as U;
    });
  }

  const formattedItem: Partial<U> = {};
  for (const [key, transform] of Object.entries(fieldMap)) {
    const keys = key.split('.');
    let value = items;
    for (const k of keys) {
      value = value ? value[k] : undefined;
    }
    formattedItem[key] = transform(value);
  }
  return formattedItem as U;
}
