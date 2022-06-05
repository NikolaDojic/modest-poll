# Modest poll


Modest poll is a simple widget that allows us to embed polls into any html page. It is build with plain js (jsx) and react. 
That choice stemmed from the fact that react is in general well suited for embeded widgets, as it is reacts default modus operandi. To make it a widget, as opposed to full blown single page app, some modifications have been made to the `index.js`, other than that it is a normal react application. To make it more user-friendly we also tweeked the build process, which resulted in single file bundle, thus minimizing the number of imports. 

## Development

Modest poll is built on top of the default `create-react-app`, so the usual commands also apply here.

startting the development server can be done with command `npm start` or `yarn start`.

to create the minified bundle run `yarn build` or `npm run build`. 

to deploy the current state of the widget run `npm run deploy` or `yarn deploy`. Keep in mind that this is only possible from unix-based os.

to run the tests run `npm run test` or `yarn test`


## How to use

To use the Modest poll widget on the webpage, we must import the bundled js file into our `index.html`. To do that add 
```
<script src="https://gitcdn.link/cdn/NikolaDojic/modest-poll-deployed/main/bundle.min.js"></script>
``` 
aftr the closing `body` tag.
Once we have the script imported we can go on with configuring our widget.

Firstly we should add a html element which has attribute `widget='modest-poll'`.

After that we should define the question id by setting some value to `data-question-id` attribute.

We also have to provide the possible answers. We can do so by setting the `data-answers` attribute. Answers should be separated by some delimiter. 
the default one is `;` but we can change it in `data-delimiter` attribute. Lastly we can choose if we are going to allow multiple answers, with dedicated `data-multiple-answers` attribute, which value can be either `"true"` or `"false"(default)`.

For example if wanted to create a poll that asks a question: 'How you feel today:', 
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


