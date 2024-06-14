import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation App",
      social: {
        github: "https://github.com/JDMxCR",
      },
      sidebar: [
        {
          label: "Documentation",
          items: [
            // Each item here is one entry in the navigation menu.
            // { label: "Example Guide", link: "/documentation/example/" },
            {
              label: "Express.js",
              items: [
                {
                  label: "Getting Started",
                  link: "/express/express",
                },
                {
                  label: "Hello World",
                  link: "/express/helloworld",
                },
                {
                  label: "Basic Routing",
                  link: "/express/routing",
                },
              ],
            },
          ],
        },
        {
          label: "Code Snippets",
          items: [
            {
              label: "Server",
              items: [{ label: "Node.js", link: "/code/server/node" }],
            },
            {
              label: "Auth",
              items: [
                { label: "JWT", link: "/code/auth/jwt" },
                { label: "OAuth", link: "/code/auth/oauth" },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
