import React from "react";
import { useState } from "react";

export default function App() {
  console.log("App 컴포넌트 렌더링 발생");

  // number
  const [num, setNum] = useState(0);
  // string
  const [name, setName] = useState("");
  //boolean
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <input type="checkbox" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
      </div>
    </div>
  );
}
