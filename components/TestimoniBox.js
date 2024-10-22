import Image from "next/image";
export default function TestimoniBox(props) {
  return (
    <div className="box rounded-2xl p-6 h-72 overflow-hidden bg-white">
      <div className="rating mb-4 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={
              index < props.rating ? "text-yellow-500" : "text-gray-300"
            }
          >
            ★
          </span>
        ))}
      </div>
      <div className="mb-4">{props.testimoni}</div>
      <div className="flex flex-row h-28">
        <div className="relative h-24 w-24 my-auto flex rounded-full overflow-hidden">
          <Image fill={true} alt="" src={props.img} />
        </div>
        <div className="my-auto pl-4">
          <h1 className="text-xl text-neutral-600">{props.nama}</h1>
          <p className="text-neutral-500">{props.jabatan}</p>
        </div>
      </div>
    </div>
  );
}
