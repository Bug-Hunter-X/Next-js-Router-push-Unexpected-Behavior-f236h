```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Incorrect usage of router.push, leading to unexpected behavior
    router.push('/my-page', '/my-page?param=value'); 
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}
export default MyComponent; 
```