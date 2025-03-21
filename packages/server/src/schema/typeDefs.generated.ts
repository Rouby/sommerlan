import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 12, end: 20 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "syncCache",
            loc: { start: 25, end: 34 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "clear",
                loc: { start: 35, end: 40 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 42, end: 49 },
                },
                loc: { start: 42, end: 49 },
              },
              directives: [],
              loc: { start: 35, end: 49 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 52, end: 59 },
            },
            loc: { start: 52, end: 59 },
          },
          directives: [],
          loc: { start: 25, end: 59 },
        },
      ],
      loc: { start: 0, end: 61 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 67, end: 72 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 62, end: 72 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 79, end: 87 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 74, end: 87 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 96, end: 104 } },
      directives: [],
      loc: { start: 89, end: 104 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Date", loc: { start: 113, end: 117 } },
      directives: [],
      loc: { start: 106, end: 117 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "Time", loc: { start: 126, end: 130 } },
      directives: [],
      loc: { start: 119, end: 130 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "JSON", loc: { start: 139, end: 143 } },
      directives: [],
      loc: { start: 132, end: 143 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "JWT", loc: { start: 152, end: 155 } },
      directives: [],
      loc: { start: 145, end: 155 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "File", loc: { start: 164, end: 168 } },
      directives: [],
      loc: { start: 157, end: 168 },
    },
    {
      kind: "DirectiveDefinition",
      name: { kind: "Name", value: "rbac", loc: { start: 181, end: 185 } },
      arguments: [],
      repeatable: false,
      locations: [
        { kind: "Name", value: "OBJECT", loc: { start: 189, end: 195 } },
      ],
      loc: { start: 170, end: 195 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 208, end: 213 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donations",
            loc: { start: 218, end: 227 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Donation",
                    loc: { start: 230, end: 238 },
                  },
                  loc: { start: 230, end: 238 },
                },
                loc: { start: 230, end: 239 },
              },
              loc: { start: 229, end: 240 },
            },
            loc: { start: 229, end: 241 },
          },
          directives: [],
          loc: { start: 218, end: 241 },
        },
      ],
      loc: { start: 196, end: 243 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 257, end: 265 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donate",
            loc: { start: 270, end: 276 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "amount",
                loc: { start: 277, end: 283 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 285, end: 290 },
                  },
                  loc: { start: 285, end: 290 },
                },
                loc: { start: 285, end: 291 },
              },
              directives: [],
              loc: { start: 277, end: 291 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "incognito",
                loc: { start: 293, end: 302 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 304, end: 311 },
                },
                loc: { start: 304, end: 311 },
              },
              directives: [],
              loc: { start: 293, end: 311 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dedication",
                loc: { start: 313, end: 323 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "DonationDedication",
                  loc: { start: 325, end: 343 },
                },
                loc: { start: 325, end: 343 },
              },
              directives: [],
              loc: { start: 313, end: 343 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Donation",
                loc: { start: 346, end: 354 },
              },
              loc: { start: 346, end: 354 },
            },
            loc: { start: 346, end: 355 },
          },
          directives: [],
          loc: { start: 270, end: 355 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rescindDonation",
            loc: { start: 358, end: 373 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 374, end: 376 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 378, end: 380 },
                  },
                  loc: { start: 378, end: 380 },
                },
                loc: { start: 378, end: 381 },
              },
              directives: [],
              loc: { start: 374, end: 381 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Donation",
                loc: { start: 384, end: 392 },
              },
              loc: { start: 384, end: 392 },
            },
            loc: { start: 384, end: 393 },
          },
          directives: [],
          loc: { start: 358, end: 393 },
        },
      ],
      loc: { start: 245, end: 395 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Donation", loc: { start: 402, end: 410 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 415, end: 417 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 419, end: 421 },
              },
              loc: { start: 419, end: 421 },
            },
            loc: { start: 419, end: 422 },
          },
          directives: [],
          loc: { start: 415, end: 422 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donator",
            loc: { start: 425, end: 432 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 434, end: 438 },
            },
            loc: { start: 434, end: 438 },
          },
          directives: [],
          loc: { start: 425, end: 438 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 441, end: 447 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 449, end: 454 },
              },
              loc: { start: 449, end: 454 },
            },
            loc: { start: 449, end: 455 },
          },
          directives: [],
          loc: { start: 441, end: 455 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dedication",
            loc: { start: 458, end: 468 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DonationDedication",
                loc: { start: 470, end: 488 },
              },
              loc: { start: 470, end: 488 },
            },
            loc: { start: 470, end: 489 },
          },
          directives: [],
          loc: { start: 458, end: 489 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "party", loc: { start: 492, end: 497 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 499, end: 504 },
              },
              loc: { start: 499, end: 504 },
            },
            loc: { start: 499, end: 505 },
          },
          directives: [],
          loc: { start: 492, end: 505 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "received",
            loc: { start: 508, end: 516 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 518, end: 525 },
              },
              loc: { start: 518, end: 525 },
            },
            loc: { start: 518, end: 526 },
          },
          directives: [],
          loc: { start: 508, end: 526 },
        },
      ],
      loc: { start: 397, end: 528 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "DonationDedication",
        loc: { start: 535, end: 553 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RENT", loc: { start: 558, end: 562 } },
          directives: [],
          loc: { start: 558, end: 562 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "WARCHEST",
            loc: { start: 565, end: 573 },
          },
          directives: [],
          loc: { start: 565, end: 573 },
        },
      ],
      loc: { start: 530, end: 575 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 588, end: 596 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "planEvent",
            loc: { start: 601, end: 610 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 611, end: 616 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "EventInput",
                    loc: { start: 618, end: 628 },
                  },
                  loc: { start: 618, end: 628 },
                },
                loc: { start: 618, end: 629 },
              },
              directives: [],
              loc: { start: 611, end: 629 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 632, end: 637 },
              },
              loc: { start: 632, end: 637 },
            },
            loc: { start: 632, end: 638 },
          },
          directives: [],
          loc: { start: 601, end: 638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participateInEvent",
            loc: { start: 641, end: 659 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 660, end: 662 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 664, end: 666 },
                  },
                  loc: { start: 664, end: 666 },
                },
                loc: { start: 664, end: 667 },
              },
              directives: [],
              loc: { start: 660, end: 667 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 670, end: 675 },
              },
              loc: { start: 670, end: 675 },
            },
            loc: { start: 670, end: 676 },
          },
          directives: [],
          loc: { start: 641, end: 676 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "leaveEvent",
            loc: { start: 679, end: 689 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 690, end: 692 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 694, end: 696 },
                  },
                  loc: { start: 694, end: 696 },
                },
                loc: { start: 694, end: 697 },
              },
              directives: [],
              loc: { start: 690, end: 697 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 700, end: 705 },
              },
              loc: { start: 700, end: 705 },
            },
            loc: { start: 700, end: 706 },
          },
          directives: [],
          loc: { start: 679, end: 706 },
        },
      ],
      loc: { start: 576, end: 708 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 722, end: 727 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "events",
            loc: { start: 732, end: 738 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Event",
                    loc: { start: 741, end: 746 },
                  },
                  loc: { start: 741, end: 746 },
                },
                loc: { start: 741, end: 747 },
              },
              loc: { start: 740, end: 748 },
            },
            loc: { start: 740, end: 749 },
          },
          directives: [],
          loc: { start: 732, end: 749 },
        },
      ],
      loc: { start: 710, end: 751 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Event", loc: { start: 758, end: 763 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 768, end: 770 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 772, end: 774 },
              },
              loc: { start: 772, end: 774 },
            },
            loc: { start: 772, end: 775 },
          },
          directives: [],
          loc: { start: 768, end: 775 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 778, end: 782 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 784, end: 790 },
              },
              loc: { start: 784, end: 790 },
            },
            loc: { start: 784, end: 791 },
          },
          directives: [],
          loc: { start: 778, end: 791 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "party", loc: { start: 794, end: 799 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 801, end: 806 },
              },
              loc: { start: 801, end: 806 },
            },
            loc: { start: 801, end: 807 },
          },
          directives: [],
          loc: { start: 794, end: 807 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "date", loc: { start: 810, end: 814 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 816, end: 820 },
            },
            loc: { start: 816, end: 820 },
          },
          directives: [],
          loc: { start: 810, end: 820 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 823, end: 832 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 834, end: 840 },
            },
            loc: { start: 834, end: 840 },
          },
          directives: [],
          loc: { start: 823, end: 840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 843, end: 850 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 852, end: 858 },
            },
            loc: { start: 852, end: 858 },
          },
          directives: [],
          loc: { start: 843, end: 858 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "organizer",
            loc: { start: 861, end: 870 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 872, end: 876 },
              },
              loc: { start: 872, end: 876 },
            },
            loc: { start: 872, end: 877 },
          },
          directives: [],
          loc: { start: 861, end: 877 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participants",
            loc: { start: 880, end: 892 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "User",
                    loc: { start: 895, end: 899 },
                  },
                  loc: { start: 895, end: 899 },
                },
                loc: { start: 895, end: 900 },
              },
              loc: { start: 894, end: 901 },
            },
            loc: { start: 894, end: 902 },
          },
          directives: [],
          loc: { start: 880, end: 902 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 905, end: 916 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 918, end: 924 },
            },
            loc: { start: 918, end: 924 },
          },
          directives: [],
          loc: { start: 905, end: 924 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 927, end: 932 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 934, end: 940 },
              },
              loc: { start: 934, end: 940 },
            },
            loc: { start: 934, end: 941 },
          },
          directives: [],
          loc: { start: 927, end: 941 },
        },
      ],
      loc: { start: 753, end: 943 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "EventInput",
        loc: { start: 951, end: 961 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 966, end: 968 } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 970, end: 972 } },
            loc: { start: 970, end: 972 },
          },
          directives: [],
          loc: { start: 966, end: 972 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 975, end: 979 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 981, end: 987 },
              },
              loc: { start: 981, end: 987 },
            },
            loc: { start: 981, end: 988 },
          },
          directives: [],
          loc: { start: 975, end: 988 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 991, end: 998 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1000, end: 1002 },
              },
              loc: { start: 1000, end: 1002 },
            },
            loc: { start: 1000, end: 1003 },
          },
          directives: [],
          loc: { start: 991, end: 1003 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "date",
            loc: { start: 1006, end: 1010 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 1012, end: 1016 },
            },
            loc: { start: 1012, end: 1016 },
          },
          directives: [],
          loc: { start: 1006, end: 1016 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 1019, end: 1028 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1030, end: 1036 },
            },
            loc: { start: 1030, end: 1036 },
          },
          directives: [],
          loc: { start: 1019, end: 1036 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 1039, end: 1046 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1048, end: 1054 },
            },
            loc: { start: 1048, end: 1054 },
          },
          directives: [],
          loc: { start: 1039, end: 1054 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1057, end: 1068 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1070, end: 1076 },
            },
            loc: { start: 1070, end: 1076 },
          },
          directives: [],
          loc: { start: 1057, end: 1076 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1079, end: 1084 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 1086, end: 1090 },
              },
              loc: { start: 1086, end: 1090 },
            },
            loc: { start: 1086, end: 1091 },
          },
          directives: [],
          loc: { start: 1079, end: 1091 },
        },
      ],
      loc: { start: 945, end: 1093 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1106, end: 1111 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "games",
            loc: { start: 1116, end: 1121 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Game",
                    loc: { start: 1124, end: 1128 },
                  },
                  loc: { start: 1124, end: 1128 },
                },
                loc: { start: 1124, end: 1129 },
              },
              loc: { start: 1123, end: 1130 },
            },
            loc: { start: 1123, end: 1131 },
          },
          directives: [],
          loc: { start: 1116, end: 1131 },
        },
      ],
      loc: { start: 1094, end: 1133 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1147, end: 1155 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addGameToParty",
            loc: { start: 1160, end: 1174 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1175, end: 1182 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1184, end: 1186 },
                  },
                  loc: { start: 1184, end: 1186 },
                },
                loc: { start: 1184, end: 1187 },
              },
              directives: [],
              loc: { start: 1175, end: 1187 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1189, end: 1193 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1195, end: 1201 },
                  },
                  loc: { start: 1195, end: 1201 },
                },
                loc: { start: 1195, end: 1202 },
              },
              directives: [],
              loc: { start: 1189, end: 1202 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AddGameResult",
                loc: { start: 1205, end: 1218 },
              },
              loc: { start: 1205, end: 1218 },
            },
            loc: { start: 1205, end: 1219 },
          },
          directives: [],
          loc: { start: 1160, end: 1219 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setGamesPlayed",
            loc: { start: 1222, end: 1236 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1237, end: 1244 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1246, end: 1248 },
                  },
                  loc: { start: 1246, end: 1248 },
                },
                loc: { start: 1246, end: 1249 },
              },
              directives: [],
              loc: { start: 1237, end: 1249 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "gameIds",
                loc: { start: 1251, end: 1258 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "ID",
                        loc: { start: 1261, end: 1263 },
                      },
                      loc: { start: 1261, end: 1263 },
                    },
                    loc: { start: 1261, end: 1264 },
                  },
                  loc: { start: 1260, end: 1265 },
                },
                loc: { start: 1260, end: 1266 },
              },
              directives: [],
              loc: { start: 1251, end: 1266 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1269, end: 1278 },
              },
              loc: { start: 1269, end: 1278 },
            },
            loc: { start: 1269, end: 1279 },
          },
          directives: [],
          loc: { start: 1222, end: 1279 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateGame",
            loc: { start: 1282, end: 1292 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1293, end: 1298 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "GameInput",
                    loc: { start: 1300, end: 1309 },
                  },
                  loc: { start: 1300, end: 1309 },
                },
                loc: { start: 1300, end: 1310 },
              },
              directives: [],
              loc: { start: 1293, end: 1310 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1313, end: 1317 },
              },
              loc: { start: 1313, end: 1317 },
            },
            loc: { start: 1313, end: 1318 },
          },
          directives: [],
          loc: { start: 1282, end: 1318 },
        },
      ],
      loc: { start: 1135, end: 1320 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 1334, end: 1339 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1344, end: 1355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "GameOnParty",
                    loc: { start: 1358, end: 1369 },
                  },
                  loc: { start: 1358, end: 1369 },
                },
                loc: { start: 1358, end: 1370 },
              },
              loc: { start: 1357, end: 1371 },
            },
            loc: { start: 1357, end: 1372 },
          },
          directives: [],
          loc: { start: 1344, end: 1372 },
        },
      ],
      loc: { start: 1322, end: 1374 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 1388, end: 1397 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1402, end: 1413 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Game",
                    loc: { start: 1416, end: 1420 },
                  },
                  loc: { start: 1416, end: 1420 },
                },
                loc: { start: 1416, end: 1421 },
              },
              loc: { start: 1415, end: 1422 },
            },
            loc: { start: 1415, end: 1423 },
          },
          directives: [],
          loc: { start: 1402, end: 1423 },
        },
      ],
      loc: { start: 1376, end: 1425 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AddGameResult",
        loc: { start: 1432, end: 1445 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1450, end: 1454 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1456, end: 1460 },
              },
              loc: { start: 1456, end: 1460 },
            },
            loc: { start: 1456, end: 1461 },
          },
          directives: [],
          loc: { start: 1450, end: 1461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 1464, end: 1473 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1475, end: 1484 },
              },
              loc: { start: 1475, end: 1484 },
            },
            loc: { start: 1475, end: 1485 },
          },
          directives: [],
          loc: { start: 1464, end: 1485 },
        },
      ],
      loc: { start: 1427, end: 1487 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Game", loc: { start: 1494, end: 1498 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1503, end: 1505 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1507, end: 1509 },
              },
              loc: { start: 1507, end: 1509 },
            },
            loc: { start: 1507, end: 1510 },
          },
          directives: [],
          loc: { start: 1503, end: 1510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1513, end: 1517 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1519, end: 1525 },
              },
              loc: { start: 1519, end: 1525 },
            },
            loc: { start: 1519, end: 1526 },
          },
          directives: [],
          loc: { start: 1513, end: 1526 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1529, end: 1534 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1536, end: 1542 },
              },
              loc: { start: 1536, end: 1542 },
            },
            loc: { start: 1536, end: 1543 },
          },
          directives: [],
          loc: { start: 1529, end: 1543 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1546, end: 1553 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "User",
                    loc: { start: 1556, end: 1560 },
                  },
                  loc: { start: 1556, end: 1560 },
                },
                loc: { start: 1556, end: 1561 },
              },
              loc: { start: 1555, end: 1562 },
            },
            loc: { start: 1555, end: 1563 },
          },
          directives: [],
          loc: { start: 1546, end: 1563 },
        },
      ],
      loc: { start: 1489, end: 1565 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameOnParty",
        loc: { start: 1572, end: 1583 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1588, end: 1590 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1592, end: 1594 },
              },
              loc: { start: 1592, end: 1594 },
            },
            loc: { start: 1592, end: 1595 },
          },
          directives: [],
          loc: { start: 1588, end: 1595 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1598, end: 1602 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1604, end: 1608 },
              },
              loc: { start: 1604, end: 1608 },
            },
            loc: { start: 1604, end: 1609 },
          },
          directives: [],
          loc: { start: 1598, end: 1609 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1612, end: 1617 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1619, end: 1624 },
              },
              loc: { start: 1619, end: 1624 },
            },
            loc: { start: 1619, end: 1625 },
          },
          directives: [],
          loc: { start: 1612, end: 1625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1628, end: 1635 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "User",
                    loc: { start: 1638, end: 1642 },
                  },
                  loc: { start: 1638, end: 1642 },
                },
                loc: { start: 1638, end: 1643 },
              },
              loc: { start: 1637, end: 1644 },
            },
            loc: { start: 1637, end: 1645 },
          },
          directives: [],
          loc: { start: 1628, end: 1645 },
        },
      ],
      loc: { start: 1567, end: 1647 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameInput",
        loc: { start: 1655, end: 1664 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1669, end: 1671 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1673, end: 1675 },
              },
              loc: { start: 1673, end: 1675 },
            },
            loc: { start: 1673, end: 1676 },
          },
          directives: [],
          loc: { start: 1669, end: 1676 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1679, end: 1684 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 1686, end: 1690 },
              },
              loc: { start: 1686, end: 1690 },
            },
            loc: { start: 1686, end: 1691 },
          },
          directives: [],
          loc: { start: 1679, end: 1691 },
        },
      ],
      loc: { start: 1649, end: 1693 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1706, end: 1711 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1716, end: 1721 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1722, end: 1724 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1726, end: 1728 },
                  },
                  loc: { start: 1726, end: 1728 },
                },
                loc: { start: 1726, end: 1729 },
              },
              directives: [],
              loc: { start: 1722, end: 1729 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1732, end: 1737 },
            },
            loc: { start: 1732, end: 1737 },
          },
          directives: [],
          loc: { start: 1716, end: 1737 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parties",
            loc: { start: 1740, end: 1747 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Party",
                    loc: { start: 1750, end: 1755 },
                  },
                  loc: { start: 1750, end: 1755 },
                },
                loc: { start: 1750, end: 1756 },
              },
              loc: { start: 1749, end: 1757 },
            },
            loc: { start: 1749, end: 1758 },
          },
          directives: [],
          loc: { start: 1740, end: 1758 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "nextParty",
            loc: { start: 1761, end: 1770 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1772, end: 1777 },
            },
            loc: { start: 1772, end: 1777 },
          },
          directives: [],
          loc: { start: 1761, end: 1777 },
        },
      ],
      loc: { start: 1694, end: 1779 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1793, end: 1801 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setAttendance",
            loc: { start: 1806, end: 1819 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1820, end: 1827 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1829, end: 1831 },
                  },
                  loc: { start: 1829, end: 1831 },
                },
                loc: { start: 1829, end: 1832 },
              },
              directives: [],
              loc: { start: 1820, end: 1832 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1834, end: 1840 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1842, end: 1844 },
                },
                loc: { start: 1842, end: 1844 },
              },
              directives: [],
              loc: { start: 1834, end: 1844 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dates",
                loc: { start: 1846, end: 1851 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "Date",
                        loc: { start: 1854, end: 1858 },
                      },
                      loc: { start: 1854, end: 1858 },
                    },
                    loc: { start: 1854, end: 1859 },
                  },
                  loc: { start: 1853, end: 1860 },
                },
                loc: { start: 1853, end: 1861 },
              },
              directives: [],
              loc: { start: 1846, end: 1861 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1864, end: 1869 },
              },
              loc: { start: 1864, end: 1869 },
            },
            loc: { start: 1864, end: 1870 },
          },
          directives: [],
          loc: { start: 1806, end: 1870 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeAttendance",
            loc: { start: 1873, end: 1889 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1890, end: 1897 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1899, end: 1901 },
                  },
                  loc: { start: 1899, end: 1901 },
                },
                loc: { start: 1899, end: 1902 },
              },
              directives: [],
              loc: { start: 1890, end: 1902 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1904, end: 1910 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1912, end: 1914 },
                },
                loc: { start: 1912, end: 1914 },
              },
              directives: [],
              loc: { start: 1904, end: 1914 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1917, end: 1922 },
              },
              loc: { start: 1917, end: 1922 },
            },
            loc: { start: 1917, end: 1923 },
          },
          directives: [],
          loc: { start: 1873, end: 1923 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "requestRoom",
            loc: { start: 1926, end: 1937 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1938, end: 1945 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1947, end: 1949 },
                  },
                  loc: { start: 1947, end: 1949 },
                },
                loc: { start: 1947, end: 1950 },
              },
              directives: [],
              loc: { start: 1938, end: 1950 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1953, end: 1962 },
            },
            loc: { start: 1953, end: 1962 },
          },
          directives: [],
          loc: { start: 1926, end: 1962 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recindRoom",
            loc: { start: 1965, end: 1975 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1976, end: 1983 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1985, end: 1987 },
                  },
                  loc: { start: 1985, end: 1987 },
                },
                loc: { start: 1985, end: 1988 },
              },
              directives: [],
              loc: { start: 1976, end: 1988 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1991, end: 2000 },
            },
            loc: { start: 1991, end: 2000 },
          },
          directives: [],
          loc: { start: 1965, end: 2000 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "grantRoom",
            loc: { start: 2003, end: 2012 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2013, end: 2024 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2026, end: 2028 },
                  },
                  loc: { start: 2026, end: 2028 },
                },
                loc: { start: 2026, end: 2029 },
              },
              directives: [],
              loc: { start: 2013, end: 2029 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2032, end: 2041 },
            },
            loc: { start: 2032, end: 2041 },
          },
          directives: [],
          loc: { start: 2003, end: 2041 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "denyRoom",
            loc: { start: 2044, end: 2052 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2053, end: 2064 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2066, end: 2068 },
                  },
                  loc: { start: 2066, end: 2068 },
                },
                loc: { start: 2066, end: 2069 },
              },
              directives: [],
              loc: { start: 2053, end: 2069 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2072, end: 2081 },
            },
            loc: { start: 2072, end: 2081 },
          },
          directives: [],
          loc: { start: 2044, end: 2081 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateParty",
            loc: { start: 2084, end: 2095 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2096, end: 2101 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PartyInput",
                    loc: { start: 2103, end: 2113 },
                  },
                  loc: { start: 2103, end: 2113 },
                },
                loc: { start: 2103, end: 2114 },
              },
              directives: [],
              loc: { start: 2096, end: 2114 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2117, end: 2122 },
              },
              loc: { start: 2117, end: 2122 },
            },
            loc: { start: 2117, end: 2123 },
          },
          directives: [],
          loc: { start: 2084, end: 2123 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addPicture",
            loc: { start: 2126, end: 2136 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2137, end: 2142 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PictureInput",
                    loc: { start: 2144, end: 2156 },
                  },
                  loc: { start: 2144, end: 2156 },
                },
                loc: { start: 2144, end: 2157 },
              },
              directives: [],
              loc: { start: 2137, end: 2157 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2160, end: 2167 },
              },
              loc: { start: 2160, end: 2167 },
            },
            loc: { start: 2160, end: 2168 },
          },
          directives: [],
          loc: { start: 2126, end: 2168 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 2171, end: 2178 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2179, end: 2185 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2187, end: 2189 },
                  },
                  loc: { start: 2187, end: 2189 },
                },
                loc: { start: 2187, end: 2190 },
              },
              directives: [],
              loc: { start: 2179, end: 2190 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2193, end: 2202 },
            },
            loc: { start: 2193, end: 2202 },
          },
          directives: [],
          loc: { start: 2171, end: 2202 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 2205, end: 2213 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2214, end: 2220 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2222, end: 2224 },
                  },
                  loc: { start: 2222, end: 2224 },
                },
                loc: { start: 2222, end: 2225 },
              },
              directives: [],
              loc: { start: 2214, end: 2225 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2228, end: 2237 },
            },
            loc: { start: 2228, end: 2237 },
          },
          directives: [],
          loc: { start: 2205, end: 2237 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePaidDues",
            loc: { start: 2240, end: 2254 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2255, end: 2266 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2268, end: 2270 },
                  },
                  loc: { start: 2268, end: 2270 },
                },
                loc: { start: 2268, end: 2271 },
              },
              directives: [],
              loc: { start: 2255, end: 2271 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "paidDues",
                loc: { start: 2273, end: 2281 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 2283, end: 2288 },
                  },
                  loc: { start: 2283, end: 2288 },
                },
                loc: { start: 2283, end: 2289 },
              },
              directives: [],
              loc: { start: 2273, end: 2289 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2292, end: 2301 },
            },
            loc: { start: 2292, end: 2301 },
          },
          directives: [],
          loc: { start: 2240, end: 2301 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createPayPalOrder",
            loc: { start: 2304, end: 2321 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2323, end: 2325 },
              },
              loc: { start: 2323, end: 2325 },
            },
            loc: { start: 2323, end: 2326 },
          },
          directives: [],
          loc: { start: 2304, end: 2326 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "capturePayPalOrder",
            loc: { start: 2329, end: 2347 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderId",
                loc: { start: 2348, end: 2355 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2357, end: 2359 },
                  },
                  loc: { start: 2357, end: 2359 },
                },
                loc: { start: 2357, end: 2360 },
              },
              directives: [],
              loc: { start: 2348, end: 2360 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2363, end: 2372 },
            },
            loc: { start: 2363, end: 2372 },
          },
          directives: [],
          loc: { start: 2329, end: 2372 },
        },
      ],
      loc: { start: 1781, end: 2374 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2381, end: 2386 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: {
            kind: "Name",
            value: "rbac",
            loc: { start: 2388, end: 2392 },
          },
          arguments: [],
          loc: { start: 2387, end: 2392 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2397, end: 2399 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2401, end: 2403 },
              },
              loc: { start: 2401, end: 2403 },
            },
            loc: { start: 2401, end: 2404 },
          },
          directives: [],
          loc: { start: 2397, end: 2404 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2407, end: 2416 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2418, end: 2422 },
              },
              loc: { start: 2418, end: 2422 },
            },
            loc: { start: 2418, end: 2423 },
          },
          directives: [],
          loc: { start: 2407, end: 2423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2426, end: 2433 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2435, end: 2439 },
              },
              loc: { start: 2435, end: 2439 },
            },
            loc: { start: 2435, end: 2440 },
          },
          directives: [],
          loc: { start: 2426, end: 2440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tentative",
            loc: { start: 2443, end: 2452 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2454, end: 2461 },
              },
              loc: { start: 2454, end: 2461 },
            },
            loc: { start: 2454, end: 2462 },
          },
          directives: [],
          loc: { start: 2443, end: 2462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2465, end: 2473 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2475, end: 2481 },
              },
              loc: { start: 2475, end: 2481 },
            },
            loc: { start: 2475, end: 2482 },
          },
          directives: [],
          loc: { start: 2465, end: 2482 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2485, end: 2502 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2504, end: 2510 },
            },
            loc: { start: 2504, end: 2510 },
          },
          directives: [],
          loc: { start: 2485, end: 2510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2513, end: 2527 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2529, end: 2532 },
              },
              loc: { start: 2529, end: 2532 },
            },
            loc: { start: 2529, end: 2533 },
          },
          directives: [],
          loc: { start: 2513, end: 2533 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2536, end: 2547 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2549, end: 2554 },
              },
              loc: { start: 2549, end: 2554 },
            },
            loc: { start: 2549, end: 2555 },
          },
          directives: [],
          loc: { start: 2536, end: 2555 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2558, end: 2568 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Attending",
                    loc: { start: 2571, end: 2580 },
                  },
                  loc: { start: 2571, end: 2580 },
                },
                loc: { start: 2571, end: 2581 },
              },
              loc: { start: 2570, end: 2582 },
            },
            loc: { start: 2570, end: 2583 },
          },
          directives: [],
          loc: { start: 2558, end: 2583 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2586, end: 2595 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2596, end: 2602 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2604, end: 2606 },
                },
                loc: { start: 2604, end: 2606 },
              },
              directives: [],
              loc: { start: 2596, end: 2606 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2609, end: 2618 },
            },
            loc: { start: 2609, end: 2618 },
          },
          directives: [],
          loc: { start: 2586, end: 2618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2621, end: 2629 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Picture",
                    loc: { start: 2632, end: 2639 },
                  },
                  loc: { start: 2632, end: 2639 },
                },
                loc: { start: 2632, end: 2640 },
              },
              loc: { start: 2631, end: 2641 },
            },
            loc: { start: 2631, end: 2642 },
          },
          directives: [],
          loc: { start: 2621, end: 2642 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2645, end: 2659 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2661, end: 2664 },
              },
              loc: { start: 2661, end: 2664 },
            },
            loc: { start: 2661, end: 2665 },
          },
          directives: [],
          loc: { start: 2645, end: 2665 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2668, end: 2688 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2690, end: 2694 },
            },
            loc: { start: 2690, end: 2694 },
          },
          directives: [],
          loc: { start: 2668, end: 2694 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2697, end: 2703 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2705, end: 2709 },
            },
            loc: { start: 2705, end: 2709 },
          },
          directives: [],
          loc: { start: 2697, end: 2709 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2712, end: 2727 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2729, end: 2734 },
            },
            loc: { start: 2729, end: 2734 },
          },
          directives: [],
          loc: { start: 2712, end: 2734 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2737, end: 2745 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2747, end: 2752 },
            },
            loc: { start: 2747, end: 2752 },
          },
          directives: [],
          loc: { start: 2737, end: 2752 },
        },
      ],
      loc: { start: 2376, end: 2754 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2761, end: 2768 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2773, end: 2775 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2777, end: 2779 },
              },
              loc: { start: 2777, end: 2779 },
            },
            loc: { start: 2777, end: 2780 },
          },
          directives: [],
          loc: { start: 2773, end: 2780 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2783, end: 2786 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2788, end: 2794 },
              },
              loc: { start: 2788, end: 2794 },
            },
            loc: { start: 2788, end: 2795 },
          },
          directives: [],
          loc: { start: 2783, end: 2795 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2798, end: 2803 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2805, end: 2810 },
              },
              loc: { start: 2805, end: 2810 },
            },
            loc: { start: 2805, end: 2811 },
          },
          directives: [],
          loc: { start: 2798, end: 2811 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2814, end: 2818 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PictureTag",
                    loc: { start: 2821, end: 2831 },
                  },
                  loc: { start: 2821, end: 2831 },
                },
                loc: { start: 2821, end: 2832 },
              },
              loc: { start: 2820, end: 2833 },
            },
            loc: { start: 2820, end: 2834 },
          },
          directives: [],
          loc: { start: 2814, end: 2834 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2837, end: 2841 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2843, end: 2854 },
              },
              loc: { start: 2843, end: 2854 },
            },
            loc: { start: 2843, end: 2855 },
          },
          directives: [],
          loc: { start: 2837, end: 2855 },
        },
      ],
      loc: { start: 2756, end: 2857 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2864, end: 2875 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2880, end: 2885 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2887, end: 2890 },
              },
              loc: { start: 2887, end: 2890 },
            },
            loc: { start: 2887, end: 2891 },
          },
          directives: [],
          loc: { start: 2880, end: 2891 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2894, end: 2900 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2902, end: 2905 },
              },
              loc: { start: 2902, end: 2905 },
            },
            loc: { start: 2902, end: 2906 },
          },
          directives: [],
          loc: { start: 2894, end: 2906 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2909, end: 2917 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2919, end: 2924 },
            },
            loc: { start: 2919, end: 2924 },
          },
          directives: [],
          loc: { start: 2909, end: 2924 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2927, end: 2936 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2938, end: 2943 },
            },
            loc: { start: 2938, end: 2943 },
          },
          directives: [],
          loc: { start: 2927, end: 2943 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2946, end: 2954 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2956, end: 2961 },
            },
            loc: { start: 2956, end: 2961 },
          },
          directives: [],
          loc: { start: 2946, end: 2961 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2964, end: 2970 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2972, end: 2980 },
            },
            loc: { start: 2972, end: 2980 },
          },
          directives: [],
          loc: { start: 2964, end: 2980 },
        },
      ],
      loc: { start: 2859, end: 2982 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2989, end: 2999 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3004, end: 3006 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3008, end: 3010 },
              },
              loc: { start: 3008, end: 3010 },
            },
            loc: { start: 3008, end: 3011 },
          },
          directives: [],
          loc: { start: 3004, end: 3011 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3014, end: 3018 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3020, end: 3024 },
              },
              loc: { start: 3020, end: 3024 },
            },
            loc: { start: 3020, end: 3025 },
          },
          directives: [],
          loc: { start: 3014, end: 3025 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 3028, end: 3035 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 3037, end: 3044 },
              },
              loc: { start: 3037, end: 3044 },
            },
            loc: { start: 3037, end: 3045 },
          },
          directives: [],
          loc: { start: 3028, end: 3045 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3048, end: 3059 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3061, end: 3072 },
              },
              loc: { start: 3061, end: 3072 },
            },
            loc: { start: 3061, end: 3073 },
          },
          directives: [],
          loc: { start: 3048, end: 3073 },
        },
      ],
      loc: { start: 2984, end: 3075 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 3084, end: 3095 },
      },
      directives: [],
      loc: { start: 3077, end: 3095 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 3103, end: 3113 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3118, end: 3120 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3122, end: 3124 },
            },
            loc: { start: 3122, end: 3124 },
          },
          directives: [],
          loc: { start: 3118, end: 3124 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 3127, end: 3136 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3138, end: 3142 },
              },
              loc: { start: 3138, end: 3142 },
            },
            loc: { start: 3138, end: 3143 },
          },
          directives: [],
          loc: { start: 3127, end: 3143 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 3146, end: 3153 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3155, end: 3159 },
              },
              loc: { start: 3155, end: 3159 },
            },
            loc: { start: 3155, end: 3160 },
          },
          directives: [],
          loc: { start: 3146, end: 3160 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 3163, end: 3171 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3173, end: 3179 },
              },
              loc: { start: 3173, end: 3179 },
            },
            loc: { start: 3173, end: 3180 },
          },
          directives: [],
          loc: { start: 3163, end: 3180 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 3183, end: 3200 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3202, end: 3208 },
            },
            loc: { start: 3202, end: 3208 },
          },
          directives: [],
          loc: { start: 3183, end: 3208 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 3211, end: 3225 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3227, end: 3230 },
              },
              loc: { start: 3227, end: 3230 },
            },
            loc: { start: 3227, end: 3231 },
          },
          directives: [],
          loc: { start: 3211, end: 3231 },
        },
      ],
      loc: { start: 3097, end: 3233 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 3241, end: 3253 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3258, end: 3262 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3264, end: 3270 },
              },
              loc: { start: 3264, end: 3270 },
            },
            loc: { start: 3264, end: 3271 },
          },
          directives: [],
          loc: { start: 3258, end: 3271 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 3274, end: 3281 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3283, end: 3285 },
              },
              loc: { start: 3283, end: 3285 },
            },
            loc: { start: 3283, end: 3286 },
          },
          directives: [],
          loc: { start: 3274, end: 3286 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3289, end: 3293 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 3295, end: 3299 },
              },
              loc: { start: 3295, end: 3299 },
            },
            loc: { start: 3295, end: 3300 },
          },
          directives: [],
          loc: { start: 3289, end: 3300 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3303, end: 3307 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "PictureTagInput",
                  loc: { start: 3310, end: 3325 },
                },
                loc: { start: 3310, end: 3325 },
              },
              loc: { start: 3310, end: 3326 },
            },
            loc: { start: 3309, end: 3327 },
          },
          directives: [],
          loc: { start: 3303, end: 3327 },
        },
      ],
      loc: { start: 3235, end: 3329 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3337, end: 3352 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3357, end: 3363 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3365, end: 3367 },
              },
              loc: { start: 3365, end: 3367 },
            },
            loc: { start: 3365, end: 3368 },
          },
          directives: [],
          loc: { start: 3357, end: 3368 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3371, end: 3382 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3384, end: 3395 },
              },
              loc: { start: 3384, end: 3395 },
            },
            loc: { start: 3384, end: 3396 },
          },
          directives: [],
          loc: { start: 3371, end: 3396 },
        },
      ],
      loc: { start: 3331, end: 3398 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3405, end: 3414 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3419, end: 3421 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3423, end: 3425 },
              },
              loc: { start: 3423, end: 3425 },
            },
            loc: { start: 3423, end: 3426 },
          },
          directives: [],
          loc: { start: 3419, end: 3426 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3429, end: 3434 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3436, end: 3441 },
              },
              loc: { start: 3436, end: 3441 },
            },
            loc: { start: 3436, end: 3442 },
          },
          directives: [],
          loc: { start: 3429, end: 3442 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3445, end: 3450 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Date",
                    loc: { start: 3453, end: 3457 },
                  },
                  loc: { start: 3453, end: 3457 },
                },
                loc: { start: 3453, end: 3458 },
              },
              loc: { start: 3452, end: 3459 },
            },
            loc: { start: 3452, end: 3460 },
          },
          directives: [],
          loc: { start: 3445, end: 3460 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3463, end: 3467 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3469, end: 3479 },
            },
            loc: { start: 3469, end: 3479 },
          },
          directives: [],
          loc: { start: 3463, end: 3479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3482, end: 3497 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3499, end: 3503 },
              },
              loc: { start: 3499, end: 3503 },
            },
            loc: { start: 3499, end: 3504 },
          },
          directives: [],
          loc: { start: 3482, end: 3504 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3507, end: 3515 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3517, end: 3522 },
              },
              loc: { start: 3517, end: 3522 },
            },
            loc: { start: 3517, end: 3523 },
          },
          directives: [],
          loc: { start: 3507, end: 3523 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3526, end: 3533 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3535, end: 3543 },
            },
            loc: { start: 3535, end: 3543 },
          },
          directives: [],
          loc: { start: 3526, end: 3543 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3546, end: 3554 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3556, end: 3564 },
            },
            loc: { start: 3556, end: 3564 },
          },
          directives: [],
          loc: { start: 3546, end: 3564 },
        },
      ],
      loc: { start: 3400, end: 3566 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3573, end: 3583 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3588, end: 3597 },
          },
          directives: [],
          loc: { start: 3588, end: 3597 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3600, end: 3607 },
          },
          directives: [],
          loc: { start: 3600, end: 3607 },
        },
      ],
      loc: { start: 3568, end: 3609 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3622, end: 3627 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3632, end: 3634 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3636, end: 3640 },
            },
            loc: { start: 3636, end: 3640 },
          },
          directives: [],
          loc: { start: 3632, end: 3640 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3643, end: 3648 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "User",
                    loc: { start: 3651, end: 3655 },
                  },
                  loc: { start: 3651, end: 3655 },
                },
                loc: { start: 3651, end: 3656 },
              },
              loc: { start: 3650, end: 3657 },
            },
            loc: { start: 3650, end: 3658 },
          },
          directives: [],
          loc: { start: 3643, end: 3658 },
        },
      ],
      loc: { start: 3610, end: 3660 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3674, end: 3682 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3687, end: 3695 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3696, end: 3704 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3706, end: 3712 },
                  },
                  loc: { start: 3706, end: 3712 },
                },
                loc: { start: 3706, end: 3713 },
              },
              directives: [],
              loc: { start: 3696, end: 3713 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3715, end: 3720 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3722, end: 3728 },
                  },
                  loc: { start: 3722, end: 3728 },
                },
                loc: { start: 3722, end: 3729 },
              },
              directives: [],
              loc: { start: 3715, end: 3729 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3731, end: 3739 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3741, end: 3747 },
                },
                loc: { start: 3741, end: 3747 },
              },
              directives: [],
              loc: { start: 3731, end: 3747 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3750, end: 3766 },
              },
              loc: { start: 3750, end: 3766 },
            },
            loc: { start: 3750, end: 3767 },
          },
          directives: [],
          loc: { start: 3687, end: 3767 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3770, end: 3800 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3801, end: 3807 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3809, end: 3815 },
                  },
                  loc: { start: 3809, end: 3815 },
                },
                loc: { start: 3809, end: 3816 },
              },
              directives: [],
              loc: { start: 3801, end: 3816 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3819, end: 3823 },
              },
              loc: { start: 3819, end: 3823 },
            },
            loc: { start: 3819, end: 3824 },
          },
          directives: [],
          loc: { start: 3770, end: 3824 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3827, end: 3842 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3843, end: 3849 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3851, end: 3857 },
                  },
                  loc: { start: 3851, end: 3857 },
                },
                loc: { start: 3851, end: 3858 },
              },
              directives: [],
              loc: { start: 3843, end: 3858 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3860, end: 3864 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3866, end: 3872 },
                  },
                  loc: { start: 3866, end: 3872 },
                },
                loc: { start: 3866, end: 3873 },
              },
              directives: [],
              loc: { start: 3860, end: 3873 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3875, end: 3883 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3885, end: 3889 },
                  },
                  loc: { start: 3885, end: 3889 },
                },
                loc: { start: 3885, end: 3890 },
              },
              directives: [],
              loc: { start: 3875, end: 3890 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3893, end: 3915 },
              },
              loc: { start: 3893, end: 3915 },
            },
            loc: { start: 3893, end: 3916 },
          },
          directives: [],
          loc: { start: 3827, end: 3916 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3919, end: 3946 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3947, end: 3953 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3955, end: 3961 },
                },
                loc: { start: 3955, end: 3961 },
              },
              directives: [],
              loc: { start: 3947, end: 3961 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3964, end: 3968 },
              },
              loc: { start: 3964, end: 3968 },
            },
            loc: { start: 3964, end: 3969 },
          },
          directives: [],
          loc: { start: 3919, end: 3969 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3972, end: 3984 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3985, end: 3993 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3995, end: 3999 },
                  },
                  loc: { start: 3995, end: 3999 },
                },
                loc: { start: 3995, end: 4000 },
              },
              directives: [],
              loc: { start: 3985, end: 4000 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 4003, end: 4016 },
              },
              loc: { start: 4003, end: 4016 },
            },
            loc: { start: 4003, end: 4017 },
          },
          directives: [],
          loc: { start: 3972, end: 4017 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 4020, end: 4033 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 4034, end: 4039 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4041, end: 4047 },
                  },
                  loc: { start: 4041, end: 4047 },
                },
                loc: { start: 4041, end: 4048 },
              },
              directives: [],
              loc: { start: 4034, end: 4048 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 4050, end: 4058 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4060, end: 4066 },
                  },
                  loc: { start: 4060, end: 4066 },
                },
                loc: { start: 4060, end: 4067 },
              },
              directives: [],
              loc: { start: 4050, end: 4067 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4070, end: 4082 },
              },
              loc: { start: 4070, end: 4082 },
            },
            loc: { start: 4070, end: 4083 },
          },
          directives: [],
          loc: { start: 4020, end: 4083 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 4086, end: 4099 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 4100, end: 4105 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4107, end: 4113 },
                  },
                  loc: { start: 4107, end: 4113 },
                },
                loc: { start: 4107, end: 4114 },
              },
              directives: [],
              loc: { start: 4100, end: 4114 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4117, end: 4124 },
              },
              loc: { start: 4117, end: 4124 },
            },
            loc: { start: 4117, end: 4125 },
          },
          directives: [],
          loc: { start: 4086, end: 4125 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 4128, end: 4142 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 4143, end: 4154 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4156, end: 4162 },
                  },
                  loc: { start: 4156, end: 4162 },
                },
                loc: { start: 4156, end: 4163 },
              },
              directives: [],
              loc: { start: 4143, end: 4163 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4166, end: 4178 },
              },
              loc: { start: 4166, end: 4178 },
            },
            loc: { start: 4166, end: 4179 },
          },
          directives: [],
          loc: { start: 4128, end: 4179 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 4182, end: 4194 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 4195, end: 4207 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4209, end: 4215 },
                  },
                  loc: { start: 4209, end: 4215 },
                },
                loc: { start: 4209, end: 4216 },
              },
              directives: [],
              loc: { start: 4195, end: 4216 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4219, end: 4231 },
              },
              loc: { start: 4219, end: 4231 },
            },
            loc: { start: 4219, end: 4232 },
          },
          directives: [],
          loc: { start: 4182, end: 4232 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 4235, end: 4251 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4252, end: 4254 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4256, end: 4258 },
                  },
                  loc: { start: 4256, end: 4258 },
                },
                loc: { start: 4256, end: 4259 },
              },
              directives: [],
              loc: { start: 4252, end: 4259 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 4261, end: 4265 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4267, end: 4273 },
                  },
                  loc: { start: 4267, end: 4273 },
                },
                loc: { start: 4267, end: 4274 },
              },
              directives: [],
              loc: { start: 4261, end: 4274 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4277, end: 4287 },
              },
              loc: { start: 4277, end: 4287 },
            },
            loc: { start: 4277, end: 4288 },
          },
          directives: [],
          loc: { start: 4235, end: 4288 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4291, end: 4307 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4308, end: 4310 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4312, end: 4314 },
                  },
                  loc: { start: 4312, end: 4314 },
                },
                loc: { start: 4312, end: 4315 },
              },
              directives: [],
              loc: { start: 4308, end: 4315 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4318, end: 4328 },
              },
              loc: { start: 4318, end: 4328 },
            },
            loc: { start: 4318, end: 4329 },
          },
          directives: [],
          loc: { start: 4291, end: 4329 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4332, end: 4345 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4346, end: 4351 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4353, end: 4365 },
                  },
                  loc: { start: 4353, end: 4365 },
                },
                loc: { start: 4353, end: 4366 },
              },
              directives: [],
              loc: { start: 4346, end: 4366 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4369, end: 4373 },
              },
              loc: { start: 4369, end: 4373 },
            },
            loc: { start: 4369, end: 4374 },
          },
          directives: [],
          loc: { start: 4332, end: 4374 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4377, end: 4397 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4399, end: 4403 },
              },
              loc: { start: 4399, end: 4403 },
            },
            loc: { start: 4399, end: 4404 },
          },
          directives: [],
          loc: { start: 4377, end: 4404 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateRoles",
            loc: { start: 4407, end: 4418 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4419, end: 4421 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4423, end: 4425 },
                  },
                  loc: { start: 4423, end: 4425 },
                },
                loc: { start: 4423, end: 4426 },
              },
              directives: [],
              loc: { start: 4419, end: 4426 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "roles",
                loc: { start: 4428, end: 4433 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "Role",
                        loc: { start: 4436, end: 4440 },
                      },
                      loc: { start: 4436, end: 4440 },
                    },
                    loc: { start: 4436, end: 4441 },
                  },
                  loc: { start: 4435, end: 4442 },
                },
                loc: { start: 4435, end: 4443 },
              },
              directives: [],
              loc: { start: 4428, end: 4443 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4446, end: 4450 },
              },
              loc: { start: 4446, end: 4450 },
            },
            loc: { start: 4446, end: 4451 },
          },
          directives: [],
          loc: { start: 4407, end: 4451 },
        },
      ],
      loc: { start: 3662, end: 4453 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4467, end: 4476 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4481, end: 4485 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4487, end: 4491 },
              },
              loc: { start: 4487, end: 4491 },
            },
            loc: { start: 4487, end: 4492 },
          },
          directives: [],
          loc: { start: 4481, end: 4492 },
        },
      ],
      loc: { start: 4455, end: 4494 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4501, end: 4513 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4518, end: 4523 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4525, end: 4528 },
              },
              loc: { start: 4525, end: 4528 },
            },
            loc: { start: 4525, end: 4529 },
          },
          directives: [],
          loc: { start: 4518, end: 4529 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4532, end: 4544 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4546, end: 4552 },
              },
              loc: { start: 4546, end: 4552 },
            },
            loc: { start: 4546, end: 4553 },
          },
          directives: [],
          loc: { start: 4532, end: 4553 },
        },
      ],
      loc: { start: 4496, end: 4555 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4562, end: 4578 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4583, end: 4587 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4589, end: 4593 },
              },
              loc: { start: 4589, end: 4593 },
            },
            loc: { start: 4589, end: 4594 },
          },
          directives: [],
          loc: { start: 4583, end: 4594 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4597, end: 4602 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4604, end: 4610 },
              },
              loc: { start: 4604, end: 4610 },
            },
            loc: { start: 4604, end: 4611 },
          },
          directives: [],
          loc: { start: 4597, end: 4611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4614, end: 4626 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4628, end: 4634 },
              },
              loc: { start: 4628, end: 4634 },
            },
            loc: { start: 4628, end: 4635 },
          },
          directives: [],
          loc: { start: 4614, end: 4635 },
        },
      ],
      loc: { start: 4557, end: 4637 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4644, end: 4657 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4662, end: 4674 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 4677, end: 4680 },
                  },
                  loc: { start: 4677, end: 4680 },
                },
                loc: { start: 4677, end: 4681 },
              },
              loc: { start: 4676, end: 4682 },
            },
            loc: { start: 4676, end: 4683 },
          },
          directives: [],
          loc: { start: 4662, end: 4683 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4686, end: 4691 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4693, end: 4696 },
              },
              loc: { start: 4693, end: 4696 },
            },
            loc: { start: 4693, end: 4697 },
          },
          directives: [],
          loc: { start: 4686, end: 4697 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4700, end: 4712 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4714, end: 4720 },
              },
              loc: { start: 4714, end: 4720 },
            },
            loc: { start: 4714, end: 4721 },
          },
          directives: [],
          loc: { start: 4700, end: 4721 },
        },
      ],
      loc: { start: 4639, end: 4723 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4730, end: 4752 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4757, end: 4762 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4764, end: 4770 },
              },
              loc: { start: 4764, end: 4770 },
            },
            loc: { start: 4764, end: 4771 },
          },
          directives: [],
          loc: { start: 4757, end: 4771 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4774, end: 4780 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4782, end: 4792 },
              },
              loc: { start: 4782, end: 4792 },
            },
            loc: { start: 4782, end: 4793 },
          },
          directives: [],
          loc: { start: 4774, end: 4793 },
        },
      ],
      loc: { start: 4725, end: 4795 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4802, end: 4806 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4811, end: 4813 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4815, end: 4817 },
              },
              loc: { start: 4815, end: 4817 },
            },
            loc: { start: 4815, end: 4818 },
          },
          directives: [],
          loc: { start: 4811, end: 4818 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4821, end: 4825 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4827, end: 4833 },
              },
              loc: { start: 4827, end: 4833 },
            },
            loc: { start: 4827, end: 4834 },
          },
          directives: [],
          loc: { start: 4821, end: 4834 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4837, end: 4848 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4850, end: 4856 },
              },
              loc: { start: 4850, end: 4856 },
            },
            loc: { start: 4850, end: 4857 },
          },
          directives: [],
          loc: { start: 4837, end: 4857 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4860, end: 4865 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4867, end: 4873 },
              },
              loc: { start: 4867, end: 4873 },
            },
            loc: { start: 4867, end: 4874 },
          },
          directives: [],
          loc: { start: 4860, end: 4874 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4877, end: 4883 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4885, end: 4891 },
              },
              loc: { start: 4885, end: 4891 },
            },
            loc: { start: 4885, end: 4892 },
          },
          directives: [],
          loc: { start: 4877, end: 4892 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4895, end: 4904 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4906, end: 4912 },
            },
            loc: { start: 4906, end: 4912 },
          },
          directives: [],
          loc: { start: 4895, end: 4912 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4915, end: 4922 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AuthDevice",
                    loc: { start: 4925, end: 4935 },
                  },
                  loc: { start: 4925, end: 4935 },
                },
                loc: { start: 4925, end: 4936 },
              },
              loc: { start: 4924, end: 4937 },
            },
            loc: { start: 4924, end: 4938 },
          },
          directives: [],
          loc: { start: 4915, end: 4938 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 4941, end: 4946 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Role",
                    loc: { start: 4949, end: 4953 },
                  },
                  loc: { start: 4949, end: 4953 },
                },
                loc: { start: 4949, end: 4954 },
              },
              loc: { start: 4948, end: 4955 },
            },
            loc: { start: 4948, end: 4956 },
          },
          directives: [],
          loc: { start: 4941, end: 4956 },
        },
      ],
      loc: { start: 4797, end: 4958 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4966, end: 4978 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4983, end: 4985 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4987, end: 4989 },
            },
            loc: { start: 4987, end: 4989 },
          },
          directives: [],
          loc: { start: 4983, end: 4989 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4992, end: 4996 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4998, end: 5004 },
              },
              loc: { start: 4998, end: 5004 },
            },
            loc: { start: 4998, end: 5005 },
          },
          directives: [],
          loc: { start: 4992, end: 5005 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 5008, end: 5019 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5021, end: 5027 },
              },
              loc: { start: 5021, end: 5027 },
            },
            loc: { start: 5021, end: 5028 },
          },
          directives: [],
          loc: { start: 5008, end: 5028 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 5031, end: 5036 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5038, end: 5044 },
              },
              loc: { start: 5038, end: 5044 },
            },
            loc: { start: 5038, end: 5045 },
          },
          directives: [],
          loc: { start: 5031, end: 5045 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 5048, end: 5056 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5058, end: 5064 },
            },
            loc: { start: 5058, end: 5064 },
          },
          directives: [],
          loc: { start: 5048, end: 5064 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 5067, end: 5073 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 5075, end: 5079 },
            },
            loc: { start: 5075, end: 5079 },
          },
          directives: [],
          loc: { start: 5067, end: 5079 },
        },
      ],
      loc: { start: 4960, end: 5081 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 5088, end: 5098 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5103, end: 5105 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5107, end: 5109 },
              },
              loc: { start: 5107, end: 5109 },
            },
            loc: { start: 5107, end: 5110 },
          },
          directives: [],
          loc: { start: 5103, end: 5110 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5113, end: 5117 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5119, end: 5125 },
              },
              loc: { start: 5119, end: 5125 },
            },
            loc: { start: 5119, end: 5126 },
          },
          directives: [],
          loc: { start: 5113, end: 5126 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5129, end: 5138 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5140, end: 5148 },
            },
            loc: { start: 5140, end: 5148 },
          },
          directives: [],
          loc: { start: 5129, end: 5148 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 5151, end: 5161 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5163, end: 5171 },
            },
            loc: { start: 5163, end: 5171 },
          },
          directives: [],
          loc: { start: 5151, end: 5171 },
        },
      ],
      loc: { start: 5083, end: 5173 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 5180, end: 5184 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Trusted",
            loc: { start: 5189, end: 5196 },
          },
          directives: [],
          loc: { start: 5189, end: 5196 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Admin",
            loc: { start: 5199, end: 5204 },
          },
          directives: [],
          loc: { start: 5199, end: 5204 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Doorkeeper",
            loc: { start: 5207, end: 5217 },
          },
          directives: [],
          loc: { start: 5207, end: 5217 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Bookkeeper",
            loc: { start: 5220, end: 5230 },
          },
          directives: [],
          loc: { start: 5220, end: 5230 },
        },
      ],
      loc: { start: 5175, end: 5232 },
    },
  ],
  loc: { start: 0, end: 5233 },
} as unknown as DocumentNode;
