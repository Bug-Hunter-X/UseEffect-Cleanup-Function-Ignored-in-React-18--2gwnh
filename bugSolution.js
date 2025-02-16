```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanup = () => {
      console.log('Component unmounting...');
    };
    return cleanup; // Correctly return the cleanup function
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```