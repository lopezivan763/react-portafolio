import WorkItem from "./WorkItem";

const data = [
  {
    year: 2018,
    title: "Started my Journey as a Programmer",
    description:
      "Started coding and experimenting using Python. During this time, I developed simple applications like a calculator and a password generator.",
  },
  {
    year: 2020,
    title: "Started My College Education",
    description:
      "Started a computer science degree at Harper College. Classes such as Computer Logic and Programming, Computer Science, C++ fundamentals, and Discrete Mathematics allowed me to understand the necessary concepts and principles behind software development.",
  },
  {
    year: 2023,
    title: "Graduation",
    description:
  'I graduated with a dual degree in Computer Science and Mathematics, alongside an Art degree.'
},
  {
    year: 2023,
    title: 'Full Stack Web Development Certificate',
    description:
  'Completed the Full Stack Web Development Certificate at Northwestern University'},
];

const Work = () => {
  return (
    <div className="max-w[1040px] m-auto md:pl-20 p-10 py-16 bg-gradient-to-r from-[#1F2833] via-[#0B0C10] to-[#1F2833]">
      {/* <h1 className="text-4xl font-bold text-center text-[#66fcf1] mb-8">
        My Journey
      </h1> */}
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          description={item.description}
          style={{
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "24px",
            background: idx % 2 === 0 ? "#1f1f1f" : "#292929",
            transform: "translateZ(0)",
            transition: "transform 0.3s ease-in-out",
          }}
          hoverStyle={{
            transform: "translateZ(10px)",
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.4)",
          }}
        />
      ))}
    </div>
  );
};

export default Work;
