to deploy the project:

npm install in:

1. sd folder
2. login folder (if an error occurs, do "git init" first)
3. dashboard folder (if an error occurs, do "git init" first)
4. dashboard-admin folder (if an error occurs, do "git init" first)

npm start:

1. sd folder
2. login folder
3. dashboard folder
4. dashboard-admin folder

//////////////////////////////////////////////////////

to create a new app-project in the global project:

in the global folder. in this case sd

npx create-single-spa --moduleType app-parcel

in this case organization name: sd

in this case project name: sd-NAMEPROJECT

when project is created, add the url generated in localhost in index.ejs in the root project

    example:

    <script type="systemjs-importmap">
      {
        "imports": {
          "@sd/root-config": "//localhost:9000/sd-root-config.js",
          "@sd/login": "//localhost:8080/sd-sd-login.js",
          "@sd/dashboard": "localhost:8081/sd-sd-dashboard.js"
        }
      }
    </script>

last step, add the project to the sd-root-config.js in the root project:

    example:

    registerApplication({
      name: "@sd/login",
      app: () => System.import("@sd/login"),
      activeWhen: ["/login"]
    });

if problems with imports in components, add in .eslintrc file:

{
"extends": ["react-important-stuff", "plugin:prettier/recommended"],
"parser": "babel/eslint-parser",
"parserOptions": {
"parser": "babel/eslint-parser",
"requireConfigFile": false, // <== ADD THIS
"ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
"sourceType": "module", // Allows for the use of imports
"babelOptions": {
"presets": ["babel/preset-react"]
}
}
}
