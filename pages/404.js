import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';

// This page will load when an incorrect url is loaded
const Notfound = () => {
  // This will route to the homepage after some seconds
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [])

  return (
    <div className='notfound'>
      <h1>404</h1>
      <h2>Sorry, Page Not Found</h2>
      <p>Please return to the homepage</p>
    </div>
  );
}

export default Notfound;