import "react-slideshow-image/dist/styles.css";
import { Fade } from 'react-slideshow-image';


const Extra = () => {

    const text = [
      {
        caption:
          "Sales network of more than 200 distributors & superstockist nationwide.",
      },
      {
        caption: "Co-creating products for leading brands & chains worldwide",
      },
      {
        caption: "Over 10 years experience in manufacturing of Flies & Folders",
      },
      {
        caption: "Exporting to over 10 countries worldwide",
      },
    ];

  return (
    <>
      <div className="md:flex flex-row justify-between gap-5 bg-white border border-gray-200 rounded-lg shadow-[0_5px_15px_0px_rgba(0,0,0,0.35)] md:flex-row max-w-[900px] my-8 mx-3 md:mx-auto">
        {/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
        <div className="max-w-[450px] mt-16">
          <h1 className="text-3xl ml-12 mb-2 font-light">USP</h1>
          <Fade>
            {text.map((fadeImage, index) => (
              <div key={index} className="">
                <h2 className="p-4 text-2xl ml-8 font-extralight">
                  {fadeImage.caption}
                </h2>
              </div>
            ))}
          </Fade>
        </div>
        <div>
          <img
            className="object-cover md:max-w-[400px] max-w-full rounded-b-lg md:rounded-none md:rounded-r-lg"
            src="./image2.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Extra;
