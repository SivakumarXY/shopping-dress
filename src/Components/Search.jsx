import { useState } from "react";

function Getproduct() {
  const [valueChange, setValueChange] = useState("");

  const storeData = [
    {
      key: "1",
      title: "Black Dress",
      src: one,
      price: "Price: ₹1099",
    },
    {
      key: "2",
      title: "White Dress",
      src: second,
      price: "Price: ₹3099",
    },
    {
      key: "3",
      title: "White Dress",
      src: third,
      price: "Price: ₹2099",
    },

    {
      key: "4",
      title: "Black Dress",
      src: Four,
      price: "Price: ₹2099",
    },

    {
      key: "5",
      title: "White Dress",
      src: five,
      price: "Price: ₹2099",
    },

    {
      key: "6",
      title: "Black Dress",
      src: six,
      price: "Price: ₹2099",
    },
  ];

  const filteredData = storeData.filter((product) => {
    return product.title.toLowerCase().includes(valueChange.toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          value={valueChange}
          onChange={(evt) => {
            setValueChange(evt.target.value);
          }}
          className="border border-black border-solid mt-20 p-3 rounded-lg w-2/3"
          placeholder="Search Your Products"
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcom to My Fashion Forward</h1>
      </div>
      <div className="flex gap-10 justify-center flex-wrap m-14">
        {filteredData.map((product) => (
          <div>
            <div className="text-center">
              <h1 className="block text-lg font-semibold ml-5 mb-1">
                {product.title}
              </h1>
            </div>

            <img
              src={product.src}
              alt={product.title}
              className="w-80 h-64 object-cover rounded-lg "
            />
            <div className="text-center">
              <p className="block text-lg font-semibold ml-5">
                {product.price}
              </p>
              <button
                onClick={paymentButton}
                className="bg-black p-2 w-28 text-white font-semibold rounded-md inline-block ml-4"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getproduct;
