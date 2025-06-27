import { useEffect, useReducer } from "react";

const formatter = new Intl.RelativeTimeFormat("de", {
  style: "long",
  numeric: "auto",
});

export function RelativeTime({ date }: { date: Date }) {
  const diff = Date.now() - new Date(date).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // trigger rerender
  const [, rerender] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const interval = setInterval(() => {
      rerender();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (days > 0) {
    return <span>{formatter.format(-days, "day")}</span>;
  } else if (hours > 0) {
    return <span>{formatter.format(-hours, "hour")}</span>;
  } else if (minutes > 0) {
    return <span>{formatter.format(-minutes, "minute")}</span>;
  } else {
    return <span>{formatter.format(-seconds, "second")}</span>;
  }
}
