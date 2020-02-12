/// <reference types="next" />
/// <reference types="next/types/global" />

interface RefObject<T> {
  readonly current: T | null
}