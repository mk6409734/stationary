const Info = () => {
    return (
      <div className="md:flex flex-row mx-3 justify-between md:w-[900px] rounded-lg md:mx-auto my-16 gap-5 shadow-[0_5px_15px_0px_rgba(0,0,0,0.35)]">
        <div>
          <img
            className=" max-w-full md:max-w-[500px] rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            src="./image1.jpg"
            alt="table"
          />
        </div>
        <div>
          <h1 className="p-4 text-3xl font- uppercase tracking-wide font-light">
            Introduction
          </h1>
          <p className="p-4 font-light">
            Saya Stationeries Pvt. Ltd. belonging to a 30-years old business
            group from India, boasts an extensive range of products for office
            and business organizations which all feature the quality,
            functionality and design of high grade products that the company is
            well known for....
          </p>
          <button className="p-2 bg-cyan-400 rounded-lg text-white md:ml-4 mb-4 ml-3">
            Know More
          </button>
        </div>
      </div>
    );
}

export default Info