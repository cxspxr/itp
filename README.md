# I am going to learn nodejs stuff in 2 days.

## Prerequesites

Assuming you have already installed `NodeJS`, `npm`:

### Gulp installation (run with sudoer permissions)
```bash
npm i -g gulp
```

### Sequelize installation (it's ORM for NodeJS) (run with sudoer permissions)
```bash
npm i -g sequelize-cli sequelize
```

### Dependencies installation
```bash
npm i
```

### Migrating and populating database
Please, **copy .example.env to .env** and put there your credentials to your local
mysql2 database.  
**Then** do:

```bash
sequelize db:migrate
sequelize db:seed:all
```

## Working locally
**Make sure** that you have free `:3000`, because I use it. For my `express.js` server which
I am proxying then by `browser-sync` on `:900x`.

```bash
gulp serve
```

## Build gzipped production

```bash
gulp
```

## Structure

### Object-Relational Mapping
Models, migrations, seeders are under respective folders.

### Frontend
Layouts, partials, pages, scripts and styles are located under `app` folder.

#### Views
Pages are under `app/*.pug` (e.g. `index.pug` for `index.html` as a homepage).  
Pages partials are under `app/partials/*.pug` (e.g. `slider.pug` which is included by
`app/index.pug` homepage).

`index.pug` in it extends common layout located in `app/layouts/master.pug`.  
`index.pug` includes partials from `app/partials/*`.

#### Scripts
Scripts are under `app/scripts`.  
`app/scripts/main.js` is for `require(<module>)` ONLY!  
You should write separate file to work with and require it as it seen with
`app/scripts/slider.js` and with requiring it in `app/scripts/main.js`

#### Styles
Styles are under `app/styles/**/*.styl`.  
`app/styles/main.styl` is for `require(<file>)` ONLY!  
You should write or use separate files to work with and require it as it seen with
`app/styles/components/slider.styl` and with requiring it in `app/styles/main.styl`.

## Recommendations (skip if you are typical Windows)

Please, do **not** use local vendors, except those which are managed by `bower` or `npm`.  
Please, **one action** = **one commit**.  
Please, **use** your local branches if your task can't fit in **one action** = **one commit**.  
Please, do **not**, for god's sake, push your local branches. **Your** task = **your** branch. Nobody will manage your local branches here.  
Please, **use** `dev` branch to merge your local branch to it and push to remote.  
Please, do **not** use `master`, I am on it. (on managing, not master, haha)  
Please, **do** use modular babel for scripts.  
Please, **do** use modular pug for views.  
Please, **do** use modular stylus for styles.  
Please, do **not** use `Windows`.  
Please, **follow** recommendation above.  
Gosh, **make sure** you don't use `CRLF` if you are still on `Windows`.  

## Technologies used

- [x] Coding:
* `NodeJS`
* `express.js`
* `sequelize`
* `babel``
* `stylus`
* `rupture` for stylus `media`
* `pug`
* `mysql2` as `Noe` driver for `mysql`
* `OwlCarousel2`, `lightbox2`
* `modernizr`, `jQuery` (just for owlcarousel shit)

- [ ] Auth:
* `express-session`
* `express-mysql-session` as a store
* `body-parser`
* `cookie-pasrer`
* `passport.js`
* `passport-local` for passport local strategy
* `bcrypt` for hashing

- [x] Development:
* `heroku` for deploying
* `npm`
* `gulp`
* `browserify`
* `browser-sync`
* `gulp-nodemon` for handling `express` server
* `gulp-sourcemaps`
* `gulp-uglify`
* `gulp-eslint`
* `gulp-autoprefixer`
* `gulp-load-plugins`
* `gulp-size`, `gulp-imagemin`, `compression` for compression
* `gulp-plumber`
* `gulp-if`
* `gulp-cache`
* `del`
* `dotenv` for `.env`
* `vinyl-buffer`, `vinyl-source-stream`

- [x] Dropped during dev:
* `wiredep`
* `cssnano`
* `bower`
