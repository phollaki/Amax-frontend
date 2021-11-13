function Card({ title, price, mangaName, unit, img, description }) {
  const random = Math.floor(Math.random() * 6);
  return (
    <div className=" border-2 border-gray-100 shadow-sm rounded w-full  mt-10 flex bg-gray-50">
      <div className="h-full w-[25rem]">
        <img src={img && img} alt="" />
      </div>
      <div className="ml-10">
        <h1 className="font-bold text-3xl">{title && title}</h1>
        <h1>{mangaName && mangaName}</h1>
        <p>{unit && unit}</p>
        <p>{description && description}</p>
      </div>
    </div>
  );
}

export default Card;
