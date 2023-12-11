const Contact = () => {
  return (
    <div className="max-w[1040px] m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#C5C6C7]">
      <h1 className="py-4 text-4xl font-bold text-center text-[#66FCF1]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/65f1d442-6a0d-468e-8e20-97223d1949a8"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-[#45A29E]  bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#66FCF1]"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-[#45A29E]  bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#66FCF1]"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-[#45A29E]  bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#66FCF1]"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-[#45A29E]  bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#66FCF1]"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-[#45A29E] bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833] text-[#66FCF1]"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-[#66FCF1] text-[#1F2833] mt-4 w-full p-4 rounded-lg hover:bg-[#45A29E] hover:shadow-lg hover:shadow-[#66FCF1] hover:text-[#66FCF1]">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
