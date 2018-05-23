let counter = 3;

export function addTrail(trail) {
  trail.id = ++counter;
  return {
    type: 'ADD_TRAIL',
    trail
  };
}
