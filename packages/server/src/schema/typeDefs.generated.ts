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
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateGame",
            loc: { start: 1255, end: 1265 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1266, end: 1271 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "GameInput",
                    loc: { start: 1273, end: 1282 },
                  },
                  loc: { start: 1273, end: 1282 },
                },
                loc: { start: 1273, end: 1283 },
              },
              directives: [],
              loc: { start: 1266, end: 1283 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1286, end: 1290 },
              },
              loc: { start: 1286, end: 1290 },
            },
            loc: { start: 1286, end: 1291 },
          },
          directives: [],
          loc: { start: 1255, end: 1291 },
        },
      ],
      loc: { start: 1108, end: 1293 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 1307, end: 1312 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1317, end: 1328 },
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
                    loc: { start: 1331, end: 1342 },
                  },
                  loc: { start: 1331, end: 1342 },
                },
                loc: { start: 1331, end: 1343 },
              },
              loc: { start: 1330, end: 1344 },
            },
            loc: { start: 1330, end: 1345 },
          },
          directives: [],
          loc: { start: 1317, end: 1345 },
        },
      ],
      loc: { start: 1295, end: 1347 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 1361, end: 1370 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1375, end: 1386 },
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
                    loc: { start: 1389, end: 1393 },
                  },
                  loc: { start: 1389, end: 1393 },
                },
                loc: { start: 1389, end: 1394 },
              },
              loc: { start: 1388, end: 1395 },
            },
            loc: { start: 1388, end: 1396 },
          },
          directives: [],
          loc: { start: 1375, end: 1396 },
        },
      ],
      loc: { start: 1349, end: 1398 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AddGameResult",
        loc: { start: 1405, end: 1418 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1423, end: 1427 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1429, end: 1433 },
              },
              loc: { start: 1429, end: 1433 },
            },
            loc: { start: 1429, end: 1434 },
          },
          directives: [],
          loc: { start: 1423, end: 1434 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 1437, end: 1446 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1448, end: 1457 },
              },
              loc: { start: 1448, end: 1457 },
            },
            loc: { start: 1448, end: 1458 },
          },
          directives: [],
          loc: { start: 1437, end: 1458 },
        },
      ],
      loc: { start: 1400, end: 1460 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Game", loc: { start: 1467, end: 1471 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1476, end: 1478 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1480, end: 1482 },
              },
              loc: { start: 1480, end: 1482 },
            },
            loc: { start: 1480, end: 1483 },
          },
          directives: [],
          loc: { start: 1476, end: 1483 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1486, end: 1490 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1492, end: 1498 },
              },
              loc: { start: 1492, end: 1498 },
            },
            loc: { start: 1492, end: 1499 },
          },
          directives: [],
          loc: { start: 1486, end: 1499 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1502, end: 1507 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1509, end: 1515 },
              },
              loc: { start: 1509, end: 1515 },
            },
            loc: { start: 1509, end: 1516 },
          },
          directives: [],
          loc: { start: 1502, end: 1516 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1519, end: 1526 },
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
                    loc: { start: 1529, end: 1533 },
                  },
                  loc: { start: 1529, end: 1533 },
                },
                loc: { start: 1529, end: 1534 },
              },
              loc: { start: 1528, end: 1535 },
            },
            loc: { start: 1528, end: 1536 },
          },
          directives: [],
          loc: { start: 1519, end: 1536 },
        },
      ],
      loc: { start: 1462, end: 1538 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameOnParty",
        loc: { start: 1545, end: 1556 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1561, end: 1563 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1565, end: 1567 },
              },
              loc: { start: 1565, end: 1567 },
            },
            loc: { start: 1565, end: 1568 },
          },
          directives: [],
          loc: { start: 1561, end: 1568 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1571, end: 1575 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1577, end: 1581 },
              },
              loc: { start: 1577, end: 1581 },
            },
            loc: { start: 1577, end: 1582 },
          },
          directives: [],
          loc: { start: 1571, end: 1582 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1585, end: 1590 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1592, end: 1597 },
              },
              loc: { start: 1592, end: 1597 },
            },
            loc: { start: 1592, end: 1598 },
          },
          directives: [],
          loc: { start: 1585, end: 1598 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1601, end: 1608 },
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
                    loc: { start: 1611, end: 1615 },
                  },
                  loc: { start: 1611, end: 1615 },
                },
                loc: { start: 1611, end: 1616 },
              },
              loc: { start: 1610, end: 1617 },
            },
            loc: { start: 1610, end: 1618 },
          },
          directives: [],
          loc: { start: 1601, end: 1618 },
        },
      ],
      loc: { start: 1540, end: 1620 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameInput",
        loc: { start: 1628, end: 1637 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1642, end: 1644 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1646, end: 1648 },
              },
              loc: { start: 1646, end: 1648 },
            },
            loc: { start: 1646, end: 1649 },
          },
          directives: [],
          loc: { start: 1642, end: 1649 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1652, end: 1657 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 1659, end: 1663 },
              },
              loc: { start: 1659, end: 1663 },
            },
            loc: { start: 1659, end: 1664 },
          },
          directives: [],
          loc: { start: 1652, end: 1664 },
        },
      ],
      loc: { start: 1622, end: 1666 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1679, end: 1684 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1689, end: 1694 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1695, end: 1697 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1699, end: 1701 },
                  },
                  loc: { start: 1699, end: 1701 },
                },
                loc: { start: 1699, end: 1702 },
              },
              directives: [],
              loc: { start: 1695, end: 1702 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1705, end: 1710 },
            },
            loc: { start: 1705, end: 1710 },
          },
          directives: [],
          loc: { start: 1689, end: 1710 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parties",
            loc: { start: 1713, end: 1720 },
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
                    loc: { start: 1723, end: 1728 },
                  },
                  loc: { start: 1723, end: 1728 },
                },
                loc: { start: 1723, end: 1729 },
              },
              loc: { start: 1722, end: 1730 },
            },
            loc: { start: 1722, end: 1731 },
          },
          directives: [],
          loc: { start: 1713, end: 1731 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "nextParty",
            loc: { start: 1734, end: 1743 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1745, end: 1750 },
            },
            loc: { start: 1745, end: 1750 },
          },
          directives: [],
          loc: { start: 1734, end: 1750 },
        },
      ],
      loc: { start: 1667, end: 1752 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1766, end: 1774 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setAttendance",
            loc: { start: 1779, end: 1792 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1793, end: 1800 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1802, end: 1804 },
                  },
                  loc: { start: 1802, end: 1804 },
                },
                loc: { start: 1802, end: 1805 },
              },
              directives: [],
              loc: { start: 1793, end: 1805 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1807, end: 1813 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1815, end: 1817 },
                },
                loc: { start: 1815, end: 1817 },
              },
              directives: [],
              loc: { start: 1807, end: 1817 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dates",
                loc: { start: 1819, end: 1824 },
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
                        loc: { start: 1827, end: 1831 },
                      },
                      loc: { start: 1827, end: 1831 },
                    },
                    loc: { start: 1827, end: 1832 },
                  },
                  loc: { start: 1826, end: 1833 },
                },
                loc: { start: 1826, end: 1834 },
              },
              directives: [],
              loc: { start: 1819, end: 1834 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1837, end: 1842 },
              },
              loc: { start: 1837, end: 1842 },
            },
            loc: { start: 1837, end: 1843 },
          },
          directives: [],
          loc: { start: 1779, end: 1843 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeAttendance",
            loc: { start: 1846, end: 1862 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1863, end: 1870 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1872, end: 1874 },
                  },
                  loc: { start: 1872, end: 1874 },
                },
                loc: { start: 1872, end: 1875 },
              },
              directives: [],
              loc: { start: 1863, end: 1875 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1877, end: 1883 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1885, end: 1887 },
                },
                loc: { start: 1885, end: 1887 },
              },
              directives: [],
              loc: { start: 1877, end: 1887 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1890, end: 1895 },
              },
              loc: { start: 1890, end: 1895 },
            },
            loc: { start: 1890, end: 1896 },
          },
          directives: [],
          loc: { start: 1846, end: 1896 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "requestRoom",
            loc: { start: 1899, end: 1910 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1911, end: 1918 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1920, end: 1922 },
                  },
                  loc: { start: 1920, end: 1922 },
                },
                loc: { start: 1920, end: 1923 },
              },
              directives: [],
              loc: { start: 1911, end: 1923 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1926, end: 1935 },
            },
            loc: { start: 1926, end: 1935 },
          },
          directives: [],
          loc: { start: 1899, end: 1935 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recindRoom",
            loc: { start: 1938, end: 1948 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1949, end: 1956 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1958, end: 1960 },
                  },
                  loc: { start: 1958, end: 1960 },
                },
                loc: { start: 1958, end: 1961 },
              },
              directives: [],
              loc: { start: 1949, end: 1961 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1964, end: 1973 },
            },
            loc: { start: 1964, end: 1973 },
          },
          directives: [],
          loc: { start: 1938, end: 1973 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "grantRoom",
            loc: { start: 1976, end: 1985 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 1986, end: 1997 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1999, end: 2001 },
                  },
                  loc: { start: 1999, end: 2001 },
                },
                loc: { start: 1999, end: 2002 },
              },
              directives: [],
              loc: { start: 1986, end: 2002 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2005, end: 2014 },
            },
            loc: { start: 2005, end: 2014 },
          },
          directives: [],
          loc: { start: 1976, end: 2014 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "denyRoom",
            loc: { start: 2017, end: 2025 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2026, end: 2037 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2039, end: 2041 },
                  },
                  loc: { start: 2039, end: 2041 },
                },
                loc: { start: 2039, end: 2042 },
              },
              directives: [],
              loc: { start: 2026, end: 2042 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2045, end: 2054 },
            },
            loc: { start: 2045, end: 2054 },
          },
          directives: [],
          loc: { start: 2017, end: 2054 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateParty",
            loc: { start: 2057, end: 2068 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2069, end: 2074 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PartyInput",
                    loc: { start: 2076, end: 2086 },
                  },
                  loc: { start: 2076, end: 2086 },
                },
                loc: { start: 2076, end: 2087 },
              },
              directives: [],
              loc: { start: 2069, end: 2087 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2090, end: 2095 },
              },
              loc: { start: 2090, end: 2095 },
            },
            loc: { start: 2090, end: 2096 },
          },
          directives: [],
          loc: { start: 2057, end: 2096 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addPicture",
            loc: { start: 2099, end: 2109 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2110, end: 2115 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PictureInput",
                    loc: { start: 2117, end: 2129 },
                  },
                  loc: { start: 2117, end: 2129 },
                },
                loc: { start: 2117, end: 2130 },
              },
              directives: [],
              loc: { start: 2110, end: 2130 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2133, end: 2140 },
              },
              loc: { start: 2133, end: 2140 },
            },
            loc: { start: 2133, end: 2141 },
          },
          directives: [],
          loc: { start: 2099, end: 2141 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 2144, end: 2151 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2152, end: 2158 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2160, end: 2162 },
                  },
                  loc: { start: 2160, end: 2162 },
                },
                loc: { start: 2160, end: 2163 },
              },
              directives: [],
              loc: { start: 2152, end: 2163 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2166, end: 2175 },
            },
            loc: { start: 2166, end: 2175 },
          },
          directives: [],
          loc: { start: 2144, end: 2175 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 2178, end: 2186 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2187, end: 2193 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2195, end: 2197 },
                  },
                  loc: { start: 2195, end: 2197 },
                },
                loc: { start: 2195, end: 2198 },
              },
              directives: [],
              loc: { start: 2187, end: 2198 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2201, end: 2210 },
            },
            loc: { start: 2201, end: 2210 },
          },
          directives: [],
          loc: { start: 2178, end: 2210 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePaidDues",
            loc: { start: 2213, end: 2227 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2228, end: 2239 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2241, end: 2243 },
                  },
                  loc: { start: 2241, end: 2243 },
                },
                loc: { start: 2241, end: 2244 },
              },
              directives: [],
              loc: { start: 2228, end: 2244 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "paidDues",
                loc: { start: 2246, end: 2254 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 2256, end: 2261 },
                  },
                  loc: { start: 2256, end: 2261 },
                },
                loc: { start: 2256, end: 2262 },
              },
              directives: [],
              loc: { start: 2246, end: 2262 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2265, end: 2274 },
            },
            loc: { start: 2265, end: 2274 },
          },
          directives: [],
          loc: { start: 2213, end: 2274 },
        },
      ],
      loc: { start: 1754, end: 2276 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2283, end: 2288 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2293, end: 2295 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2297, end: 2299 },
              },
              loc: { start: 2297, end: 2299 },
            },
            loc: { start: 2297, end: 2300 },
          },
          directives: [],
          loc: { start: 2293, end: 2300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2303, end: 2312 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2314, end: 2318 },
              },
              loc: { start: 2314, end: 2318 },
            },
            loc: { start: 2314, end: 2319 },
          },
          directives: [],
          loc: { start: 2303, end: 2319 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2322, end: 2329 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2331, end: 2335 },
              },
              loc: { start: 2331, end: 2335 },
            },
            loc: { start: 2331, end: 2336 },
          },
          directives: [],
          loc: { start: 2322, end: 2336 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tentative",
            loc: { start: 2339, end: 2348 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2350, end: 2357 },
              },
              loc: { start: 2350, end: 2357 },
            },
            loc: { start: 2350, end: 2358 },
          },
          directives: [],
          loc: { start: 2339, end: 2358 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2361, end: 2369 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2371, end: 2377 },
              },
              loc: { start: 2371, end: 2377 },
            },
            loc: { start: 2371, end: 2378 },
          },
          directives: [],
          loc: { start: 2361, end: 2378 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2381, end: 2398 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2400, end: 2406 },
            },
            loc: { start: 2400, end: 2406 },
          },
          directives: [],
          loc: { start: 2381, end: 2406 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2409, end: 2423 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2425, end: 2428 },
              },
              loc: { start: 2425, end: 2428 },
            },
            loc: { start: 2425, end: 2429 },
          },
          directives: [],
          loc: { start: 2409, end: 2429 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2432, end: 2443 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2445, end: 2450 },
              },
              loc: { start: 2445, end: 2450 },
            },
            loc: { start: 2445, end: 2451 },
          },
          directives: [],
          loc: { start: 2432, end: 2451 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2454, end: 2464 },
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
                    loc: { start: 2467, end: 2476 },
                  },
                  loc: { start: 2467, end: 2476 },
                },
                loc: { start: 2467, end: 2477 },
              },
              loc: { start: 2466, end: 2478 },
            },
            loc: { start: 2466, end: 2479 },
          },
          directives: [],
          loc: { start: 2454, end: 2479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2482, end: 2491 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2492, end: 2498 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2500, end: 2502 },
                },
                loc: { start: 2500, end: 2502 },
              },
              directives: [],
              loc: { start: 2492, end: 2502 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2505, end: 2514 },
            },
            loc: { start: 2505, end: 2514 },
          },
          directives: [],
          loc: { start: 2482, end: 2514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2517, end: 2525 },
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
                    loc: { start: 2528, end: 2535 },
                  },
                  loc: { start: 2528, end: 2535 },
                },
                loc: { start: 2528, end: 2536 },
              },
              loc: { start: 2527, end: 2537 },
            },
            loc: { start: 2527, end: 2538 },
          },
          directives: [],
          loc: { start: 2517, end: 2538 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2541, end: 2555 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2557, end: 2560 },
              },
              loc: { start: 2557, end: 2560 },
            },
            loc: { start: 2557, end: 2561 },
          },
          directives: [],
          loc: { start: 2541, end: 2561 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2564, end: 2584 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2586, end: 2590 },
            },
            loc: { start: 2586, end: 2590 },
          },
          directives: [],
          loc: { start: 2564, end: 2590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2593, end: 2599 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2601, end: 2605 },
            },
            loc: { start: 2601, end: 2605 },
          },
          directives: [],
          loc: { start: 2593, end: 2605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2608, end: 2623 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2625, end: 2630 },
            },
            loc: { start: 2625, end: 2630 },
          },
          directives: [],
          loc: { start: 2608, end: 2630 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2633, end: 2641 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2643, end: 2648 },
            },
            loc: { start: 2643, end: 2648 },
          },
          directives: [],
          loc: { start: 2633, end: 2648 },
        },
      ],
      loc: { start: 2278, end: 2650 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2657, end: 2664 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2669, end: 2671 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2673, end: 2675 },
              },
              loc: { start: 2673, end: 2675 },
            },
            loc: { start: 2673, end: 2676 },
          },
          directives: [],
          loc: { start: 2669, end: 2676 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2679, end: 2682 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2684, end: 2690 },
              },
              loc: { start: 2684, end: 2690 },
            },
            loc: { start: 2684, end: 2691 },
          },
          directives: [],
          loc: { start: 2679, end: 2691 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2694, end: 2699 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2701, end: 2706 },
              },
              loc: { start: 2701, end: 2706 },
            },
            loc: { start: 2701, end: 2707 },
          },
          directives: [],
          loc: { start: 2694, end: 2707 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2710, end: 2714 },
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
                    loc: { start: 2717, end: 2727 },
                  },
                  loc: { start: 2717, end: 2727 },
                },
                loc: { start: 2717, end: 2728 },
              },
              loc: { start: 2716, end: 2729 },
            },
            loc: { start: 2716, end: 2730 },
          },
          directives: [],
          loc: { start: 2710, end: 2730 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2733, end: 2737 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2739, end: 2750 },
              },
              loc: { start: 2739, end: 2750 },
            },
            loc: { start: 2739, end: 2751 },
          },
          directives: [],
          loc: { start: 2733, end: 2751 },
        },
      ],
      loc: { start: 2652, end: 2753 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2760, end: 2771 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2776, end: 2781 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2783, end: 2786 },
              },
              loc: { start: 2783, end: 2786 },
            },
            loc: { start: 2783, end: 2787 },
          },
          directives: [],
          loc: { start: 2776, end: 2787 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2790, end: 2796 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2798, end: 2801 },
              },
              loc: { start: 2798, end: 2801 },
            },
            loc: { start: 2798, end: 2802 },
          },
          directives: [],
          loc: { start: 2790, end: 2802 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2805, end: 2813 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2815, end: 2820 },
            },
            loc: { start: 2815, end: 2820 },
          },
          directives: [],
          loc: { start: 2805, end: 2820 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2823, end: 2832 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2834, end: 2839 },
            },
            loc: { start: 2834, end: 2839 },
          },
          directives: [],
          loc: { start: 2823, end: 2839 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2842, end: 2850 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2852, end: 2857 },
            },
            loc: { start: 2852, end: 2857 },
          },
          directives: [],
          loc: { start: 2842, end: 2857 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2860, end: 2866 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2868, end: 2876 },
            },
            loc: { start: 2868, end: 2876 },
          },
          directives: [],
          loc: { start: 2860, end: 2876 },
        },
      ],
      loc: { start: 2755, end: 2878 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2885, end: 2895 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2900, end: 2902 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2904, end: 2906 },
              },
              loc: { start: 2904, end: 2906 },
            },
            loc: { start: 2904, end: 2907 },
          },
          directives: [],
          loc: { start: 2900, end: 2907 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2910, end: 2914 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2916, end: 2920 },
              },
              loc: { start: 2916, end: 2920 },
            },
            loc: { start: 2916, end: 2921 },
          },
          directives: [],
          loc: { start: 2910, end: 2921 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2924, end: 2931 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2933, end: 2940 },
              },
              loc: { start: 2933, end: 2940 },
            },
            loc: { start: 2933, end: 2941 },
          },
          directives: [],
          loc: { start: 2924, end: 2941 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2944, end: 2955 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2957, end: 2968 },
              },
              loc: { start: 2957, end: 2968 },
            },
            loc: { start: 2957, end: 2969 },
          },
          directives: [],
          loc: { start: 2944, end: 2969 },
        },
      ],
      loc: { start: 2880, end: 2971 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2980, end: 2991 },
      },
      directives: [],
      loc: { start: 2973, end: 2991 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2999, end: 3009 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3014, end: 3016 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 3018, end: 3020 },
            },
            loc: { start: 3018, end: 3020 },
          },
          directives: [],
          loc: { start: 3014, end: 3020 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 3023, end: 3032 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3034, end: 3038 },
              },
              loc: { start: 3034, end: 3038 },
            },
            loc: { start: 3034, end: 3039 },
          },
          directives: [],
          loc: { start: 3023, end: 3039 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 3042, end: 3049 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3051, end: 3055 },
              },
              loc: { start: 3051, end: 3055 },
            },
            loc: { start: 3051, end: 3056 },
          },
          directives: [],
          loc: { start: 3042, end: 3056 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 3059, end: 3067 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3069, end: 3075 },
              },
              loc: { start: 3069, end: 3075 },
            },
            loc: { start: 3069, end: 3076 },
          },
          directives: [],
          loc: { start: 3059, end: 3076 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 3079, end: 3096 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3098, end: 3104 },
            },
            loc: { start: 3098, end: 3104 },
          },
          directives: [],
          loc: { start: 3079, end: 3104 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 3107, end: 3121 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3123, end: 3126 },
              },
              loc: { start: 3123, end: 3126 },
            },
            loc: { start: 3123, end: 3127 },
          },
          directives: [],
          loc: { start: 3107, end: 3127 },
        },
      ],
      loc: { start: 2993, end: 3129 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 3137, end: 3149 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3154, end: 3158 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3160, end: 3166 },
              },
              loc: { start: 3160, end: 3166 },
            },
            loc: { start: 3160, end: 3167 },
          },
          directives: [],
          loc: { start: 3154, end: 3167 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 3170, end: 3177 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3179, end: 3181 },
              },
              loc: { start: 3179, end: 3181 },
            },
            loc: { start: 3179, end: 3182 },
          },
          directives: [],
          loc: { start: 3170, end: 3182 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3185, end: 3189 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 3191, end: 3195 },
              },
              loc: { start: 3191, end: 3195 },
            },
            loc: { start: 3191, end: 3196 },
          },
          directives: [],
          loc: { start: 3185, end: 3196 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3199, end: 3203 },
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
                  loc: { start: 3206, end: 3221 },
                },
                loc: { start: 3206, end: 3221 },
              },
              loc: { start: 3206, end: 3222 },
            },
            loc: { start: 3205, end: 3223 },
          },
          directives: [],
          loc: { start: 3199, end: 3223 },
        },
      ],
      loc: { start: 3131, end: 3225 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3233, end: 3248 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3253, end: 3259 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3261, end: 3263 },
              },
              loc: { start: 3261, end: 3263 },
            },
            loc: { start: 3261, end: 3264 },
          },
          directives: [],
          loc: { start: 3253, end: 3264 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3267, end: 3278 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3280, end: 3291 },
              },
              loc: { start: 3280, end: 3291 },
            },
            loc: { start: 3280, end: 3292 },
          },
          directives: [],
          loc: { start: 3267, end: 3292 },
        },
      ],
      loc: { start: 3227, end: 3294 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3301, end: 3310 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3315, end: 3317 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3319, end: 3321 },
              },
              loc: { start: 3319, end: 3321 },
            },
            loc: { start: 3319, end: 3322 },
          },
          directives: [],
          loc: { start: 3315, end: 3322 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3325, end: 3330 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3332, end: 3337 },
              },
              loc: { start: 3332, end: 3337 },
            },
            loc: { start: 3332, end: 3338 },
          },
          directives: [],
          loc: { start: 3325, end: 3338 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3341, end: 3346 },
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
                    loc: { start: 3349, end: 3353 },
                  },
                  loc: { start: 3349, end: 3353 },
                },
                loc: { start: 3349, end: 3354 },
              },
              loc: { start: 3348, end: 3355 },
            },
            loc: { start: 3348, end: 3356 },
          },
          directives: [],
          loc: { start: 3341, end: 3356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3359, end: 3363 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3365, end: 3375 },
            },
            loc: { start: 3365, end: 3375 },
          },
          directives: [],
          loc: { start: 3359, end: 3375 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3378, end: 3393 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3395, end: 3399 },
              },
              loc: { start: 3395, end: 3399 },
            },
            loc: { start: 3395, end: 3400 },
          },
          directives: [],
          loc: { start: 3378, end: 3400 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3403, end: 3411 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3413, end: 3418 },
              },
              loc: { start: 3413, end: 3418 },
            },
            loc: { start: 3413, end: 3419 },
          },
          directives: [],
          loc: { start: 3403, end: 3419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3422, end: 3429 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3431, end: 3439 },
            },
            loc: { start: 3431, end: 3439 },
          },
          directives: [],
          loc: { start: 3422, end: 3439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3442, end: 3450 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3452, end: 3460 },
            },
            loc: { start: 3452, end: 3460 },
          },
          directives: [],
          loc: { start: 3442, end: 3460 },
        },
      ],
      loc: { start: 3296, end: 3462 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3469, end: 3479 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3484, end: 3493 },
          },
          directives: [],
          loc: { start: 3484, end: 3493 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3496, end: 3503 },
          },
          directives: [],
          loc: { start: 3496, end: 3503 },
        },
      ],
      loc: { start: 3464, end: 3505 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3518, end: 3523 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3528, end: 3530 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3532, end: 3536 },
            },
            loc: { start: 3532, end: 3536 },
          },
          directives: [],
          loc: { start: 3528, end: 3536 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3539, end: 3544 },
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
                    loc: { start: 3547, end: 3551 },
                  },
                  loc: { start: 3547, end: 3551 },
                },
                loc: { start: 3547, end: 3552 },
              },
              loc: { start: 3546, end: 3553 },
            },
            loc: { start: 3546, end: 3554 },
          },
          directives: [],
          loc: { start: 3539, end: 3554 },
        },
      ],
      loc: { start: 3506, end: 3556 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3570, end: 3578 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3583, end: 3591 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3592, end: 3600 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3602, end: 3608 },
                  },
                  loc: { start: 3602, end: 3608 },
                },
                loc: { start: 3602, end: 3609 },
              },
              directives: [],
              loc: { start: 3592, end: 3609 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3611, end: 3616 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3618, end: 3624 },
                  },
                  loc: { start: 3618, end: 3624 },
                },
                loc: { start: 3618, end: 3625 },
              },
              directives: [],
              loc: { start: 3611, end: 3625 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3627, end: 3635 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3637, end: 3643 },
                },
                loc: { start: 3637, end: 3643 },
              },
              directives: [],
              loc: { start: 3627, end: 3643 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3646, end: 3662 },
              },
              loc: { start: 3646, end: 3662 },
            },
            loc: { start: 3646, end: 3663 },
          },
          directives: [],
          loc: { start: 3583, end: 3663 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3666, end: 3696 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3697, end: 3703 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3705, end: 3711 },
                  },
                  loc: { start: 3705, end: 3711 },
                },
                loc: { start: 3705, end: 3712 },
              },
              directives: [],
              loc: { start: 3697, end: 3712 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3715, end: 3719 },
              },
              loc: { start: 3715, end: 3719 },
            },
            loc: { start: 3715, end: 3720 },
          },
          directives: [],
          loc: { start: 3666, end: 3720 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3723, end: 3738 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3739, end: 3745 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3747, end: 3753 },
                  },
                  loc: { start: 3747, end: 3753 },
                },
                loc: { start: 3747, end: 3754 },
              },
              directives: [],
              loc: { start: 3739, end: 3754 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3756, end: 3760 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3762, end: 3768 },
                  },
                  loc: { start: 3762, end: 3768 },
                },
                loc: { start: 3762, end: 3769 },
              },
              directives: [],
              loc: { start: 3756, end: 3769 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3771, end: 3779 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3781, end: 3785 },
                  },
                  loc: { start: 3781, end: 3785 },
                },
                loc: { start: 3781, end: 3786 },
              },
              directives: [],
              loc: { start: 3771, end: 3786 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3789, end: 3811 },
              },
              loc: { start: 3789, end: 3811 },
            },
            loc: { start: 3789, end: 3812 },
          },
          directives: [],
          loc: { start: 3723, end: 3812 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3815, end: 3842 },
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
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3851, end: 3857 },
                },
                loc: { start: 3851, end: 3857 },
              },
              directives: [],
              loc: { start: 3843, end: 3857 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3860, end: 3864 },
              },
              loc: { start: 3860, end: 3864 },
            },
            loc: { start: 3860, end: 3865 },
          },
          directives: [],
          loc: { start: 3815, end: 3865 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3868, end: 3880 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3881, end: 3889 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3891, end: 3895 },
                  },
                  loc: { start: 3891, end: 3895 },
                },
                loc: { start: 3891, end: 3896 },
              },
              directives: [],
              loc: { start: 3881, end: 3896 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3899, end: 3912 },
              },
              loc: { start: 3899, end: 3912 },
            },
            loc: { start: 3899, end: 3913 },
          },
          directives: [],
          loc: { start: 3868, end: 3913 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3916, end: 3929 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3930, end: 3935 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3937, end: 3943 },
                  },
                  loc: { start: 3937, end: 3943 },
                },
                loc: { start: 3937, end: 3944 },
              },
              directives: [],
              loc: { start: 3930, end: 3944 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3946, end: 3954 },
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
              loc: { start: 3946, end: 3963 },
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
          loc: { start: 3916, end: 3979 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3982, end: 3995 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3996, end: 4001 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4003, end: 4009 },
                  },
                  loc: { start: 4003, end: 4009 },
                },
                loc: { start: 4003, end: 4010 },
              },
              directives: [],
              loc: { start: 3996, end: 4010 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4013, end: 4020 },
              },
              loc: { start: 4013, end: 4020 },
            },
            loc: { start: 4013, end: 4021 },
          },
          directives: [],
          loc: { start: 3982, end: 4021 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 4024, end: 4038 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 4039, end: 4050 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4052, end: 4058 },
                  },
                  loc: { start: 4052, end: 4058 },
                },
                loc: { start: 4052, end: 4059 },
              },
              directives: [],
              loc: { start: 4039, end: 4059 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4062, end: 4074 },
              },
              loc: { start: 4062, end: 4074 },
            },
            loc: { start: 4062, end: 4075 },
          },
          directives: [],
          loc: { start: 4024, end: 4075 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 4078, end: 4090 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 4091, end: 4103 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4105, end: 4111 },
                  },
                  loc: { start: 4105, end: 4111 },
                },
                loc: { start: 4105, end: 4112 },
              },
              directives: [],
              loc: { start: 4091, end: 4112 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4115, end: 4127 },
              },
              loc: { start: 4115, end: 4127 },
            },
            loc: { start: 4115, end: 4128 },
          },
          directives: [],
          loc: { start: 4078, end: 4128 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 4131, end: 4147 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4148, end: 4150 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4152, end: 4154 },
                  },
                  loc: { start: 4152, end: 4154 },
                },
                loc: { start: 4152, end: 4155 },
              },
              directives: [],
              loc: { start: 4148, end: 4155 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 4157, end: 4161 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4163, end: 4169 },
                  },
                  loc: { start: 4163, end: 4169 },
                },
                loc: { start: 4163, end: 4170 },
              },
              directives: [],
              loc: { start: 4157, end: 4170 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4173, end: 4183 },
              },
              loc: { start: 4173, end: 4183 },
            },
            loc: { start: 4173, end: 4184 },
          },
          directives: [],
          loc: { start: 4131, end: 4184 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4187, end: 4203 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4204, end: 4206 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4208, end: 4210 },
                  },
                  loc: { start: 4208, end: 4210 },
                },
                loc: { start: 4208, end: 4211 },
              },
              directives: [],
              loc: { start: 4204, end: 4211 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4214, end: 4224 },
              },
              loc: { start: 4214, end: 4224 },
            },
            loc: { start: 4214, end: 4225 },
          },
          directives: [],
          loc: { start: 4187, end: 4225 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4228, end: 4241 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4242, end: 4247 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4249, end: 4261 },
                  },
                  loc: { start: 4249, end: 4261 },
                },
                loc: { start: 4249, end: 4262 },
              },
              directives: [],
              loc: { start: 4242, end: 4262 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4265, end: 4269 },
              },
              loc: { start: 4265, end: 4269 },
            },
            loc: { start: 4265, end: 4270 },
          },
          directives: [],
          loc: { start: 4228, end: 4270 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4273, end: 4293 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4295, end: 4299 },
              },
              loc: { start: 4295, end: 4299 },
            },
            loc: { start: 4295, end: 4300 },
          },
          directives: [],
          loc: { start: 4273, end: 4300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateRoles",
            loc: { start: 4303, end: 4314 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4315, end: 4317 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4319, end: 4321 },
                  },
                  loc: { start: 4319, end: 4321 },
                },
                loc: { start: 4319, end: 4322 },
              },
              directives: [],
              loc: { start: 4315, end: 4322 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "roles",
                loc: { start: 4324, end: 4329 },
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
                        loc: { start: 4332, end: 4336 },
                      },
                      loc: { start: 4332, end: 4336 },
                    },
                    loc: { start: 4332, end: 4337 },
                  },
                  loc: { start: 4331, end: 4338 },
                },
                loc: { start: 4331, end: 4339 },
              },
              directives: [],
              loc: { start: 4324, end: 4339 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4342, end: 4346 },
              },
              loc: { start: 4342, end: 4346 },
            },
            loc: { start: 4342, end: 4347 },
          },
          directives: [],
          loc: { start: 4303, end: 4347 },
        },
      ],
      loc: { start: 3558, end: 4349 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4363, end: 4372 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4377, end: 4381 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4383, end: 4387 },
              },
              loc: { start: 4383, end: 4387 },
            },
            loc: { start: 4383, end: 4388 },
          },
          directives: [],
          loc: { start: 4377, end: 4388 },
        },
      ],
      loc: { start: 4351, end: 4390 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4397, end: 4409 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4414, end: 4419 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4421, end: 4424 },
              },
              loc: { start: 4421, end: 4424 },
            },
            loc: { start: 4421, end: 4425 },
          },
          directives: [],
          loc: { start: 4414, end: 4425 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4428, end: 4440 },
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
          loc: { start: 4428, end: 4449 },
        },
      ],
      loc: { start: 4392, end: 4451 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4458, end: 4474 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4479, end: 4483 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4485, end: 4489 },
              },
              loc: { start: 4485, end: 4489 },
            },
            loc: { start: 4485, end: 4490 },
          },
          directives: [],
          loc: { start: 4479, end: 4490 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4493, end: 4498 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4500, end: 4506 },
              },
              loc: { start: 4500, end: 4506 },
            },
            loc: { start: 4500, end: 4507 },
          },
          directives: [],
          loc: { start: 4493, end: 4507 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4510, end: 4522 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4524, end: 4530 },
              },
              loc: { start: 4524, end: 4530 },
            },
            loc: { start: 4524, end: 4531 },
          },
          directives: [],
          loc: { start: 4510, end: 4531 },
        },
      ],
      loc: { start: 4453, end: 4533 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4540, end: 4553 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4558, end: 4570 },
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
                    loc: { start: 4573, end: 4576 },
                  },
                  loc: { start: 4573, end: 4576 },
                },
                loc: { start: 4573, end: 4577 },
              },
              loc: { start: 4572, end: 4578 },
            },
            loc: { start: 4572, end: 4579 },
          },
          directives: [],
          loc: { start: 4558, end: 4579 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4582, end: 4587 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4589, end: 4592 },
              },
              loc: { start: 4589, end: 4592 },
            },
            loc: { start: 4589, end: 4593 },
          },
          directives: [],
          loc: { start: 4582, end: 4593 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4596, end: 4608 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4610, end: 4616 },
              },
              loc: { start: 4610, end: 4616 },
            },
            loc: { start: 4610, end: 4617 },
          },
          directives: [],
          loc: { start: 4596, end: 4617 },
        },
      ],
      loc: { start: 4535, end: 4619 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4626, end: 4648 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4653, end: 4658 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4660, end: 4666 },
              },
              loc: { start: 4660, end: 4666 },
            },
            loc: { start: 4660, end: 4667 },
          },
          directives: [],
          loc: { start: 4653, end: 4667 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4670, end: 4676 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4678, end: 4688 },
              },
              loc: { start: 4678, end: 4688 },
            },
            loc: { start: 4678, end: 4689 },
          },
          directives: [],
          loc: { start: 4670, end: 4689 },
        },
      ],
      loc: { start: 4621, end: 4691 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4698, end: 4702 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4707, end: 4709 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4711, end: 4713 },
              },
              loc: { start: 4711, end: 4713 },
            },
            loc: { start: 4711, end: 4714 },
          },
          directives: [],
          loc: { start: 4707, end: 4714 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4717, end: 4721 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4723, end: 4729 },
              },
              loc: { start: 4723, end: 4729 },
            },
            loc: { start: 4723, end: 4730 },
          },
          directives: [],
          loc: { start: 4717, end: 4730 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4733, end: 4744 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4746, end: 4752 },
              },
              loc: { start: 4746, end: 4752 },
            },
            loc: { start: 4746, end: 4753 },
          },
          directives: [],
          loc: { start: 4733, end: 4753 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4756, end: 4761 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4763, end: 4769 },
              },
              loc: { start: 4763, end: 4769 },
            },
            loc: { start: 4763, end: 4770 },
          },
          directives: [],
          loc: { start: 4756, end: 4770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4773, end: 4779 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4781, end: 4787 },
              },
              loc: { start: 4781, end: 4787 },
            },
            loc: { start: 4781, end: 4788 },
          },
          directives: [],
          loc: { start: 4773, end: 4788 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4791, end: 4800 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4802, end: 4808 },
            },
            loc: { start: 4802, end: 4808 },
          },
          directives: [],
          loc: { start: 4791, end: 4808 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4811, end: 4818 },
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
                    loc: { start: 4821, end: 4831 },
                  },
                  loc: { start: 4821, end: 4831 },
                },
                loc: { start: 4821, end: 4832 },
              },
              loc: { start: 4820, end: 4833 },
            },
            loc: { start: 4820, end: 4834 },
          },
          directives: [],
          loc: { start: 4811, end: 4834 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 4837, end: 4842 },
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
                    loc: { start: 4845, end: 4849 },
                  },
                  loc: { start: 4845, end: 4849 },
                },
                loc: { start: 4845, end: 4850 },
              },
              loc: { start: 4844, end: 4851 },
            },
            loc: { start: 4844, end: 4852 },
          },
          directives: [],
          loc: { start: 4837, end: 4852 },
        },
      ],
      loc: { start: 4693, end: 4854 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4862, end: 4874 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4879, end: 4881 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4883, end: 4885 },
            },
            loc: { start: 4883, end: 4885 },
          },
          directives: [],
          loc: { start: 4879, end: 4885 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4888, end: 4892 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4894, end: 4900 },
              },
              loc: { start: 4894, end: 4900 },
            },
            loc: { start: 4894, end: 4901 },
          },
          directives: [],
          loc: { start: 4888, end: 4901 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4904, end: 4915 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4917, end: 4923 },
              },
              loc: { start: 4917, end: 4923 },
            },
            loc: { start: 4917, end: 4924 },
          },
          directives: [],
          loc: { start: 4904, end: 4924 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4927, end: 4932 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4934, end: 4940 },
              },
              loc: { start: 4934, end: 4940 },
            },
            loc: { start: 4934, end: 4941 },
          },
          directives: [],
          loc: { start: 4927, end: 4941 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4944, end: 4952 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4954, end: 4960 },
            },
            loc: { start: 4954, end: 4960 },
          },
          directives: [],
          loc: { start: 4944, end: 4960 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4963, end: 4969 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4971, end: 4975 },
            },
            loc: { start: 4971, end: 4975 },
          },
          directives: [],
          loc: { start: 4963, end: 4975 },
        },
      ],
      loc: { start: 4856, end: 4977 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4984, end: 4994 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4999, end: 5001 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5003, end: 5005 },
              },
              loc: { start: 5003, end: 5005 },
            },
            loc: { start: 5003, end: 5006 },
          },
          directives: [],
          loc: { start: 4999, end: 5006 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5009, end: 5013 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5015, end: 5021 },
              },
              loc: { start: 5015, end: 5021 },
            },
            loc: { start: 5015, end: 5022 },
          },
          directives: [],
          loc: { start: 5009, end: 5022 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 5025, end: 5034 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5036, end: 5044 },
            },
            loc: { start: 5036, end: 5044 },
          },
          directives: [],
          loc: { start: 5025, end: 5044 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 5047, end: 5057 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 5059, end: 5067 },
            },
            loc: { start: 5059, end: 5067 },
          },
          directives: [],
          loc: { start: 5047, end: 5067 },
        },
      ],
      loc: { start: 4979, end: 5069 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 5076, end: 5080 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Trusted",
            loc: { start: 5085, end: 5092 },
          },
          directives: [],
          loc: { start: 5085, end: 5092 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Admin",
            loc: { start: 5095, end: 5100 },
          },
          directives: [],
          loc: { start: 5095, end: 5100 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Doorkeeper",
            loc: { start: 5103, end: 5113 },
          },
          directives: [],
          loc: { start: 5103, end: 5113 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Bookkeeper",
            loc: { start: 5116, end: 5126 },
          },
          directives: [],
          loc: { start: 5116, end: 5126 },
        },
      ],
      loc: { start: 5071, end: 5128 },
    },
  ],
  loc: { start: 0, end: 5129 },
} as unknown as DocumentNode;
