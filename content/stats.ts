export type Stat = {
  label: string;
  /** A number animates. A string is shown as written. Use 0 until you have a confirmed figure. */
  value: number | string;
};

// Youths reached and community events are 0 until a confirmed figure is added.
// Schools partnered starts at 2: Laventille Secondary and South East Port of Spain Secondary are the schools named so far.
// Followers is the public figure supplied for this site.
export const stats: Stat[] = [
  { label: "Youths reached", value: 0 },
  { label: "Schools partnered", value: 2 },
  { label: "Community events", value: 0 },
  { label: "Followers", value: "2.5K+" },
];
