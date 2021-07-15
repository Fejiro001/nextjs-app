// Don't need to install additional libraries like React.js
import Link from "next/link"

const Header = () => {
  return (
    <nav>
      <h1>PICTURES</h1>
      
      {/**Wrap a tags in Link tags */}
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/pics/pic1"><a>Images</a></Link>
    </nav>
  );
}

export default Header;