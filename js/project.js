const projects = [
    {

      "name": "Title: Planet (Demo)",
      "description":"This system employs machine learning to detect planets by analyzing specific parameters in observed astronomical data. Meticulous parameter selection and analysis, the model uncovers potential signals indicative of exoplanetary presence.",
      "link":"https://github.com/Doguhannilt/Planets-demo"
    },
    {

      "name": "Title: Disease",
      "description": "The Finding the disease based on symptoms project is an innovative and crucial application of artificial intelligence in the healthcare domain. The primary objective of this project is to provide users with a powerful tool.",
      "link":"https://github.com/Doguhannilt/Disease"
    },
    {

      "name":"Title: Penguin Prediction",
      "description":" The project is about making a classification for Penguin's type. With the help of Streamlit, you can interact with the web application to get your own results. Little adjustments may create huge changes, so feel free to interact with them!",
      "link":"https://github.com/Doguhannilt/Penguin-Prediction"
    },{
      "name":"Title: Personal Portfolio Using Python",
      "description": "Creating personal portfolio only using Python-Streamlit. Streamlit is one of the best libraries. It's easy to use.",
      "link":"https://doguhansblog.streamlit.app/#welcome"
    },{
      "name":"Title: The Speech of Ataturk",
      "description":"The project aims to a website that allows you to ask a question about the father of the Turks. In general, 'Nutuk' is our dataset and we are going to create an interface. Soon!",
      "link":"soon"
    }];

    let project_generator = '';
    projects.forEach((project) => {
       project_generator +=  `<div class="container">
        <h1  class = "container-github-title">${project.name}</h1>
        <p class = "container-github-description">
            <strong>Description:</strong>  ${project.description}
        </p>
        <p>
            <strong>Project Link:</strong> <a href="${project.link}">Link</a> 
        </p>
    </div>`
    })

    document.querySelector(".container-grid").innerHTML = project_generator;