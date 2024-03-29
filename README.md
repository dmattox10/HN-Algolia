# HN-Algolia (Success!!!!!!)
Despite not being chosen for the role, this React project showcases my ability to quickly jump from using ContextAPI to Redux which I had not touched in nearly a year. The Algolia AI API is accessed by this front end project.

At-home exercise for RTS-Labs to demonstrate the ability to pick up an unfamiliar element and integrate it into a project.
Builds into a working docker container, Running on my home server.

## About this project - Day 3!
- Completed using the previous queries in Redux State to create buttons which when clicked submit the previous search
- Edited Entry component to include a link to the story if it exists
- Edited the loading spinner to match the hackernews color
- Left room to easily add checkbox to search by date instead of relevance, all other features supporting.

## About this project - Day 2!
Thanks to the guidance from the engineers, I was able to connect to and search the HN-Algolia API! I added several components:
- Loader: a really cool spinner, CSS recreation of the loading spinner from Elite: Dangerous, that I found long ago and adapted for React
- Error: nicely displays error messages sent by the API (if any)
- Entry: I have plans for this one but it's the title, text, and URL if any of the search result

### The Good
It works, run yarn, yarn start, and it's usable!

### The Bad (Fixed!)
~~Building with docker and deploying, the CORS error resurfaces!!~~
- [X] I'd love to figure that out shortly, I'm out of time for today (Saturday).

## About this project (updated)

- [X] My next steps would have been to build a posts component to display each entry in a meaningful way, and then map the data onto the post component x times.

- [] After that I was going to include a tag cloud of the previous searches, clicking one would repeat the search.

### Front End
React - My goto.

I tried Axios, Fetch, and window.fetch to attempt to get around CORS, modifying the header and such, to no avail.

Formik and Yup - Form handling and validation, with descriptive warning messages.

Reactstrap - Bootstrap wrapped in React components, I used the "Lumen" theme from Bootswatch this time.

**Redux!** - Ever since I discovered context API, I haven't touched Redux, and so much has changed. Much less boilerplate code than before, easier to follow reading through it.

#### Noteworthy
I usually use the package "Express Brute" to prevent abuse of the services I create, but since this is Front End only, I created a simple captcha type hack to deal with that possibility.

### Screenshots
<div><img src="day2.png" style="width: 100%" /></div>
<div><img src="screenshot1.png" style="width: 100%"/></div>

This project is hosted on my private server [HERE CLICK ME!](https://hn.danielmattox.com)

