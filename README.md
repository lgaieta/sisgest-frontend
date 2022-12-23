# SisGest Frontend App Documentation

## Data flow

The data in the app has to travel by the following path:

user input -> hook -> usecase -> service -> adapter -> hook -> ui

Be careful, the usecase doesn't have to know how the service work, it only has to know what the adapter returns.

## Folder structure

-   adapters: functions that transform external data to specified internal data.
-   components: reusable UI components that are used along multiple pages.
-   entities: business logic entities, usually typescript interfaces.
-   layouts: reusable UI layouts that are used along multiple pages. The difference between layouts and components is that layouts are very improbable to appear twice on a page. Most of the times a page has one layout with more than one components.
-   pages: NextJS pages that join components, business logic and state.
-   pages-content: pages' elements that are not reusable between pages. This elements could be components, layouts, custom hooks, specific logic, etc.
-   services: functions that connect the application with external sources, like APIs.
-   utils: things that are useful along this app but don't match with previous definitions. One example is an ErrorBoundary component.
