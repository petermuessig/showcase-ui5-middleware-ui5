# Showcase `ui5-middleware-ui5` to reference UI5 apps

This showcase demonstrates how you can reference another UI5 application in your UI5 application project. The UI5 tooling ignores dependencies to other UI5 applications and the [`ui5-middleware-ui5`](https://www.npmjs.com/package/ui5-middleware-ui5) adds support to reference and embed other UI5 application into the UI5 tooling development server. The referenced UI5 applications are simply available via their namespace under the `/resources/*` path.

## How To

The `my.test.app` references the `my.test.tsapp` as a `devDependency` in the `package.json`. By default, the UI5 tooling ignores such kind of dependencies. By including the `ui5-middleware-ui5` into the `my.test.app` project, the UI5 application dependencies are detected and included via an express router into the UI5 tooling development server:

* Adding dependency to the other UI5 application

    ```json
    {
      "name": "my.test.app",
      [...]
      "devDependencies": {
        [...]
        "my.test.tsapp": "file:../my.test.tsapp"
      }
    }
    ```

* Adding dependency to the `ui5-middleware-ui5` middleware

    ```json
    {
      "name": "my.test.app",
      [...]
      "devDependencies": {
        [...]
        "ui5-middleware-ui5": "^3.0.0-alpha.2"
      }
    }
    ```

* Register the `ui5-middleware-ui5` in the `ui5.yaml`

    ```yaml
    specVersion: "3.0"
    metadata:
      name: my.test.app
    type: application
    [...]
    server:
      customMiddleware:
        - name: ui5-middleware-ui5
          afterMiddleware: compression
        - name: ui5-middleware-livereload
          afterMiddleware: compression
          configuration:
            includeAppDeps: true
    ```

    > :rocket: to benefit from livereload for UI5 application dependencies you can set the configuration option `includeAppDeps` for the `ui5-middleware-livereload` to `true`

That's it - by default the referenced UI5 applications are available via their namespace under the `/resources/*` path. If you bootstrap UI5 from a local UI5 version, you can simply require the UI5 components from the reference UI5 applications with their name. The [`ui5-middleware-ui5`](https://www.npmjs.com/package/ui5-middleware-ui5) provides additional configuration options to change the `mountPath` of the referenced UI5 applications.

In this example, the UI5 application `my.test.app` references the `my.test.tsapp` and includes it as a nested component. The sample uses the explanation from the [UI5er Buzz #46 – Routing with Nested Components](https://blogs.sap.com/2020/02/05/ui5er-buzz-46-routing-with-nested-components/) to implement the routing to the nested component.

## Support

Please use the GitHub bug tracking system to post questions, bug reports or to create pull requests.

## Contributing

We welcome any type of contribution (code contributions, pull requests, issues) to this generator equally.

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the LICENSE file.
