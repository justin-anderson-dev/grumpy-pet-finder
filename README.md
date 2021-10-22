To Do:

# Grumpy Cat Finder

Do you basically hate everyone? Then share your lonely, misanthropic existence with a cat who feels pretty much the same way you do.

Grumpy Cat Finder will find cats near you who don't like kids, don't like dogs, and don't like other cats. Heck, they probably won't like you.

## Description

I started this project as part of a class I was taking on React hooks. I expanded it to 1. make calls to the public Petfinder API, and 2. blend well with the Petfinder UI.

<img width="1439" alt="grumpcatfinder-splash" src="https://user-images.githubusercontent.com/42009003/138529901-007bd29c-6993-4632-b09f-39ce9f5826e1.png">
<img width="1439" alt="grumpycatfinder-results" src="https://user-images.githubusercontent.com/42009003/138529910-477ffdb7-204a-413b-92a2-e1ca4137281e.png">
<img width="1439" alt="grumpycatfinder-detail" src="https://user-images.githubusercontent.com/42009003/138529915-ec9eb130-8c9c-4aa5-aa74-95877a78893a.png">

And the layout is responsive for mobile users.

<img width="494" alt="grumpycatfinder-responsive1" src="https://user-images.githubusercontent.com/42009003/138529972-27704268-eebc-4aa5-ab13-c3ddd966311f.png">
<img width="494" alt="grumpycatfinder-responsive2" src="https://user-images.githubusercontent.com/42009003/138529989-b50fc0f4-8d5e-40aa-91ab-09e925c40fbc.png">

## Getting Started

### Installing

- Fork/clone repo
- Create a [Petfinder developer account](https://www.petfinder.com/developers/) and get an API key

### Executing program

To run the app locally in development mode:

- Install dependencies

  ```sh
  npm install
  ```

- Create a `.env` file in the project root with the following values:

  ```sh
  API_KEY=YOUR_PETFINDER_API_KEY
  API_SECRET=YOUR_PETFINDER_API_SECRET
  ```

- Start dev server
  ```sh
  npm run dev
  ```

## Roadmap

This MVP release does the job: it searches for grumpy cats within a 50-mile radius of the entered location. Planned for future releases:

- More animated fun!
- More search filters
- Ability to search for other grumpy species

## Acknowledgments

Thanks Brian Holt and Frontend Masters for the excellent React classes.

- [Intro to React](https://github.com/btholt/complete-intro-to-react-v6)
- [Frontend Masters](https://github.com/FrontendMasters)
