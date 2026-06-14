export function formatGreeting(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Hello, stranger!";
  }

  return `Hello, ${trimmed}!`;
}
