// ------------------------------------------------------
// Component using useSyncExternalStore to track online/offline status
// ------------------------------------------------------
import React, { useSyncExternalStore } from "react";

// Function that subscribes to external store (window events)
function subscribe(callback) {
  // Listen to browser's online/offline events
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  // Return unsubscribe function (cleanup)
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function StatusBar() {
  // useSyncExternalStore subscribes to browser's online status
  // It re-renders component whenever the status changes
  const isOnline = useSyncExternalStore(
    subscribe, // how to subscribe to changes
    () => navigator.onLine, // snapshot function (current status)
    () => true // fallback (for SSR)
  );

  // Conditional styling for online/offline state
  return (
    <p style={{ color: isOnline ? "green" : "red" }}>
      {isOnline ? "🟢 Online" : "🔴 Offline"}
    </p>
  );
}
