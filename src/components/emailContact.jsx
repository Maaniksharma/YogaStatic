const EmailContact = () => {
  return (
    <div className="pt-4 md:pt-0 w-full md:w-[20vw]">
      <div className=" md:pr-8 pb-2  text-center  text-2xl  md:pb-6  md:text-3xl lg:pb-8 lg:text-4xl lg:leading-[3.3rem] font-semibold">
        Email us
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const message = encodeURIComponent(e.target[0].value);
          window.location.href = `mailto:manikss123456@gmail.com?subject="About Enquiry"&body=${message}`;
        }}
        method="post"
        encType="text/plain"
        className="flex flex-col items-center gap-3"
      >
        <div htmlFor="message" className="text-lg">
          Message
        </div>
        <textarea
          type="text"
          id="message"
          className="bg-blueWhite text-darkBlue w-64 h-40 outline-3 outline-darkBlue rounded-md  p-2"
        />
        <button className=" font-semibold w-24 rounded px-4 py-2 mt-3 bg-blueWhite text-darkBlue hover:ring-2 ring-darkBlue">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailContact;
