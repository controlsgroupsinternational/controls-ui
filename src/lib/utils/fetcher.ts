export async function fetcher<Entity = any>(input: RequestInfo, init?: RequestInit): Promise<Entity> {
  const res = await fetch(input, init);
  if (!res.ok) throw new Error(res.statusText);
  return res.json() as Promise<Entity>;
}