import { useEffect, useState } from "react";
import {
  Modal,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
  Avatar,
  TitleBar,
  Button,
} from "@react95/core";
import jacksonPlate from '/jacksonplate.png';  // Note the leading slash
import { New16 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function Resume(props) {
  const showResume = props.show;
  const toggleShowResume = props.toggle;
  const handleCloseResume = () => {
    toggleShowResume(false);
  };

  const windowSmall = useWindowSize();

  // List of avatar images to cycle through
  const avatars = [
    "./about1.png",
    "./about2.png",
    "./about3.png",
    "./about4.png",
    "./about5.png",
  ];

  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [cooldownTimer, setCooldownTimer] = useState(null);

  // Auto-rotate avatar every 2 seconds
  useEffect(() => {
    if (isAutoRotate) {
      const intervalId = setInterval(() => {
        setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % avatars.length);
      }, 2000); // Change avatar every 2 seconds

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [isAutoRotate, avatars.length]);

  // Reset auto-rotation with a 5-second cooldown
  const resetAutoRotateWithCooldown = () => {
    setIsAutoRotate(false); // Stop auto-rotation on manual interaction
    if (cooldownTimer) {
      clearTimeout(cooldownTimer);
    }
    const timer = setTimeout(() => {
      setIsAutoRotate(true); // Resume auto-rotation after 5 seconds
    }, 5000);
    setCooldownTimer(timer);
  };

  // Function to manually go to the previous avatar
  const handlePreviousAvatar = () => {
    setCurrentAvatar((prevAvatar) =>
        prevAvatar === 0 ? avatars.length - 1 : prevAvatar - 1
    );
    resetAutoRotateWithCooldown(); // Trigger cooldown
  };

  // Function to manually go to the next avatar
  const handleNextAvatar = () => {
    setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % avatars.length);
    resetAutoRotateWithCooldown(); // Trigger cooldown
  };

  // Define the default position
  const screenW = 88;
  const screenH = 22;

  return (
      <>
        {showResume && (
            <Modal
                width={windowSmall ? "100%" : "30vw"}
                height={windowSmall ? "100%" : "auto"}
                style={{
                  maxWidth: windowSmall ? "100vw" : "none",
                  maxHeight: windowSmall ? "100vh" : "none",
                  overflow: "auto",
                  position: "absolute",
                  left: windowSmall ? 0 : screenW,
                  top: windowSmall ? 0 : screenH,
                }}
                icon={<New16 variant="16x16_4" />}
                title="Resume"
                dragOptions={windowSmall ? { disabled: true } : {
                  defaultPosition: {
                    x: screenW -88,
                    y: screenH -22,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                      key="help"
                      onClick={() => {
                        alert("if you feel like you can't handle life's curveballs, remember we all in this sinking titanic and will die soon anyway so just chill out!");
                      }}
                  />,
                  <TitleBar.Close key="close" onClick={handleCloseResume} />,
                ]}
            >
              <Tabs defaultActiveTab="About">
                <Tab title="About">
                  <div
                      className="scrollable-content" // Add this class for custom scrollbar styling
                      style={{
                        maxHeight: "calc(90vh - 100px)", // Adjust maxHeight based on modal height
                        overflowY: "auto",
                        paddingRight: "15px", // Adjust for scrollbar width
                      }}
                  >
                    <h3
                        style={{
                          margin: 0,
                          padding: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%'  // Ensure the h3 takes full width
                        }}
                    >
                      <img
                          src={jacksonPlate}
                          alt="Jackson W"
                          loading="lazy"
                          style={{
                            height: '58px',
                            width: 'auto',
                            display: 'block',
                            margin: '2px 0',  // Add some vertical margin if needed
                            transform: 'translateX(-48px)'
                          }}
                      />
                    </h3>

                    {/* Avatar with manual and auto-rotation */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Button onClick={handlePreviousAvatar}>
                        &#8592; {/* Left arrow */}
                      </Button>
                      <Avatar src={avatars[currentAvatar]} alt="Profile" size="330px" />
                      <Button onClick={handleNextAvatar}>
                        &#8594; {/* Right arrow */}
                      </Button>
                    </div>

                    {/* Indicator for current avatar */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                      {avatars.map((_, index) => (
                          <div
                              key={index}
                              style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: currentAvatar === index ? "black" : "lightgray",
                                margin: "0 5px",
                              }}
                          />
                      ))}
                    </div>

                    <p>
                      <b>Location:</b> San Marcos, TX 78666 <br />
                      <b>Email:</b> <a href="mailto:jackson.w@example.com">jackson.w@malleablemind.ai</a> <br />
                      <b>Phone:</b> (512) 123-4567
                    </p>
                    <Fieldset legend="About me">
                      <p>
                        'sup. I'm Jackson, an aspiring developer with a passion for solving complex problems. My journey into the tech world started early, and I thrive on new challenges and fast-paced learning.
                      </p>

                      <p>
                        To me, Computer Science is the ultimate tool for modeling reality. It's the application of mathematics and logic to the real world, allowing us to study and simulate the complexities of life through computation. This perspective fascinates me because it means we can tackle real-world challenges in innovative ways.
                      </p>

                      <p>
                        Whether it's optimizing food supply chains or creating more efficient communication systems, CS gives us the power to make a tangible impact on people's lives. I approach each project as an opportunity to create meaningful solutions, always keeping in mind that the most impactful tech often lies in addressing fundamental human needs with elegance and simplicity.
                      </p>

                      <p>
                        Outside of coding, you'll find me skateboarding—my go-to way to recharge. I also share downtime with my cat, Sadie, the queen of the house (check out her gallery on this site! 🐾).
                      </p>

                      <p>
                        I'm all about creating things that make a difference while having fun. If you love coding, skating, or cats (especially Sadie), we'll probably get along great!
                      </p>
                    </Fieldset>
                  </div>
                </Tab>

                {/* Education Tab */}
                <Tab title="Education">

                  <div className="scrollable-content"
                    style={{
                      maxHeight: "calc(90vh - 100px)",
                      overflowY: "auto",
                      paddingRight: "15px"
                    }}
                  >
                    <Fieldset legend="Education">
                    <Checkbox readOnly checked={true}>
                      <strong>Bachelor of Science in Computer Science, Minor in Applied Mathematics - Texas State
                        University, San Marcos, TX</strong>
                    </Checkbox>
                    <p><b>Relevant Coursework:</b></p>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="data structures" style={{marginRight: '10px'}}>🌳</span>
                        <strong>Data Structures & Algorithms:</strong> Mastered advanced problem-solving techniques and
                        optimized solution efficiency
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="OOP" style={{marginRight: '10px'}}>🧩</span>
                        <strong>Object-Oriented Programming:</strong> Developed robust, scalable software solutions
                        using design patterns
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="software engineering" style={{marginRight: '10px'}}>🚀</span>
                        <strong>Software Engineering:</strong> Collaborated on large-scale projects using Agile
                        methodologies and CI/CD practices
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="AI" style={{marginRight: '10px'}}>🤖</span>
                        <strong>Artificial Intelligence:</strong> Explored cutting-edge AI algorithms and applications,
                        including neural networks and expert systems
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="machine learning" style={{marginRight: '10px'}}>📊</span>
                        <strong>Machine Learning:</strong> Implemented predictive models using various ML techniques,
                        including supervised and unsupervised learning
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="networks security" style={{marginRight: '10px'}}>🔒</span>
                        <strong>Computer Networks/Systems Security:</strong> Designed secure network architectures and
                        implemented cybersecurity best practices
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="computer architecture" style={{marginRight: '10px'}}>🖥️</span>
                        <strong>Computer Architecture:</strong> Gained in-depth understanding of hardware-software
                        interaction and system optimization
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="assembly" style={{marginRight: '10px'}}>⚙️</span>
                        <strong>Assembly Language:</strong> Developed low-level programming skills, optimizing code for
                        specific hardware architectures
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="algorithm analysis" style={{marginRight: '10px'}}>📈</span>
                        <strong>Algorithm Analysis:</strong> Conducted in-depth analysis of algorithm efficiency and
                        complexity, optimizing for various scenarios
                      </li>
                    </ul>
                  </Fieldset></div>

                </Tab>

                {/* Work Experience Tab */}
                <Tab title="Work Experience">
                  <div className="scrollable-content"
                      style={{
                        maxHeight: "calc(90vh - 100px)",
                        overflowY: "auto",
                        paddingRight: "15px"
                      }}
                  >
                    <Fieldset legend="Work Experience">
                    <Checkbox readOnly checked={true}>
                      <strong>Front Manager at Formosa Garden, San Antonio, TX (Jan 2023 - Sep 2023)</strong>
                    </Checkbox>

                    <ul>
                      <li>Orchestrated over 60+ daily to-go orders, optimizing workflow for 30% faster processing</li>
                      <li>Implemented a customer feedback system, resulting in a 25% increase in positive reviews</li>
                      <li>Mentored and trained new staff, improving team efficiency by 20%</li>
                    </ul>
                    <Checkbox readOnly checked={true}>
                      <strong>Bartender at Formosa Garden, San Antonio, TX (Sep 2021 - Jan 2023)</strong>
                    </Checkbox>
                    <ul>
                      <li>Crafted a diverse menu of beverages, increasing bar sales by 15%</li>
                      <li>Developed a streamlined inventory system, reducing waste by 10%</li>
                      <li>Maintained 100% accuracy in cash handling and end-of-day reconciliation</li>
                    </ul>
                  </Fieldset></div>
                </Tab>

                {/* Projects Tab */}
                <Tab title="Projects">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <Fieldset legend="Projects">
                    <Checkbox readOnly checked={true}>
                      Golang Discord Bot with OpenAI Integration (Aug 2024 - Present)
                    </Checkbox>
                    <ul>
                      <li>Engineered a sophisticated bot that reduced content review time by 60% through AI-powered
                        summarization
                      </li>
                      <li>Architected a high-performance RESTful API using Gin, improving data retrieval speed by 40%
                      </li>
                      <li>Integrated advanced sentiment analysis using scikit-learn, enhancing user interaction
                        insights
                      </li>
                      <li>Implemented robust security measures including OAuth2 authentication and environment variable
                        protection
                      </li>
                      <li>Established a CI/CD pipeline with GitHub Actions, reducing deployment downtime by 50%</li>
                    </ul>
                  </Fieldset></div>
                </Tab>

                {/* Skills Tab */}
                <Tab title="Skills">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <div style={windowSmall ? {height: window.innerHeight * 0.7, overflow: "auto"} : null}>
                    <Fieldset legend="Technical Skills">
                      <ul>
                        <li className="resume-skills">HTML/CSS</li>
                        <ProgressBar percent={97} width="200px"/>
                        <li className="resume-skills">JavaScript</li>
                        <ProgressBar percent={88} width="200px"/>
                        <li className="resume-skills">Go</li>
                        <ProgressBar percent={80} width="200px"/>
                        <li className="resume-skills">Python</li>
                        <ProgressBar percent={85} width="200px"/>
                        <li className="resume-skills">C++</li>
                        <ProgressBar percent={75} width="200px"/>
                        <li className="resume-skills">Java</li>
                        <ProgressBar percent={70} width="200px"/>
                      </ul>
                    </Fieldset>
                    <Fieldset legend="Frameworks & Technologies">
                      <ul>
                        <li className="resume-skills">Gin, Flask, Docker, NextJS</li>
                        <li className="resume-skills">PostgreSQL, MongoDB, MySQL</li>
                        <li className="resume-skills">Git/GitHub, RESTful APIs, OAuth2</li>
                        <li className="resume-skills">Machine Learning (scikit-learn, pandas)</li>
                      </ul>
                    </Fieldset>
                    <Fieldset legend="Languages (Speaking)">
                      <ul>
                        <li className="resume-skills">English</li>
                        <ProgressBar percent={100} width="200px"/>
                        <li className="resume-skills">Cantonese</li>
                        <ProgressBar percent={75} width="200px"/>
                      </ul>
                    </Fieldset>
                  </div></div>
                </Tab>

                {/* Personality Tab */}
                <Tab title="Personality">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <Fieldset legend="Personality Insights">
                    <ul>
                      <li className="resume-skills">MBTI: INTP/ENTP - Innovative problem-solver with a knack for
                        abstract thinking
                      </li>
                      <li className="resume-skills">Enneagram Type: 5w4 - Analytical and creative, with a deep desire
                        for knowledge
                      </li>
                      <li className="resume-skills">Typical Team Role: top fragger & lurker</li>
                    </ul>
                  </Fieldset>
                    <Fieldset legend="Key Strengths">
                      <ul style={{listStyleType: 'none', padding: 0}}>
                        <li style={{marginBottom: '15px'}}>
                          <span role="img" aria-label="customer service" style={{marginRight: '10px'}}>🤝</span>
                          <strong>Customer-Centric Problem Solving:</strong> My experience as a Front Manager and
                          Bartender honed my ability to understand and address customer needs effectively. This
                          customer-centric approach translates seamlessly into software development, where I prioritize
                          user experience and stakeholder satisfaction. I excel at bridging the gap between technical
                          solutions and user requirements, ensuring that the end product not only functions well but
                          also meets and exceeds user expectations.
                        </li>
                        <li style={{marginBottom: '15px'}}>
                          <span role="img" aria-label="big picture" style={{marginRight: '10px'}}>🔭</span>
                          <strong>Multidisciplinary Big Picture Thinking:</strong> With an unconventional & pragmatic
                          entry into the tech field, I bring a unique, holistic perspective to engineering challenges.
                          Rather than getting lost in the minutiae, I excel at seeing the broader context of a project
                          or problem. This big-picture thinking allows me to architect comprehensive solutions that
                          consider not just immediate technical requirements, but also long-term scalability,
                          cross-functional impacts, and alignment with overarching business goals. My ability to
                          synthesize concepts from various disciplines enables me to approach problems from multiple
                          angles, leading to innovative and efficient solutions that address both current needs and
                          future possibilities.
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="adaptable" style={{marginRight: '10px'}}>🔄</span>
                          <strong>Adaptable Learner:</strong> Passionate about emerging technologies and quick to master
                          new skills
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="analytical" style={{marginRight: '10px'}}>🧠</span>
                          <strong>Analytical Problem-Solver:</strong> Combine strong analytical skills with creative
                          approaches to tackle complex challenges
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="communicator" style={{marginRight: '10px'}}>🗣️</span>
                          <strong>Effective Communicator:</strong> Bridge the gap between technical and non-technical
                          stakeholders with ease
                        </li>
                      </ul>
                    </Fieldset></div>
                  {/* future proof */}
                </Tab>
              </Tabs>
            </Modal>
        )}
      </>
  );
}
