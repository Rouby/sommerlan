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
      ],
      loc: { start: 1781, end: 2303 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2310, end: 2315 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: {
            kind: "Name",
            value: "rbac",
            loc: { start: 2317, end: 2321 },
          },
          arguments: [],
          loc: { start: 2316, end: 2321 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2326, end: 2328 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2330, end: 2332 },
              },
              loc: { start: 2330, end: 2332 },
            },
            loc: { start: 2330, end: 2333 },
          },
          directives: [],
          loc: { start: 2326, end: 2333 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2336, end: 2345 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2347, end: 2351 },
              },
              loc: { start: 2347, end: 2351 },
            },
            loc: { start: 2347, end: 2352 },
          },
          directives: [],
          loc: { start: 2336, end: 2352 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2355, end: 2362 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2364, end: 2368 },
              },
              loc: { start: 2364, end: 2368 },
            },
            loc: { start: 2364, end: 2369 },
          },
          directives: [],
          loc: { start: 2355, end: 2369 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tentative",
            loc: { start: 2372, end: 2381 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2383, end: 2390 },
              },
              loc: { start: 2383, end: 2390 },
            },
            loc: { start: 2383, end: 2391 },
          },
          directives: [],
          loc: { start: 2372, end: 2391 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2394, end: 2402 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2404, end: 2410 },
              },
              loc: { start: 2404, end: 2410 },
            },
            loc: { start: 2404, end: 2411 },
          },
          directives: [],
          loc: { start: 2394, end: 2411 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2414, end: 2431 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2433, end: 2439 },
            },
            loc: { start: 2433, end: 2439 },
          },
          directives: [],
          loc: { start: 2414, end: 2439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2442, end: 2456 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2458, end: 2461 },
              },
              loc: { start: 2458, end: 2461 },
            },
            loc: { start: 2458, end: 2462 },
          },
          directives: [],
          loc: { start: 2442, end: 2462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2465, end: 2476 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2478, end: 2483 },
              },
              loc: { start: 2478, end: 2483 },
            },
            loc: { start: 2478, end: 2484 },
          },
          directives: [],
          loc: { start: 2465, end: 2484 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2487, end: 2497 },
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
                    loc: { start: 2500, end: 2509 },
                  },
                  loc: { start: 2500, end: 2509 },
                },
                loc: { start: 2500, end: 2510 },
              },
              loc: { start: 2499, end: 2511 },
            },
            loc: { start: 2499, end: 2512 },
          },
          directives: [],
          loc: { start: 2487, end: 2512 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2515, end: 2524 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2525, end: 2531 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2533, end: 2535 },
                },
                loc: { start: 2533, end: 2535 },
              },
              directives: [],
              loc: { start: 2525, end: 2535 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2538, end: 2547 },
            },
            loc: { start: 2538, end: 2547 },
          },
          directives: [],
          loc: { start: 2515, end: 2547 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2550, end: 2558 },
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
                    loc: { start: 2561, end: 2568 },
                  },
                  loc: { start: 2561, end: 2568 },
                },
                loc: { start: 2561, end: 2569 },
              },
              loc: { start: 2560, end: 2570 },
            },
            loc: { start: 2560, end: 2571 },
          },
          directives: [],
          loc: { start: 2550, end: 2571 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2574, end: 2588 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2590, end: 2593 },
              },
              loc: { start: 2590, end: 2593 },
            },
            loc: { start: 2590, end: 2594 },
          },
          directives: [],
          loc: { start: 2574, end: 2594 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2597, end: 2617 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2619, end: 2623 },
            },
            loc: { start: 2619, end: 2623 },
          },
          directives: [],
          loc: { start: 2597, end: 2623 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2626, end: 2632 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2634, end: 2638 },
            },
            loc: { start: 2634, end: 2638 },
          },
          directives: [],
          loc: { start: 2626, end: 2638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2641, end: 2656 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2658, end: 2663 },
            },
            loc: { start: 2658, end: 2663 },
          },
          directives: [],
          loc: { start: 2641, end: 2663 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2666, end: 2674 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2676, end: 2681 },
            },
            loc: { start: 2676, end: 2681 },
          },
          directives: [],
          loc: { start: 2666, end: 2681 },
        },
      ],
      loc: { start: 2305, end: 2683 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2690, end: 2697 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2702, end: 2704 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2706, end: 2708 },
              },
              loc: { start: 2706, end: 2708 },
            },
            loc: { start: 2706, end: 2709 },
          },
          directives: [],
          loc: { start: 2702, end: 2709 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2712, end: 2715 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2717, end: 2723 },
              },
              loc: { start: 2717, end: 2723 },
            },
            loc: { start: 2717, end: 2724 },
          },
          directives: [],
          loc: { start: 2712, end: 2724 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2727, end: 2732 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2734, end: 2739 },
              },
              loc: { start: 2734, end: 2739 },
            },
            loc: { start: 2734, end: 2740 },
          },
          directives: [],
          loc: { start: 2727, end: 2740 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2743, end: 2747 },
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
                    loc: { start: 2750, end: 2760 },
                  },
                  loc: { start: 2750, end: 2760 },
                },
                loc: { start: 2750, end: 2761 },
              },
              loc: { start: 2749, end: 2762 },
            },
            loc: { start: 2749, end: 2763 },
          },
          directives: [],
          loc: { start: 2743, end: 2763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2766, end: 2770 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2772, end: 2783 },
              },
              loc: { start: 2772, end: 2783 },
            },
            loc: { start: 2772, end: 2784 },
          },
          directives: [],
          loc: { start: 2766, end: 2784 },
        },
      ],
      loc: { start: 2685, end: 2786 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2793, end: 2804 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2809, end: 2814 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2816, end: 2819 },
              },
              loc: { start: 2816, end: 2819 },
            },
            loc: { start: 2816, end: 2820 },
          },
          directives: [],
          loc: { start: 2809, end: 2820 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2823, end: 2829 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2831, end: 2834 },
              },
              loc: { start: 2831, end: 2834 },
            },
            loc: { start: 2831, end: 2835 },
          },
          directives: [],
          loc: { start: 2823, end: 2835 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2838, end: 2846 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2848, end: 2853 },
            },
            loc: { start: 2848, end: 2853 },
          },
          directives: [],
          loc: { start: 2838, end: 2853 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2856, end: 2865 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2867, end: 2872 },
            },
            loc: { start: 2867, end: 2872 },
          },
          directives: [],
          loc: { start: 2856, end: 2872 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2875, end: 2883 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2885, end: 2890 },
            },
            loc: { start: 2885, end: 2890 },
          },
          directives: [],
          loc: { start: 2875, end: 2890 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2893, end: 2899 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2901, end: 2909 },
            },
            loc: { start: 2901, end: 2909 },
          },
          directives: [],
          loc: { start: 2893, end: 2909 },
        },
      ],
      loc: { start: 2788, end: 2911 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2918, end: 2928 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2933, end: 2935 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2937, end: 2939 },
              },
              loc: { start: 2937, end: 2939 },
            },
            loc: { start: 2937, end: 2940 },
          },
          directives: [],
          loc: { start: 2933, end: 2940 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2943, end: 2947 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2949, end: 2953 },
              },
              loc: { start: 2949, end: 2953 },
            },
            loc: { start: 2949, end: 2954 },
          },
          directives: [],
          loc: { start: 2943, end: 2954 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2957, end: 2964 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2966, end: 2973 },
              },
              loc: { start: 2966, end: 2973 },
            },
            loc: { start: 2966, end: 2974 },
          },
          directives: [],
          loc: { start: 2957, end: 2974 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2977, end: 2988 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2990, end: 3001 },
              },
              loc: { start: 2990, end: 3001 },
            },
            loc: { start: 2990, end: 3002 },
          },
          directives: [],
          loc: { start: 2977, end: 3002 },
        },
      ],
      loc: { start: 2913, end: 3004 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 3013, end: 3024 },
      },
      directives: [],
      loc: { start: 3006, end: 3024 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 3032, end: 3042 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3047, end: 3049 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3051, end: 3053 },
            },
            loc: { start: 3051, end: 3053 },
          },
          directives: [],
          loc: { start: 3047, end: 3053 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 3056, end: 3065 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3067, end: 3071 },
              },
              loc: { start: 3067, end: 3071 },
            },
            loc: { start: 3067, end: 3072 },
          },
          directives: [],
          loc: { start: 3056, end: 3072 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 3075, end: 3082 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3084, end: 3088 },
              },
              loc: { start: 3084, end: 3088 },
            },
            loc: { start: 3084, end: 3089 },
          },
          directives: [],
          loc: { start: 3075, end: 3089 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 3092, end: 3100 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3102, end: 3108 },
              },
              loc: { start: 3102, end: 3108 },
            },
            loc: { start: 3102, end: 3109 },
          },
          directives: [],
          loc: { start: 3092, end: 3109 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 3112, end: 3129 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3131, end: 3137 },
            },
            loc: { start: 3131, end: 3137 },
          },
          directives: [],
          loc: { start: 3112, end: 3137 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 3140, end: 3154 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3156, end: 3159 },
              },
              loc: { start: 3156, end: 3159 },
            },
            loc: { start: 3156, end: 3160 },
          },
          directives: [],
          loc: { start: 3140, end: 3160 },
        },
      ],
      loc: { start: 3026, end: 3162 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 3170, end: 3182 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3187, end: 3191 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3193, end: 3199 },
              },
              loc: { start: 3193, end: 3199 },
            },
            loc: { start: 3193, end: 3200 },
          },
          directives: [],
          loc: { start: 3187, end: 3200 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 3203, end: 3210 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3212, end: 3214 },
              },
              loc: { start: 3212, end: 3214 },
            },
            loc: { start: 3212, end: 3215 },
          },
          directives: [],
          loc: { start: 3203, end: 3215 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3218, end: 3222 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 3224, end: 3228 },
              },
              loc: { start: 3224, end: 3228 },
            },
            loc: { start: 3224, end: 3229 },
          },
          directives: [],
          loc: { start: 3218, end: 3229 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3232, end: 3236 },
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
                  loc: { start: 3239, end: 3254 },
                },
                loc: { start: 3239, end: 3254 },
              },
              loc: { start: 3239, end: 3255 },
            },
            loc: { start: 3238, end: 3256 },
          },
          directives: [],
          loc: { start: 3232, end: 3256 },
        },
      ],
      loc: { start: 3164, end: 3258 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3266, end: 3281 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3286, end: 3292 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3294, end: 3296 },
              },
              loc: { start: 3294, end: 3296 },
            },
            loc: { start: 3294, end: 3297 },
          },
          directives: [],
          loc: { start: 3286, end: 3297 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3300, end: 3311 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3313, end: 3324 },
              },
              loc: { start: 3313, end: 3324 },
            },
            loc: { start: 3313, end: 3325 },
          },
          directives: [],
          loc: { start: 3300, end: 3325 },
        },
      ],
      loc: { start: 3260, end: 3327 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3334, end: 3343 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3348, end: 3350 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3352, end: 3354 },
              },
              loc: { start: 3352, end: 3354 },
            },
            loc: { start: 3352, end: 3355 },
          },
          directives: [],
          loc: { start: 3348, end: 3355 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3358, end: 3363 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3365, end: 3370 },
              },
              loc: { start: 3365, end: 3370 },
            },
            loc: { start: 3365, end: 3371 },
          },
          directives: [],
          loc: { start: 3358, end: 3371 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3374, end: 3379 },
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
                    loc: { start: 3382, end: 3386 },
                  },
                  loc: { start: 3382, end: 3386 },
                },
                loc: { start: 3382, end: 3387 },
              },
              loc: { start: 3381, end: 3388 },
            },
            loc: { start: 3381, end: 3389 },
          },
          directives: [],
          loc: { start: 3374, end: 3389 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3392, end: 3396 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3398, end: 3408 },
            },
            loc: { start: 3398, end: 3408 },
          },
          directives: [],
          loc: { start: 3392, end: 3408 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3411, end: 3426 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3428, end: 3432 },
              },
              loc: { start: 3428, end: 3432 },
            },
            loc: { start: 3428, end: 3433 },
          },
          directives: [],
          loc: { start: 3411, end: 3433 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3436, end: 3444 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3446, end: 3451 },
              },
              loc: { start: 3446, end: 3451 },
            },
            loc: { start: 3446, end: 3452 },
          },
          directives: [],
          loc: { start: 3436, end: 3452 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3455, end: 3462 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3464, end: 3472 },
            },
            loc: { start: 3464, end: 3472 },
          },
          directives: [],
          loc: { start: 3455, end: 3472 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3475, end: 3483 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3485, end: 3493 },
            },
            loc: { start: 3485, end: 3493 },
          },
          directives: [],
          loc: { start: 3475, end: 3493 },
        },
      ],
      loc: { start: 3329, end: 3495 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3502, end: 3512 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3517, end: 3526 },
          },
          directives: [],
          loc: { start: 3517, end: 3526 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3529, end: 3536 },
          },
          directives: [],
          loc: { start: 3529, end: 3536 },
        },
      ],
      loc: { start: 3497, end: 3538 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3551, end: 3556 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3561, end: 3563 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3565, end: 3569 },
            },
            loc: { start: 3565, end: 3569 },
          },
          directives: [],
          loc: { start: 3561, end: 3569 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3572, end: 3577 },
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
                    loc: { start: 3580, end: 3584 },
                  },
                  loc: { start: 3580, end: 3584 },
                },
                loc: { start: 3580, end: 3585 },
              },
              loc: { start: 3579, end: 3586 },
            },
            loc: { start: 3579, end: 3587 },
          },
          directives: [],
          loc: { start: 3572, end: 3587 },
        },
      ],
      loc: { start: 3539, end: 3589 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3603, end: 3611 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3616, end: 3624 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3625, end: 3633 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3635, end: 3641 },
                  },
                  loc: { start: 3635, end: 3641 },
                },
                loc: { start: 3635, end: 3642 },
              },
              directives: [],
              loc: { start: 3625, end: 3642 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3644, end: 3649 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3651, end: 3657 },
                  },
                  loc: { start: 3651, end: 3657 },
                },
                loc: { start: 3651, end: 3658 },
              },
              directives: [],
              loc: { start: 3644, end: 3658 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3660, end: 3668 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3670, end: 3676 },
                },
                loc: { start: 3670, end: 3676 },
              },
              directives: [],
              loc: { start: 3660, end: 3676 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3679, end: 3695 },
              },
              loc: { start: 3679, end: 3695 },
            },
            loc: { start: 3679, end: 3696 },
          },
          directives: [],
          loc: { start: 3616, end: 3696 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3699, end: 3729 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3730, end: 3736 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3738, end: 3744 },
                  },
                  loc: { start: 3738, end: 3744 },
                },
                loc: { start: 3738, end: 3745 },
              },
              directives: [],
              loc: { start: 3730, end: 3745 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3748, end: 3752 },
              },
              loc: { start: 3748, end: 3752 },
            },
            loc: { start: 3748, end: 3753 },
          },
          directives: [],
          loc: { start: 3699, end: 3753 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3756, end: 3771 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3772, end: 3778 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3780, end: 3786 },
                  },
                  loc: { start: 3780, end: 3786 },
                },
                loc: { start: 3780, end: 3787 },
              },
              directives: [],
              loc: { start: 3772, end: 3787 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3789, end: 3793 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3795, end: 3801 },
                  },
                  loc: { start: 3795, end: 3801 },
                },
                loc: { start: 3795, end: 3802 },
              },
              directives: [],
              loc: { start: 3789, end: 3802 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3804, end: 3812 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3814, end: 3818 },
                  },
                  loc: { start: 3814, end: 3818 },
                },
                loc: { start: 3814, end: 3819 },
              },
              directives: [],
              loc: { start: 3804, end: 3819 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3822, end: 3844 },
              },
              loc: { start: 3822, end: 3844 },
            },
            loc: { start: 3822, end: 3845 },
          },
          directives: [],
          loc: { start: 3756, end: 3845 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3848, end: 3875 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3876, end: 3882 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3884, end: 3890 },
                },
                loc: { start: 3884, end: 3890 },
              },
              directives: [],
              loc: { start: 3876, end: 3890 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3893, end: 3897 },
              },
              loc: { start: 3893, end: 3897 },
            },
            loc: { start: 3893, end: 3898 },
          },
          directives: [],
          loc: { start: 3848, end: 3898 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3901, end: 3913 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3914, end: 3922 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3924, end: 3928 },
                  },
                  loc: { start: 3924, end: 3928 },
                },
                loc: { start: 3924, end: 3929 },
              },
              directives: [],
              loc: { start: 3914, end: 3929 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3932, end: 3945 },
              },
              loc: { start: 3932, end: 3945 },
            },
            loc: { start: 3932, end: 3946 },
          },
          directives: [],
          loc: { start: 3901, end: 3946 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3949, end: 3962 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3963, end: 3968 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3970, end: 3976 },
                  },
                  loc: { start: 3970, end: 3976 },
                },
                loc: { start: 3970, end: 3977 },
              },
              directives: [],
              loc: { start: 3963, end: 3977 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3979, end: 3987 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3989, end: 3995 },
                  },
                  loc: { start: 3989, end: 3995 },
                },
                loc: { start: 3989, end: 3996 },
              },
              directives: [],
              loc: { start: 3979, end: 3996 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3999, end: 4011 },
              },
              loc: { start: 3999, end: 4011 },
            },
            loc: { start: 3999, end: 4012 },
          },
          directives: [],
          loc: { start: 3949, end: 4012 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 4015, end: 4028 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 4029, end: 4034 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4036, end: 4042 },
                  },
                  loc: { start: 4036, end: 4042 },
                },
                loc: { start: 4036, end: 4043 },
              },
              directives: [],
              loc: { start: 4029, end: 4043 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4046, end: 4053 },
              },
              loc: { start: 4046, end: 4053 },
            },
            loc: { start: 4046, end: 4054 },
          },
          directives: [],
          loc: { start: 4015, end: 4054 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 4057, end: 4071 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 4072, end: 4083 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4085, end: 4091 },
                  },
                  loc: { start: 4085, end: 4091 },
                },
                loc: { start: 4085, end: 4092 },
              },
              directives: [],
              loc: { start: 4072, end: 4092 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4095, end: 4107 },
              },
              loc: { start: 4095, end: 4107 },
            },
            loc: { start: 4095, end: 4108 },
          },
          directives: [],
          loc: { start: 4057, end: 4108 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 4111, end: 4123 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 4124, end: 4136 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4138, end: 4144 },
                  },
                  loc: { start: 4138, end: 4144 },
                },
                loc: { start: 4138, end: 4145 },
              },
              directives: [],
              loc: { start: 4124, end: 4145 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4148, end: 4160 },
              },
              loc: { start: 4148, end: 4160 },
            },
            loc: { start: 4148, end: 4161 },
          },
          directives: [],
          loc: { start: 4111, end: 4161 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 4164, end: 4180 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4181, end: 4183 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4185, end: 4187 },
                  },
                  loc: { start: 4185, end: 4187 },
                },
                loc: { start: 4185, end: 4188 },
              },
              directives: [],
              loc: { start: 4181, end: 4188 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 4190, end: 4194 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4196, end: 4202 },
                  },
                  loc: { start: 4196, end: 4202 },
                },
                loc: { start: 4196, end: 4203 },
              },
              directives: [],
              loc: { start: 4190, end: 4203 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4206, end: 4216 },
              },
              loc: { start: 4206, end: 4216 },
            },
            loc: { start: 4206, end: 4217 },
          },
          directives: [],
          loc: { start: 4164, end: 4217 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4220, end: 4236 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4237, end: 4239 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4241, end: 4243 },
                  },
                  loc: { start: 4241, end: 4243 },
                },
                loc: { start: 4241, end: 4244 },
              },
              directives: [],
              loc: { start: 4237, end: 4244 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4247, end: 4257 },
              },
              loc: { start: 4247, end: 4257 },
            },
            loc: { start: 4247, end: 4258 },
          },
          directives: [],
          loc: { start: 4220, end: 4258 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4261, end: 4274 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4275, end: 4280 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4282, end: 4294 },
                  },
                  loc: { start: 4282, end: 4294 },
                },
                loc: { start: 4282, end: 4295 },
              },
              directives: [],
              loc: { start: 4275, end: 4295 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4298, end: 4302 },
              },
              loc: { start: 4298, end: 4302 },
            },
            loc: { start: 4298, end: 4303 },
          },
          directives: [],
          loc: { start: 4261, end: 4303 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4306, end: 4326 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4328, end: 4332 },
              },
              loc: { start: 4328, end: 4332 },
            },
            loc: { start: 4328, end: 4333 },
          },
          directives: [],
          loc: { start: 4306, end: 4333 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateRoles",
            loc: { start: 4336, end: 4347 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4348, end: 4350 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4352, end: 4354 },
                  },
                  loc: { start: 4352, end: 4354 },
                },
                loc: { start: 4352, end: 4355 },
              },
              directives: [],
              loc: { start: 4348, end: 4355 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "roles",
                loc: { start: 4357, end: 4362 },
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
                        loc: { start: 4365, end: 4369 },
                      },
                      loc: { start: 4365, end: 4369 },
                    },
                    loc: { start: 4365, end: 4370 },
                  },
                  loc: { start: 4364, end: 4371 },
                },
                loc: { start: 4364, end: 4372 },
              },
              directives: [],
              loc: { start: 4357, end: 4372 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4375, end: 4379 },
              },
              loc: { start: 4375, end: 4379 },
            },
            loc: { start: 4375, end: 4380 },
          },
          directives: [],
          loc: { start: 4336, end: 4380 },
        },
      ],
      loc: { start: 3591, end: 4382 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4396, end: 4405 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4410, end: 4414 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4416, end: 4420 },
              },
              loc: { start: 4416, end: 4420 },
            },
            loc: { start: 4416, end: 4421 },
          },
          directives: [],
          loc: { start: 4410, end: 4421 },
        },
      ],
      loc: { start: 4384, end: 4423 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4430, end: 4442 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4447, end: 4452 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4454, end: 4457 },
              },
              loc: { start: 4454, end: 4457 },
            },
            loc: { start: 4454, end: 4458 },
          },
          directives: [],
          loc: { start: 4447, end: 4458 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4461, end: 4473 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4475, end: 4481 },
              },
              loc: { start: 4475, end: 4481 },
            },
            loc: { start: 4475, end: 4482 },
          },
          directives: [],
          loc: { start: 4461, end: 4482 },
        },
      ],
      loc: { start: 4425, end: 4484 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4491, end: 4507 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4512, end: 4516 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4518, end: 4522 },
              },
              loc: { start: 4518, end: 4522 },
            },
            loc: { start: 4518, end: 4523 },
          },
          directives: [],
          loc: { start: 4512, end: 4523 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4526, end: 4531 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4533, end: 4539 },
              },
              loc: { start: 4533, end: 4539 },
            },
            loc: { start: 4533, end: 4540 },
          },
          directives: [],
          loc: { start: 4526, end: 4540 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4543, end: 4555 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4557, end: 4563 },
              },
              loc: { start: 4557, end: 4563 },
            },
            loc: { start: 4557, end: 4564 },
          },
          directives: [],
          loc: { start: 4543, end: 4564 },
        },
      ],
      loc: { start: 4486, end: 4566 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4573, end: 4586 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4591, end: 4603 },
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
                    loc: { start: 4606, end: 4609 },
                  },
                  loc: { start: 4606, end: 4609 },
                },
                loc: { start: 4606, end: 4610 },
              },
              loc: { start: 4605, end: 4611 },
            },
            loc: { start: 4605, end: 4612 },
          },
          directives: [],
          loc: { start: 4591, end: 4612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4615, end: 4620 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4622, end: 4625 },
              },
              loc: { start: 4622, end: 4625 },
            },
            loc: { start: 4622, end: 4626 },
          },
          directives: [],
          loc: { start: 4615, end: 4626 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4629, end: 4641 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4643, end: 4649 },
              },
              loc: { start: 4643, end: 4649 },
            },
            loc: { start: 4643, end: 4650 },
          },
          directives: [],
          loc: { start: 4629, end: 4650 },
        },
      ],
      loc: { start: 4568, end: 4652 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4659, end: 4681 },
      },
      interfaces: [],
      directives: [],
      fields: [
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
                value: "String",
                loc: { start: 4693, end: 4699 },
              },
              loc: { start: 4693, end: 4699 },
            },
            loc: { start: 4693, end: 4700 },
          },
          directives: [],
          loc: { start: 4686, end: 4700 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4703, end: 4709 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4711, end: 4721 },
              },
              loc: { start: 4711, end: 4721 },
            },
            loc: { start: 4711, end: 4722 },
          },
          directives: [],
          loc: { start: 4703, end: 4722 },
        },
      ],
      loc: { start: 4654, end: 4724 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4731, end: 4735 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4740, end: 4742 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4744, end: 4746 },
              },
              loc: { start: 4744, end: 4746 },
            },
            loc: { start: 4744, end: 4747 },
          },
          directives: [],
          loc: { start: 4740, end: 4747 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4750, end: 4754 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4756, end: 4762 },
              },
              loc: { start: 4756, end: 4762 },
            },
            loc: { start: 4756, end: 4763 },
          },
          directives: [],
          loc: { start: 4750, end: 4763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4766, end: 4777 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4779, end: 4785 },
              },
              loc: { start: 4779, end: 4785 },
            },
            loc: { start: 4779, end: 4786 },
          },
          directives: [],
          loc: { start: 4766, end: 4786 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4789, end: 4794 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4796, end: 4802 },
              },
              loc: { start: 4796, end: 4802 },
            },
            loc: { start: 4796, end: 4803 },
          },
          directives: [],
          loc: { start: 4789, end: 4803 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4806, end: 4812 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4814, end: 4820 },
              },
              loc: { start: 4814, end: 4820 },
            },
            loc: { start: 4814, end: 4821 },
          },
          directives: [],
          loc: { start: 4806, end: 4821 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4824, end: 4833 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4835, end: 4841 },
            },
            loc: { start: 4835, end: 4841 },
          },
          directives: [],
          loc: { start: 4824, end: 4841 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4844, end: 4851 },
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
                    loc: { start: 4854, end: 4864 },
                  },
                  loc: { start: 4854, end: 4864 },
                },
                loc: { start: 4854, end: 4865 },
              },
              loc: { start: 4853, end: 4866 },
            },
            loc: { start: 4853, end: 4867 },
          },
          directives: [],
          loc: { start: 4844, end: 4867 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 4870, end: 4875 },
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
                    loc: { start: 4878, end: 4882 },
                  },
                  loc: { start: 4878, end: 4882 },
                },
                loc: { start: 4878, end: 4883 },
              },
              loc: { start: 4877, end: 4884 },
            },
            loc: { start: 4877, end: 4885 },
          },
          directives: [],
          loc: { start: 4870, end: 4885 },
        },
      ],
      loc: { start: 4726, end: 4887 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4895, end: 4907 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4912, end: 4914 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4916, end: 4918 },
            },
            loc: { start: 4916, end: 4918 },
          },
          directives: [],
          loc: { start: 4912, end: 4918 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4921, end: 4925 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4927, end: 4933 },
              },
              loc: { start: 4927, end: 4933 },
            },
            loc: { start: 4927, end: 4934 },
          },
          directives: [],
          loc: { start: 4921, end: 4934 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4937, end: 4948 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4950, end: 4956 },
              },
              loc: { start: 4950, end: 4956 },
            },
            loc: { start: 4950, end: 4957 },
          },
          directives: [],
          loc: { start: 4937, end: 4957 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4960, end: 4965 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4967, end: 4973 },
              },
              loc: { start: 4967, end: 4973 },
            },
            loc: { start: 4967, end: 4974 },
          },
          directives: [],
          loc: { start: 4960, end: 4974 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4977, end: 4985 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4987, end: 4993 },
            },
            loc: { start: 4987, end: 4993 },
          },
          directives: [],
          loc: { start: 4977, end: 4993 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4996, end: 5002 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 5004, end: 5008 },
            },
            loc: { start: 5004, end: 5008 },
          },
          directives: [],
          loc: { start: 4996, end: 5008 },
        },
      ],
      loc: { start: 4889, end: 5010 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 5017, end: 5027 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5032, end: 5034 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5036, end: 5038 },
              },
              loc: { start: 5036, end: 5038 },
            },
            loc: { start: 5036, end: 5039 },
          },
          directives: [],
          loc: { start: 5032, end: 5039 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5042, end: 5046 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5048, end: 5054 },
              },
              loc: { start: 5048, end: 5054 },
            },
            loc: { start: 5048, end: 5055 },
          },
          directives: [],
          loc: { start: 5042, end: 5055 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5058, end: 5067 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5069, end: 5077 },
            },
            loc: { start: 5069, end: 5077 },
          },
          directives: [],
          loc: { start: 5058, end: 5077 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 5080, end: 5090 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5092, end: 5100 },
            },
            loc: { start: 5092, end: 5100 },
          },
          directives: [],
          loc: { start: 5080, end: 5100 },
        },
      ],
      loc: { start: 5012, end: 5102 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 5109, end: 5113 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Trusted",
            loc: { start: 5118, end: 5125 },
          },
          directives: [],
          loc: { start: 5118, end: 5125 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Admin",
            loc: { start: 5128, end: 5133 },
          },
          directives: [],
          loc: { start: 5128, end: 5133 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Doorkeeper",
            loc: { start: 5136, end: 5146 },
          },
          directives: [],
          loc: { start: 5136, end: 5146 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Bookkeeper",
            loc: { start: 5149, end: 5159 },
          },
          directives: [],
          loc: { start: 5149, end: 5159 },
        },
      ],
      loc: { start: 5104, end: 5161 },
    },
  ],
  loc: { start: 0, end: 5162 },
} as unknown as DocumentNode;
