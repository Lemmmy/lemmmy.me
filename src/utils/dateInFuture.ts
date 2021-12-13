import { isFuture, isValid } from "date-fns";

export function dateInFuture(
  v?: Date | string
): boolean | undefined {
  if (v === undefined) return undefined;
  if (typeof v === "string") v = new Date(v);
  if (!isValid(v)) return undefined;
  return isFuture(v);
}
