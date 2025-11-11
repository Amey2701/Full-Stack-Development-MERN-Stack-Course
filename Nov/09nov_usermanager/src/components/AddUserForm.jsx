// ------------------------------------------------------
// Form component to add new user using useId, useActionState, useOptimistic
// ------------------------------------------------------
import React, { useId, useActionState, useOptimistic } from "react";

// Simulated async API call (mimics POST request)
async function addUserAPI(user) {
  // Artificial delay to simulate network
  await new Promise((r) => setTimeout(r, 1000));
  // Return user with random ID
  return { ...user, id: Math.random() };
}

export default function AddUserForm({ onAdd }) {
  // useId ensures unique HTML element IDs for accessibility
  const nameId = useId();
  const emailId = useId();

  // useOptimistic: allows showing temporary UI updates before real API response
  // users: current optimistic state
  // addOptimisticUser: function to apply optimistic change
  const [users, addOptimisticUser] = useOptimistic([], (prev, newUser) => [
    ...prev,
    newUser,
  ]);

  // useActionState: manages async form submission and state
  // state: current form result
  // formAction: function to link to <form action>
  // isPending: shows if form is currently submitting
  const [state, formAction, isPending] = useActionState(
    // Async function triggered when form submits
    async (prev, formData) => {
      // Create new user object from form data
      const newUser = {
        name: formData.get("name"),
        email: formData.get("email"),
      };

      // Immediately add to UI (optimistic update)
      addOptimisticUser(newUser);

      // Wait for simulated API to complete
      const saved = await addUserAPI(newUser);

      // Send real data to parent component to update reducer state
      onAdd(saved);

      // Return final result for formAction
      return saved;
    },
    null // Initial state
  );

  // ------------------------------------------------------
  // Render form UI
  // ------------------------------------------------------
  return (
    <form action={formAction} style={{ marginBottom: "1rem" }}>
      {/* Name input */}
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} name="name" type="text" required />

      {/* Email input */}
      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} name="email" type="email" required />

      {/* Submit button, disabled while pending */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add User"}
      </button>
    </form>
  );
}
