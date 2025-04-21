import { ButtonInteraction, Message, ModalSubmitInteraction } from "discord.js";
import { assign, fromPromise, setup } from "xstate";
import { User } from "../../data";

export const loginMachine = setup({
  types: {
    context: {} as {
      discordUserId: string;
      discordUserName: string;
      email: string;
      user: User | null;
      adminApprovalMessage: Message | null;
      userMessage: Message | null;
      interaction: ButtonInteraction | ModalSubmitInteraction | null;
    },
    events: {} as
      | { type: "promptLogin" }
      | { type: "connectUser"; interaction: ButtonInteraction }
      | {
          type: "submitEmail";
          email: string;
          interaction: ModalSubmitInteraction;
        }
      | { type: "approve"; adminMessage: Message }
      | { type: "reject"; adminMessage: Message },
    input: {
      discordUserId: "",
      discordUserName: "",
    },
  },
  actors: {
    sendTyping: fromPromise(async () => {
      // Logic to send typing status
      console.log("Sending typing...");
    }),
    checkAccount: fromPromise(async () => {
      // Logic to check if the user exists in the database
      console.log("Checking account...");
      return null as User | null;
    }),
    sendLoginLink: fromPromise(async ({}: { input: { user: User } }) => {
      // Logic to send the login link to the user
      console.log(`Sending login link...`);
    }),
    askToConnectAccount: fromPromise(async () => {
      // Logic to ask the user to connect their account
      console.log("Asking to connect account...");
    }),
    askForEmail: fromPromise(
      async ({}: { input: { interaction: ButtonInteraction } }) => {
        // Logic to ask the user for their email
        console.log("Asking for email...");
      },
    ),
    requestApproval: fromPromise(
      async ({
        input,
      }: {
        input: {
          discordUserId: string;
          discordUserName: string;
          email: string;
          interaction: ModalSubmitInteraction;
        };
      }) => {
        // Logic to request approval from admin
        console.log(
          `Requesting approval for user with ID: ${input.discordUserId}`,
        );
        return null as { approvalRequestId: string } | null;
      },
    ),
    finishApproval: fromPromise(
      async ({
        input,
      }: {
        input: {
          type: "approved" | "rejected";
          discordUserId: string;
          email: string;
          adminMessage: Message;
          userMessage: Message;
        };
      }) => {
        // Logic to finish the approval process
        console.log(
          `Finishing approval for user with ID: ${input.discordUserId}`,
        );

        return null as User | null;
      },
    ),
  },
  actions: {},
  guards: {},
}).createMachine({
  context: ({ input }) => ({
    discordUserId: input.discordUserId,
    discordUserName: input.discordUserName,
    adminApprovalMessage: null,
    userMessage: null,
    email: "",
    user: null,
    interaction: null,
  }),
  id: "login",
  initial: "ready",
  states: {
    ready: {
      on: {
        promptLogin: {
          target: "checkAccount",
        },
      },
    },
    checkAccount: {
      invoke: [
        {
          src: "sendTyping",
        },
        {
          src: "checkAccount",
          onDone: [
            {
              guard: ({ event }) => !!event.output,
              target: "userFound",
              actions: assign({
                user: ({ event }) => event.output as User,
              }),
            },
            {
              target: "userNotFound",
              actions: assign({
                user: null,
              }),
            },
          ],
        },
      ],
    },
    userFound: {
      invoke: {
        src: "sendLoginLink",
        input: ({ context }) => ({
          user: context.user!,
        }),
      },
      onDone: {
        target: "loginLinkSent",
      },
      onError: {
        target: "error",
      },
    },
    loginLinkSent: {
      type: "final",
    },
    error: {
      type: "final",
    },

    userNotFound: {
      invoke: {
        src: "askToConnectAccount",
      },
      on: {
        connectUser: {
          target: "promptForEmail",
          actions: assign({
            interaction: ({ event }) => event.interaction,
          }),
        },
      },
    },
    promptForEmail: {
      invoke: {
        src: "askForEmail",
        input: ({ context }) => ({
          interaction: context.interaction as ButtonInteraction,
        }),
      },
      on: {
        submitEmail: {
          target: "sendForApproval",
          actions: assign({
            email: ({ event }) => event.email,
            interaction: ({ event }) => event.interaction,
            userMessage: ({ event }) => event.interaction.message,
          }),
        },
      },
    },

    sendForApproval: {
      invoke: [
        {
          src: "requestApproval",
          input: ({ context }) => ({
            discordUserId: context.discordUserId,
            discordUserName: context.discordUserName,
            email: context.email,
            interaction: context.interaction as ModalSubmitInteraction,
          }),
          onDone: {
            actions: assign({}),
          },
        },
      ],
      on: {
        approve: {
          target: "approved",
          actions: assign({
            adminApprovalMessage: ({ event }) => event.adminMessage,
          }),
        },
        reject: {
          target: "rejected",
          actions: assign({
            adminApprovalMessage: ({ event }) => event.adminMessage,
          }),
        },
      },
    },

    approved: {
      invoke: {
        src: "finishApproval",
        input: ({ context }) => ({
          type: "approved",
          discordUserId: context.discordUserId,
          email: context.email,
          adminMessage: context.adminApprovalMessage!,
          userMessage: context.userMessage!,
        }),
        onDone: {
          target: "userFound",
          actions: assign({
            user: ({ event }) => event.output as User,
          }),
        },
      },
    },

    rejected: {
      invoke: {
        src: "finishApproval",
        input: ({ context }) => ({
          type: "rejected",
          discordUserId: context.discordUserId,
          email: context.email,
          adminMessage: context.adminApprovalMessage!,
          userMessage: context.userMessage!,
        }),
        onDone: {
          target: "done",
        },
      },
    },

    done: {
      type: "final",
    },
  },
});
