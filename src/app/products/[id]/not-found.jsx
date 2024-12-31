import Image from "next/image";
import errorpage from "../../../../public/Images/error page.png";

export default function NotFoundPage() {
  return (
    <>
      <main>
        <Image src={errorpage} alt="Error Page" className="mx-auto my-7" />
      </main>
    </>
  );
}
