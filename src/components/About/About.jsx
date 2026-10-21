import "./About.css";
import profilePhoto from "../../assets/image.png";

const profile = {
  name: "Ankit Shukla",
  role: "Full Stack Developer",
  experience: "Fresher",
  location: "India",
  email: "ankit@example.com",
  availability: "Full-time job aur freelance projects ke liye open",
  resumeUrl: "/resume.pdf",
  bio:
    "I'm a fresher web developer who enjoys building clean, fast and responsive websites. I work on both frontend design and backend development, and I care about the small details that make an interface feel right for the people who use it.",
};

const stack = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

// Years aur text apni real journey ke hisaab se badlein
const journey = [
  {
    year: "2024",
    title: "Started web development",
    text: "Learned HTML, CSS and JavaScript and built my first small projects.",
  },
  {
    year: "2025",
    title: "Frontend with React",
    text: "Built responsive, component-based interfaces with React.",
  },
  {
    year: "2026",
    title: "Full stack projects",
    text: "Connected frontends with Node.js, Express and MongoDB.",
  },
];

const facts = [
  { label: "Name", value: profile.name },
  { label: "Role", value: profile.role },
  { label: "Experience", value: profile.experience },
  { label: "Location", value: profile.location },
  {
    label: "Email",
    value: <a href={`mailto:${profile.email}`}>{profile.email}</a>,
  },
  { label: "Availability", value: profile.availability },
];

export default function About() {
  return (
    <main className="about" id="about">
      <section className="about__hero">
        <div className="about__photo-wrap">
          <img className="about__photo" src={profilePhoto} alt={profile.name} />
        </div>

        <div className="about__intro">
          <h1 className="about__title">About me</h1>
          <p className="about__role">{profile.role}</p>
          <p className="about__bio">{profile.bio}</p>

          <div className="about__actions">
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn-box">
              Download CV
            </a>
            <a className="btn btn--ghost" href="#contact">
              Let's talk
            </a>
          </div>
        </div>
      </section>

      <section className="about__section">
        <h2>Quick facts</h2>
        <dl className="facts">
          {facts.map((fact) => (
            <div className="facts__row" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about__section">
        <h2>Tech stack</h2>
        {stack.map(({ group, items }) => (
          <div className="stack__group" key={group}>
            <h3>{group}</h3>
            <ul className="chips">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="about__section">
        <h2>Journey</h2>
        <ol className="timeline">
          {journey.map((item) => (
            <li key={item.year}>
              <span className="timeline__year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}