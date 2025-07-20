# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### Requirements
- `Node.js` 20+
- `pnpm` 10.10.0+
- `mysql`

### Setup env

```bash
  cp .env.example .env
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
pnpm run develop
```


### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
pnpm run build
```

## ⚙️ Data Setup

1. Start Admin dashboard
2. Register and login (No authentication)
3. Set Content
```
- Testimonial
1. [Create ContentType] (http://localhost:1337/admin/plugins/content-type-builder/content-types/api::testimonial.testimonial
Fields:
    quote: string;
	author_name: string;
	order: number;
2. Create data: http://localhost:1337/admin/content-manager/collection-types/api::testimonial.testimonial?page=1&pageSize=10&sort=author_name%3AASC

- Speaker
1. [Create ContentType]
Fields:
    name: string;
    bio: string;
    photo: string;
2. Create data
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---
