# Objective

In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)

- Configure timer based on type (time, rounds, work/rest, etc)

- Run timer. While running, user should be able to:

  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change.
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric

- All components you have added are functional components
- All timers are functioning properly
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase.
- Console is free of warnings/errors

## Bonus

For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.

- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt)

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.

## Assignment Notes

- All of the required features and timers have been implemented to the best of my skills and time. I have not implemented any of the bonus features (yet). The stopwatch timer is a bit different from the rest, and is intentionally made without an "end state", as that seemed more stopwatch-like.
- There are a few "lesser" bugs left, like for instance the "well done" statement switching to "it's on" if the stop button is pressed just at the right moment before a cycle ends. There are no errors in the console.
- I mainly used inspiration from class, and from the supplied article: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
- I have done my best to DRY the code, but I would like to refactor more, and maybe split some of the code into more components. I started off with a lot of the same code in each of the timers, but ended up creating an app where they all draw on a common timer component as most of the code was the same. I think you could make the case for both scenarios. Also, I have tried to pull out JS in the JSX to functions where it makes sense, but maybe there are a few places where it could still be tighter.
- I have used the helper class as a common file for both colors, statements and functions. I was a bit in doubt as to what is the best practise with regard to having different files for different things - i.e. how granular you should get. Also, how I am not exactly sure what is the best practise for styled components when some components use the same classes - I have just kept it within the file of each component and used common things like colors from the helper file.
- I have one big context, that gradually moved up during the project - this means, that most of my props have become obsolete.
- With regard to design and UX, i opted for a simple version, where the user just start on the settings screen, and is directed back to that screen if the necessary options have not been set (apart from the stopwatch timer, which does not have any settings).

- As stated in A1:
  -- I used Bootstrap for the layout and for timer icons.
  -- I used https://color.adobe.com/create/color-wheel to create a colorscheme, initially with the "split complimentary option", and then fine tuning until I was satisfied with the colors. I wanted a simple, minimalistic, but colorful app design, and took inspiration from different existing apps, as https://play.google.com/store/apps/details?id=cc.dreamspark.intervaltimer&hl=en.

Link to live version on GH pages: https://prof-tejera.github.io/assignment-2-keamarg
