export const projects = [{
    id: "00000006",
    title: "Anticipating Ciritical Temperature for Superconductors",
    description: `These predictions aren't for determining whether something is a superconductor but rather what the critical temperature is for superconductors. Features extracted include thermal conductivity, atomic radius, atomic mass, electron affinity, and valence. Gradient Boosting has the model used to train on the data.`,
    objective: `Create a model that can predict with a reasonable accuracy on a large enough dataset. Model selection, dataset selection, and other choices are completely open ended, so predicting superconductor critical temperatures seemed the most interesting to explore.`,
    overview: "The model was trianed then hyperparameters were tuned using a GridSearch cross validation. The tuned XGBoost regression model slightly improved over the base by decreasing the RMSE from 9.36 degrees Kelvin to 8.99 degrees Kelvin. More than half of the superconductors have a critical tempurature less than 80 Kelvin, this improvement is impactful.",
    link: "None",
    tags: ['Python', 'Pandas'],
    date: "April 10, 2025",
    topics: ['Machine Learning', 'Data Exploration'],
    media: [
        {
            file: "files/00000006/hero.png",
            type: "image",
            order: "hero"
        },
        {
            file: "files/00000006/primary.png",
            type: "image",
            order: "primary"
        },
        {
            file: "files/00000006/secondary.png",
            type: "image",
            order: "secondary"
        },
        {
            file: "files/00000006/tertiary.png",
            type: "image",
            order: "tertiary"
        }
    ]
}, {
    id: "00000005",
    title: "Star Wars Survey Data Exploration",
    description: `Using Python and Polars various Data Exploration and Cleansing techniques were applied to a csv file that came from a survey in 2014 of over 1000 people titled, America's Favorite 'Star Wars' Movies (And Least Favorite Characters).`,
    objective: `To validate the data provided on GitHub lines up with the articel be recreating at least two of the visuals and predict if a person from the survey makes at least $50k.`,
    overview: "Survey data can be incredibly messy and difficult especially when there are more options for people to select. Data was successfully cleaned, machine learning models were then trained on it, and graphs were created to match the ones in the article and show what is happening in the data.",
    link: "https://github.com/coderzhent/Data_Science_Programming/tree/main/unit5/unit5_stretch.html",
    tags: ['Python', 'Polars', 'Quarto'],
    date: "July 6, 2025",
    topics: ['Machine Learning', 'Data Exploration', 'Data Cleansing'],
    media: [
        {
            file: "files/00000005/hero.png",
            type: "image",
            order: "hero"
        },
        {
            file: "files/00000005/primary.png",
            type: "image",
            order: "primary"
        },
        {
            file: "files/00000005/secondary.png",
            type: "image",
            order: "secondary"
        },
        {
            file: "files/00000005/tertiary.png",
            type: "image",
            order: "tertiary"
        }
    ]
}, {
    id: "00000003",
    title: "Flight Delay Evaluations",
    description: `Traveling by air can be a quick process until one is met with severe delays. Flight delays can come from a miriad of sources such as maintenance, weather, security, or carrier issues. Data of flight delays is analyzed, explored, and cleansed in this project.`,
    objective: `Using a JSON file containing information on delays at 7 airports over 10 years, the goal is to clean the data and search for insights about flight delays then determine the best month to fly if one wants to avoid delays of any length.`,
    overview: `Weather delays were found to make up 73% of all delays, whereas security delays make up less than 1%. Carrier delays result in a little over a quarter of the delays that people encounter while flying.
    For all airports the biggest contributor to delays is the weather. Some airports are more impacted by weather delays than by carrier compared to other airports due to their location.`,
    link: "https://github.com/coderzhent/Data_Science_Programming/tree/main/unit3/unit3_stretch.html",
    tags: ['Python', 'Polars', 'Quarto'],
    date: "June 8, 2025",
    topics: ['Data Exploration', 'Data Cleansing'],
    media: [
        {
            file: "files/00000003/hero.png",
            type: "image",
            order: "hero"
        },
        {
            file: "files/00000003/primary.png",
            type: "image",
            order: "primary"
        },
        {
            file: "files/00000003/secondary.png",
            type: "image",
            order: "secondary"
        },
        {
            file: "files/00000003/tertiary.png",
            type: "image",
            order: "tertiary"
        }
    ]
}, {
    id: "00000002",
    title: `Baseball Highest Paid Positions`,
    description: `Relationships between data can describe how objects are connected, not connected, or even predict what may come of it. Data found in baseball is no exception. Turns out there is a lot of data in baseball and for this project related to the salaries.`,
    objective: `Interact with a SQLite database using queries in python and polars. Then interact with the data retrieved.`,
    overview: `There are many factors that demonstrate the relationships between salaries of players in baseball and their career. However, discrepencies in the data complicated determining players salaries and these details are explained in the projects HTML file.`,
    link: "https://github.com/coderzhent/Data_Science_Programming/tree/main/unit2/unit2_stretch.html",
    tags: ['Python', 'Polars', 'Quarto', 'MySQL'],
    date: "May 24, 2025",
    topics: ['Data Exploration', 'DataBase Queries'],
    media: [
        {
            file: "files/00000002/hero.png",
            type: "image",
            order: "hero"
        },
        {
            file: "files/00000002/primary.png",
            type: "image",
            order: "primary"
        },
        {
            file: "none",
            type: "",
            order: "secondary"
        },
        {
            file: "none",
            type: "",
            order: "tertiary"
        }
    ]
}, {
    id: "00000001",
    title: "Names Over Time",
    description: `Through history names at one point or another were considered new or novel. Overtime certain names came into a pool of commonly used names that parents would then pull from rather than coming up with a new one.`,
    objective: `The data is stored in a CSV file that gives the number of times a specific name was given to a child in a specific year. The goal was to evaluate the impact the movie E.T. (1982) had on parents naming their kids Elliot.`,
    overview: `After each release of the three releases of E.T. (1982) the use of the name Elliot spiked.`,
    link: "https://github.com/coderzhent/Data_Science_Programming/tree/main/unit1/unit1_stretch.html",
    tags: ['Python', 'Pandas', 'Polars', 'Quarto'],
    date: "May 12, 2025",
    topics: ['Data Exploration', 'Data Cleansing'],
    media: [
        {
            file: "files/00000001/hero.png",
            type: "image",
            order: "hero"
        },
        {
            file: "files/00000001/primary.svg",
            type: "image",
            order: "primary"
        },
        {
            file: "none",
            type: "",
            order: "secondary"
        },
        {
            file: "none",
            type: "",
            order: "tertiary"
        }
    ]
}];

export function getTags() {
    const tagMap = {};

    projects.forEach(i => {
        i.tags.forEach(j => {
            if (!tagMap[j.toLowerCase()]) {
                tagMap[j.toLowerCase()] = [];
            }
            tagMap[j.toLowerCase()].push(i.id);
        });
    });

    return tagMap;
}

export function getTopics() {
    const topicMap = {};

    projects.forEach(i => {
        i.topics.forEach(j => {
            if (!topicMap[j.toLowerCase()]) {
                topicMap[j.toLowerCase()] = [];
            }
            topicMap[j.toLowerCase()].push(i.id);
        });
    });

    return topicMap;
}

export function getDates() {
    const dateMap = {};

    projects.forEach(i => {
        const dateObj = new Date(i.date);
        if (!dateMap[dateObj]) {
            dateMap[dateObj] = [];
        }
        dateMap[dateObj].push(i.id);
    });

    return dateMap;
}

function fetchData() {
    fetch('files/data.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(text => {
        fileCntnts = text;
      })
      .catch(error => {
        console.error('Error reading the file:', error);
      });
}

let fileCntnts = '';