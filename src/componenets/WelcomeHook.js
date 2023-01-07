import { useState } from "react";

function WelcomeHooks() {
    let [count, counterState] = useState(0);
    return (
        <div>
            <p> you clicked {count} times</p>

            <button onClick={() => counterState(count++)}> increase me </button>
        </div>

    )
}

export default WelcomeHooks;