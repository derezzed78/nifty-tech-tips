import Link from "next/link";
const Other = () => {
  return (
    <>
      <h1>Other Page</h1>
      <nav>
        <Link href="/">
          <a>Navigate</a>
        </Link>
      </nav>
    </>
  );
};

export default Other;
