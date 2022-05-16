# Widgets
-----

### Create a widget
- namespace: should be the namespace defined for the project
- name is the name of the widget (project-widgetName)

```
  plop
```

```
  lerna bootstrap
```
-----

### Building widgets
```
  lerna bootstrap
```

```
  lerna exec --- yarn && lerna link
```

```
  lerna run build
```

### Upgrading package version and generating changelog

-----

### Publishing a package

-----


### Package manager used here is Lerna
- needs more research for publish, independent versioning, and git tags
- i need to do indepent package publish and versioning with changelog
https://github.com/lerna/lerna/tree/main/commands/version#readme

### Changelog generator would be useful
- this is usefull for changelog generation
https://www.npmjs.com/package/lerna-changelog

- semantic releases with this 
https://github.com/semantic-release/semantic-release