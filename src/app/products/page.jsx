import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  // console.log(data);
  return (
    <>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        {data.map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <main
                key={product.id}
                className="group overflow-hidden p-3 bg-white border hover:shadow-2xl hover:border hover:border-maincolor rounded-lg transition-all duration-300 ease-in-out"
              >
                <Image
                  className="group-hover:scale-[1.2] transition-all duration-300 w-full h-[150px] mx-auto block object-contain"
                  src={product.image}
                  alt={product.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-sm text-maincolor mt-3 block">
                      {product.category}
                    </span>
                    <h3 className="font-semibold line-clamp-1 w-5/6 bg-green-100">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between my-3 text-sm">
                  <span>{product.price} EGP</span>
                </div>

                <div className="line-clamp-1 w-5/6">{product.description}</div>
              </main>
            </Link>
          );
        })}
      </section>
    </>
  );
}
