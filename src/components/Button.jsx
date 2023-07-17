const Button = () => {
    return (
      <div className="relative rounded-[5px] box-border w-full h-[150px] overflow-hidden text-left text-[15px] text-white font-inter border-[1px]">
        <div className="absolute top-[20px] left-[20px] rounded-[50px] bg-black w-[150px] h-24 flex flex-row p-2.5 box-border items-center justify-center">
          <b className="relative">Post a Job</b>
        </div>
      </div>
    );
  };
  
  export default Button;
  