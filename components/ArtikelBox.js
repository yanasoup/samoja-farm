import Image from "next/image";
export default function ArtikelBox(props) {
  return (
    <div className="box h-90 overflow-hidden rounded-t-2xl">
      <div className="relative h-72 w-full bg-neutral-200 ">
        <Image
          alt={props.title}
          src={props.img}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="post-date py-4 flex justify-between items-center">
        <p>{props.created_at}</p>
        <p>{props.created_by}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-xl">
          <a href="#">{props.title}</a>
        </h1>
      </div>
    </div>
  );
}
