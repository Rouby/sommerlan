const { defineConfig } = require("cypress");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const backend = `http://localhost:${process.env.PORT ?? 3022}`;

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4173",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async seedData({ model, data }) {
          const response = await fetch(`${backend}/seed`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model, data }),
          });

          return response.json();
        },

        async findData({ model, query }) {
          const response = await fetch(`${backend}/find`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model, query }),
          });

          return response.json();
        },

        async clearData() {
          const response = await fetch(`${backend}/clear`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          });

          return response.json();
        },

        async getMailsSent() {
          const response = await fetch(`${backend}/mails`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          });

          return response.json();
        },

        async login(data) {
          const response = await fetch(`${backend}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          return response.json();
        },
      });
    },
  },
});
