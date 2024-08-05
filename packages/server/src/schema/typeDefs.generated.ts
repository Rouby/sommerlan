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
            value: "location",
            loc: { start: 2190, end: 2198 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2200, end: 2206 },
              },
              loc: { start: 2200, end: 2206 },
            },
            loc: { start: 2200, end: 2207 },
          },
          directives: [],
          loc: { start: 2190, end: 2207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2210, end: 2227 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2229, end: 2235 },
            },
            loc: { start: 2229, end: 2235 },
          },
          directives: [],
          loc: { start: 2210, end: 2235 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2238, end: 2252 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2254, end: 2257 },
              },
              loc: { start: 2254, end: 2257 },
            },
            loc: { start: 2254, end: 2258 },
          },
          directives: [],
          loc: { start: 2238, end: 2258 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2261, end: 2272 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2274, end: 2279 },
              },
              loc: { start: 2274, end: 2279 },
            },
            loc: { start: 2274, end: 2280 },
          },
          directives: [],
          loc: { start: 2261, end: 2280 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2283, end: 2293 },
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
                    loc: { start: 2296, end: 2305 },
                  },
                  loc: { start: 2296, end: 2305 },
                },
                loc: { start: 2296, end: 2306 },
              },
              loc: { start: 2295, end: 2307 },
            },
            loc: { start: 2295, end: 2308 },
          },
          directives: [],
          loc: { start: 2283, end: 2308 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2311, end: 2320 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2321, end: 2327 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2329, end: 2331 },
                },
                loc: { start: 2329, end: 2331 },
              },
              directives: [],
              loc: { start: 2321, end: 2331 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2334, end: 2343 },
            },
            loc: { start: 2334, end: 2343 },
          },
          directives: [],
          loc: { start: 2311, end: 2343 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2346, end: 2354 },
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
                    loc: { start: 2357, end: 2364 },
                  },
                  loc: { start: 2357, end: 2364 },
                },
                loc: { start: 2357, end: 2365 },
              },
              loc: { start: 2356, end: 2366 },
            },
            loc: { start: 2356, end: 2367 },
          },
          directives: [],
          loc: { start: 2346, end: 2367 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2370, end: 2384 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2386, end: 2389 },
              },
              loc: { start: 2386, end: 2389 },
            },
            loc: { start: 2386, end: 2390 },
          },
          directives: [],
          loc: { start: 2370, end: 2390 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2393, end: 2413 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2415, end: 2419 },
            },
            loc: { start: 2415, end: 2419 },
          },
          directives: [],
          loc: { start: 2393, end: 2419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2422, end: 2428 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2430, end: 2434 },
            },
            loc: { start: 2430, end: 2434 },
          },
          directives: [],
          loc: { start: 2422, end: 2434 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2437, end: 2452 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2454, end: 2459 },
            },
            loc: { start: 2454, end: 2459 },
          },
          directives: [],
          loc: { start: 2437, end: 2459 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2462, end: 2470 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2472, end: 2477 },
            },
            loc: { start: 2472, end: 2477 },
          },
          directives: [],
          loc: { start: 2462, end: 2477 },
        },
      ],
      loc: { start: 2129, end: 2479 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2486, end: 2493 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2498, end: 2500 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2502, end: 2504 },
              },
              loc: { start: 2502, end: 2504 },
            },
            loc: { start: 2502, end: 2505 },
          },
          directives: [],
          loc: { start: 2498, end: 2505 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2508, end: 2511 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2513, end: 2519 },
              },
              loc: { start: 2513, end: 2519 },
            },
            loc: { start: 2513, end: 2520 },
          },
          directives: [],
          loc: { start: 2508, end: 2520 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2523, end: 2528 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2530, end: 2535 },
              },
              loc: { start: 2530, end: 2535 },
            },
            loc: { start: 2530, end: 2536 },
          },
          directives: [],
          loc: { start: 2523, end: 2536 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2539, end: 2543 },
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
                    loc: { start: 2546, end: 2556 },
                  },
                  loc: { start: 2546, end: 2556 },
                },
                loc: { start: 2546, end: 2557 },
              },
              loc: { start: 2545, end: 2558 },
            },
            loc: { start: 2545, end: 2559 },
          },
          directives: [],
          loc: { start: 2539, end: 2559 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2562, end: 2566 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2568, end: 2579 },
              },
              loc: { start: 2568, end: 2579 },
            },
            loc: { start: 2568, end: 2580 },
          },
          directives: [],
          loc: { start: 2562, end: 2580 },
        },
      ],
      loc: { start: 2481, end: 2582 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2589, end: 2600 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2605, end: 2610 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2612, end: 2615 },
              },
              loc: { start: 2612, end: 2615 },
            },
            loc: { start: 2612, end: 2616 },
          },
          directives: [],
          loc: { start: 2605, end: 2616 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2619, end: 2625 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2627, end: 2630 },
              },
              loc: { start: 2627, end: 2630 },
            },
            loc: { start: 2627, end: 2631 },
          },
          directives: [],
          loc: { start: 2619, end: 2631 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2634, end: 2642 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2644, end: 2649 },
            },
            loc: { start: 2644, end: 2649 },
          },
          directives: [],
          loc: { start: 2634, end: 2649 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2652, end: 2661 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2663, end: 2668 },
            },
            loc: { start: 2663, end: 2668 },
          },
          directives: [],
          loc: { start: 2652, end: 2668 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2671, end: 2679 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2681, end: 2686 },
            },
            loc: { start: 2681, end: 2686 },
          },
          directives: [],
          loc: { start: 2671, end: 2686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2689, end: 2695 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2697, end: 2705 },
            },
            loc: { start: 2697, end: 2705 },
          },
          directives: [],
          loc: { start: 2689, end: 2705 },
        },
      ],
      loc: { start: 2584, end: 2707 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2714, end: 2724 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2729, end: 2731 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2733, end: 2735 },
              },
              loc: { start: 2733, end: 2735 },
            },
            loc: { start: 2733, end: 2736 },
          },
          directives: [],
          loc: { start: 2729, end: 2736 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2739, end: 2743 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2745, end: 2749 },
              },
              loc: { start: 2745, end: 2749 },
            },
            loc: { start: 2745, end: 2750 },
          },
          directives: [],
          loc: { start: 2739, end: 2750 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2753, end: 2760 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2762, end: 2769 },
              },
              loc: { start: 2762, end: 2769 },
            },
            loc: { start: 2762, end: 2770 },
          },
          directives: [],
          loc: { start: 2753, end: 2770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2773, end: 2784 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2786, end: 2797 },
              },
              loc: { start: 2786, end: 2797 },
            },
            loc: { start: 2786, end: 2798 },
          },
          directives: [],
          loc: { start: 2773, end: 2798 },
        },
      ],
      loc: { start: 2709, end: 2800 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2809, end: 2820 },
      },
      directives: [],
      loc: { start: 2802, end: 2820 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2828, end: 2838 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2843, end: 2845 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2847, end: 2849 },
            },
            loc: { start: 2847, end: 2849 },
          },
          directives: [],
          loc: { start: 2843, end: 2849 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2852, end: 2861 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2863, end: 2867 },
              },
              loc: { start: 2863, end: 2867 },
            },
            loc: { start: 2863, end: 2868 },
          },
          directives: [],
          loc: { start: 2852, end: 2868 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2871, end: 2878 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2880, end: 2884 },
              },
              loc: { start: 2880, end: 2884 },
            },
            loc: { start: 2880, end: 2885 },
          },
          directives: [],
          loc: { start: 2871, end: 2885 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2888, end: 2896 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2898, end: 2904 },
              },
              loc: { start: 2898, end: 2904 },
            },
            loc: { start: 2898, end: 2905 },
          },
          directives: [],
          loc: { start: 2888, end: 2905 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2908, end: 2925 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2927, end: 2933 },
            },
            loc: { start: 2927, end: 2933 },
          },
          directives: [],
          loc: { start: 2908, end: 2933 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2936, end: 2950 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2952, end: 2955 },
              },
              loc: { start: 2952, end: 2955 },
            },
            loc: { start: 2952, end: 2956 },
          },
          directives: [],
          loc: { start: 2936, end: 2956 },
        },
      ],
      loc: { start: 2822, end: 2958 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2966, end: 2978 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2983, end: 2987 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2989, end: 2995 },
              },
              loc: { start: 2989, end: 2995 },
            },
            loc: { start: 2989, end: 2996 },
          },
          directives: [],
          loc: { start: 2983, end: 2996 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2999, end: 3006 },
          },
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
          loc: { start: 2999, end: 3011 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3014, end: 3018 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
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
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3028, end: 3032 },
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
                  loc: { start: 3035, end: 3050 },
                },
                loc: { start: 3035, end: 3050 },
              },
              loc: { start: 3035, end: 3051 },
            },
            loc: { start: 3034, end: 3052 },
          },
          directives: [],
          loc: { start: 3028, end: 3052 },
        },
      ],
      loc: { start: 2960, end: 3054 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3062, end: 3077 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3082, end: 3088 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3090, end: 3092 },
              },
              loc: { start: 3090, end: 3092 },
            },
            loc: { start: 3090, end: 3093 },
          },
          directives: [],
          loc: { start: 3082, end: 3093 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3096, end: 3107 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3109, end: 3120 },
              },
              loc: { start: 3109, end: 3120 },
            },
            loc: { start: 3109, end: 3121 },
          },
          directives: [],
          loc: { start: 3096, end: 3121 },
        },
      ],
      loc: { start: 3056, end: 3123 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3130, end: 3139 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3144, end: 3146 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3148, end: 3150 },
              },
              loc: { start: 3148, end: 3150 },
            },
            loc: { start: 3148, end: 3151 },
          },
          directives: [],
          loc: { start: 3144, end: 3151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3154, end: 3159 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3161, end: 3166 },
              },
              loc: { start: 3161, end: 3166 },
            },
            loc: { start: 3161, end: 3167 },
          },
          directives: [],
          loc: { start: 3154, end: 3167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3170, end: 3175 },
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
                    loc: { start: 3178, end: 3182 },
                  },
                  loc: { start: 3178, end: 3182 },
                },
                loc: { start: 3178, end: 3183 },
              },
              loc: { start: 3177, end: 3184 },
            },
            loc: { start: 3177, end: 3185 },
          },
          directives: [],
          loc: { start: 3170, end: 3185 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3188, end: 3192 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3194, end: 3204 },
            },
            loc: { start: 3194, end: 3204 },
          },
          directives: [],
          loc: { start: 3188, end: 3204 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3207, end: 3222 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3224, end: 3228 },
              },
              loc: { start: 3224, end: 3228 },
            },
            loc: { start: 3224, end: 3229 },
          },
          directives: [],
          loc: { start: 3207, end: 3229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3232, end: 3240 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3242, end: 3247 },
              },
              loc: { start: 3242, end: 3247 },
            },
            loc: { start: 3242, end: 3248 },
          },
          directives: [],
          loc: { start: 3232, end: 3248 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3251, end: 3258 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3260, end: 3268 },
            },
            loc: { start: 3260, end: 3268 },
          },
          directives: [],
          loc: { start: 3251, end: 3268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3271, end: 3279 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3281, end: 3289 },
            },
            loc: { start: 3281, end: 3289 },
          },
          directives: [],
          loc: { start: 3271, end: 3289 },
        },
      ],
      loc: { start: 3125, end: 3291 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3298, end: 3308 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3313, end: 3322 },
          },
          directives: [],
          loc: { start: 3313, end: 3322 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3325, end: 3332 },
          },
          directives: [],
          loc: { start: 3325, end: 3332 },
        },
      ],
      loc: { start: 3293, end: 3334 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3347, end: 3352 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3357, end: 3359 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3361, end: 3365 },
            },
            loc: { start: 3361, end: 3365 },
          },
          directives: [],
          loc: { start: 3357, end: 3365 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3368, end: 3373 },
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
                    loc: { start: 3376, end: 3380 },
                  },
                  loc: { start: 3376, end: 3380 },
                },
                loc: { start: 3376, end: 3381 },
              },
              loc: { start: 3375, end: 3382 },
            },
            loc: { start: 3375, end: 3383 },
          },
          directives: [],
          loc: { start: 3368, end: 3383 },
        },
      ],
      loc: { start: 3335, end: 3385 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3399, end: 3407 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3412, end: 3420 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3421, end: 3429 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3431, end: 3437 },
                  },
                  loc: { start: 3431, end: 3437 },
                },
                loc: { start: 3431, end: 3438 },
              },
              directives: [],
              loc: { start: 3421, end: 3438 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3440, end: 3445 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3447, end: 3453 },
                  },
                  loc: { start: 3447, end: 3453 },
                },
                loc: { start: 3447, end: 3454 },
              },
              directives: [],
              loc: { start: 3440, end: 3454 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3456, end: 3464 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3466, end: 3472 },
                },
                loc: { start: 3466, end: 3472 },
              },
              directives: [],
              loc: { start: 3456, end: 3472 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3475, end: 3491 },
              },
              loc: { start: 3475, end: 3491 },
            },
            loc: { start: 3475, end: 3492 },
          },
          directives: [],
          loc: { start: 3412, end: 3492 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3495, end: 3525 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3526, end: 3532 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3534, end: 3540 },
                  },
                  loc: { start: 3534, end: 3540 },
                },
                loc: { start: 3534, end: 3541 },
              },
              directives: [],
              loc: { start: 3526, end: 3541 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3544, end: 3548 },
              },
              loc: { start: 3544, end: 3548 },
            },
            loc: { start: 3544, end: 3549 },
          },
          directives: [],
          loc: { start: 3495, end: 3549 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3552, end: 3567 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3568, end: 3574 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3576, end: 3582 },
                  },
                  loc: { start: 3576, end: 3582 },
                },
                loc: { start: 3576, end: 3583 },
              },
              directives: [],
              loc: { start: 3568, end: 3583 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3585, end: 3589 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3591, end: 3597 },
                  },
                  loc: { start: 3591, end: 3597 },
                },
                loc: { start: 3591, end: 3598 },
              },
              directives: [],
              loc: { start: 3585, end: 3598 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3600, end: 3608 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3610, end: 3614 },
                  },
                  loc: { start: 3610, end: 3614 },
                },
                loc: { start: 3610, end: 3615 },
              },
              directives: [],
              loc: { start: 3600, end: 3615 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3618, end: 3640 },
              },
              loc: { start: 3618, end: 3640 },
            },
            loc: { start: 3618, end: 3641 },
          },
          directives: [],
          loc: { start: 3552, end: 3641 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3644, end: 3671 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3672, end: 3678 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3680, end: 3686 },
                },
                loc: { start: 3680, end: 3686 },
              },
              directives: [],
              loc: { start: 3672, end: 3686 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3689, end: 3693 },
              },
              loc: { start: 3689, end: 3693 },
            },
            loc: { start: 3689, end: 3694 },
          },
          directives: [],
          loc: { start: 3644, end: 3694 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3697, end: 3709 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3710, end: 3718 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3720, end: 3724 },
                  },
                  loc: { start: 3720, end: 3724 },
                },
                loc: { start: 3720, end: 3725 },
              },
              directives: [],
              loc: { start: 3710, end: 3725 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3728, end: 3741 },
              },
              loc: { start: 3728, end: 3741 },
            },
            loc: { start: 3728, end: 3742 },
          },
          directives: [],
          loc: { start: 3697, end: 3742 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3745, end: 3758 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3759, end: 3764 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3766, end: 3772 },
                  },
                  loc: { start: 3766, end: 3772 },
                },
                loc: { start: 3766, end: 3773 },
              },
              directives: [],
              loc: { start: 3759, end: 3773 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3775, end: 3783 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3785, end: 3791 },
                  },
                  loc: { start: 3785, end: 3791 },
                },
                loc: { start: 3785, end: 3792 },
              },
              directives: [],
              loc: { start: 3775, end: 3792 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3795, end: 3807 },
              },
              loc: { start: 3795, end: 3807 },
            },
            loc: { start: 3795, end: 3808 },
          },
          directives: [],
          loc: { start: 3745, end: 3808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3811, end: 3824 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3825, end: 3830 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3832, end: 3838 },
                  },
                  loc: { start: 3832, end: 3838 },
                },
                loc: { start: 3832, end: 3839 },
              },
              directives: [],
              loc: { start: 3825, end: 3839 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3842, end: 3849 },
              },
              loc: { start: 3842, end: 3849 },
            },
            loc: { start: 3842, end: 3850 },
          },
          directives: [],
          loc: { start: 3811, end: 3850 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3853, end: 3867 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3868, end: 3879 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3881, end: 3887 },
                  },
                  loc: { start: 3881, end: 3887 },
                },
                loc: { start: 3881, end: 3888 },
              },
              directives: [],
              loc: { start: 3868, end: 3888 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3891, end: 3903 },
              },
              loc: { start: 3891, end: 3903 },
            },
            loc: { start: 3891, end: 3904 },
          },
          directives: [],
          loc: { start: 3853, end: 3904 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3907, end: 3919 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3920, end: 3932 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3934, end: 3940 },
                  },
                  loc: { start: 3934, end: 3940 },
                },
                loc: { start: 3934, end: 3941 },
              },
              directives: [],
              loc: { start: 3920, end: 3941 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3944, end: 3956 },
              },
              loc: { start: 3944, end: 3956 },
            },
            loc: { start: 3944, end: 3957 },
          },
          directives: [],
          loc: { start: 3907, end: 3957 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3960, end: 3976 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3977, end: 3979 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3981, end: 3983 },
                  },
                  loc: { start: 3981, end: 3983 },
                },
                loc: { start: 3981, end: 3984 },
              },
              directives: [],
              loc: { start: 3977, end: 3984 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3986, end: 3990 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3992, end: 3998 },
                  },
                  loc: { start: 3992, end: 3998 },
                },
                loc: { start: 3992, end: 3999 },
              },
              directives: [],
              loc: { start: 3986, end: 3999 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4002, end: 4012 },
              },
              loc: { start: 4002, end: 4012 },
            },
            loc: { start: 4002, end: 4013 },
          },
          directives: [],
          loc: { start: 3960, end: 4013 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4016, end: 4032 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4033, end: 4035 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4037, end: 4039 },
                  },
                  loc: { start: 4037, end: 4039 },
                },
                loc: { start: 4037, end: 4040 },
              },
              directives: [],
              loc: { start: 4033, end: 4040 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4043, end: 4053 },
              },
              loc: { start: 4043, end: 4053 },
            },
            loc: { start: 4043, end: 4054 },
          },
          directives: [],
          loc: { start: 4016, end: 4054 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4057, end: 4070 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4071, end: 4076 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4078, end: 4090 },
                  },
                  loc: { start: 4078, end: 4090 },
                },
                loc: { start: 4078, end: 4091 },
              },
              directives: [],
              loc: { start: 4071, end: 4091 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4094, end: 4098 },
              },
              loc: { start: 4094, end: 4098 },
            },
            loc: { start: 4094, end: 4099 },
          },
          directives: [],
          loc: { start: 4057, end: 4099 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4102, end: 4122 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4124, end: 4128 },
              },
              loc: { start: 4124, end: 4128 },
            },
            loc: { start: 4124, end: 4129 },
          },
          directives: [],
          loc: { start: 4102, end: 4129 },
        },
      ],
      loc: { start: 3387, end: 4131 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4145, end: 4154 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4159, end: 4163 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4165, end: 4169 },
              },
              loc: { start: 4165, end: 4169 },
            },
            loc: { start: 4165, end: 4170 },
          },
          directives: [],
          loc: { start: 4159, end: 4170 },
        },
      ],
      loc: { start: 4133, end: 4172 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4179, end: 4191 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4196, end: 4201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4203, end: 4206 },
              },
              loc: { start: 4203, end: 4206 },
            },
            loc: { start: 4203, end: 4207 },
          },
          directives: [],
          loc: { start: 4196, end: 4207 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4210, end: 4222 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4224, end: 4230 },
              },
              loc: { start: 4224, end: 4230 },
            },
            loc: { start: 4224, end: 4231 },
          },
          directives: [],
          loc: { start: 4210, end: 4231 },
        },
      ],
      loc: { start: 4174, end: 4233 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4240, end: 4256 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4261, end: 4265 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4267, end: 4271 },
              },
              loc: { start: 4267, end: 4271 },
            },
            loc: { start: 4267, end: 4272 },
          },
          directives: [],
          loc: { start: 4261, end: 4272 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4275, end: 4280 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4282, end: 4288 },
              },
              loc: { start: 4282, end: 4288 },
            },
            loc: { start: 4282, end: 4289 },
          },
          directives: [],
          loc: { start: 4275, end: 4289 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4292, end: 4304 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4306, end: 4312 },
              },
              loc: { start: 4306, end: 4312 },
            },
            loc: { start: 4306, end: 4313 },
          },
          directives: [],
          loc: { start: 4292, end: 4313 },
        },
      ],
      loc: { start: 4235, end: 4315 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4322, end: 4335 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4340, end: 4352 },
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
                    loc: { start: 4355, end: 4358 },
                  },
                  loc: { start: 4355, end: 4358 },
                },
                loc: { start: 4355, end: 4359 },
              },
              loc: { start: 4354, end: 4360 },
            },
            loc: { start: 4354, end: 4361 },
          },
          directives: [],
          loc: { start: 4340, end: 4361 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4364, end: 4369 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4371, end: 4374 },
              },
              loc: { start: 4371, end: 4374 },
            },
            loc: { start: 4371, end: 4375 },
          },
          directives: [],
          loc: { start: 4364, end: 4375 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4378, end: 4390 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4392, end: 4398 },
              },
              loc: { start: 4392, end: 4398 },
            },
            loc: { start: 4392, end: 4399 },
          },
          directives: [],
          loc: { start: 4378, end: 4399 },
        },
      ],
      loc: { start: 4317, end: 4401 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4408, end: 4430 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4435, end: 4440 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4442, end: 4448 },
              },
              loc: { start: 4442, end: 4448 },
            },
            loc: { start: 4442, end: 4449 },
          },
          directives: [],
          loc: { start: 4435, end: 4449 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4452, end: 4458 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4460, end: 4470 },
              },
              loc: { start: 4460, end: 4470 },
            },
            loc: { start: 4460, end: 4471 },
          },
          directives: [],
          loc: { start: 4452, end: 4471 },
        },
      ],
      loc: { start: 4403, end: 4473 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4480, end: 4484 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4489, end: 4491 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4493, end: 4495 },
              },
              loc: { start: 4493, end: 4495 },
            },
            loc: { start: 4493, end: 4496 },
          },
          directives: [],
          loc: { start: 4489, end: 4496 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4499, end: 4503 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4505, end: 4511 },
              },
              loc: { start: 4505, end: 4511 },
            },
            loc: { start: 4505, end: 4512 },
          },
          directives: [],
          loc: { start: 4499, end: 4512 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4515, end: 4526 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4528, end: 4534 },
              },
              loc: { start: 4528, end: 4534 },
            },
            loc: { start: 4528, end: 4535 },
          },
          directives: [],
          loc: { start: 4515, end: 4535 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4538, end: 4543 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4545, end: 4551 },
              },
              loc: { start: 4545, end: 4551 },
            },
            loc: { start: 4545, end: 4552 },
          },
          directives: [],
          loc: { start: 4538, end: 4552 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4555, end: 4561 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4563, end: 4569 },
              },
              loc: { start: 4563, end: 4569 },
            },
            loc: { start: 4563, end: 4570 },
          },
          directives: [],
          loc: { start: 4555, end: 4570 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4573, end: 4582 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4584, end: 4590 },
            },
            loc: { start: 4584, end: 4590 },
          },
          directives: [],
          loc: { start: 4573, end: 4590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4593, end: 4600 },
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
                    loc: { start: 4603, end: 4613 },
                  },
                  loc: { start: 4603, end: 4613 },
                },
                loc: { start: 4603, end: 4614 },
              },
              loc: { start: 4602, end: 4615 },
            },
            loc: { start: 4602, end: 4616 },
          },
          directives: [],
          loc: { start: 4593, end: 4616 },
        },
      ],
      loc: { start: 4475, end: 4618 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4626, end: 4638 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4643, end: 4645 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4647, end: 4649 },
            },
            loc: { start: 4647, end: 4649 },
          },
          directives: [],
          loc: { start: 4643, end: 4649 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4652, end: 4656 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4658, end: 4664 },
              },
              loc: { start: 4658, end: 4664 },
            },
            loc: { start: 4658, end: 4665 },
          },
          directives: [],
          loc: { start: 4652, end: 4665 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4668, end: 4679 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4681, end: 4687 },
              },
              loc: { start: 4681, end: 4687 },
            },
            loc: { start: 4681, end: 4688 },
          },
          directives: [],
          loc: { start: 4668, end: 4688 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4691, end: 4696 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4698, end: 4704 },
              },
              loc: { start: 4698, end: 4704 },
            },
            loc: { start: 4698, end: 4705 },
          },
          directives: [],
          loc: { start: 4691, end: 4705 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4708, end: 4716 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4718, end: 4724 },
            },
            loc: { start: 4718, end: 4724 },
          },
          directives: [],
          loc: { start: 4708, end: 4724 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4727, end: 4733 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4735, end: 4739 },
            },
            loc: { start: 4735, end: 4739 },
          },
          directives: [],
          loc: { start: 4727, end: 4739 },
        },
      ],
      loc: { start: 4620, end: 4741 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4748, end: 4758 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4763, end: 4765 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4767, end: 4769 },
              },
              loc: { start: 4767, end: 4769 },
            },
            loc: { start: 4767, end: 4770 },
          },
          directives: [],
          loc: { start: 4763, end: 4770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4773, end: 4777 },
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
          loc: { start: 4773, end: 4786 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4789, end: 4798 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4800, end: 4808 },
            },
            loc: { start: 4800, end: 4808 },
          },
          directives: [],
          loc: { start: 4789, end: 4808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4811, end: 4821 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4823, end: 4831 },
            },
            loc: { start: 4823, end: 4831 },
          },
          directives: [],
          loc: { start: 4811, end: 4831 },
        },
      ],
      loc: { start: 4743, end: 4833 },
    },
  ],
  loc: { start: 0, end: 4834 },
} as unknown as DocumentNode;
