import {useEffect, useRef, useState} from "react";
import cn from "classnames";

export default function PasswordPage({ authenticate }) {
  let [submitted, setSubmitted] = useState(false);
  let [passwordIsCorrect, setPasswordIsCorrect] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  
  const animationEnded = () => {
    if (passwordIsCorrect) authenticate(true);
  }
  useEffect(() => {
    if (!containerRef || !containerRef.current) {
      return
    }
    const current = containerRef.current
    current.addEventListener('animationend', animationEnded)
    return () => {
      current.removeEventListener('animationend', animationEnded)
    }
  })
  const onChanges = () => {
    setPasswordIsCorrect(false)
    setSubmitted(false)
  }
  const onSubmit = event => {
    setSubmitted(true)
    if (inputRef.current.value === 'gallery') {
      setPasswordIsCorrect(true)
    }
    event.preventDefault();
  }
  return (
    <div ref={containerRef} className={cn(
      "flex flex-col items-center justify-center flex-grow h-full w-full border-t border-solid border-gray-200" +
      " bg-gray-100", {
        "animate__animated animate__fadeOut": passwordIsCorrect
      }
    )}>
      <div className={cn(
        "flex flex-col items-center justify-center",
        {
        'animate__animated animate__fadeOutUp': passwordIsCorrect
      })}>
        <h1 className="text-6xl font-bold font-display">Viewing Room</h1>
        <h2 className="text-lg font-body mt-3.5">Please enter password to access.</h2>
        <form onSubmit={onSubmit}>
          <div className={cn(
            "mt-6",
            {
              'animate__animated animate__headShake border border-red-600': submitted && !passwordIsCorrect
            })}>
            <input disabled={passwordIsCorrect} type="password" onChange={onChanges} ref={inputRef} className={cn(
              "border border-solid border-gray-500 w-72 h-16 bg-transparent px-4 text-2xl",
              {
                'border border-red-600': submitted && !passwordIsCorrect
              }
            )} />
            { !passwordIsCorrect && submitted ? <div className="bg-red-600 text-center py-1 text-white">Please try again.</div> : null }
          </div>
          <button type="submit" className="border border-solid border-gray-500 w-72 h-16 mt-3 flex items-center justify-center text-lg font-body">Enter</button>
        </form>
      </div>
    </div>
  );
}
