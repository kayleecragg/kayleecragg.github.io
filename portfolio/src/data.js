export const projectsData = [
    {
      title: "kikibot",
      images: ["kiki.gif", "kikibot.gif", "postbot.png"],
      links: [
        { 
          label: "Colab", 
          url: "https://colab.research.google.com/drive/1jFuPN-3OMjf6p990YB8j_fsw3-JhViI0?usp=sharing" 
        },
        { 
          label: "GitHub", 
          url: "https://github.com/kayleecragg/kikibot" 
        }
      ],
      points: [
        "Designed and implemented a set of Jupyter notebooks to automate the creation and uploading of shells/assets and platform images, enhancing workflow efficiency tenfold.",
        "Scraped competition pages using Selenium + Puppeteer for easy acquisition of match and player data",
        "Widely used by my company’s live operations team to maximize efficiency and reduce the margin of human error during busy periods.",
        "Utilized Python, Selenium, Puppeteer and Google Sheets API to build the automation aspect of the bots, running fully functional on Google Colab to increase usability."
      ],
      tags: ["Python", "Selenium", "Puppeteer", "Google Sheets API", "Google Colab"]
    },
    {
      title: "Arcane Season 2 Countdown",
      images: ["face.jpg", "moving.gif"],
      links: [
        { 
          label: "Website", 
          url: "https://kayleecragg.github.io/arcane" 
        },
        { 
          label: "GitHub", 
          url: "https://github.com/kayleecragg/arcane" 
        }
      ],
      points: [
        "Developed a Countdown website leading up to the 3 different acts of Arcane Season 2.",
        "Checks viewer's local timezone via Javascript and displays exactly what time the episodes will go live in their timezone.",
        "Allows users to check other timezones for when the episodes will go live.",
        "Responsive background feature that cycles through images and GIFs from the new trailers at random."
      ],
      tags: ["HTML", "CSS", "Javascript", "GitHub Pages"]
    },
    {
      title: "CMS re-arranger",
      images: ["cms.png"],
      links: [
        { 
          label: "Website", 
          url: "https://stanliveopstools.web.app/usopen2023.html" 
        }
      ],
      points: [
        "Developed a web app that acts as a CMS (content management system) tool to help organize large volumes of assets on Bebanjo Movida.",
        "Initially created to demo a non‑functioning tool to pitch to the workplace’s product team."
      ],
      tags: ["HTML", "CSS", "Javascript", "Google Firebase"]
    }
  ];
  
  export const experienceData = [
    {
        company: "Dolby",
        logo: "dolby.svg",
        role: "Software Engineer Intern",
        points: [
          "System Level Development on Integration Team"
        ],
        tags: ["Python", "C", "Kotlin", "Raspberry Pi"]
    },
    {
      company: "Google",
      logo: "google.svg",
      role: "Customer Engineering Intern",
      points: [
        "Pre-sales engineer with a focus on delivering GCP’s services to customers.",
        "Developed and showcased three generative AI demos for clients under Google Cloud, ranging from streamlit to full stack (React) applications, utilising Vertex AI models' capabilities.",
        "Shadowed customer calls and in-person meetings with Google Cloud clients.",
        "Scraped URLs from Google Nest support sites and contributed to the creation of Vertex Search dataset for Agents API launch - awarded recognition peer bonus award.",
        "Participated and presented in an internal Google-wide AI hackathon."
      ],
      tags: ["Python", "Streamlit", "React", "Flask", "Web Development", "Vertex AI", "Docker", "Cloud Run", "Cloud Shell", "Cloud Storage", "BigQuery", "Web Scraping"]
    },
    {
      company: "Deloitte",
      logo: "deloitte.svg",
      role: "Cloud & Engineering Vacationer",
      points: [
        "Designed and implemented a Python script to streamline the extraction of individual operations from a large WSDL file into smaller XML files, optimizing compatibility and performance for Azure API management system.",
        "Shadowed and contributed to project team's daily stand up meetings, including interacting with client representative."
      ],
      tags: ["Python", "SoapUI", "WSDL file structure", "XML file structure", "Azure APIM system"]
    },
    {
      company: "Stan",
      logo: "stan.svg",
      role: "Live Operations Assistant",
      points: [
        "Designed and implemented a set of Jupyter notebooks utilizing Python, Selenium, Puppeteer, Google Sheets API and Google Colab to automate the creation and uploading of shells/assets and platform images, enhancing workflow efficiency and reducing human rate of error tenfold.",
        "Optimized an existing Google Sheets workflow by integrating advanced formulas, enhancing time efficiency by 471%.",
        "Live‐streaming and VOD delivery including events with 300k+ live viewers.",
        "Trained new staff on operational workflows.",
        "Nominated multiple times for monthly recognition award and received said award."
      ],
      tags: ["Python", "Selenium", "Puppeteer", "Web Scraping", "Google Colab", "Google Sheets API"]
    },
    {
      company: "Nine - 9Now Programming & Operations",
      logo: "nine.svg",
      role: "Associate Producer",
      points: [
        "Live‐streaming events such as Australian Open 2022 and 19th FINA World Championships Budapest 2022.",
        "Editing VODs and media content using Adobe Premiere Pro.",
        "Quality control of VOD, Live, and key art assets on the 9Now platform."
      ],
      tags: ["Adobe Premiere Pro", "Adobe Photoshop"]
    },
    {
      company: "Telstra Broadcast Services",
      logo: "telstra.svg",
      role: "Presentation Coordinator",
      points: [
        "Playout / On‐air presentation of all SBS Australia channels, Viceland, TVSN AU/NZ, EXPO, ICTV, broadcast streams using Cinergy Air.",
        "Switching events such as UCI Cycling 2021 (Belgium) and NBA 2021/2022 season live matches."
      ],
      tags: ["Real-time Transport Protocol (RTP)", "IP Playout System"]
    }
  ];