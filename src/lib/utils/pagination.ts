export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

export const DEFAULT_PAGE_SIZE = 12;

export function getPaginationRange(current: number, total: number, display: number = 5) {
  const half = Math.floor(display / 2);
  let start = current - half;
  let end = current + half;

  if (start < 1) {
    end += (1 - start);
    start = 1;
  }

  if (end > total) {
    start -= (end - total);
    end = total;
  }

  start = Math.max(start, 1);
  end = Math.min(end, total);

  return Array.from({length: end - start + 1}, (_, i) => start + i);
}