import { useMemo, useState } from "react";
import { formatGreeting } from "../utils/greeting";

export default function GreetingCard() {
  const [name, setName] = useState("stack-pr");

  const message = useMemo(() => formatGreeting(name), [name]);

  return (
    <section>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <p>{message}</p>
      123
    </section>
  );
}
