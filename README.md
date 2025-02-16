# React 18+ useEffect Cleanup Issue

This repository demonstrates a common error encountered when upgrading to React 18 or higher: ignoring the return value of the cleanup function within the `useEffect` hook.  In previous React versions, the cleanup function's return value might have been implicitly ignored, but now React strictly enforces its execution.  Failure to properly return a cleanup function can lead to memory leaks or unexpected side effects, particularly if you're managing subscriptions, timers, or event listeners.

## Bug Description
The provided code snippet features a `useEffect` hook where the cleanup function's return value is effectively ignored. This is corrected in the solution to ensure proper cleanup.