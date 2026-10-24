const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const name = months[(month ?? 0) - 1];
  if (!year || !name || !day) return value;
  return `${day} ${name} ${year}`;
}
