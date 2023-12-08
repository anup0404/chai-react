import React, { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const val = await fetch("https://fakestoreapi.com/products");
      const result = await val.json();
      setData(result);
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <div className="">
      {data.map((data) => {
        return (
          <section
            key={data.id}
            className="h-screen bg-gray-100 flex   items-center justify-center"
          >
            <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
              <img className="w-full h-full object-cover" src={data.image} />

              <div className="p-5 flex-col gap-3">
                <span className="font-bold flex justify-between p-2">{data.title}</span>
                <span className="font-bold flex justify-between p-2">Quantity: {data.rating.count}</span>
              </div>
              <div className="font-bold flex justify-between p-2">
                <p> Price :${data.price}</p>
                <p> Rating: {data.rating.rate}</p>
              </div>
              <button className="bg-black text-white font-medium w-[100%] h-10 py-2 rounded-md">
                ADD TO CART
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Product;
