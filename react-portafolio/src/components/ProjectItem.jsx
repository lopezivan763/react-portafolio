import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    border: 'none',
    padding: '20px',
    maxWidth: '400px',
    width: '90%',
    backgroundColor: '#1F2833',
    color: '#66FCF1',
  },
};

const projectInfo = {
  'Get Sh*t Done': {
    description: 'Login, create and manage your tasks efficiently by assigning personalized tag labels. Categorize your tasks based on priority, deadlines, or custom criteria that suit your workflow',
    techUsed: 'Express, JavaScript, Handlebars, Sequalize, MySQL.',
    url: 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
  },
  "What's in this Meal?": {
    description: 'An app providing comprehensive nutritional details for a diverse range of meals and recipes.',
    techUsed: 'Built with HTML, CSS, and JavaScript, and third party APIs integration',
    url: 'https://bdeutmeyer.github.io/nutrition-getter/',
  },
  'Portfolio': {
    description: 'Modern and styled portfolio',
    techUsed: 'Built with React and tailwind',
    url: 'https://www.ivan-lopez-dev.com/',
  },
  'Xperience': {
    description: 'Explore and uncover fresh experiences, as well as share them with others using this dynamic blog application.',
    techUsed: 'MERN stack and Tailwind',
    url: 'https://frozen-escarpment-08349-5cbe8ef4d25f.herokuapp.com/',
  },
};

const ProjectItem = ({ img, title }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='relative flex items-center justify-center h-[300px] w-full rounded-xl group overflow-hidden'>
      <img
        src={img}
        alt="/"
        className='rounded-xl group-hover:opacity-20 object-cover'
        style={{ height: '100%', width: '100%' }}
      />
      <div
        className='hidden group-hover:flex flex-col items-center justify-center absolute inset-0 cursor-pointer'
        onClick={toggleModal}
      >
        {/* Adjust the positioning of the text and link */}
        <h1 className='text-2xl font-bold text-[#66FCF1] tracking-wider text-center mb-5'>
          {title}
        </h1>
        <p className='text-center p-3 rounded-lg border-solid border-2 border-[#66FCF1] text-[#C5C6C7] font-bold text-lg hover:bg-[#66FCF1] hover:text-[#1F2833]'>
          More Info
        </p>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>&times;</span>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className='text-white'><strong></strong> {projectInfo[title]?.description}</p>
          <p className='text-[#C5C6C7]'><strong>Tech Used:</strong> {projectInfo[title]?.techUsed}</p>
          <a href={projectInfo[title]?.url} target="_blank" rel="noopener noreferrer">
            Run it
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectItem;
