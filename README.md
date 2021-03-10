# Evaluate Mind with Natural Language Processing

#### By **Jiwon Han**

## Table of Contents

* [Instructions](#instructions)
* [Technologies](#Technologies)
* [Contact](#Contact)
* [License](#License)

## Instructions

A <strong>Udacity</strong> front-end <em> Evaluate a News Article with Natural Language Processing.</em> <br/>

<img src="img/screenshot1.png" width="700px" height="400px" /> 

Natural Language Processing leverages machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

This site analyzes your inputs and provides results via NLP. Implemented with below specifications. 

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

### To see Demo web app:

Currently, the app is deployed via Heroku. Visit https://evening-ravine-68189.herokuapp.com/.

### To run dev mode locally:

[NLP API (Meaningful Cloud)](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)) is needed to run the development mode. Please have the API and put in the .env file. 

```bash
  $ git clone https://github.com/jiwon-seattle/Mind-Evaluation-with-Natural-Language-Processing.git
  $ cd website
  $ npm install  
  # After successfull pkg installtion
  $ npm start
```
The production site is automatically hosted in http://localhost:8080 and server is running in http://localhost:8083. 

## Technologies

- HTML
- SASS
- Node.js
- WebPack
- Express.js
- [Service Workers](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
- [NLP API (Meaningful Cloud)](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
- [Heroku Deploymenet](https://www.heroku.com/)

 ## Contact
  #### Jiwon Han
  * [GitHub](https://github.com/jiwon-seattle)
  * [LinkedIn](https://www.linkedin.com/in/jiwon1han/)

 ## License

 `Evaluate Mind with Natural Language Processing` is open source software [licensed as MIT][license].

 Copyright (c) 2021 **_Jiwon Han_**

 [license]: https://github.com/jiwon-seattle/Mind-Evaluation-with-Natural-Language-Processing/blob/master/LICENSE.md
