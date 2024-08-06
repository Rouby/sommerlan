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
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatePaidDues",
            loc: { start: 2128, end: 2142 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 2143, end: 2154 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2156, end: 2158 },
                  },
                  loc: { start: 2156, end: 2158 },
                },
                loc: { start: 2156, end: 2159 },
              },
              directives: [],
              loc: { start: 2143, end: 2159 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "paidDues",
                loc: { start: 2161, end: 2169 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 2171, end: 2176 },
                  },
                  loc: { start: 2171, end: 2176 },
                },
                loc: { start: 2171, end: 2177 },
              },
              directives: [],
              loc: { start: 2161, end: 2177 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2180, end: 2189 },
            },
            loc: { start: 2180, end: 2189 },
          },
          directives: [],
          loc: { start: 2128, end: 2189 },
        },
      ],
      loc: { start: 1669, end: 2191 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2198, end: 2203 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2208, end: 2210 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2212, end: 2214 },
              },
              loc: { start: 2212, end: 2214 },
            },
            loc: { start: 2212, end: 2215 },
          },
          directives: [],
          loc: { start: 2208, end: 2215 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2218, end: 2227 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2229, end: 2233 },
              },
              loc: { start: 2229, end: 2233 },
            },
            loc: { start: 2229, end: 2234 },
          },
          directives: [],
          loc: { start: 2218, end: 2234 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2237, end: 2244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2246, end: 2250 },
              },
              loc: { start: 2246, end: 2250 },
            },
            loc: { start: 2246, end: 2251 },
          },
          directives: [],
          loc: { start: 2237, end: 2251 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tentative",
            loc: { start: 2254, end: 2263 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2265, end: 2272 },
              },
              loc: { start: 2265, end: 2272 },
            },
            loc: { start: 2265, end: 2273 },
          },
          directives: [],
          loc: { start: 2254, end: 2273 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2276, end: 2284 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2286, end: 2292 },
              },
              loc: { start: 2286, end: 2292 },
            },
            loc: { start: 2286, end: 2293 },
          },
          directives: [],
          loc: { start: 2276, end: 2293 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2296, end: 2313 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2315, end: 2321 },
            },
            loc: { start: 2315, end: 2321 },
          },
          directives: [],
          loc: { start: 2296, end: 2321 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2324, end: 2338 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2340, end: 2343 },
              },
              loc: { start: 2340, end: 2343 },
            },
            loc: { start: 2340, end: 2344 },
          },
          directives: [],
          loc: { start: 2324, end: 2344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2347, end: 2358 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2360, end: 2365 },
              },
              loc: { start: 2360, end: 2365 },
            },
            loc: { start: 2360, end: 2366 },
          },
          directives: [],
          loc: { start: 2347, end: 2366 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2369, end: 2379 },
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
                    loc: { start: 2382, end: 2391 },
                  },
                  loc: { start: 2382, end: 2391 },
                },
                loc: { start: 2382, end: 2392 },
              },
              loc: { start: 2381, end: 2393 },
            },
            loc: { start: 2381, end: 2394 },
          },
          directives: [],
          loc: { start: 2369, end: 2394 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2397, end: 2406 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2407, end: 2413 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2415, end: 2417 },
                },
                loc: { start: 2415, end: 2417 },
              },
              directives: [],
              loc: { start: 2407, end: 2417 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2420, end: 2429 },
            },
            loc: { start: 2420, end: 2429 },
          },
          directives: [],
          loc: { start: 2397, end: 2429 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2432, end: 2440 },
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
                    loc: { start: 2443, end: 2450 },
                  },
                  loc: { start: 2443, end: 2450 },
                },
                loc: { start: 2443, end: 2451 },
              },
              loc: { start: 2442, end: 2452 },
            },
            loc: { start: 2442, end: 2453 },
          },
          directives: [],
          loc: { start: 2432, end: 2453 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2456, end: 2470 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2472, end: 2475 },
              },
              loc: { start: 2472, end: 2475 },
            },
            loc: { start: 2472, end: 2476 },
          },
          directives: [],
          loc: { start: 2456, end: 2476 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2479, end: 2499 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2501, end: 2505 },
            },
            loc: { start: 2501, end: 2505 },
          },
          directives: [],
          loc: { start: 2479, end: 2505 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2508, end: 2514 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2516, end: 2520 },
            },
            loc: { start: 2516, end: 2520 },
          },
          directives: [],
          loc: { start: 2508, end: 2520 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2523, end: 2538 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2540, end: 2545 },
            },
            loc: { start: 2540, end: 2545 },
          },
          directives: [],
          loc: { start: 2523, end: 2545 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2548, end: 2556 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2558, end: 2563 },
            },
            loc: { start: 2558, end: 2563 },
          },
          directives: [],
          loc: { start: 2548, end: 2563 },
        },
      ],
      loc: { start: 2193, end: 2565 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2572, end: 2579 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2584, end: 2586 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2588, end: 2590 },
              },
              loc: { start: 2588, end: 2590 },
            },
            loc: { start: 2588, end: 2591 },
          },
          directives: [],
          loc: { start: 2584, end: 2591 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2594, end: 2597 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2599, end: 2605 },
              },
              loc: { start: 2599, end: 2605 },
            },
            loc: { start: 2599, end: 2606 },
          },
          directives: [],
          loc: { start: 2594, end: 2606 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2609, end: 2614 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2616, end: 2621 },
              },
              loc: { start: 2616, end: 2621 },
            },
            loc: { start: 2616, end: 2622 },
          },
          directives: [],
          loc: { start: 2609, end: 2622 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2625, end: 2629 },
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
                    loc: { start: 2632, end: 2642 },
                  },
                  loc: { start: 2632, end: 2642 },
                },
                loc: { start: 2632, end: 2643 },
              },
              loc: { start: 2631, end: 2644 },
            },
            loc: { start: 2631, end: 2645 },
          },
          directives: [],
          loc: { start: 2625, end: 2645 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2648, end: 2652 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2654, end: 2665 },
              },
              loc: { start: 2654, end: 2665 },
            },
            loc: { start: 2654, end: 2666 },
          },
          directives: [],
          loc: { start: 2648, end: 2666 },
        },
      ],
      loc: { start: 2567, end: 2668 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2675, end: 2686 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2691, end: 2696 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2698, end: 2701 },
              },
              loc: { start: 2698, end: 2701 },
            },
            loc: { start: 2698, end: 2702 },
          },
          directives: [],
          loc: { start: 2691, end: 2702 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2705, end: 2711 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2713, end: 2716 },
              },
              loc: { start: 2713, end: 2716 },
            },
            loc: { start: 2713, end: 2717 },
          },
          directives: [],
          loc: { start: 2705, end: 2717 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2720, end: 2728 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2730, end: 2735 },
            },
            loc: { start: 2730, end: 2735 },
          },
          directives: [],
          loc: { start: 2720, end: 2735 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2738, end: 2747 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2749, end: 2754 },
            },
            loc: { start: 2749, end: 2754 },
          },
          directives: [],
          loc: { start: 2738, end: 2754 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2757, end: 2765 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2767, end: 2772 },
            },
            loc: { start: 2767, end: 2772 },
          },
          directives: [],
          loc: { start: 2757, end: 2772 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2775, end: 2781 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2783, end: 2791 },
            },
            loc: { start: 2783, end: 2791 },
          },
          directives: [],
          loc: { start: 2775, end: 2791 },
        },
      ],
      loc: { start: 2670, end: 2793 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2800, end: 2810 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2815, end: 2817 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2819, end: 2821 },
              },
              loc: { start: 2819, end: 2821 },
            },
            loc: { start: 2819, end: 2822 },
          },
          directives: [],
          loc: { start: 2815, end: 2822 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2825, end: 2829 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2831, end: 2835 },
              },
              loc: { start: 2831, end: 2835 },
            },
            loc: { start: 2831, end: 2836 },
          },
          directives: [],
          loc: { start: 2825, end: 2836 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2839, end: 2846 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2848, end: 2855 },
              },
              loc: { start: 2848, end: 2855 },
            },
            loc: { start: 2848, end: 2856 },
          },
          directives: [],
          loc: { start: 2839, end: 2856 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2859, end: 2870 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2872, end: 2883 },
              },
              loc: { start: 2872, end: 2883 },
            },
            loc: { start: 2872, end: 2884 },
          },
          directives: [],
          loc: { start: 2859, end: 2884 },
        },
      ],
      loc: { start: 2795, end: 2886 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2895, end: 2906 },
      },
      directives: [],
      loc: { start: 2888, end: 2906 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2914, end: 2924 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2929, end: 2931 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2933, end: 2935 },
            },
            loc: { start: 2933, end: 2935 },
          },
          directives: [],
          loc: { start: 2929, end: 2935 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2938, end: 2947 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2949, end: 2953 },
              },
              loc: { start: 2949, end: 2953 },
            },
            loc: { start: 2949, end: 2954 },
          },
          directives: [],
          loc: { start: 2938, end: 2954 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2957, end: 2964 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2966, end: 2970 },
              },
              loc: { start: 2966, end: 2970 },
            },
            loc: { start: 2966, end: 2971 },
          },
          directives: [],
          loc: { start: 2957, end: 2971 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2974, end: 2982 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2984, end: 2990 },
              },
              loc: { start: 2984, end: 2990 },
            },
            loc: { start: 2984, end: 2991 },
          },
          directives: [],
          loc: { start: 2974, end: 2991 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2994, end: 3011 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3013, end: 3019 },
            },
            loc: { start: 3013, end: 3019 },
          },
          directives: [],
          loc: { start: 2994, end: 3019 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 3022, end: 3036 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 3038, end: 3041 },
              },
              loc: { start: 3038, end: 3041 },
            },
            loc: { start: 3038, end: 3042 },
          },
          directives: [],
          loc: { start: 3022, end: 3042 },
        },
      ],
      loc: { start: 2908, end: 3044 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 3052, end: 3064 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3069, end: 3073 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3075, end: 3081 },
              },
              loc: { start: 3075, end: 3081 },
            },
            loc: { start: 3075, end: 3082 },
          },
          directives: [],
          loc: { start: 3069, end: 3082 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 3085, end: 3092 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3094, end: 3096 },
              },
              loc: { start: 3094, end: 3096 },
            },
            loc: { start: 3094, end: 3097 },
          },
          directives: [],
          loc: { start: 3085, end: 3097 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3100, end: 3104 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 3106, end: 3110 },
              },
              loc: { start: 3106, end: 3110 },
            },
            loc: { start: 3106, end: 3111 },
          },
          directives: [],
          loc: { start: 3100, end: 3111 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3114, end: 3118 },
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
                  loc: { start: 3121, end: 3136 },
                },
                loc: { start: 3121, end: 3136 },
              },
              loc: { start: 3121, end: 3137 },
            },
            loc: { start: 3120, end: 3138 },
          },
          directives: [],
          loc: { start: 3114, end: 3138 },
        },
      ],
      loc: { start: 3046, end: 3140 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3148, end: 3163 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3168, end: 3174 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3176, end: 3178 },
              },
              loc: { start: 3176, end: 3178 },
            },
            loc: { start: 3176, end: 3179 },
          },
          directives: [],
          loc: { start: 3168, end: 3179 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3182, end: 3193 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3195, end: 3206 },
              },
              loc: { start: 3195, end: 3206 },
            },
            loc: { start: 3195, end: 3207 },
          },
          directives: [],
          loc: { start: 3182, end: 3207 },
        },
      ],
      loc: { start: 3142, end: 3209 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3216, end: 3225 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3230, end: 3232 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3234, end: 3236 },
              },
              loc: { start: 3234, end: 3236 },
            },
            loc: { start: 3234, end: 3237 },
          },
          directives: [],
          loc: { start: 3230, end: 3237 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3240, end: 3245 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3247, end: 3252 },
              },
              loc: { start: 3247, end: 3252 },
            },
            loc: { start: 3247, end: 3253 },
          },
          directives: [],
          loc: { start: 3240, end: 3253 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3256, end: 3261 },
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
                    loc: { start: 3264, end: 3268 },
                  },
                  loc: { start: 3264, end: 3268 },
                },
                loc: { start: 3264, end: 3269 },
              },
              loc: { start: 3263, end: 3270 },
            },
            loc: { start: 3263, end: 3271 },
          },
          directives: [],
          loc: { start: 3256, end: 3271 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3274, end: 3278 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3280, end: 3290 },
            },
            loc: { start: 3280, end: 3290 },
          },
          directives: [],
          loc: { start: 3274, end: 3290 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3293, end: 3308 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3310, end: 3314 },
              },
              loc: { start: 3310, end: 3314 },
            },
            loc: { start: 3310, end: 3315 },
          },
          directives: [],
          loc: { start: 3293, end: 3315 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3318, end: 3326 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3328, end: 3333 },
              },
              loc: { start: 3328, end: 3333 },
            },
            loc: { start: 3328, end: 3334 },
          },
          directives: [],
          loc: { start: 3318, end: 3334 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3337, end: 3344 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3346, end: 3354 },
            },
            loc: { start: 3346, end: 3354 },
          },
          directives: [],
          loc: { start: 3337, end: 3354 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3357, end: 3365 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3367, end: 3375 },
            },
            loc: { start: 3367, end: 3375 },
          },
          directives: [],
          loc: { start: 3357, end: 3375 },
        },
      ],
      loc: { start: 3211, end: 3377 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3384, end: 3394 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3399, end: 3408 },
          },
          directives: [],
          loc: { start: 3399, end: 3408 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3411, end: 3418 },
          },
          directives: [],
          loc: { start: 3411, end: 3418 },
        },
      ],
      loc: { start: 3379, end: 3420 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3433, end: 3438 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3443, end: 3445 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3447, end: 3451 },
            },
            loc: { start: 3447, end: 3451 },
          },
          directives: [],
          loc: { start: 3443, end: 3451 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3454, end: 3459 },
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
                    loc: { start: 3462, end: 3466 },
                  },
                  loc: { start: 3462, end: 3466 },
                },
                loc: { start: 3462, end: 3467 },
              },
              loc: { start: 3461, end: 3468 },
            },
            loc: { start: 3461, end: 3469 },
          },
          directives: [],
          loc: { start: 3454, end: 3469 },
        },
      ],
      loc: { start: 3421, end: 3471 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3485, end: 3493 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3498, end: 3506 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3507, end: 3515 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3517, end: 3523 },
                  },
                  loc: { start: 3517, end: 3523 },
                },
                loc: { start: 3517, end: 3524 },
              },
              directives: [],
              loc: { start: 3507, end: 3524 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3526, end: 3531 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3533, end: 3539 },
                  },
                  loc: { start: 3533, end: 3539 },
                },
                loc: { start: 3533, end: 3540 },
              },
              directives: [],
              loc: { start: 3526, end: 3540 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3542, end: 3550 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3552, end: 3558 },
                },
                loc: { start: 3552, end: 3558 },
              },
              directives: [],
              loc: { start: 3542, end: 3558 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3561, end: 3577 },
              },
              loc: { start: 3561, end: 3577 },
            },
            loc: { start: 3561, end: 3578 },
          },
          directives: [],
          loc: { start: 3498, end: 3578 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3581, end: 3611 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3612, end: 3618 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3620, end: 3626 },
                  },
                  loc: { start: 3620, end: 3626 },
                },
                loc: { start: 3620, end: 3627 },
              },
              directives: [],
              loc: { start: 3612, end: 3627 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3630, end: 3634 },
              },
              loc: { start: 3630, end: 3634 },
            },
            loc: { start: 3630, end: 3635 },
          },
          directives: [],
          loc: { start: 3581, end: 3635 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3638, end: 3653 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3654, end: 3660 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3662, end: 3668 },
                  },
                  loc: { start: 3662, end: 3668 },
                },
                loc: { start: 3662, end: 3669 },
              },
              directives: [],
              loc: { start: 3654, end: 3669 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3671, end: 3675 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3677, end: 3683 },
                  },
                  loc: { start: 3677, end: 3683 },
                },
                loc: { start: 3677, end: 3684 },
              },
              directives: [],
              loc: { start: 3671, end: 3684 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3686, end: 3694 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3696, end: 3700 },
                  },
                  loc: { start: 3696, end: 3700 },
                },
                loc: { start: 3696, end: 3701 },
              },
              directives: [],
              loc: { start: 3686, end: 3701 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3704, end: 3726 },
              },
              loc: { start: 3704, end: 3726 },
            },
            loc: { start: 3704, end: 3727 },
          },
          directives: [],
          loc: { start: 3638, end: 3727 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3730, end: 3757 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3758, end: 3764 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3766, end: 3772 },
                },
                loc: { start: 3766, end: 3772 },
              },
              directives: [],
              loc: { start: 3758, end: 3772 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3775, end: 3779 },
              },
              loc: { start: 3775, end: 3779 },
            },
            loc: { start: 3775, end: 3780 },
          },
          directives: [],
          loc: { start: 3730, end: 3780 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3783, end: 3795 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3796, end: 3804 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3806, end: 3810 },
                  },
                  loc: { start: 3806, end: 3810 },
                },
                loc: { start: 3806, end: 3811 },
              },
              directives: [],
              loc: { start: 3796, end: 3811 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3814, end: 3827 },
              },
              loc: { start: 3814, end: 3827 },
            },
            loc: { start: 3814, end: 3828 },
          },
          directives: [],
          loc: { start: 3783, end: 3828 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3831, end: 3844 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3845, end: 3850 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3852, end: 3858 },
                  },
                  loc: { start: 3852, end: 3858 },
                },
                loc: { start: 3852, end: 3859 },
              },
              directives: [],
              loc: { start: 3845, end: 3859 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3861, end: 3869 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3871, end: 3877 },
                  },
                  loc: { start: 3871, end: 3877 },
                },
                loc: { start: 3871, end: 3878 },
              },
              directives: [],
              loc: { start: 3861, end: 3878 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3881, end: 3893 },
              },
              loc: { start: 3881, end: 3893 },
            },
            loc: { start: 3881, end: 3894 },
          },
          directives: [],
          loc: { start: 3831, end: 3894 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3897, end: 3910 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3911, end: 3916 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3918, end: 3924 },
                  },
                  loc: { start: 3918, end: 3924 },
                },
                loc: { start: 3918, end: 3925 },
              },
              directives: [],
              loc: { start: 3911, end: 3925 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3928, end: 3935 },
              },
              loc: { start: 3928, end: 3935 },
            },
            loc: { start: 3928, end: 3936 },
          },
          directives: [],
          loc: { start: 3897, end: 3936 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3939, end: 3953 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3954, end: 3965 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3967, end: 3973 },
                  },
                  loc: { start: 3967, end: 3973 },
                },
                loc: { start: 3967, end: 3974 },
              },
              directives: [],
              loc: { start: 3954, end: 3974 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3977, end: 3989 },
              },
              loc: { start: 3977, end: 3989 },
            },
            loc: { start: 3977, end: 3990 },
          },
          directives: [],
          loc: { start: 3939, end: 3990 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3993, end: 4005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 4006, end: 4018 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4020, end: 4026 },
                  },
                  loc: { start: 4020, end: 4026 },
                },
                loc: { start: 4020, end: 4027 },
              },
              directives: [],
              loc: { start: 4006, end: 4027 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 4030, end: 4042 },
              },
              loc: { start: 4030, end: 4042 },
            },
            loc: { start: 4030, end: 4043 },
          },
          directives: [],
          loc: { start: 3993, end: 4043 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 4046, end: 4062 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4063, end: 4065 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4067, end: 4069 },
                  },
                  loc: { start: 4067, end: 4069 },
                },
                loc: { start: 4067, end: 4070 },
              },
              directives: [],
              loc: { start: 4063, end: 4070 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 4072, end: 4076 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 4078, end: 4084 },
                  },
                  loc: { start: 4078, end: 4084 },
                },
                loc: { start: 4078, end: 4085 },
              },
              directives: [],
              loc: { start: 4072, end: 4085 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4088, end: 4098 },
              },
              loc: { start: 4088, end: 4098 },
            },
            loc: { start: 4088, end: 4099 },
          },
          directives: [],
          loc: { start: 4046, end: 4099 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 4102, end: 4118 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4119, end: 4121 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4123, end: 4125 },
                  },
                  loc: { start: 4123, end: 4125 },
                },
                loc: { start: 4123, end: 4126 },
              },
              directives: [],
              loc: { start: 4119, end: 4126 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4129, end: 4139 },
              },
              loc: { start: 4129, end: 4139 },
            },
            loc: { start: 4129, end: 4140 },
          },
          directives: [],
          loc: { start: 4102, end: 4140 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4143, end: 4156 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4157, end: 4162 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4164, end: 4176 },
                  },
                  loc: { start: 4164, end: 4176 },
                },
                loc: { start: 4164, end: 4177 },
              },
              directives: [],
              loc: { start: 4157, end: 4177 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4180, end: 4184 },
              },
              loc: { start: 4180, end: 4184 },
            },
            loc: { start: 4180, end: 4185 },
          },
          directives: [],
          loc: { start: 4143, end: 4185 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4188, end: 4208 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4210, end: 4214 },
              },
              loc: { start: 4210, end: 4214 },
            },
            loc: { start: 4210, end: 4215 },
          },
          directives: [],
          loc: { start: 4188, end: 4215 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateRoles",
            loc: { start: 4218, end: 4229 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4230, end: 4232 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4234, end: 4236 },
                  },
                  loc: { start: 4234, end: 4236 },
                },
                loc: { start: 4234, end: 4237 },
              },
              directives: [],
              loc: { start: 4230, end: 4237 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "roles",
                loc: { start: 4239, end: 4244 },
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
                        loc: { start: 4247, end: 4251 },
                      },
                      loc: { start: 4247, end: 4251 },
                    },
                    loc: { start: 4247, end: 4252 },
                  },
                  loc: { start: 4246, end: 4253 },
                },
                loc: { start: 4246, end: 4254 },
              },
              directives: [],
              loc: { start: 4239, end: 4254 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4257, end: 4261 },
              },
              loc: { start: 4257, end: 4261 },
            },
            loc: { start: 4257, end: 4262 },
          },
          directives: [],
          loc: { start: 4218, end: 4262 },
        },
      ],
      loc: { start: 3473, end: 4264 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4278, end: 4287 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4292, end: 4296 },
          },
          arguments: [],
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
          loc: { start: 4292, end: 4303 },
        },
      ],
      loc: { start: 4266, end: 4305 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4312, end: 4324 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4329, end: 4334 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4336, end: 4339 },
              },
              loc: { start: 4336, end: 4339 },
            },
            loc: { start: 4336, end: 4340 },
          },
          directives: [],
          loc: { start: 4329, end: 4340 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4343, end: 4355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4357, end: 4363 },
              },
              loc: { start: 4357, end: 4363 },
            },
            loc: { start: 4357, end: 4364 },
          },
          directives: [],
          loc: { start: 4343, end: 4364 },
        },
      ],
      loc: { start: 4307, end: 4366 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4373, end: 4389 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4394, end: 4398 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4400, end: 4404 },
              },
              loc: { start: 4400, end: 4404 },
            },
            loc: { start: 4400, end: 4405 },
          },
          directives: [],
          loc: { start: 4394, end: 4405 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4408, end: 4413 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4415, end: 4421 },
              },
              loc: { start: 4415, end: 4421 },
            },
            loc: { start: 4415, end: 4422 },
          },
          directives: [],
          loc: { start: 4408, end: 4422 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4425, end: 4437 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4439, end: 4445 },
              },
              loc: { start: 4439, end: 4445 },
            },
            loc: { start: 4439, end: 4446 },
          },
          directives: [],
          loc: { start: 4425, end: 4446 },
        },
      ],
      loc: { start: 4368, end: 4448 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4455, end: 4468 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4473, end: 4485 },
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
                    loc: { start: 4488, end: 4491 },
                  },
                  loc: { start: 4488, end: 4491 },
                },
                loc: { start: 4488, end: 4492 },
              },
              loc: { start: 4487, end: 4493 },
            },
            loc: { start: 4487, end: 4494 },
          },
          directives: [],
          loc: { start: 4473, end: 4494 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4497, end: 4502 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4504, end: 4507 },
              },
              loc: { start: 4504, end: 4507 },
            },
            loc: { start: 4504, end: 4508 },
          },
          directives: [],
          loc: { start: 4497, end: 4508 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4511, end: 4523 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4525, end: 4531 },
              },
              loc: { start: 4525, end: 4531 },
            },
            loc: { start: 4525, end: 4532 },
          },
          directives: [],
          loc: { start: 4511, end: 4532 },
        },
      ],
      loc: { start: 4450, end: 4534 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4541, end: 4563 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4568, end: 4573 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4575, end: 4581 },
              },
              loc: { start: 4575, end: 4581 },
            },
            loc: { start: 4575, end: 4582 },
          },
          directives: [],
          loc: { start: 4568, end: 4582 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4585, end: 4591 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4593, end: 4603 },
              },
              loc: { start: 4593, end: 4603 },
            },
            loc: { start: 4593, end: 4604 },
          },
          directives: [],
          loc: { start: 4585, end: 4604 },
        },
      ],
      loc: { start: 4536, end: 4606 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4613, end: 4617 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4622, end: 4624 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4626, end: 4628 },
              },
              loc: { start: 4626, end: 4628 },
            },
            loc: { start: 4626, end: 4629 },
          },
          directives: [],
          loc: { start: 4622, end: 4629 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4632, end: 4636 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4638, end: 4644 },
              },
              loc: { start: 4638, end: 4644 },
            },
            loc: { start: 4638, end: 4645 },
          },
          directives: [],
          loc: { start: 4632, end: 4645 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4648, end: 4659 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4661, end: 4667 },
              },
              loc: { start: 4661, end: 4667 },
            },
            loc: { start: 4661, end: 4668 },
          },
          directives: [],
          loc: { start: 4648, end: 4668 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4671, end: 4676 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4678, end: 4684 },
              },
              loc: { start: 4678, end: 4684 },
            },
            loc: { start: 4678, end: 4685 },
          },
          directives: [],
          loc: { start: 4671, end: 4685 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4688, end: 4694 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4696, end: 4702 },
              },
              loc: { start: 4696, end: 4702 },
            },
            loc: { start: 4696, end: 4703 },
          },
          directives: [],
          loc: { start: 4688, end: 4703 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4706, end: 4715 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4717, end: 4723 },
            },
            loc: { start: 4717, end: 4723 },
          },
          directives: [],
          loc: { start: 4706, end: 4723 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4726, end: 4733 },
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
                    loc: { start: 4736, end: 4746 },
                  },
                  loc: { start: 4736, end: 4746 },
                },
                loc: { start: 4736, end: 4747 },
              },
              loc: { start: 4735, end: 4748 },
            },
            loc: { start: 4735, end: 4749 },
          },
          directives: [],
          loc: { start: 4726, end: 4749 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 4752, end: 4757 },
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
                    loc: { start: 4760, end: 4764 },
                  },
                  loc: { start: 4760, end: 4764 },
                },
                loc: { start: 4760, end: 4765 },
              },
              loc: { start: 4759, end: 4766 },
            },
            loc: { start: 4759, end: 4767 },
          },
          directives: [],
          loc: { start: 4752, end: 4767 },
        },
      ],
      loc: { start: 4608, end: 4769 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4777, end: 4789 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4794, end: 4796 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4798, end: 4800 },
            },
            loc: { start: 4798, end: 4800 },
          },
          directives: [],
          loc: { start: 4794, end: 4800 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4803, end: 4807 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4809, end: 4815 },
              },
              loc: { start: 4809, end: 4815 },
            },
            loc: { start: 4809, end: 4816 },
          },
          directives: [],
          loc: { start: 4803, end: 4816 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4819, end: 4830 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4832, end: 4838 },
              },
              loc: { start: 4832, end: 4838 },
            },
            loc: { start: 4832, end: 4839 },
          },
          directives: [],
          loc: { start: 4819, end: 4839 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4842, end: 4847 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4849, end: 4855 },
              },
              loc: { start: 4849, end: 4855 },
            },
            loc: { start: 4849, end: 4856 },
          },
          directives: [],
          loc: { start: 4842, end: 4856 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4859, end: 4867 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4869, end: 4875 },
            },
            loc: { start: 4869, end: 4875 },
          },
          directives: [],
          loc: { start: 4859, end: 4875 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4878, end: 4884 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4886, end: 4890 },
            },
            loc: { start: 4886, end: 4890 },
          },
          directives: [],
          loc: { start: 4878, end: 4890 },
        },
      ],
      loc: { start: 4771, end: 4892 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4899, end: 4909 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4914, end: 4916 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4918, end: 4920 },
              },
              loc: { start: 4918, end: 4920 },
            },
            loc: { start: 4918, end: 4921 },
          },
          directives: [],
          loc: { start: 4914, end: 4921 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4924, end: 4928 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4930, end: 4936 },
              },
              loc: { start: 4930, end: 4936 },
            },
            loc: { start: 4930, end: 4937 },
          },
          directives: [],
          loc: { start: 4924, end: 4937 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4940, end: 4949 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4951, end: 4959 },
            },
            loc: { start: 4951, end: 4959 },
          },
          directives: [],
          loc: { start: 4940, end: 4959 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4962, end: 4972 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4974, end: 4982 },
            },
            loc: { start: 4974, end: 4982 },
          },
          directives: [],
          loc: { start: 4962, end: 4982 },
        },
      ],
      loc: { start: 4894, end: 4984 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 4991, end: 4995 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Trusted",
            loc: { start: 5000, end: 5007 },
          },
          directives: [],
          loc: { start: 5000, end: 5007 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Admin",
            loc: { start: 5010, end: 5015 },
          },
          directives: [],
          loc: { start: 5010, end: 5015 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Doorkeeper",
            loc: { start: 5018, end: 5028 },
          },
          directives: [],
          loc: { start: 5018, end: 5028 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "Bookkeeper",
            loc: { start: 5031, end: 5041 },
          },
          directives: [],
          loc: { start: 5031, end: 5041 },
        },
      ],
      loc: { start: 4986, end: 5043 },
    },
  ],
  loc: { start: 0, end: 5044 },
} as unknown as DocumentNode;
