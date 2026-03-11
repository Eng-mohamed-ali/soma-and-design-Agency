import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] max-w-sm bg-white dark:bg-zinc-900 shadow-xl rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        We use cookies to ensure you get the best experience on our website.
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={accept}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Accept
        </button>

        <button
          onClick={() => setVisible(false)}
          className="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
        >
          Decline
        </button>
      </div>
    </div>
  );
}