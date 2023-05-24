import Image from "next/image";
import { Inter } from "next/font/google";

import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../store/counterSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);

  // better approach for above statement acc to - sonny sangha
  const count = useSelector(selectValue);

  const dispatch = useDispatch();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>The value of count is {count}</h1>

      <button
        onClick={() => dispatch(increment())}
        className="w-full h-10 bg-green-400/50"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="w-full h-10 bg-red-400/50"
      >
        Decrement
      </button>
    </main>
  );
}
