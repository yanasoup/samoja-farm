import Image from "next/image";
export default function ProdukBox(props) {
  const comingSoonLabel = props.isComingSoon ? (
    <span className="rounded-sm rotate-45 absolute -right-8 inline-block bg-red-500 text-white px-8 py-1">
      {props.comingSoonCaption}
    </span>
  ) : (
    ""
  );
  return (
    <div className="relative min-w-[160px] box rounded-2xl p-6 h-72 overflow-hidden bg-white">
      {comingSoonLabel}
      <div className="flex flex-col gap-2 items-center md:gap-0 md:flex-row mb-4">
        <div className="relative rounded-full overflow-hidden h-[96px] w-[96px] min-w-[96px]">
          <Image
            alt={props.title}
            src={props.img}
            fill={true}
            className="object-cover object-center"
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 96px, 96px"
          />
        </div>
        <div className="pl-2">
          <h1 className="text-2xl">
            <a className="no-underline" href={props.href}>
              {props.title}
            </a>
          </h1>
        </div>
      </div>
      <div>{props.description}</div>
    </div>
  );
}
