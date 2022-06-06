# Modest poll

The Modest poll is a simple widget that allows us to embed polls into any html page. It is built with plain js (jsx) and react. 
That choice stemmed from the fact that React is in general well suited for embedded widgets, as it is Reacts default modus operandi. To make it a widget, as opposed to a full-blown single-page app, some modifications have been made to the `index.js`, other than that it is a normal React application. To make it more user-friendly we also tweaked the build process, which resulted in a single file bundle, thus minimizing the number of imports. 

## Development

The Modest poll is built on top of the default `create-react-app`, so the usual commands also apply here.

after cloning the repo run `npm install` or `yarn` command inside of it to install the dependencies.

starting the development server can be done with the command `npm start` or `yarn start`.

to create the minified bundle run `yarn build` or `npm run build`. 

to deploy the current state of the widget run `npm run deploy` or `yarn deploy`. Keep in mind that this is only possible from UNIX-based os.

to run the tests run `npm run test` or `yarn test`


## How to use

To use the Modest poll widget on the webpage, we must import the bundled js file into our `index.html`. To do that add 
```
<script src="https://gitcdn.link/cdn/NikolaDojic/modest-poll-deployed/main/bundle.min.js"></script>
``` 
after the closing `body` tag.
Once we have the script imported we can go on with configuring our widget.

Firstly we should add an html element that has the attribute `widget='modest-poll'`.

After that, we should define the question id by setting some value to the `data-question-id` attribute.

We also have to provide the possible answers. We can do so by setting the `data-answers` attribute. Answers should be separated by some delimiter. 
the default one is `;` but we can change it in the `data-delimiter` attribute. Lastly, we can choose if we are going to allow multiple answers, with a dedicated `data-multiple-answers` attribute, which value can be either `"true"` or `"false"(default)`.

For example, if wanted to create a poll that asks a question: 'How do you feel today:', 
with possible answers:
- Brilliant! I have so much energy
- Always can be worse
- Please, end my misery

we can do it like this:
```
<div  
      data-answers="Brilliant! I have so much energy$Always can be worse$Please, end my misery"
      data-delimiter="$"
      data-multiple-answers="false"
      data-question-id="todaysMood"
      data-question="How you feel today:"
      widget="modest-poll"
></div>
``` 
Please note that it is not possible to have two polls with the same question id on a single page.

## Minimal setup

For convenience, we added the `minimal_setup` folder that contains an html file with poll widgets.
They can be opened directly in the browser or hosted, dealer's choice.

## Future improvements

The build process could probably be optimized, to be done in just one step. 

Pre-commit hook should be triggered only on js file changes

Styling is rudimental, which leaves a lot of place for refinement.

Answer configuration should probably be reconsidered in the context of the api calls, when it comes to that

The user is not recognized as an entity
