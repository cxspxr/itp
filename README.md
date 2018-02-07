# Training Project

## Prerequesites :

Assuming you have already installed `NodeJS`, `npm`:

```bash
npm i
```

## Working locally:

```bash
gulp serve
```

## Structure
Working folder is `app`. Nothing else should NOT be changed without a reason.

### Views:
Pages are under `app/*.pug` (e.g. `index.pug` for `index.html` as a homepage).
Pages partials are under `app/partials/*.pug` (e.g. `slider.pug` which is included by
`app/index.pug` homepage)
Layouts under `app/layouts/*.pug` should NOT be changed without a specific reason.

`index.pug` in it extends common layout at `app/layouts/master.pug`.
`index.pug` includes partials from `app/partials/*`

### Scripts:
Scripts are under `app/scripts`.
`app/scripts/main.js` is for `require(<module>)` ONLY!
You should write separate file to work with and require it as it seen with
`app/scripts/slider.js` and with requiring it in `app/scripts/main.js`

### Styles:
Styles are under `app/styles/**/*.styl`
`app/styles/main.styl` is for `require(<file>)` ONLY!
You should write or use separate files to work with and require it as it seen with
`app/styles/components/slider.styl` and with requiring it in `app/styles/main.styl`.
