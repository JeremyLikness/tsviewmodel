# Property change notification in TypeScript

This is a simple example that demonstrates how to use TypeScript decorators to transform simple properties into "view model" properties that raise events when the value changes. This works by intercepting the setter and invoking a callback when the setter value is different. The property is turned into a getter/setter with a backing property.

## Make it rain

`git clone https://github.com/JeremyLikness/tsviewmodel.git`

`cd tsviewmodel`

`npm i`

`npm run-script build`

`node index`

That's it. Feedback: [@JeremyLikness](https://twitter.com/JeremyLikness)
