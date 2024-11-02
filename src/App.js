import React from 'react';
import { ChevronDown, ChevronRight, Building2, Calendar, Award, BookOpen, Code, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const ContactButton = ({ icon: Icon, text, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-full md:w-auto"
  >
    <Icon size={20} className="text-blue-600" />
    <span className="text-gray-700">{text}</span>
    <ExternalLink size={16} className="text-gray-400" />
  </a>
);

const Section = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center w-full text-left mb-2 p-2 hover:bg-gray-50 rounded-lg"
      >
        <Icon className="mr-2 text-blue-600" size={20} />
        <h2 className="text-xl font-semibold flex-grow">{title}</h2>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

const Experience = ({ company, role, period, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <Building2 size={16} className="mr-2" />
      <span>{company}</span>
      <Calendar size={16} className="ml-4 mr-2" />
      <span>{period}</span>
    </div>
    <div className="pl-4 border-l-2 border-gray-200">
      {children}
    </div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="font-medium text-gray-700 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Ananth Majumdar</h1>
        <p className="text-xl text-gray-600 mb-4">Technical Product Manager & Senior Software Engineer</p>
        
        {/* Contact Details Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
          <ContactButton 
            icon={Mail} 
            text="thisisananth AT GMAIL" 
            href="thisisananth@gmail.com"
          />
          <ContactButton 
            icon={MapPin} 
            text="DFW Metro, USA" 
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </header>

      <Section title="Summary" icon={BookOpen}>
        <p className="text-gray-700">
          Senior technologist with 18+ years of experience building enterprise applications and cloud-native solutions. 
          Expertise in Java/J2EE, cloud architecture, and financial technology. Recent focus on AI/ML implementations 
          including LLM-powered conversational agents.
        </p>
      </Section>

      <Section title="Professional Experience" icon={Building2}>
        <Experience 
          company="Wellington Management, Boston MA (Remote, TX)"
          role="Lead Software Engineer"
          period="Feb 2023 - Present"
        >
          <ul className="list-disc pl-4 text-gray-700">
            <li>Architect and maintain mission-critical applications (SOT, iHub, MSCNS) for portfolio managers</li>
            <li>Implement real-time updates using Server Sent Events</li>
            <li>Optimize AWS infrastructure and manage cost optimization initiatives</li>
            <li>Drive production reliability and performance improvements</li>
          </ul>
        </Experience>

        <Experience
          company="Independent Project"
          role="AI/ML Side Projects"
          period="May 2023 - Present"
        >
          <ul className="list-disc pl-4 text-gray-700">
            <li>Developed conversational AI agents using Google Vertex AI and AutoGen frameworks</li>
            <li>Built REST APIs to integrate product data with LLM agents</li>
            <li>Implemented intent recognition using Gemini Pro and OpenAI 4.0 Mini</li>
            <li>Deployed solution as Google Cloud Functions with Vertex AI agent integration</li>
          </ul>
        </Experience>

        <Experience
          company="Symphony Communications, New York City"
          role="Senior Product Manager / Technical Lead"
          period="Mar 2019 - Dec 2022"
        >
          <ul className="list-disc pl-4 text-gray-700">
            <li>Architected multi-tenant workflow engine for RFQ processes using Camunda</li>
            <li>Designed scalable deployment architecture on AWS EKS using Terraform</li>
            <li>Built serverless event processing platform using AWS Lambda</li>
            <li>Led team of 15 engineers from planning through release</li>
          </ul>
        </Experience>
      </Section>

      <Section title="Technical Skills" icon={Code}>
        <SkillCategory 
          title="Cloud & Infrastructure"
          skills={[
            "AWS (EC2, EKS, Lambda)", 
            "Google Cloud Platform",
            "Terraform",
            "Docker",
            "Kubernetes"
          ]}
        />
        <SkillCategory 
          title="Programming & Frameworks"
          skills={[
            "Java 8",
            "Spring Boot",
            "Node.js",
            "Python",
            "REST APIs"
          ]}
        />
        <SkillCategory 
          title="AI/ML & Tools"
          skills={[
            "LLM Integration",
            "Vertex AI",
            "AutoGen",
            "Gemini Pro",
            "OpenAI"
          ]}
        />
      </Section>

      <Section title="Certifications" icon={Award}>
        <ul className="list-disc pl-4 text-gray-700">
          <li>AWS Certified Solutions Architect Associate</li>
          <li>Professional Scrum Master (PSM 1)</li>
          <li>IBM Certified Solution Designer - OOAD</li>
          <li>Sun Certified Java Programmer & Web Component Developer</li>
        </ul>
      </Section>
    </div>
  );
}