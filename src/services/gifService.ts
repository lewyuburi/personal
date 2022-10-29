export enum gifCategory {
  PROGRAMMING = "programming",
  ABSTRACT = "abstract",
}

export function getRandomGif(
  category: gifCategory = gifCategory.PROGRAMMING
): string {
  const available = {
    [gifCategory.PROGRAMMING]: [
      "ZVik7pBtu9dNS",
      "13HgwGsXF0aiGY",
      "13UZisxBxkjPwI",
      "xT9IgzoKnwFNmISR8I",
      "1C8bHHJturSx2",
      "zOvBKUUEERdNm",
      "3oKIPnAiaMCws8nOsE",
      "QNFhOolVeCzPQ2Mx85",
      "mYhd1NHQkHmZLiqN7M",
      "MFmM2tWXL192oVKxUT",
      "1SvtUkj2T6122rQ7oX",
      "QuIxFwQo0RMT1tASlV",
      "HCkbgKLdLWq3OCV8YM",
      "3o6fIWnqD7xsicBFiE",
      "bAplZhiLAsNnG",
      "cFdHXXm5GhJsc",
      "3o7TKp4rytnSZgGU8w",
      "llKJGxQ1ESmac",
      "l46C4JfWleIDjtDJm",
      "3o7qEcFE19nWq16Ze8",
      "ThrM4jEi2lBxd7X2yz",
      "mCRJDo24UvJMA",
      "VbnUQpnihPSIgIXuZv",
      "10FwycrnAkpshW",
    ],
    [gifCategory.ABSTRACT]: [
      "26xBzu2ogAunL19hS",
      "3oz8xF2tbONaIIy92M",
      "5wWf7GZPPlIvA2DyR6o",
      "3oriO773ExvGHlXtmw",
      "3og0IEmNX1j2AuplJK",
      "l2Sq1v7KTyF22A6c0",
      "3ohhwhHdgMUUGQ97he",
      "2SYpZ92iLQsF6QZl5u",
      "l4KihuqeuJEi9qLSM",
      "j0Oieu4Sa2YFfWIl5L",
      "xTiTnCjYUwkhP0PE0o",
      "3o72F0rjp7x6Kmktva",
      "3o7TKHFqNJfwpoP62A",
      "3xz2BLvZyo4ghBUIbS",
      "26xByDTkJoIc4eAtq",
    ],
  };

  var item =
    available[category][Math.floor(Math.random() * available[category].length)];

  return `https://media1.giphy.com/media/${item}/200.gif`;
}
