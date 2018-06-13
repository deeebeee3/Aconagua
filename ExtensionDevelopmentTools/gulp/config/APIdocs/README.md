# Generate apidocs html output

(frontend and backend, default template):

```
    npm install jsdoc foodoc jsdoc-typeof-plugin
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/foodoc/template
    firefox jsdoc-extlayer-frontend/index.html
```

And the same for the back-end:

```
    npm install jsdoc foodoc jsdoc-typeof-plugin
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-backend-config.json
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-backend-config.json -t node_modules/foodoc/template
    firefox jsdoc-extlayer-backend/index.html
```

Note: Heads up! we are running jsdoc twice - one without the template and then with the template because of an issue with foodoc that is not generating file global.html and because we really like that template. 

# Other jsdoc templates

There are more styled jsdoc html templates than the default. Here is a link with well-known templates examples: https://cancerberosgx.github.io/jsdoc-templates-demo/demo/

```
    # foo-doc template - this is what I like most
    npm install foodoc
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/foodoc/template

    # ink-docstrap template
    npm install jsdoc ink-docstrap
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json

    # tui-jsdoc-template I like this !
    npm install tui-jsdoc-template
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/tui-jsdoc-template

    # jaguarjs-jsdoc I like this !
    npm install jaguarjs-jsdoc
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/jaguarjs-jsdoc

    # base-line I like this!
    npm install  https://github.com/hegemonic/baseline/tarball/master
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/baseline

    # I like this!
    npm install ub-jsdoc
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/ub-jsdoc/
    http-server jsdoc-extlayer-frontend

    # ibm's amddcl : what i like from this is that allows you to hide/show inherited fields
    git clone https://github.com/ibm-js/jsdoc-amddcl
    node node_modules/jsdoc/jsdoc.js -c jsdoc-config.json -t jsdoc-amddcl/templates/amddcl/
    rm -rf  jsdoc-amddcl

    # docdash What I dont like from this is that events get separated from classes
    npm install docdash
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/docdash

    # minami - i dont like this
    npm install minami
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t node_modules/minami
```

# Generate confluence markup wiki

```
    git clone https://github.com/erinspice/confluence-jsdoc-template.git
    node node_modules/jsdoc/jsdoc.js -c jsdoc-extlayer-frontend-config.json -t confluence-jsdoc-template/
```

# Generate markdown

```
    npm install jsdoc-to-markdown
    node node_modules/jsdoc-to-markdown/bin/cli.js Modules/suitecommerce/APIdocs\@framework-extensibility-layer-aconcagua/JavaScript/* > out.md
```