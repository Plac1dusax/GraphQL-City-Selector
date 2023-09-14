This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# GraphQL-Country-Selector Project

This project contains a web application developed using Next.js 13.

## Getting Started

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/Plac1dusax/GraphQL-Country-Selector`
3. Navigate to the project directory: `cd your-project-directory`
4. Install the required dependencies: `yarn install`
5. Start the application: `yarn dev`

The application will run by default at `http://localhost:3000`.

## Usage

When you open the application, you will be presented with a screen that allows you to filter countries. If the list contains 10 or more items, the 10th item will be automatically selected. If the list has fewer than 10 items, the last item will be automatically selected.

Next to the selected item, you will find a button that allows you to view the country on the map.


![example](https://github.com/Plac1dusax/GraphQL-Country-Selector/assets/92950693/053ac147-06c7-4bd3-aaef-7fa417d4203f)


When you click the button, you will be directed on the map based on the coordinates of the selected country, and you will encounter a modal providing information about the country. You can hide or show the modal by clicking the arrow.


![example2](https://github.com/Plac1dusax/GraphQL-Country-Selector/assets/92950693/81f079a7-6b7b-4aa8-86a0-013c46b4670f)


## License

This project is licensed under the MIT License. For more information, please read the [LICENSE.md](LICENSE.md) file.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
