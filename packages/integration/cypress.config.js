const { defineConfig } = require("cypress");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async seed({ model, data }) {
          console.log('Seeding model "%s" with data: %o', model, data);

          const response = await fetch("http://localhost:3022/seed", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ model, data }),
          });

          return response.json();
        },
      });
    },
  },
});
