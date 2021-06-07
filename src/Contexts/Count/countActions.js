export function increment(count) {
  return {
    type: "increment",
    payload: count
  };
}

export function decrement(count) {
  return {
    type: "decrement",
    payload: count
  };
}
