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
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 181, end: 186 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donations",
            loc: { start: 191, end: 200 },
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
                    loc: { start: 203, end: 211 },
                  },
                  loc: { start: 203, end: 211 },
                },
                loc: { start: 203, end: 212 },
              },
              loc: { start: 202, end: 213 },
            },
            loc: { start: 202, end: 214 },
          },
          directives: [],
          loc: { start: 191, end: 214 },
        },
      ],
      loc: { start: 169, end: 216 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 230, end: 238 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donate",
            loc: { start: 243, end: 249 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "amount",
                loc: { start: 250, end: 256 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 258, end: 263 },
                  },
                  loc: { start: 258, end: 263 },
                },
                loc: { start: 258, end: 264 },
              },
              directives: [],
              loc: { start: 250, end: 264 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "incognito",
                loc: { start: 266, end: 275 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 277, end: 284 },
                },
                loc: { start: 277, end: 284 },
              },
              directives: [],
              loc: { start: 266, end: 284 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dedication",
                loc: { start: 286, end: 296 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "DonationDedication",
                  loc: { start: 298, end: 316 },
                },
                loc: { start: 298, end: 316 },
              },
              directives: [],
              loc: { start: 286, end: 316 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Donation",
                loc: { start: 319, end: 327 },
              },
              loc: { start: 319, end: 327 },
            },
            loc: { start: 319, end: 328 },
          },
          directives: [],
          loc: { start: 243, end: 328 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rescindDonation",
            loc: { start: 331, end: 346 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 347, end: 349 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 351, end: 353 },
                  },
                  loc: { start: 351, end: 353 },
                },
                loc: { start: 351, end: 354 },
              },
              directives: [],
              loc: { start: 347, end: 354 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Donation",
                loc: { start: 357, end: 365 },
              },
              loc: { start: 357, end: 365 },
            },
            loc: { start: 357, end: 366 },
          },
          directives: [],
          loc: { start: 331, end: 366 },
        },
      ],
      loc: { start: 218, end: 368 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Donation", loc: { start: 375, end: 383 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 388, end: 390 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 392, end: 394 },
              },
              loc: { start: 392, end: 394 },
            },
            loc: { start: 392, end: 395 },
          },
          directives: [],
          loc: { start: 388, end: 395 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "donator",
            loc: { start: 398, end: 405 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 407, end: 411 },
            },
            loc: { start: 407, end: 411 },
          },
          directives: [],
          loc: { start: 398, end: 411 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "amount",
            loc: { start: 414, end: 420 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 422, end: 427 },
              },
              loc: { start: 422, end: 427 },
            },
            loc: { start: 422, end: 428 },
          },
          directives: [],
          loc: { start: 414, end: 428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dedication",
            loc: { start: 431, end: 441 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DonationDedication",
                loc: { start: 443, end: 461 },
              },
              loc: { start: 443, end: 461 },
            },
            loc: { start: 443, end: 462 },
          },
          directives: [],
          loc: { start: 431, end: 462 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "party", loc: { start: 465, end: 470 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 472, end: 477 },
              },
              loc: { start: 472, end: 477 },
            },
            loc: { start: 472, end: 478 },
          },
          directives: [],
          loc: { start: 465, end: 478 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "received",
            loc: { start: 481, end: 489 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 491, end: 498 },
              },
              loc: { start: 491, end: 498 },
            },
            loc: { start: 491, end: 499 },
          },
          directives: [],
          loc: { start: 481, end: 499 },
        },
      ],
      loc: { start: 370, end: 501 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "DonationDedication",
        loc: { start: 508, end: 526 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RENT", loc: { start: 531, end: 535 } },
          directives: [],
          loc: { start: 531, end: 535 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "WARCHEST",
            loc: { start: 538, end: 546 },
          },
          directives: [],
          loc: { start: 538, end: 546 },
        },
      ],
      loc: { start: 503, end: 548 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 561, end: 569 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "planEvent",
            loc: { start: 574, end: 583 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 584, end: 589 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "EventInput",
                    loc: { start: 591, end: 601 },
                  },
                  loc: { start: 591, end: 601 },
                },
                loc: { start: 591, end: 602 },
              },
              directives: [],
              loc: { start: 584, end: 602 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 605, end: 610 },
              },
              loc: { start: 605, end: 610 },
            },
            loc: { start: 605, end: 611 },
          },
          directives: [],
          loc: { start: 574, end: 611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participateInEvent",
            loc: { start: 614, end: 632 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 633, end: 635 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 637, end: 639 },
                  },
                  loc: { start: 637, end: 639 },
                },
                loc: { start: 637, end: 640 },
              },
              directives: [],
              loc: { start: 633, end: 640 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 643, end: 648 },
              },
              loc: { start: 643, end: 648 },
            },
            loc: { start: 643, end: 649 },
          },
          directives: [],
          loc: { start: 614, end: 649 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "leaveEvent",
            loc: { start: 652, end: 662 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 663, end: 665 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 667, end: 669 },
                  },
                  loc: { start: 667, end: 669 },
                },
                loc: { start: 667, end: 670 },
              },
              directives: [],
              loc: { start: 663, end: 670 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 673, end: 678 },
              },
              loc: { start: 673, end: 678 },
            },
            loc: { start: 673, end: 679 },
          },
          directives: [],
          loc: { start: 652, end: 679 },
        },
      ],
      loc: { start: 549, end: 681 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 695, end: 700 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "events",
            loc: { start: 705, end: 711 },
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
                    loc: { start: 714, end: 719 },
                  },
                  loc: { start: 714, end: 719 },
                },
                loc: { start: 714, end: 720 },
              },
              loc: { start: 713, end: 721 },
            },
            loc: { start: 713, end: 722 },
          },
          directives: [],
          loc: { start: 705, end: 722 },
        },
      ],
      loc: { start: 683, end: 724 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Event", loc: { start: 731, end: 736 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 741, end: 743 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 745, end: 747 },
              },
              loc: { start: 745, end: 747 },
            },
            loc: { start: 745, end: 748 },
          },
          directives: [],
          loc: { start: 741, end: 748 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 751, end: 755 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 757, end: 763 },
              },
              loc: { start: 757, end: 763 },
            },
            loc: { start: 757, end: 764 },
          },
          directives: [],
          loc: { start: 751, end: 764 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "party", loc: { start: 767, end: 772 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 774, end: 779 },
              },
              loc: { start: 774, end: 779 },
            },
            loc: { start: 774, end: 780 },
          },
          directives: [],
          loc: { start: 767, end: 780 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "date", loc: { start: 783, end: 787 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 789, end: 793 },
            },
            loc: { start: 789, end: 793 },
          },
          directives: [],
          loc: { start: 783, end: 793 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 796, end: 805 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 807, end: 813 },
            },
            loc: { start: 807, end: 813 },
          },
          directives: [],
          loc: { start: 796, end: 813 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 816, end: 823 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 825, end: 831 },
            },
            loc: { start: 825, end: 831 },
          },
          directives: [],
          loc: { start: 816, end: 831 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "organizer",
            loc: { start: 834, end: 843 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 845, end: 849 },
              },
              loc: { start: 845, end: 849 },
            },
            loc: { start: 845, end: 850 },
          },
          directives: [],
          loc: { start: 834, end: 850 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participants",
            loc: { start: 853, end: 865 },
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
                    loc: { start: 868, end: 872 },
                  },
                  loc: { start: 868, end: 872 },
                },
                loc: { start: 868, end: 873 },
              },
              loc: { start: 867, end: 874 },
            },
            loc: { start: 867, end: 875 },
          },
          directives: [],
          loc: { start: 853, end: 875 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 878, end: 889 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 891, end: 897 },
            },
            loc: { start: 891, end: 897 },
          },
          directives: [],
          loc: { start: 878, end: 897 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 900, end: 905 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 907, end: 913 },
              },
              loc: { start: 907, end: 913 },
            },
            loc: { start: 907, end: 914 },
          },
          directives: [],
          loc: { start: 900, end: 914 },
        },
      ],
      loc: { start: 726, end: 916 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "EventInput",
        loc: { start: 924, end: 934 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 939, end: 941 } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 943, end: 945 } },
            loc: { start: 943, end: 945 },
          },
          directives: [],
          loc: { start: 939, end: 945 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 948, end: 952 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 954, end: 960 },
              },
              loc: { start: 954, end: 960 },
            },
            loc: { start: 954, end: 961 },
          },
          directives: [],
          loc: { start: 948, end: 961 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 964, end: 971 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 973, end: 975 },
              },
              loc: { start: 973, end: 975 },
            },
            loc: { start: 973, end: 976 },
          },
          directives: [],
          loc: { start: 964, end: 976 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "date", loc: { start: 979, end: 983 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 985, end: 989 },
            },
            loc: { start: 985, end: 989 },
          },
          directives: [],
          loc: { start: 979, end: 989 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 992, end: 1001 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1003, end: 1009 },
            },
            loc: { start: 1003, end: 1009 },
          },
          directives: [],
          loc: { start: 992, end: 1009 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 1012, end: 1019 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1021, end: 1027 },
            },
            loc: { start: 1021, end: 1027 },
          },
          directives: [],
          loc: { start: 1012, end: 1027 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1030, end: 1041 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1043, end: 1049 },
            },
            loc: { start: 1043, end: 1049 },
          },
          directives: [],
          loc: { start: 1030, end: 1049 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1052, end: 1057 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 1059, end: 1063 },
              },
              loc: { start: 1059, end: 1063 },
            },
            loc: { start: 1059, end: 1064 },
          },
          directives: [],
          loc: { start: 1052, end: 1064 },
        },
      ],
      loc: { start: 918, end: 1066 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1079, end: 1084 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "games",
            loc: { start: 1089, end: 1094 },
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
                    loc: { start: 1097, end: 1101 },
                  },
                  loc: { start: 1097, end: 1101 },
                },
                loc: { start: 1097, end: 1102 },
              },
              loc: { start: 1096, end: 1103 },
            },
            loc: { start: 1096, end: 1104 },
          },
          directives: [],
          loc: { start: 1089, end: 1104 },
        },
      ],
      loc: { start: 1067, end: 1106 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1120, end: 1128 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addGameToParty",
            loc: { start: 1133, end: 1147 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1148, end: 1155 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1157, end: 1159 },
                  },
                  loc: { start: 1157, end: 1159 },
                },
                loc: { start: 1157, end: 1160 },
              },
              directives: [],
              loc: { start: 1148, end: 1160 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1162, end: 1166 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1168, end: 1174 },
                  },
                  loc: { start: 1168, end: 1174 },
                },
                loc: { start: 1168, end: 1175 },
              },
              directives: [],
              loc: { start: 1162, end: 1175 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AddGameResult",
                loc: { start: 1178, end: 1191 },
              },
              loc: { start: 1178, end: 1191 },
            },
            loc: { start: 1178, end: 1192 },
          },
          directives: [],
          loc: { start: 1133, end: 1192 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setGamesPlayed",
            loc: { start: 1195, end: 1209 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1210, end: 1217 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1219, end: 1221 },
                  },
                  loc: { start: 1219, end: 1221 },
                },
                loc: { start: 1219, end: 1222 },
              },
              directives: [],
              loc: { start: 1210, end: 1222 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "gameIds",
                loc: { start: 1224, end: 1231 },
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
                        loc: { start: 1234, end: 1236 },
                      },
                      loc: { start: 1234, end: 1236 },
                    },
                    loc: { start: 1234, end: 1237 },
                  },
                  loc: { start: 1233, end: 1238 },
                },
                loc: { start: 1233, end: 1239 },
              },
              directives: [],
              loc: { start: 1224, end: 1239 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1242, end: 1251 },
              },
              loc: { start: 1242, end: 1251 },
            },
            loc: { start: 1242, end: 1252 },
          },
          directives: [],
          loc: { start: 1195, end: 1252 },
        },
      ],
      loc: { start: 1108, end: 1254 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 1268, end: 1273 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1278, end: 1289 },
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
                    loc: { start: 1292, end: 1303 },
                  },
                  loc: { start: 1292, end: 1303 },
                },
                loc: { start: 1292, end: 1304 },
              },
              loc: { start: 1291, end: 1305 },
            },
            loc: { start: 1291, end: 1306 },
          },
          directives: [],
          loc: { start: 1278, end: 1306 },
        },
      ],
      loc: { start: 1256, end: 1308 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 1322, end: 1331 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1336, end: 1347 },
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
                    loc: { start: 1350, end: 1354 },
                  },
                  loc: { start: 1350, end: 1354 },
                },
                loc: { start: 1350, end: 1355 },
              },
              loc: { start: 1349, end: 1356 },
            },
            loc: { start: 1349, end: 1357 },
          },
          directives: [],
          loc: { start: 1336, end: 1357 },
        },
      ],
      loc: { start: 1310, end: 1359 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AddGameResult",
        loc: { start: 1366, end: 1379 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1384, end: 1388 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1390, end: 1394 },
              },
              loc: { start: 1390, end: 1394 },
            },
            loc: { start: 1390, end: 1395 },
          },
          directives: [],
          loc: { start: 1384, end: 1395 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 1398, end: 1407 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1409, end: 1418 },
              },
              loc: { start: 1409, end: 1418 },
            },
            loc: { start: 1409, end: 1419 },
          },
          directives: [],
          loc: { start: 1398, end: 1419 },
        },
      ],
      loc: { start: 1361, end: 1421 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Game", loc: { start: 1428, end: 1432 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1437, end: 1439 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1441, end: 1443 },
              },
              loc: { start: 1441, end: 1443 },
            },
            loc: { start: 1441, end: 1444 },
          },
          directives: [],
          loc: { start: 1437, end: 1444 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1447, end: 1451 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1453, end: 1459 },
              },
              loc: { start: 1453, end: 1459 },
            },
            loc: { start: 1453, end: 1460 },
          },
          directives: [],
          loc: { start: 1447, end: 1460 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1463, end: 1468 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1470, end: 1476 },
              },
              loc: { start: 1470, end: 1476 },
            },
            loc: { start: 1470, end: 1477 },
          },
          directives: [],
          loc: { start: 1463, end: 1477 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1480, end: 1487 },
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
                    loc: { start: 1490, end: 1494 },
                  },
                  loc: { start: 1490, end: 1494 },
                },
                loc: { start: 1490, end: 1495 },
              },
              loc: { start: 1489, end: 1496 },
            },
            loc: { start: 1489, end: 1497 },
          },
          directives: [],
          loc: { start: 1480, end: 1497 },
        },
      ],
      loc: { start: 1423, end: 1499 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameOnParty",
        loc: { start: 1506, end: 1517 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1522, end: 1524 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1526, end: 1528 },
              },
              loc: { start: 1526, end: 1528 },
            },
            loc: { start: 1526, end: 1529 },
          },
          directives: [],
          loc: { start: 1522, end: 1529 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1532, end: 1536 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1538, end: 1542 },
              },
              loc: { start: 1538, end: 1542 },
            },
            loc: { start: 1538, end: 1543 },
          },
          directives: [],
          loc: { start: 1532, end: 1543 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1546, end: 1551 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1553, end: 1558 },
              },
              loc: { start: 1553, end: 1558 },
            },
            loc: { start: 1553, end: 1559 },
          },
          directives: [],
          loc: { start: 1546, end: 1559 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1562, end: 1569 },
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
                    loc: { start: 1572, end: 1576 },
                  },
                  loc: { start: 1572, end: 1576 },
                },
                loc: { start: 1572, end: 1577 },
              },
              loc: { start: 1571, end: 1578 },
            },
            loc: { start: 1571, end: 1579 },
          },
          directives: [],
          loc: { start: 1562, end: 1579 },
        },
      ],
      loc: { start: 1501, end: 1581 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1594, end: 1599 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1604, end: 1609 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1610, end: 1612 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1614, end: 1616 },
                  },
                  loc: { start: 1614, end: 1616 },
                },
                loc: { start: 1614, end: 1617 },
              },
              directives: [],
              loc: { start: 1610, end: 1617 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1620, end: 1625 },
            },
            loc: { start: 1620, end: 1625 },
          },
          directives: [],
          loc: { start: 1604, end: 1625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parties",
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
                    value: "Party",
                    loc: { start: 1638, end: 1643 },
                  },
                  loc: { start: 1638, end: 1643 },
                },
                loc: { start: 1638, end: 1644 },
              },
              loc: { start: 1637, end: 1645 },
            },
            loc: { start: 1637, end: 1646 },
          },
          directives: [],
          loc: { start: 1628, end: 1646 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "nextParty",
            loc: { start: 1649, end: 1658 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1660, end: 1665 },
            },
            loc: { start: 1660, end: 1665 },
          },
          directives: [],
          loc: { start: 1649, end: 1665 },
        },
      ],
      loc: { start: 1582, end: 1667 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1681, end: 1689 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setAttendance",
            loc: { start: 1694, end: 1707 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1708, end: 1715 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1717, end: 1719 },
                  },
                  loc: { start: 1717, end: 1719 },
                },
                loc: { start: 1717, end: 1720 },
              },
              directives: [],
              loc: { start: 1708, end: 1720 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1722, end: 1728 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1730, end: 1732 },
                },
                loc: { start: 1730, end: 1732 },
              },
              directives: [],
              loc: { start: 1722, end: 1732 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dates",
                loc: { start: 1734, end: 1739 },
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
                        loc: { start: 1742, end: 1746 },
                      },
                      loc: { start: 1742, end: 1746 },
                    },
                    loc: { start: 1742, end: 1747 },
                  },
                  loc: { start: 1741, end: 1748 },
                },
                loc: { start: 1741, end: 1749 },
              },
              directives: [],
              loc: { start: 1734, end: 1749 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1752, end: 1757 },
              },
              loc: { start: 1752, end: 1757 },
            },
            loc: { start: 1752, end: 1758 },
          },
          directives: [],
          loc: { start: 1694, end: 1758 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeAttendance",
            loc: { start: 1761, end: 1777 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1778, end: 1785 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1787, end: 1789 },
                  },
                  loc: { start: 1787, end: 1789 },
                },
                loc: { start: 1787, end: 1790 },
              },
              directives: [],
              loc: { start: 1778, end: 1790 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1792, end: 1798 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1800, end: 1802 },
                },
                loc: { start: 1800, end: 1802 },
              },
              directives: [],
              loc: { start: 1792, end: 1802 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1805, end: 1810 },
              },
              loc: { start: 1805, end: 1810 },
            },
            loc: { start: 1805, end: 1811 },
          },
          directives: [],
          loc: { start: 1761, end: 1811 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "requestRoom",
            loc: { start: 1814, end: 1825 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1826, end: 1833 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1835, end: 1837 },
                  },
                  loc: { start: 1835, end: 1837 },
                },
                loc: { start: 1835, end: 1838 },
              },
              directives: [],
              loc: { start: 1826, end: 1838 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1841, end: 1850 },
            },
            loc: { start: 1841, end: 1850 },
          },
          directives: [],
          loc: { start: 1814, end: 1850 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recindRoom",
            loc: { start: 1853, end: 1863 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1864, end: 1871 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1873, end: 1875 },
                  },
                  loc: { start: 1873, end: 1875 },
                },
                loc: { start: 1873, end: 1876 },
              },
              directives: [],
              loc: { start: 1864, end: 1876 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1879, end: 1888 },
            },
            loc: { start: 1879, end: 1888 },
          },
          directives: [],
          loc: { start: 1853, end: 1888 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "grantRoom",
            loc: { start: 1891, end: 1900 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 1901, end: 1912 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1914, end: 1916 },
                  },
                  loc: { start: 1914, end: 1916 },
                },
                loc: { start: 1914, end: 1917 },
              },
              directives: [],
              loc: { start: 1901, end: 1917 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1920, end: 1929 },
            },
            loc: { start: 1920, end: 1929 },
          },
          directives: [],
          loc: { start: 1891, end: 1929 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "denyRoom",
            loc: { start: 1932, end: 1940 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 1941, end: 1952 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1954, end: 1956 },
                  },
                  loc: { start: 1954, end: 1956 },
                },
                loc: { start: 1954, end: 1957 },
              },
              directives: [],
              loc: { start: 1941, end: 1957 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1960, end: 1969 },
            },
            loc: { start: 1960, end: 1969 },
          },
          directives: [],
          loc: { start: 1932, end: 1969 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateParty",
            loc: { start: 1972, end: 1983 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1984, end: 1989 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PartyInput",
                    loc: { start: 1991, end: 2001 },
                  },
                  loc: { start: 1991, end: 2001 },
                },
                loc: { start: 1991, end: 2002 },
              },
              directives: [],
              loc: { start: 1984, end: 2002 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2005, end: 2010 },
              },
              loc: { start: 2005, end: 2010 },
            },
            loc: { start: 2005, end: 2011 },
          },
          directives: [],
          loc: { start: 1972, end: 2011 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addPicture",
            loc: { start: 2014, end: 2024 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2025, end: 2030 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PictureInput",
                    loc: { start: 2032, end: 2044 },
                  },
                  loc: { start: 2032, end: 2044 },
                },
                loc: { start: 2032, end: 2045 },
              },
              directives: [],
              loc: { start: 2025, end: 2045 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2048, end: 2055 },
              },
              loc: { start: 2048, end: 2055 },
            },
            loc: { start: 2048, end: 2056 },
          },
          directives: [],
          loc: { start: 2014, end: 2056 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 2059, end: 2066 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2067, end: 2073 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2075, end: 2077 },
                  },
                  loc: { start: 2075, end: 2077 },
                },
                loc: { start: 2075, end: 2078 },
              },
              directives: [],
              loc: { start: 2067, end: 2078 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2081, end: 2090 },
            },
            loc: { start: 2081, end: 2090 },
          },
          directives: [],
          loc: { start: 2059, end: 2090 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 2093, end: 2101 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2102, end: 2108 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2110, end: 2112 },
                  },
                  loc: { start: 2110, end: 2112 },
                },
                loc: { start: 2110, end: 2113 },
              },
              directives: [],
              loc: { start: 2102, end: 2113 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2116, end: 2125 },
            },
            loc: { start: 2116, end: 2125 },
          },
          directives: [],
          loc: { start: 2093, end: 2125 },
        },
      ],
      loc: { start: 1669, end: 2127 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2134, end: 2139 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2144, end: 2146 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2148, end: 2150 },
              },
              loc: { start: 2148, end: 2150 },
            },
            loc: { start: 2148, end: 2151 },
          },
          directives: [],
          loc: { start: 2144, end: 2151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2154, end: 2163 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2165, end: 2169 },
              },
              loc: { start: 2165, end: 2169 },
            },
            loc: { start: 2165, end: 2170 },
          },
          directives: [],
          loc: { start: 2154, end: 2170 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2173, end: 2180 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2182, end: 2186 },
              },
              loc: { start: 2182, end: 2186 },
            },
            loc: { start: 2182, end: 2187 },
          },
          directives: [],
          loc: { start: 2173, end: 2187 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tentative",
            loc: { start: 2190, end: 2199 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2201, end: 2208 },
              },
              loc: { start: 2201, end: 2208 },
            },
            loc: { start: 2201, end: 2209 },
          },
          directives: [],
          loc: { start: 2190, end: 2209 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2212, end: 2220 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2222, end: 2228 },
              },
              loc: { start: 2222, end: 2228 },
            },
            loc: { start: 2222, end: 2229 },
          },
          directives: [],
          loc: { start: 2212, end: 2229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2232, end: 2249 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2251, end: 2257 },
            },
            loc: { start: 2251, end: 2257 },
          },
          directives: [],
          loc: { start: 2232, end: 2257 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2260, end: 2274 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2276, end: 2279 },
              },
              loc: { start: 2276, end: 2279 },
            },
            loc: { start: 2276, end: 2280 },
          },
          directives: [],
          loc: { start: 2260, end: 2280 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2283, end: 2294 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2296, end: 2301 },
              },
              loc: { start: 2296, end: 2301 },
            },
            loc: { start: 2296, end: 2302 },
          },
          directives: [],
          loc: { start: 2283, end: 2302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2305, end: 2315 },
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
                    loc: { start: 2318, end: 2327 },
                  },
                  loc: { start: 2318, end: 2327 },
                },
                loc: { start: 2318, end: 2328 },
              },
              loc: { start: 2317, end: 2329 },
            },
            loc: { start: 2317, end: 2330 },
          },
          directives: [],
          loc: { start: 2305, end: 2330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2333, end: 2342 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2343, end: 2349 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2351, end: 2353 },
                },
                loc: { start: 2351, end: 2353 },
              },
              directives: [],
              loc: { start: 2343, end: 2353 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2356, end: 2365 },
            },
            loc: { start: 2356, end: 2365 },
          },
          directives: [],
          loc: { start: 2333, end: 2365 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2368, end: 2376 },
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
                    loc: { start: 2379, end: 2386 },
                  },
                  loc: { start: 2379, end: 2386 },
                },
                loc: { start: 2379, end: 2387 },
              },
              loc: { start: 2378, end: 2388 },
            },
            loc: { start: 2378, end: 2389 },
          },
          directives: [],
          loc: { start: 2368, end: 2389 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2392, end: 2406 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2408, end: 2411 },
              },
              loc: { start: 2408, end: 2411 },
            },
            loc: { start: 2408, end: 2412 },
          },
          directives: [],
          loc: { start: 2392, end: 2412 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2415, end: 2435 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2437, end: 2441 },
            },
            loc: { start: 2437, end: 2441 },
          },
          directives: [],
          loc: { start: 2415, end: 2441 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2444, end: 2450 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2452, end: 2456 },
            },
            loc: { start: 2452, end: 2456 },
          },
          directives: [],
          loc: { start: 2444, end: 2456 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2459, end: 2474 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2476, end: 2481 },
            },
            loc: { start: 2476, end: 2481 },
          },
          directives: [],
          loc: { start: 2459, end: 2481 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2484, end: 2492 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2494, end: 2499 },
            },
            loc: { start: 2494, end: 2499 },
          },
          directives: [],
          loc: { start: 2484, end: 2499 },
        },
      ],
      loc: { start: 2129, end: 2501 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2508, end: 2515 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2520, end: 2522 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2524, end: 2526 },
              },
              loc: { start: 2524, end: 2526 },
            },
            loc: { start: 2524, end: 2527 },
          },
          directives: [],
          loc: { start: 2520, end: 2527 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2530, end: 2533 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2535, end: 2541 },
              },
              loc: { start: 2535, end: 2541 },
            },
            loc: { start: 2535, end: 2542 },
          },
          directives: [],
          loc: { start: 2530, end: 2542 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2545, end: 2550 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2552, end: 2557 },
              },
              loc: { start: 2552, end: 2557 },
            },
            loc: { start: 2552, end: 2558 },
          },
          directives: [],
          loc: { start: 2545, end: 2558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2561, end: 2565 },
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
                    loc: { start: 2568, end: 2578 },
                  },
                  loc: { start: 2568, end: 2578 },
                },
                loc: { start: 2568, end: 2579 },
              },
              loc: { start: 2567, end: 2580 },
            },
            loc: { start: 2567, end: 2581 },
          },
          directives: [],
          loc: { start: 2561, end: 2581 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2584, end: 2588 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2590, end: 2601 },
              },
              loc: { start: 2590, end: 2601 },
            },
            loc: { start: 2590, end: 2602 },
          },
          directives: [],
          loc: { start: 2584, end: 2602 },
        },
      ],
      loc: { start: 2503, end: 2604 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2611, end: 2622 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2627, end: 2632 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2634, end: 2637 },
              },
              loc: { start: 2634, end: 2637 },
            },
            loc: { start: 2634, end: 2638 },
          },
          directives: [],
          loc: { start: 2627, end: 2638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2641, end: 2647 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2649, end: 2652 },
              },
              loc: { start: 2649, end: 2652 },
            },
            loc: { start: 2649, end: 2653 },
          },
          directives: [],
          loc: { start: 2641, end: 2653 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2656, end: 2664 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2666, end: 2671 },
            },
            loc: { start: 2666, end: 2671 },
          },
          directives: [],
          loc: { start: 2656, end: 2671 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2674, end: 2683 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2685, end: 2690 },
            },
            loc: { start: 2685, end: 2690 },
          },
          directives: [],
          loc: { start: 2674, end: 2690 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2693, end: 2701 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2703, end: 2708 },
            },
            loc: { start: 2703, end: 2708 },
          },
          directives: [],
          loc: { start: 2693, end: 2708 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2711, end: 2717 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2719, end: 2727 },
            },
            loc: { start: 2719, end: 2727 },
          },
          directives: [],
          loc: { start: 2711, end: 2727 },
        },
      ],
      loc: { start: 2606, end: 2729 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2736, end: 2746 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2751, end: 2753 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2755, end: 2757 },
              },
              loc: { start: 2755, end: 2757 },
            },
            loc: { start: 2755, end: 2758 },
          },
          directives: [],
          loc: { start: 2751, end: 2758 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2761, end: 2765 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2767, end: 2771 },
              },
              loc: { start: 2767, end: 2771 },
            },
            loc: { start: 2767, end: 2772 },
          },
          directives: [],
          loc: { start: 2761, end: 2772 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2775, end: 2782 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2784, end: 2791 },
              },
              loc: { start: 2784, end: 2791 },
            },
            loc: { start: 2784, end: 2792 },
          },
          directives: [],
          loc: { start: 2775, end: 2792 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2795, end: 2806 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2808, end: 2819 },
              },
              loc: { start: 2808, end: 2819 },
            },
            loc: { start: 2808, end: 2820 },
          },
          directives: [],
          loc: { start: 2795, end: 2820 },
        },
      ],
      loc: { start: 2731, end: 2822 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2831, end: 2842 },
      },
      directives: [],
      loc: { start: 2824, end: 2842 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2850, end: 2860 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2865, end: 2867 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2869, end: 2871 },
            },
            loc: { start: 2869, end: 2871 },
          },
          directives: [],
          loc: { start: 2865, end: 2871 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2874, end: 2883 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2885, end: 2889 },
              },
              loc: { start: 2885, end: 2889 },
            },
            loc: { start: 2885, end: 2890 },
          },
          directives: [],
          loc: { start: 2874, end: 2890 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2893, end: 2900 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2902, end: 2906 },
              },
              loc: { start: 2902, end: 2906 },
            },
            loc: { start: 2902, end: 2907 },
          },
          directives: [],
          loc: { start: 2893, end: 2907 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2910, end: 2918 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2920, end: 2926 },
              },
              loc: { start: 2920, end: 2926 },
            },
            loc: { start: 2920, end: 2927 },
          },
          directives: [],
          loc: { start: 2910, end: 2927 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2930, end: 2947 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2949, end: 2955 },
            },
            loc: { start: 2949, end: 2955 },
          },
          directives: [],
          loc: { start: 2930, end: 2955 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2958, end: 2972 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2974, end: 2977 },
              },
              loc: { start: 2974, end: 2977 },
            },
            loc: { start: 2974, end: 2978 },
          },
          directives: [],
          loc: { start: 2958, end: 2978 },
        },
      ],
      loc: { start: 2844, end: 2980 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2988, end: 3000 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3005, end: 3009 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3011, end: 3017 },
              },
              loc: { start: 3011, end: 3017 },
            },
            loc: { start: 3011, end: 3018 },
          },
          directives: [],
          loc: { start: 3005, end: 3018 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 3021, end: 3028 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3030, end: 3032 },
              },
              loc: { start: 3030, end: 3032 },
            },
            loc: { start: 3030, end: 3033 },
          },
          directives: [],
          loc: { start: 3021, end: 3033 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3036, end: 3040 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 3042, end: 3046 },
              },
              loc: { start: 3042, end: 3046 },
            },
            loc: { start: 3042, end: 3047 },
          },
          directives: [],
          loc: { start: 3036, end: 3047 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3050, end: 3054 },
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
                  loc: { start: 3057, end: 3072 },
                },
                loc: { start: 3057, end: 3072 },
              },
              loc: { start: 3057, end: 3073 },
            },
            loc: { start: 3056, end: 3074 },
          },
          directives: [],
          loc: { start: 3050, end: 3074 },
        },
      ],
      loc: { start: 2982, end: 3076 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3084, end: 3099 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3104, end: 3110 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3112, end: 3114 },
              },
              loc: { start: 3112, end: 3114 },
            },
            loc: { start: 3112, end: 3115 },
          },
          directives: [],
          loc: { start: 3104, end: 3115 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3118, end: 3129 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3131, end: 3142 },
              },
              loc: { start: 3131, end: 3142 },
            },
            loc: { start: 3131, end: 3143 },
          },
          directives: [],
          loc: { start: 3118, end: 3143 },
        },
      ],
      loc: { start: 3078, end: 3145 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3152, end: 3161 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3166, end: 3168 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3170, end: 3172 },
              },
              loc: { start: 3170, end: 3172 },
            },
            loc: { start: 3170, end: 3173 },
          },
          directives: [],
          loc: { start: 3166, end: 3173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3176, end: 3181 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3183, end: 3188 },
              },
              loc: { start: 3183, end: 3188 },
            },
            loc: { start: 3183, end: 3189 },
          },
          directives: [],
          loc: { start: 3176, end: 3189 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3192, end: 3197 },
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
                    loc: { start: 3200, end: 3204 },
                  },
                  loc: { start: 3200, end: 3204 },
                },
                loc: { start: 3200, end: 3205 },
              },
              loc: { start: 3199, end: 3206 },
            },
            loc: { start: 3199, end: 3207 },
          },
          directives: [],
          loc: { start: 3192, end: 3207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3210, end: 3214 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3216, end: 3226 },
            },
            loc: { start: 3216, end: 3226 },
          },
          directives: [],
          loc: { start: 3210, end: 3226 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3229, end: 3244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3246, end: 3250 },
              },
              loc: { start: 3246, end: 3250 },
            },
            loc: { start: 3246, end: 3251 },
          },
          directives: [],
          loc: { start: 3229, end: 3251 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3254, end: 3262 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3264, end: 3269 },
              },
              loc: { start: 3264, end: 3269 },
            },
            loc: { start: 3264, end: 3270 },
          },
          directives: [],
          loc: { start: 3254, end: 3270 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3273, end: 3280 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3282, end: 3290 },
            },
            loc: { start: 3282, end: 3290 },
          },
          directives: [],
          loc: { start: 3273, end: 3290 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3293, end: 3301 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3303, end: 3311 },
            },
            loc: { start: 3303, end: 3311 },
          },
          directives: [],
          loc: { start: 3293, end: 3311 },
        },
      ],
      loc: { start: 3147, end: 3313 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3320, end: 3330 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3335, end: 3344 },
          },
          directives: [],
          loc: { start: 3335, end: 3344 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3347, end: 3354 },
          },
          directives: [],
          loc: { start: 3347, end: 3354 },
        },
      ],
      loc: { start: 3315, end: 3356 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3369, end: 3374 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3379, end: 3381 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3383, end: 3387 },
            },
            loc: { start: 3383, end: 3387 },
          },
          directives: [],
          loc: { start: 3379, end: 3387 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3390, end: 3395 },
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
                    loc: { start: 3398, end: 3402 },
                  },
                  loc: { start: 3398, end: 3402 },
                },
                loc: { start: 3398, end: 3403 },
              },
              loc: { start: 3397, end: 3404 },
            },
            loc: { start: 3397, end: 3405 },
          },
          directives: [],
          loc: { start: 3390, end: 3405 },
        },
      ],
      loc: { start: 3357, end: 3407 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3421, end: 3429 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3434, end: 3442 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3443, end: 3451 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3453, end: 3459 },
                  },
                  loc: { start: 3453, end: 3459 },
                },
                loc: { start: 3453, end: 3460 },
              },
              directives: [],
              loc: { start: 3443, end: 3460 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3462, end: 3467 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3469, end: 3475 },
                  },
                  loc: { start: 3469, end: 3475 },
                },
                loc: { start: 3469, end: 3476 },
              },
              directives: [],
              loc: { start: 3462, end: 3476 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3478, end: 3486 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3488, end: 3494 },
                },
                loc: { start: 3488, end: 3494 },
              },
              directives: [],
              loc: { start: 3478, end: 3494 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3497, end: 3513 },
              },
              loc: { start: 3497, end: 3513 },
            },
            loc: { start: 3497, end: 3514 },
          },
          directives: [],
          loc: { start: 3434, end: 3514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3517, end: 3547 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3548, end: 3554 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3556, end: 3562 },
                  },
                  loc: { start: 3556, end: 3562 },
                },
                loc: { start: 3556, end: 3563 },
              },
              directives: [],
              loc: { start: 3548, end: 3563 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3566, end: 3570 },
              },
              loc: { start: 3566, end: 3570 },
            },
            loc: { start: 3566, end: 3571 },
          },
          directives: [],
          loc: { start: 3517, end: 3571 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3574, end: 3589 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3590, end: 3596 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3598, end: 3604 },
                  },
                  loc: { start: 3598, end: 3604 },
                },
                loc: { start: 3598, end: 3605 },
              },
              directives: [],
              loc: { start: 3590, end: 3605 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3607, end: 3611 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3613, end: 3619 },
                  },
                  loc: { start: 3613, end: 3619 },
                },
                loc: { start: 3613, end: 3620 },
              },
              directives: [],
              loc: { start: 3607, end: 3620 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3622, end: 3630 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3632, end: 3636 },
                  },
                  loc: { start: 3632, end: 3636 },
                },
                loc: { start: 3632, end: 3637 },
              },
              directives: [],
              loc: { start: 3622, end: 3637 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3640, end: 3662 },
              },
              loc: { start: 3640, end: 3662 },
            },
            loc: { start: 3640, end: 3663 },
          },
          directives: [],
          loc: { start: 3574, end: 3663 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3666, end: 3693 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3694, end: 3700 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3702, end: 3708 },
                },
                loc: { start: 3702, end: 3708 },
              },
              directives: [],
              loc: { start: 3694, end: 3708 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3711, end: 3715 },
              },
              loc: { start: 3711, end: 3715 },
            },
            loc: { start: 3711, end: 3716 },
          },
          directives: [],
          loc: { start: 3666, end: 3716 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3719, end: 3731 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3732, end: 3740 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3742, end: 3746 },
                  },
                  loc: { start: 3742, end: 3746 },
                },
                loc: { start: 3742, end: 3747 },
              },
              directives: [],
              loc: { start: 3732, end: 3747 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3750, end: 3763 },
              },
              loc: { start: 3750, end: 3763 },
            },
            loc: { start: 3750, end: 3764 },
          },
          directives: [],
          loc: { start: 3719, end: 3764 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3767, end: 3780 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3781, end: 3786 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3788, end: 3794 },
                  },
                  loc: { start: 3788, end: 3794 },
                },
                loc: { start: 3788, end: 3795 },
              },
              directives: [],
              loc: { start: 3781, end: 3795 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3797, end: 3805 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3807, end: 3813 },
                  },
                  loc: { start: 3807, end: 3813 },
                },
                loc: { start: 3807, end: 3814 },
              },
              directives: [],
              loc: { start: 3797, end: 3814 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3817, end: 3829 },
              },
              loc: { start: 3817, end: 3829 },
            },
            loc: { start: 3817, end: 3830 },
          },
          directives: [],
          loc: { start: 3767, end: 3830 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3833, end: 3846 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3847, end: 3852 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3854, end: 3860 },
                  },
                  loc: { start: 3854, end: 3860 },
                },
                loc: { start: 3854, end: 3861 },
              },
              directives: [],
              loc: { start: 3847, end: 3861 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3864, end: 3871 },
              },
              loc: { start: 3864, end: 3871 },
            },
            loc: { start: 3864, end: 3872 },
          },
          directives: [],
          loc: { start: 3833, end: 3872 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3875, end: 3889 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3890, end: 3901 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3903, end: 3909 },
                  },
                  loc: { start: 3903, end: 3909 },
                },
                loc: { start: 3903, end: 3910 },
              },
              directives: [],
              loc: { start: 3890, end: 3910 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3913, end: 3925 },
              },
              loc: { start: 3913, end: 3925 },
            },
            loc: { start: 3913, end: 3926 },
          },
          directives: [],
          loc: { start: 3875, end: 3926 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3929, end: 3941 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3942, end: 3954 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3956, end: 3962 },
                  },
                  loc: { start: 3956, end: 3962 },
                },
                loc: { start: 3956, end: 3963 },
              },
              directives: [],
              loc: { start: 3942, end: 3963 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3966, end: 3978 },
              },
              loc: { start: 3966, end: 3978 },
            },
            loc: { start: 3966, end: 3979 },
          },
          directives: [],
          loc: { start: 3929, end: 3979 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3982, end: 3998 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3999, end: 4001 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4003, end: 4005 },
                  },
                  loc: { start: 4003, end: 4005 },
                },
                loc: { start: 4003, end: 4006 },
              },
              directives: [],
              loc: { start: 3999, end: 4006 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 4008, end: 4012 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4014, end: 4020 },
                  },
                  loc: { start: 4014, end: 4020 },
                },
                loc: { start: 4014, end: 4021 },
              },
              directives: [],
              loc: { start: 4008, end: 4021 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4024, end: 4034 },
              },
              loc: { start: 4024, end: 4034 },
            },
            loc: { start: 4024, end: 4035 },
          },
          directives: [],
          loc: { start: 3982, end: 4035 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4038, end: 4054 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4055, end: 4057 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4059, end: 4061 },
                  },
                  loc: { start: 4059, end: 4061 },
                },
                loc: { start: 4059, end: 4062 },
              },
              directives: [],
              loc: { start: 4055, end: 4062 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4065, end: 4075 },
              },
              loc: { start: 4065, end: 4075 },
            },
            loc: { start: 4065, end: 4076 },
          },
          directives: [],
          loc: { start: 4038, end: 4076 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4079, end: 4092 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4093, end: 4098 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4100, end: 4112 },
                  },
                  loc: { start: 4100, end: 4112 },
                },
                loc: { start: 4100, end: 4113 },
              },
              directives: [],
              loc: { start: 4093, end: 4113 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4116, end: 4120 },
              },
              loc: { start: 4116, end: 4120 },
            },
            loc: { start: 4116, end: 4121 },
          },
          directives: [],
          loc: { start: 4079, end: 4121 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4124, end: 4144 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4146, end: 4150 },
              },
              loc: { start: 4146, end: 4150 },
            },
            loc: { start: 4146, end: 4151 },
          },
          directives: [],
          loc: { start: 4124, end: 4151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateRoles",
            loc: { start: 4154, end: 4165 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4166, end: 4168 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4170, end: 4172 },
                  },
                  loc: { start: 4170, end: 4172 },
                },
                loc: { start: 4170, end: 4173 },
              },
              directives: [],
              loc: { start: 4166, end: 4173 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "roles",
                loc: { start: 4175, end: 4180 },
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
                        loc: { start: 4183, end: 4187 },
                      },
                      loc: { start: 4183, end: 4187 },
                    },
                    loc: { start: 4183, end: 4188 },
                  },
                  loc: { start: 4182, end: 4189 },
                },
                loc: { start: 4182, end: 4190 },
              },
              directives: [],
              loc: { start: 4175, end: 4190 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4193, end: 4197 },
              },
              loc: { start: 4193, end: 4197 },
            },
            loc: { start: 4193, end: 4198 },
          },
          directives: [],
          loc: { start: 4154, end: 4198 },
        },
      ],
      loc: { start: 3409, end: 4200 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4214, end: 4223 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4228, end: 4232 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4234, end: 4238 },
              },
              loc: { start: 4234, end: 4238 },
            },
            loc: { start: 4234, end: 4239 },
          },
          directives: [],
          loc: { start: 4228, end: 4239 },
        },
      ],
      loc: { start: 4202, end: 4241 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4248, end: 4260 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4265, end: 4270 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4272, end: 4275 },
              },
              loc: { start: 4272, end: 4275 },
            },
            loc: { start: 4272, end: 4276 },
          },
          directives: [],
          loc: { start: 4265, end: 4276 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4279, end: 4291 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4293, end: 4299 },
              },
              loc: { start: 4293, end: 4299 },
            },
            loc: { start: 4293, end: 4300 },
          },
          directives: [],
          loc: { start: 4279, end: 4300 },
        },
      ],
      loc: { start: 4243, end: 4302 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4309, end: 4325 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4330, end: 4334 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4336, end: 4340 },
              },
              loc: { start: 4336, end: 4340 },
            },
            loc: { start: 4336, end: 4341 },
          },
          directives: [],
          loc: { start: 4330, end: 4341 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4344, end: 4349 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4351, end: 4357 },
              },
              loc: { start: 4351, end: 4357 },
            },
            loc: { start: 4351, end: 4358 },
          },
          directives: [],
          loc: { start: 4344, end: 4358 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4361, end: 4373 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4375, end: 4381 },
              },
              loc: { start: 4375, end: 4381 },
            },
            loc: { start: 4375, end: 4382 },
          },
          directives: [],
          loc: { start: 4361, end: 4382 },
        },
      ],
      loc: { start: 4304, end: 4384 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4391, end: 4404 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4409, end: 4421 },
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
                    loc: { start: 4424, end: 4427 },
                  },
                  loc: { start: 4424, end: 4427 },
                },
                loc: { start: 4424, end: 4428 },
              },
              loc: { start: 4423, end: 4429 },
            },
            loc: { start: 4423, end: 4430 },
          },
          directives: [],
          loc: { start: 4409, end: 4430 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4433, end: 4438 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4440, end: 4443 },
              },
              loc: { start: 4440, end: 4443 },
            },
            loc: { start: 4440, end: 4444 },
          },
          directives: [],
          loc: { start: 4433, end: 4444 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4447, end: 4459 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4461, end: 4467 },
              },
              loc: { start: 4461, end: 4467 },
            },
            loc: { start: 4461, end: 4468 },
          },
          directives: [],
          loc: { start: 4447, end: 4468 },
        },
      ],
      loc: { start: 4386, end: 4470 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4477, end: 4499 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4504, end: 4509 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4511, end: 4517 },
              },
              loc: { start: 4511, end: 4517 },
            },
            loc: { start: 4511, end: 4518 },
          },
          directives: [],
          loc: { start: 4504, end: 4518 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4521, end: 4527 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4529, end: 4539 },
              },
              loc: { start: 4529, end: 4539 },
            },
            loc: { start: 4529, end: 4540 },
          },
          directives: [],
          loc: { start: 4521, end: 4540 },
        },
      ],
      loc: { start: 4472, end: 4542 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4549, end: 4553 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4558, end: 4560 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4562, end: 4564 },
              },
              loc: { start: 4562, end: 4564 },
            },
            loc: { start: 4562, end: 4565 },
          },
          directives: [],
          loc: { start: 4558, end: 4565 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4568, end: 4572 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4574, end: 4580 },
              },
              loc: { start: 4574, end: 4580 },
            },
            loc: { start: 4574, end: 4581 },
          },
          directives: [],
          loc: { start: 4568, end: 4581 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4584, end: 4595 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4597, end: 4603 },
              },
              loc: { start: 4597, end: 4603 },
            },
            loc: { start: 4597, end: 4604 },
          },
          directives: [],
          loc: { start: 4584, end: 4604 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4607, end: 4612 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4614, end: 4620 },
              },
              loc: { start: 4614, end: 4620 },
            },
            loc: { start: 4614, end: 4621 },
          },
          directives: [],
          loc: { start: 4607, end: 4621 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4624, end: 4630 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4632, end: 4638 },
              },
              loc: { start: 4632, end: 4638 },
            },
            loc: { start: 4632, end: 4639 },
          },
          directives: [],
          loc: { start: 4624, end: 4639 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4642, end: 4651 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4653, end: 4659 },
            },
            loc: { start: 4653, end: 4659 },
          },
          directives: [],
          loc: { start: 4642, end: 4659 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4662, end: 4669 },
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
                    loc: { start: 4672, end: 4682 },
                  },
                  loc: { start: 4672, end: 4682 },
                },
                loc: { start: 4672, end: 4683 },
              },
              loc: { start: 4671, end: 4684 },
            },
            loc: { start: 4671, end: 4685 },
          },
          directives: [],
          loc: { start: 4662, end: 4685 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 4688, end: 4693 },
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
                    loc: { start: 4696, end: 4700 },
                  },
                  loc: { start: 4696, end: 4700 },
                },
                loc: { start: 4696, end: 4701 },
              },
              loc: { start: 4695, end: 4702 },
            },
            loc: { start: 4695, end: 4703 },
          },
          directives: [],
          loc: { start: 4688, end: 4703 },
        },
      ],
      loc: { start: 4544, end: 4705 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4713, end: 4725 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4730, end: 4732 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4734, end: 4736 },
            },
            loc: { start: 4734, end: 4736 },
          },
          directives: [],
          loc: { start: 4730, end: 4736 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4739, end: 4743 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4745, end: 4751 },
              },
              loc: { start: 4745, end: 4751 },
            },
            loc: { start: 4745, end: 4752 },
          },
          directives: [],
          loc: { start: 4739, end: 4752 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4755, end: 4766 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4768, end: 4774 },
              },
              loc: { start: 4768, end: 4774 },
            },
            loc: { start: 4768, end: 4775 },
          },
          directives: [],
          loc: { start: 4755, end: 4775 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4778, end: 4783 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4785, end: 4791 },
              },
              loc: { start: 4785, end: 4791 },
            },
            loc: { start: 4785, end: 4792 },
          },
          directives: [],
          loc: { start: 4778, end: 4792 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4795, end: 4803 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4805, end: 4811 },
            },
            loc: { start: 4805, end: 4811 },
          },
          directives: [],
          loc: { start: 4795, end: 4811 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4814, end: 4820 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4822, end: 4826 },
            },
            loc: { start: 4822, end: 4826 },
          },
          directives: [],
          loc: { start: 4814, end: 4826 },
        },
      ],
      loc: { start: 4707, end: 4828 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4835, end: 4845 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4850, end: 4852 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4854, end: 4856 },
              },
              loc: { start: 4854, end: 4856 },
            },
            loc: { start: 4854, end: 4857 },
          },
          directives: [],
          loc: { start: 4850, end: 4857 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4860, end: 4864 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4866, end: 4872 },
              },
              loc: { start: 4866, end: 4872 },
            },
            loc: { start: 4866, end: 4873 },
          },
          directives: [],
          loc: { start: 4860, end: 4873 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4876, end: 4885 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4887, end: 4895 },
            },
            loc: { start: 4887, end: 4895 },
          },
          directives: [],
          loc: { start: 4876, end: 4895 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4898, end: 4908 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4910, end: 4918 },
            },
            loc: { start: 4910, end: 4918 },
          },
          directives: [],
          loc: { start: 4898, end: 4918 },
        },
      ],
      loc: { start: 4830, end: 4920 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 4927, end: 4931 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Trusted",
            loc: { start: 4936, end: 4943 },
          },
          directives: [],
          loc: { start: 4936, end: 4943 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Admin",
            loc: { start: 4946, end: 4951 },
          },
          directives: [],
          loc: { start: 4946, end: 4951 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Doorkeeper",
            loc: { start: 4954, end: 4964 },
          },
          directives: [],
          loc: { start: 4954, end: 4964 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Bookkeeper",
            loc: { start: 4967, end: 4977 },
          },
          directives: [],
          loc: { start: 4967, end: 4977 },
        },
      ],
      loc: { start: 4922, end: 4979 },
    },
  ],
  loc: { start: 0, end: 4980 },
} as unknown as DocumentNode;
