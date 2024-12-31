export default function Header() {
  return (
    <>
      <header
        className={` shadow-sm py-4 px-3 bg-whiteColor`}
        data-aos="zoom-in"
      >
        <h1 className="max-xl:text-3xl  text-5xl font-semibold  text-gray-900 text-center ">
          👋 Hi <span className="text-maincolor my-animate ">Elevate Tech</span>{" "}
          This is a Task
          <span>,,</span>
        </h1>
      </header>
    </>
  );
}
