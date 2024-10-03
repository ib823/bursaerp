export const getPainPointStatus = (count) => {
  if (count === 0) {
    return { label: 'No Issue', color: 'green' };
  } else if (count === 1 || count === 2) {
    return { label: `Pain Point: ${count}`, color: 'amber' };
  } else {
    return { label: 'Pain Point: 3+', color: 'red' };
  }
};
