![Next.js blogging template for Static CMS on Netlify](https://user-images.githubusercontent.com/1388138/197867836-58de8783-9712-4196-937f-4101b1327612.png)

[![MADE BY Next.js](https://img.shields.io/badge/MADE%20BY%20Next.js-000000.svg?style=flat&logo=Next.js&labelColor=000)](https://nextjs.org/)

Next.js blogging template for Netlify is a boilerplate for building blogs with only Netlify stacks.

There are some boilerplate or tutorials for the combination of Next.js and Netlify on GitHub. These resources have documentation and good tutorial to get started Next.js and Netlify quickly, but they are too simple to build blogs with standard features like tagging.

Next.js blogging template for Netlify has already implemented these standard features for building blogs with only using Next.js and Netlify stacks.

## Demo

Deploy on your environment by clicking here:

[Next.js blog template for Netlify](https://next-template.staticcms.org/)

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits the number of posts per page
- **CMS**: built with CMS to allow editors modifying content with the quickest way
- **SEO optimized**: built-in metadata like JSON-LD
- **Shortcode**: extends content writing with React component like WordPress shortcodes

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Netlify](https://netlify.com/)
- [MDX](https://mdxjs.com/)

## Getting started

To create your blog using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-blog --example "https://github.com/StaticJsCMS/static-cms-next-netlify-template"
```

After that, set up your project, following the Netlify documentation:

[Creating & Deploying Your Project](https://netlify.com/docs/concepts/get-started/deploy)

### Static CMS Config

[config.yml](src/config.ts)

## References

- [Static CMS Documentation](https://staticcms.org/docs/intro/)

## License

MIT
