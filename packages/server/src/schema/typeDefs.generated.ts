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
      ],
      loc: { start: 370, end: 480 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "DonationDedication",
        loc: { start: 487, end: 505 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RENT", loc: { start: 510, end: 514 } },
          directives: [],
          loc: { start: 510, end: 514 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "WARCHEST",
            loc: { start: 517, end: 525 },
          },
          directives: [],
          loc: { start: 517, end: 525 },
        },
      ],
      loc: { start: 482, end: 527 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 540, end: 548 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "planEvent",
            loc: { start: 553, end: 562 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 563, end: 568 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "EventInput",
                    loc: { start: 570, end: 580 },
                  },
                  loc: { start: 570, end: 580 },
                },
                loc: { start: 570, end: 581 },
              },
              directives: [],
              loc: { start: 563, end: 581 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 584, end: 589 },
              },
              loc: { start: 584, end: 589 },
            },
            loc: { start: 584, end: 590 },
          },
          directives: [],
          loc: { start: 553, end: 590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participateInEvent",
            loc: { start: 593, end: 611 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 612, end: 614 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 616, end: 618 },
                  },
                  loc: { start: 616, end: 618 },
                },
                loc: { start: 616, end: 619 },
              },
              directives: [],
              loc: { start: 612, end: 619 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 622, end: 627 },
              },
              loc: { start: 622, end: 627 },
            },
            loc: { start: 622, end: 628 },
          },
          directives: [],
          loc: { start: 593, end: 628 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "leaveEvent",
            loc: { start: 631, end: 641 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 642, end: 644 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 646, end: 648 },
                  },
                  loc: { start: 646, end: 648 },
                },
                loc: { start: 646, end: 649 },
              },
              directives: [],
              loc: { start: 642, end: 649 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event",
                loc: { start: 652, end: 657 },
              },
              loc: { start: 652, end: 657 },
            },
            loc: { start: 652, end: 658 },
          },
          directives: [],
          loc: { start: 631, end: 658 },
        },
      ],
      loc: { start: 528, end: 660 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 674, end: 679 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "events",
            loc: { start: 684, end: 690 },
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
                    loc: { start: 693, end: 698 },
                  },
                  loc: { start: 693, end: 698 },
                },
                loc: { start: 693, end: 699 },
              },
              loc: { start: 692, end: 700 },
            },
            loc: { start: 692, end: 701 },
          },
          directives: [],
          loc: { start: 684, end: 701 },
        },
      ],
      loc: { start: 662, end: 703 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Event", loc: { start: 710, end: 715 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 720, end: 722 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 724, end: 726 },
              },
              loc: { start: 724, end: 726 },
            },
            loc: { start: 724, end: 727 },
          },
          directives: [],
          loc: { start: 720, end: 727 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 730, end: 734 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 736, end: 742 },
              },
              loc: { start: 736, end: 742 },
            },
            loc: { start: 736, end: 743 },
          },
          directives: [],
          loc: { start: 730, end: 743 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "party", loc: { start: 746, end: 751 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 753, end: 758 },
              },
              loc: { start: 753, end: 758 },
            },
            loc: { start: 753, end: 759 },
          },
          directives: [],
          loc: { start: 746, end: 759 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "date", loc: { start: 762, end: 766 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 768, end: 772 },
            },
            loc: { start: 768, end: 772 },
          },
          directives: [],
          loc: { start: 762, end: 772 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 775, end: 784 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 786, end: 792 },
            },
            loc: { start: 786, end: 792 },
          },
          directives: [],
          loc: { start: 775, end: 792 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 795, end: 802 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 804, end: 810 },
            },
            loc: { start: 804, end: 810 },
          },
          directives: [],
          loc: { start: 795, end: 810 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "organizer",
            loc: { start: 813, end: 822 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 824, end: 828 },
              },
              loc: { start: 824, end: 828 },
            },
            loc: { start: 824, end: 829 },
          },
          directives: [],
          loc: { start: 813, end: 829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "participants",
            loc: { start: 832, end: 844 },
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
                    loc: { start: 847, end: 851 },
                  },
                  loc: { start: 847, end: 851 },
                },
                loc: { start: 847, end: 852 },
              },
              loc: { start: 846, end: 853 },
            },
            loc: { start: 846, end: 854 },
          },
          directives: [],
          loc: { start: 832, end: 854 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 857, end: 868 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 870, end: 876 },
            },
            loc: { start: 870, end: 876 },
          },
          directives: [],
          loc: { start: 857, end: 876 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 879, end: 884 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 886, end: 892 },
              },
              loc: { start: 886, end: 892 },
            },
            loc: { start: 886, end: 893 },
          },
          directives: [],
          loc: { start: 879, end: 893 },
        },
      ],
      loc: { start: 705, end: 895 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "EventInput",
        loc: { start: 903, end: 913 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 918, end: 920 } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 922, end: 924 } },
            loc: { start: 922, end: 924 },
          },
          directives: [],
          loc: { start: 918, end: 924 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "name", loc: { start: 927, end: 931 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 933, end: 939 },
              },
              loc: { start: 933, end: 939 },
            },
            loc: { start: 933, end: 940 },
          },
          directives: [],
          loc: { start: 927, end: 940 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 943, end: 950 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 952, end: 954 },
              },
              loc: { start: 952, end: 954 },
            },
            loc: { start: 952, end: 955 },
          },
          directives: [],
          loc: { start: 943, end: 955 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "date", loc: { start: 958, end: 962 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 964, end: 968 },
            },
            loc: { start: 964, end: 968 },
          },
          directives: [],
          loc: { start: 958, end: 968 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 971, end: 980 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 982, end: 988 },
            },
            loc: { start: 982, end: 988 },
          },
          directives: [],
          loc: { start: 971, end: 988 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endTime",
            loc: { start: 991, end: 998 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1000, end: 1006 },
            },
            loc: { start: 1000, end: 1006 },
          },
          directives: [],
          loc: { start: 991, end: 1006 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1009, end: 1020 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1022, end: 1028 },
            },
            loc: { start: 1022, end: 1028 },
          },
          directives: [],
          loc: { start: 1009, end: 1028 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1031, end: 1036 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 1038, end: 1042 },
              },
              loc: { start: 1038, end: 1042 },
            },
            loc: { start: 1038, end: 1043 },
          },
          directives: [],
          loc: { start: 1031, end: 1043 },
        },
      ],
      loc: { start: 897, end: 1045 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1058, end: 1063 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "games",
            loc: { start: 1068, end: 1073 },
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
                    loc: { start: 1076, end: 1080 },
                  },
                  loc: { start: 1076, end: 1080 },
                },
                loc: { start: 1076, end: 1081 },
              },
              loc: { start: 1075, end: 1082 },
            },
            loc: { start: 1075, end: 1083 },
          },
          directives: [],
          loc: { start: 1068, end: 1083 },
        },
      ],
      loc: { start: 1046, end: 1085 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1099, end: 1107 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addGameToParty",
            loc: { start: 1112, end: 1126 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1127, end: 1134 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1136, end: 1138 },
                  },
                  loc: { start: 1136, end: 1138 },
                },
                loc: { start: 1136, end: 1139 },
              },
              directives: [],
              loc: { start: 1127, end: 1139 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1141, end: 1145 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1147, end: 1153 },
                  },
                  loc: { start: 1147, end: 1153 },
                },
                loc: { start: 1147, end: 1154 },
              },
              directives: [],
              loc: { start: 1141, end: 1154 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AddGameResult",
                loc: { start: 1157, end: 1170 },
              },
              loc: { start: 1157, end: 1170 },
            },
            loc: { start: 1157, end: 1171 },
          },
          directives: [],
          loc: { start: 1112, end: 1171 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setGamesPlayed",
            loc: { start: 1174, end: 1188 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1189, end: 1196 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1198, end: 1200 },
                  },
                  loc: { start: 1198, end: 1200 },
                },
                loc: { start: 1198, end: 1201 },
              },
              directives: [],
              loc: { start: 1189, end: 1201 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "gameIds",
                loc: { start: 1203, end: 1210 },
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
                        loc: { start: 1213, end: 1215 },
                      },
                      loc: { start: 1213, end: 1215 },
                    },
                    loc: { start: 1213, end: 1216 },
                  },
                  loc: { start: 1212, end: 1217 },
                },
                loc: { start: 1212, end: 1218 },
              },
              directives: [],
              loc: { start: 1203, end: 1218 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1221, end: 1230 },
              },
              loc: { start: 1221, end: 1230 },
            },
            loc: { start: 1221, end: 1231 },
          },
          directives: [],
          loc: { start: 1174, end: 1231 },
        },
      ],
      loc: { start: 1087, end: 1233 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Party", loc: { start: 1247, end: 1252 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1257, end: 1268 },
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
                    loc: { start: 1271, end: 1282 },
                  },
                  loc: { start: 1271, end: 1282 },
                },
                loc: { start: 1271, end: 1283 },
              },
              loc: { start: 1270, end: 1284 },
            },
            loc: { start: 1270, end: 1285 },
          },
          directives: [],
          loc: { start: 1257, end: 1285 },
        },
      ],
      loc: { start: 1235, end: 1287 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 1301, end: 1310 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gamesPlayed",
            loc: { start: 1315, end: 1326 },
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
                    loc: { start: 1329, end: 1333 },
                  },
                  loc: { start: 1329, end: 1333 },
                },
                loc: { start: 1329, end: 1334 },
              },
              loc: { start: 1328, end: 1335 },
            },
            loc: { start: 1328, end: 1336 },
          },
          directives: [],
          loc: { start: 1315, end: 1336 },
        },
      ],
      loc: { start: 1289, end: 1338 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AddGameResult",
        loc: { start: 1345, end: 1358 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1363, end: 1367 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1369, end: 1373 },
              },
              loc: { start: 1369, end: 1373 },
            },
            loc: { start: 1369, end: 1374 },
          },
          directives: [],
          loc: { start: 1363, end: 1374 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 1377, end: 1386 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attending",
                loc: { start: 1388, end: 1397 },
              },
              loc: { start: 1388, end: 1397 },
            },
            loc: { start: 1388, end: 1398 },
          },
          directives: [],
          loc: { start: 1377, end: 1398 },
        },
      ],
      loc: { start: 1340, end: 1400 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Game", loc: { start: 1407, end: 1411 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1416, end: 1418 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1420, end: 1422 },
              },
              loc: { start: 1420, end: 1422 },
            },
            loc: { start: 1420, end: 1423 },
          },
          directives: [],
          loc: { start: 1416, end: 1423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1426, end: 1430 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1432, end: 1438 },
              },
              loc: { start: 1432, end: 1438 },
            },
            loc: { start: 1432, end: 1439 },
          },
          directives: [],
          loc: { start: 1426, end: 1439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1442, end: 1447 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1449, end: 1455 },
              },
              loc: { start: 1449, end: 1455 },
            },
            loc: { start: 1449, end: 1456 },
          },
          directives: [],
          loc: { start: 1442, end: 1456 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1459, end: 1466 },
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
                    loc: { start: 1469, end: 1473 },
                  },
                  loc: { start: 1469, end: 1473 },
                },
                loc: { start: 1469, end: 1474 },
              },
              loc: { start: 1468, end: 1475 },
            },
            loc: { start: 1468, end: 1476 },
          },
          directives: [],
          loc: { start: 1459, end: 1476 },
        },
      ],
      loc: { start: 1402, end: 1478 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GameOnParty",
        loc: { start: 1485, end: 1496 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1501, end: 1503 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1505, end: 1507 },
              },
              loc: { start: 1505, end: 1507 },
            },
            loc: { start: 1505, end: 1508 },
          },
          directives: [],
          loc: { start: 1501, end: 1508 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "game",
            loc: { start: 1511, end: 1515 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Game",
                loc: { start: 1517, end: 1521 },
              },
              loc: { start: 1517, end: 1521 },
            },
            loc: { start: 1517, end: 1522 },
          },
          directives: [],
          loc: { start: 1511, end: 1522 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1525, end: 1530 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1532, end: 1537 },
              },
              loc: { start: 1532, end: 1537 },
            },
            loc: { start: 1532, end: 1538 },
          },
          directives: [],
          loc: { start: 1525, end: 1538 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "players",
            loc: { start: 1541, end: 1548 },
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
                    loc: { start: 1551, end: 1555 },
                  },
                  loc: { start: 1551, end: 1555 },
                },
                loc: { start: 1551, end: 1556 },
              },
              loc: { start: 1550, end: 1557 },
            },
            loc: { start: 1550, end: 1558 },
          },
          directives: [],
          loc: { start: 1541, end: 1558 },
        },
      ],
      loc: { start: 1480, end: 1560 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1573, end: 1578 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 1583, end: 1588 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1589, end: 1591 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1593, end: 1595 },
                  },
                  loc: { start: 1593, end: 1595 },
                },
                loc: { start: 1593, end: 1596 },
              },
              directives: [],
              loc: { start: 1589, end: 1596 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1599, end: 1604 },
            },
            loc: { start: 1599, end: 1604 },
          },
          directives: [],
          loc: { start: 1583, end: 1604 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parties",
            loc: { start: 1607, end: 1614 },
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
                    loc: { start: 1617, end: 1622 },
                  },
                  loc: { start: 1617, end: 1622 },
                },
                loc: { start: 1617, end: 1623 },
              },
              loc: { start: 1616, end: 1624 },
            },
            loc: { start: 1616, end: 1625 },
          },
          directives: [],
          loc: { start: 1607, end: 1625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "nextParty",
            loc: { start: 1628, end: 1637 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Party",
              loc: { start: 1639, end: 1644 },
            },
            loc: { start: 1639, end: 1644 },
          },
          directives: [],
          loc: { start: 1628, end: 1644 },
        },
      ],
      loc: { start: 1561, end: 1646 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1660, end: 1668 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "setAttendance",
            loc: { start: 1673, end: 1686 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1687, end: 1694 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1696, end: 1698 },
                  },
                  loc: { start: 1696, end: 1698 },
                },
                loc: { start: 1696, end: 1699 },
              },
              directives: [],
              loc: { start: 1687, end: 1699 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1701, end: 1707 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1709, end: 1711 },
                },
                loc: { start: 1709, end: 1711 },
              },
              directives: [],
              loc: { start: 1701, end: 1711 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "dates",
                loc: { start: 1713, end: 1718 },
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
                        loc: { start: 1721, end: 1725 },
                      },
                      loc: { start: 1721, end: 1725 },
                    },
                    loc: { start: 1721, end: 1726 },
                  },
                  loc: { start: 1720, end: 1727 },
                },
                loc: { start: 1720, end: 1728 },
              },
              directives: [],
              loc: { start: 1713, end: 1728 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1731, end: 1736 },
              },
              loc: { start: 1731, end: 1736 },
            },
            loc: { start: 1731, end: 1737 },
          },
          directives: [],
          loc: { start: 1673, end: 1737 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeAttendance",
            loc: { start: 1740, end: 1756 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1757, end: 1764 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1766, end: 1768 },
                  },
                  loc: { start: 1766, end: 1768 },
                },
                loc: { start: 1766, end: 1769 },
              },
              directives: [],
              loc: { start: 1757, end: 1769 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1771, end: 1777 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 1779, end: 1781 },
                },
                loc: { start: 1779, end: 1781 },
              },
              directives: [],
              loc: { start: 1771, end: 1781 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1784, end: 1789 },
              },
              loc: { start: 1784, end: 1789 },
            },
            loc: { start: 1784, end: 1790 },
          },
          directives: [],
          loc: { start: 1740, end: 1790 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "requestRoom",
            loc: { start: 1793, end: 1804 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1805, end: 1812 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1814, end: 1816 },
                  },
                  loc: { start: 1814, end: 1816 },
                },
                loc: { start: 1814, end: 1817 },
              },
              directives: [],
              loc: { start: 1805, end: 1817 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1820, end: 1829 },
            },
            loc: { start: 1820, end: 1829 },
          },
          directives: [],
          loc: { start: 1793, end: 1829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recindRoom",
            loc: { start: 1832, end: 1842 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "partyId",
                loc: { start: 1843, end: 1850 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1852, end: 1854 },
                  },
                  loc: { start: 1852, end: 1854 },
                },
                loc: { start: 1852, end: 1855 },
              },
              directives: [],
              loc: { start: 1843, end: 1855 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1858, end: 1867 },
            },
            loc: { start: 1858, end: 1867 },
          },
          directives: [],
          loc: { start: 1832, end: 1867 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "grantRoom",
            loc: { start: 1870, end: 1879 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 1880, end: 1891 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1893, end: 1895 },
                  },
                  loc: { start: 1893, end: 1895 },
                },
                loc: { start: 1893, end: 1896 },
              },
              directives: [],
              loc: { start: 1880, end: 1896 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1899, end: 1908 },
            },
            loc: { start: 1899, end: 1908 },
          },
          directives: [],
          loc: { start: 1870, end: 1908 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "denyRoom",
            loc: { start: 1911, end: 1919 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "attendingId",
                loc: { start: 1920, end: 1931 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1933, end: 1935 },
                  },
                  loc: { start: 1933, end: 1935 },
                },
                loc: { start: 1933, end: 1936 },
              },
              directives: [],
              loc: { start: 1920, end: 1936 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 1939, end: 1948 },
            },
            loc: { start: 1939, end: 1948 },
          },
          directives: [],
          loc: { start: 1911, end: 1948 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateParty",
            loc: { start: 1951, end: 1962 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1963, end: 1968 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PartyInput",
                    loc: { start: 1970, end: 1980 },
                  },
                  loc: { start: 1970, end: 1980 },
                },
                loc: { start: 1970, end: 1981 },
              },
              directives: [],
              loc: { start: 1963, end: 1981 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 1984, end: 1989 },
              },
              loc: { start: 1984, end: 1989 },
            },
            loc: { start: 1984, end: 1990 },
          },
          directives: [],
          loc: { start: 1951, end: 1990 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addPicture",
            loc: { start: 1993, end: 2003 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2004, end: 2009 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "PictureInput",
                    loc: { start: 2011, end: 2023 },
                  },
                  loc: { start: 2011, end: 2023 },
                },
                loc: { start: 2011, end: 2024 },
              },
              directives: [],
              loc: { start: 2004, end: 2024 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2027, end: 2034 },
              },
              loc: { start: 2027, end: 2034 },
            },
            loc: { start: 2027, end: 2035 },
          },
          directives: [],
          loc: { start: 1993, end: 2035 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 2038, end: 2045 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2046, end: 2052 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2054, end: 2056 },
                  },
                  loc: { start: 2054, end: 2056 },
                },
                loc: { start: 2054, end: 2057 },
              },
              directives: [],
              loc: { start: 2046, end: 2057 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2060, end: 2069 },
            },
            loc: { start: 2060, end: 2069 },
          },
          directives: [],
          loc: { start: 2038, end: 2069 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 2072, end: 2080 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2081, end: 2087 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2089, end: 2091 },
                  },
                  loc: { start: 2089, end: 2091 },
                },
                loc: { start: 2089, end: 2092 },
              },
              directives: [],
              loc: { start: 2081, end: 2092 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2095, end: 2104 },
            },
            loc: { start: 2095, end: 2104 },
          },
          directives: [],
          loc: { start: 2072, end: 2104 },
        },
      ],
      loc: { start: 1648, end: 2106 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2113, end: 2118 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2123, end: 2125 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2127, end: 2129 },
              },
              loc: { start: 2127, end: 2129 },
            },
            loc: { start: 2127, end: 2130 },
          },
          directives: [],
          loc: { start: 2123, end: 2130 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2133, end: 2142 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2144, end: 2148 },
              },
              loc: { start: 2144, end: 2148 },
            },
            loc: { start: 2144, end: 2149 },
          },
          directives: [],
          loc: { start: 2133, end: 2149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2152, end: 2159 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2161, end: 2165 },
              },
              loc: { start: 2161, end: 2165 },
            },
            loc: { start: 2161, end: 2166 },
          },
          directives: [],
          loc: { start: 2152, end: 2166 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2169, end: 2177 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2179, end: 2185 },
              },
              loc: { start: 2179, end: 2185 },
            },
            loc: { start: 2179, end: 2186 },
          },
          directives: [],
          loc: { start: 2169, end: 2186 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2189, end: 2206 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2208, end: 2214 },
            },
            loc: { start: 2208, end: 2214 },
          },
          directives: [],
          loc: { start: 2189, end: 2214 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2217, end: 2231 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2233, end: 2236 },
              },
              loc: { start: 2233, end: 2236 },
            },
            loc: { start: 2233, end: 2237 },
          },
          directives: [],
          loc: { start: 2217, end: 2237 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2240, end: 2251 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2253, end: 2258 },
              },
              loc: { start: 2253, end: 2258 },
            },
            loc: { start: 2253, end: 2259 },
          },
          directives: [],
          loc: { start: 2240, end: 2259 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2262, end: 2272 },
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
                    loc: { start: 2275, end: 2284 },
                  },
                  loc: { start: 2275, end: 2284 },
                },
                loc: { start: 2275, end: 2285 },
              },
              loc: { start: 2274, end: 2286 },
            },
            loc: { start: 2274, end: 2287 },
          },
          directives: [],
          loc: { start: 2262, end: 2287 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attending",
            loc: { start: 2290, end: 2299 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 2300, end: 2306 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2308, end: 2310 },
                },
                loc: { start: 2308, end: 2310 },
              },
              directives: [],
              loc: { start: 2300, end: 2310 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attending",
              loc: { start: 2313, end: 2322 },
            },
            loc: { start: 2313, end: 2322 },
          },
          directives: [],
          loc: { start: 2290, end: 2322 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2325, end: 2333 },
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
                    loc: { start: 2336, end: 2343 },
                  },
                  loc: { start: 2336, end: 2343 },
                },
                loc: { start: 2336, end: 2344 },
              },
              loc: { start: 2335, end: 2345 },
            },
            loc: { start: 2335, end: 2346 },
          },
          directives: [],
          loc: { start: 2325, end: 2346 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2349, end: 2363 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2365, end: 2368 },
              },
              loc: { start: 2365, end: 2368 },
            },
            loc: { start: 2365, end: 2369 },
          },
          directives: [],
          loc: { start: 2349, end: 2369 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2372, end: 2392 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2394, end: 2398 },
            },
            loc: { start: 2394, end: 2398 },
          },
          directives: [],
          loc: { start: 2372, end: 2398 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2401, end: 2407 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2409, end: 2413 },
            },
            loc: { start: 2409, end: 2413 },
          },
          directives: [],
          loc: { start: 2401, end: 2413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2416, end: 2431 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2433, end: 2438 },
            },
            loc: { start: 2433, end: 2438 },
          },
          directives: [],
          loc: { start: 2416, end: 2438 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2441, end: 2449 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2451, end: 2456 },
            },
            loc: { start: 2451, end: 2456 },
          },
          directives: [],
          loc: { start: 2441, end: 2456 },
        },
      ],
      loc: { start: 2108, end: 2458 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2465, end: 2472 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2477, end: 2479 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2481, end: 2483 },
              },
              loc: { start: 2481, end: 2483 },
            },
            loc: { start: 2481, end: 2484 },
          },
          directives: [],
          loc: { start: 2477, end: 2484 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2487, end: 2490 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2492, end: 2498 },
              },
              loc: { start: 2492, end: 2498 },
            },
            loc: { start: 2492, end: 2499 },
          },
          directives: [],
          loc: { start: 2487, end: 2499 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2502, end: 2507 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2509, end: 2514 },
              },
              loc: { start: 2509, end: 2514 },
            },
            loc: { start: 2509, end: 2515 },
          },
          directives: [],
          loc: { start: 2502, end: 2515 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2518, end: 2522 },
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
                    loc: { start: 2525, end: 2535 },
                  },
                  loc: { start: 2525, end: 2535 },
                },
                loc: { start: 2525, end: 2536 },
              },
              loc: { start: 2524, end: 2537 },
            },
            loc: { start: 2524, end: 2538 },
          },
          directives: [],
          loc: { start: 2518, end: 2538 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2541, end: 2545 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2547, end: 2558 },
              },
              loc: { start: 2547, end: 2558 },
            },
            loc: { start: 2547, end: 2559 },
          },
          directives: [],
          loc: { start: 2541, end: 2559 },
        },
      ],
      loc: { start: 2460, end: 2561 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2568, end: 2579 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2584, end: 2589 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2591, end: 2594 },
              },
              loc: { start: 2591, end: 2594 },
            },
            loc: { start: 2591, end: 2595 },
          },
          directives: [],
          loc: { start: 2584, end: 2595 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2598, end: 2604 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2606, end: 2609 },
              },
              loc: { start: 2606, end: 2609 },
            },
            loc: { start: 2606, end: 2610 },
          },
          directives: [],
          loc: { start: 2598, end: 2610 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2613, end: 2621 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2623, end: 2628 },
            },
            loc: { start: 2623, end: 2628 },
          },
          directives: [],
          loc: { start: 2613, end: 2628 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2631, end: 2640 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2642, end: 2647 },
            },
            loc: { start: 2642, end: 2647 },
          },
          directives: [],
          loc: { start: 2631, end: 2647 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2650, end: 2658 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2660, end: 2665 },
            },
            loc: { start: 2660, end: 2665 },
          },
          directives: [],
          loc: { start: 2650, end: 2665 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2668, end: 2674 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2676, end: 2684 },
            },
            loc: { start: 2676, end: 2684 },
          },
          directives: [],
          loc: { start: 2668, end: 2684 },
        },
      ],
      loc: { start: 2563, end: 2686 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2693, end: 2703 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2708, end: 2710 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2712, end: 2714 },
              },
              loc: { start: 2712, end: 2714 },
            },
            loc: { start: 2712, end: 2715 },
          },
          directives: [],
          loc: { start: 2708, end: 2715 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2718, end: 2722 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2724, end: 2728 },
              },
              loc: { start: 2724, end: 2728 },
            },
            loc: { start: 2724, end: 2729 },
          },
          directives: [],
          loc: { start: 2718, end: 2729 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2732, end: 2739 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2741, end: 2748 },
              },
              loc: { start: 2741, end: 2748 },
            },
            loc: { start: 2741, end: 2749 },
          },
          directives: [],
          loc: { start: 2732, end: 2749 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2752, end: 2763 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2765, end: 2776 },
              },
              loc: { start: 2765, end: 2776 },
            },
            loc: { start: 2765, end: 2777 },
          },
          directives: [],
          loc: { start: 2752, end: 2777 },
        },
      ],
      loc: { start: 2688, end: 2779 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2788, end: 2799 },
      },
      directives: [],
      loc: { start: 2781, end: 2799 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2807, end: 2817 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2822, end: 2824 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2826, end: 2828 },
            },
            loc: { start: 2826, end: 2828 },
          },
          directives: [],
          loc: { start: 2822, end: 2828 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2831, end: 2840 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2842, end: 2846 },
              },
              loc: { start: 2842, end: 2846 },
            },
            loc: { start: 2842, end: 2847 },
          },
          directives: [],
          loc: { start: 2831, end: 2847 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2850, end: 2857 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2859, end: 2863 },
              },
              loc: { start: 2859, end: 2863 },
            },
            loc: { start: 2859, end: 2864 },
          },
          directives: [],
          loc: { start: 2850, end: 2864 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2867, end: 2875 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2877, end: 2883 },
              },
              loc: { start: 2877, end: 2883 },
            },
            loc: { start: 2877, end: 2884 },
          },
          directives: [],
          loc: { start: 2867, end: 2884 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2887, end: 2904 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2906, end: 2912 },
            },
            loc: { start: 2906, end: 2912 },
          },
          directives: [],
          loc: { start: 2887, end: 2912 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2915, end: 2929 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2931, end: 2934 },
              },
              loc: { start: 2931, end: 2934 },
            },
            loc: { start: 2931, end: 2935 },
          },
          directives: [],
          loc: { start: 2915, end: 2935 },
        },
      ],
      loc: { start: 2801, end: 2937 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2945, end: 2957 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2962, end: 2966 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2968, end: 2974 },
              },
              loc: { start: 2968, end: 2974 },
            },
            loc: { start: 2968, end: 2975 },
          },
          directives: [],
          loc: { start: 2962, end: 2975 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2978, end: 2985 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2987, end: 2989 },
              },
              loc: { start: 2987, end: 2989 },
            },
            loc: { start: 2987, end: 2990 },
          },
          directives: [],
          loc: { start: 2978, end: 2990 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2993, end: 2997 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 2999, end: 3003 },
              },
              loc: { start: 2999, end: 3003 },
            },
            loc: { start: 2999, end: 3004 },
          },
          directives: [],
          loc: { start: 2993, end: 3004 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 3007, end: 3011 },
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
                  loc: { start: 3014, end: 3029 },
                },
                loc: { start: 3014, end: 3029 },
              },
              loc: { start: 3014, end: 3030 },
            },
            loc: { start: 3013, end: 3031 },
          },
          directives: [],
          loc: { start: 3007, end: 3031 },
        },
      ],
      loc: { start: 2939, end: 3033 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3041, end: 3056 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3061, end: 3067 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3069, end: 3071 },
              },
              loc: { start: 3069, end: 3071 },
            },
            loc: { start: 3069, end: 3072 },
          },
          directives: [],
          loc: { start: 3061, end: 3072 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3075, end: 3086 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3088, end: 3099 },
              },
              loc: { start: 3088, end: 3099 },
            },
            loc: { start: 3088, end: 3100 },
          },
          directives: [],
          loc: { start: 3075, end: 3100 },
        },
      ],
      loc: { start: 3035, end: 3102 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3109, end: 3118 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3123, end: 3125 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3127, end: 3129 },
              },
              loc: { start: 3127, end: 3129 },
            },
            loc: { start: 3127, end: 3130 },
          },
          directives: [],
          loc: { start: 3123, end: 3130 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3133, end: 3138 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3140, end: 3145 },
              },
              loc: { start: 3140, end: 3145 },
            },
            loc: { start: 3140, end: 3146 },
          },
          directives: [],
          loc: { start: 3133, end: 3146 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3149, end: 3154 },
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
                    loc: { start: 3157, end: 3161 },
                  },
                  loc: { start: 3157, end: 3161 },
                },
                loc: { start: 3157, end: 3162 },
              },
              loc: { start: 3156, end: 3163 },
            },
            loc: { start: 3156, end: 3164 },
          },
          directives: [],
          loc: { start: 3149, end: 3164 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3167, end: 3171 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3173, end: 3183 },
            },
            loc: { start: 3173, end: 3183 },
          },
          directives: [],
          loc: { start: 3167, end: 3183 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3186, end: 3201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3203, end: 3207 },
              },
              loc: { start: 3203, end: 3207 },
            },
            loc: { start: 3203, end: 3208 },
          },
          directives: [],
          loc: { start: 3186, end: 3208 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3211, end: 3219 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3221, end: 3226 },
              },
              loc: { start: 3221, end: 3226 },
            },
            loc: { start: 3221, end: 3227 },
          },
          directives: [],
          loc: { start: 3211, end: 3227 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3230, end: 3237 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3239, end: 3247 },
            },
            loc: { start: 3239, end: 3247 },
          },
          directives: [],
          loc: { start: 3230, end: 3247 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3250, end: 3258 },
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
          loc: { start: 3250, end: 3268 },
        },
      ],
      loc: { start: 3104, end: 3270 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3277, end: 3287 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3292, end: 3301 },
          },
          directives: [],
          loc: { start: 3292, end: 3301 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3304, end: 3311 },
          },
          directives: [],
          loc: { start: 3304, end: 3311 },
        },
      ],
      loc: { start: 3272, end: 3313 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3326, end: 3331 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3336, end: 3338 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3340, end: 3344 },
            },
            loc: { start: 3340, end: 3344 },
          },
          directives: [],
          loc: { start: 3336, end: 3344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3347, end: 3352 },
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
                    loc: { start: 3355, end: 3359 },
                  },
                  loc: { start: 3355, end: 3359 },
                },
                loc: { start: 3355, end: 3360 },
              },
              loc: { start: 3354, end: 3361 },
            },
            loc: { start: 3354, end: 3362 },
          },
          directives: [],
          loc: { start: 3347, end: 3362 },
        },
      ],
      loc: { start: 3314, end: 3364 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3378, end: 3386 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3391, end: 3399 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3400, end: 3408 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3410, end: 3416 },
                  },
                  loc: { start: 3410, end: 3416 },
                },
                loc: { start: 3410, end: 3417 },
              },
              directives: [],
              loc: { start: 3400, end: 3417 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3419, end: 3424 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3426, end: 3432 },
                  },
                  loc: { start: 3426, end: 3432 },
                },
                loc: { start: 3426, end: 3433 },
              },
              directives: [],
              loc: { start: 3419, end: 3433 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3435, end: 3443 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3445, end: 3451 },
                },
                loc: { start: 3445, end: 3451 },
              },
              directives: [],
              loc: { start: 3435, end: 3451 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3454, end: 3470 },
              },
              loc: { start: 3454, end: 3470 },
            },
            loc: { start: 3454, end: 3471 },
          },
          directives: [],
          loc: { start: 3391, end: 3471 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3474, end: 3504 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3505, end: 3511 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3513, end: 3519 },
                  },
                  loc: { start: 3513, end: 3519 },
                },
                loc: { start: 3513, end: 3520 },
              },
              directives: [],
              loc: { start: 3505, end: 3520 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3523, end: 3527 },
              },
              loc: { start: 3523, end: 3527 },
            },
            loc: { start: 3523, end: 3528 },
          },
          directives: [],
          loc: { start: 3474, end: 3528 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3531, end: 3546 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3547, end: 3553 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3555, end: 3561 },
                  },
                  loc: { start: 3555, end: 3561 },
                },
                loc: { start: 3555, end: 3562 },
              },
              directives: [],
              loc: { start: 3547, end: 3562 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3564, end: 3568 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3570, end: 3576 },
                  },
                  loc: { start: 3570, end: 3576 },
                },
                loc: { start: 3570, end: 3577 },
              },
              directives: [],
              loc: { start: 3564, end: 3577 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3579, end: 3587 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3589, end: 3593 },
                  },
                  loc: { start: 3589, end: 3593 },
                },
                loc: { start: 3589, end: 3594 },
              },
              directives: [],
              loc: { start: 3579, end: 3594 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3597, end: 3619 },
              },
              loc: { start: 3597, end: 3619 },
            },
            loc: { start: 3597, end: 3620 },
          },
          directives: [],
          loc: { start: 3531, end: 3620 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3623, end: 3650 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3651, end: 3657 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3659, end: 3665 },
                },
                loc: { start: 3659, end: 3665 },
              },
              directives: [],
              loc: { start: 3651, end: 3665 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3668, end: 3672 },
              },
              loc: { start: 3668, end: 3672 },
            },
            loc: { start: 3668, end: 3673 },
          },
          directives: [],
          loc: { start: 3623, end: 3673 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3676, end: 3688 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3689, end: 3697 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3699, end: 3703 },
                  },
                  loc: { start: 3699, end: 3703 },
                },
                loc: { start: 3699, end: 3704 },
              },
              directives: [],
              loc: { start: 3689, end: 3704 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3707, end: 3720 },
              },
              loc: { start: 3707, end: 3720 },
            },
            loc: { start: 3707, end: 3721 },
          },
          directives: [],
          loc: { start: 3676, end: 3721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3724, end: 3737 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3738, end: 3743 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3745, end: 3751 },
                  },
                  loc: { start: 3745, end: 3751 },
                },
                loc: { start: 3745, end: 3752 },
              },
              directives: [],
              loc: { start: 3738, end: 3752 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3754, end: 3762 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3764, end: 3770 },
                  },
                  loc: { start: 3764, end: 3770 },
                },
                loc: { start: 3764, end: 3771 },
              },
              directives: [],
              loc: { start: 3754, end: 3771 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3774, end: 3786 },
              },
              loc: { start: 3774, end: 3786 },
            },
            loc: { start: 3774, end: 3787 },
          },
          directives: [],
          loc: { start: 3724, end: 3787 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3790, end: 3803 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3804, end: 3809 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3811, end: 3817 },
                  },
                  loc: { start: 3811, end: 3817 },
                },
                loc: { start: 3811, end: 3818 },
              },
              directives: [],
              loc: { start: 3804, end: 3818 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3821, end: 3828 },
              },
              loc: { start: 3821, end: 3828 },
            },
            loc: { start: 3821, end: 3829 },
          },
          directives: [],
          loc: { start: 3790, end: 3829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3832, end: 3846 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3847, end: 3858 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3860, end: 3866 },
                  },
                  loc: { start: 3860, end: 3866 },
                },
                loc: { start: 3860, end: 3867 },
              },
              directives: [],
              loc: { start: 3847, end: 3867 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3870, end: 3882 },
              },
              loc: { start: 3870, end: 3882 },
            },
            loc: { start: 3870, end: 3883 },
          },
          directives: [],
          loc: { start: 3832, end: 3883 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3886, end: 3898 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3899, end: 3911 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3913, end: 3919 },
                  },
                  loc: { start: 3913, end: 3919 },
                },
                loc: { start: 3913, end: 3920 },
              },
              directives: [],
              loc: { start: 3899, end: 3920 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3923, end: 3935 },
              },
              loc: { start: 3923, end: 3935 },
            },
            loc: { start: 3923, end: 3936 },
          },
          directives: [],
          loc: { start: 3886, end: 3936 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3939, end: 3955 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3956, end: 3958 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3960, end: 3962 },
                  },
                  loc: { start: 3960, end: 3962 },
                },
                loc: { start: 3960, end: 3963 },
              },
              directives: [],
              loc: { start: 3956, end: 3963 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3965, end: 3969 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3971, end: 3977 },
                  },
                  loc: { start: 3971, end: 3977 },
                },
                loc: { start: 3971, end: 3978 },
              },
              directives: [],
              loc: { start: 3965, end: 3978 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3981, end: 3991 },
              },
              loc: { start: 3981, end: 3991 },
            },
            loc: { start: 3981, end: 3992 },
          },
          directives: [],
          loc: { start: 3939, end: 3992 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 3995, end: 4011 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 4012, end: 4014 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 4016, end: 4018 },
                  },
                  loc: { start: 4016, end: 4018 },
                },
                loc: { start: 4016, end: 4019 },
              },
              directives: [],
              loc: { start: 4012, end: 4019 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4022, end: 4032 },
              },
              loc: { start: 4022, end: 4032 },
            },
            loc: { start: 4022, end: 4033 },
          },
          directives: [],
          loc: { start: 3995, end: 4033 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4036, end: 4049 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4050, end: 4055 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4057, end: 4069 },
                  },
                  loc: { start: 4057, end: 4069 },
                },
                loc: { start: 4057, end: 4070 },
              },
              directives: [],
              loc: { start: 4050, end: 4070 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4073, end: 4077 },
              },
              loc: { start: 4073, end: 4077 },
            },
            loc: { start: 4073, end: 4078 },
          },
          directives: [],
          loc: { start: 4036, end: 4078 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4081, end: 4101 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4103, end: 4107 },
              },
              loc: { start: 4103, end: 4107 },
            },
            loc: { start: 4103, end: 4108 },
          },
          directives: [],
          loc: { start: 4081, end: 4108 },
        },
      ],
      loc: { start: 3366, end: 4110 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4124, end: 4133 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4138, end: 4142 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4144, end: 4148 },
              },
              loc: { start: 4144, end: 4148 },
            },
            loc: { start: 4144, end: 4149 },
          },
          directives: [],
          loc: { start: 4138, end: 4149 },
        },
      ],
      loc: { start: 4112, end: 4151 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4158, end: 4170 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4175, end: 4180 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4182, end: 4185 },
              },
              loc: { start: 4182, end: 4185 },
            },
            loc: { start: 4182, end: 4186 },
          },
          directives: [],
          loc: { start: 4175, end: 4186 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4189, end: 4201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4203, end: 4209 },
              },
              loc: { start: 4203, end: 4209 },
            },
            loc: { start: 4203, end: 4210 },
          },
          directives: [],
          loc: { start: 4189, end: 4210 },
        },
      ],
      loc: { start: 4153, end: 4212 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4219, end: 4235 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4240, end: 4244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4246, end: 4250 },
              },
              loc: { start: 4246, end: 4250 },
            },
            loc: { start: 4246, end: 4251 },
          },
          directives: [],
          loc: { start: 4240, end: 4251 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4254, end: 4259 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4261, end: 4267 },
              },
              loc: { start: 4261, end: 4267 },
            },
            loc: { start: 4261, end: 4268 },
          },
          directives: [],
          loc: { start: 4254, end: 4268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4271, end: 4283 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4285, end: 4291 },
              },
              loc: { start: 4285, end: 4291 },
            },
            loc: { start: 4285, end: 4292 },
          },
          directives: [],
          loc: { start: 4271, end: 4292 },
        },
      ],
      loc: { start: 4214, end: 4294 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4301, end: 4314 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4319, end: 4331 },
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
                    loc: { start: 4334, end: 4337 },
                  },
                  loc: { start: 4334, end: 4337 },
                },
                loc: { start: 4334, end: 4338 },
              },
              loc: { start: 4333, end: 4339 },
            },
            loc: { start: 4333, end: 4340 },
          },
          directives: [],
          loc: { start: 4319, end: 4340 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4343, end: 4348 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4350, end: 4353 },
              },
              loc: { start: 4350, end: 4353 },
            },
            loc: { start: 4350, end: 4354 },
          },
          directives: [],
          loc: { start: 4343, end: 4354 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4357, end: 4369 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4371, end: 4377 },
              },
              loc: { start: 4371, end: 4377 },
            },
            loc: { start: 4371, end: 4378 },
          },
          directives: [],
          loc: { start: 4357, end: 4378 },
        },
      ],
      loc: { start: 4296, end: 4380 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4387, end: 4409 },
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
                value: "String",
                loc: { start: 4421, end: 4427 },
              },
              loc: { start: 4421, end: 4427 },
            },
            loc: { start: 4421, end: 4428 },
          },
          directives: [],
          loc: { start: 4414, end: 4428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4431, end: 4437 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4439, end: 4449 },
              },
              loc: { start: 4439, end: 4449 },
            },
            loc: { start: 4439, end: 4450 },
          },
          directives: [],
          loc: { start: 4431, end: 4450 },
        },
      ],
      loc: { start: 4382, end: 4452 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4459, end: 4463 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4468, end: 4470 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4472, end: 4474 },
              },
              loc: { start: 4472, end: 4474 },
            },
            loc: { start: 4472, end: 4475 },
          },
          directives: [],
          loc: { start: 4468, end: 4475 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4478, end: 4482 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4484, end: 4490 },
              },
              loc: { start: 4484, end: 4490 },
            },
            loc: { start: 4484, end: 4491 },
          },
          directives: [],
          loc: { start: 4478, end: 4491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4494, end: 4505 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4507, end: 4513 },
              },
              loc: { start: 4507, end: 4513 },
            },
            loc: { start: 4507, end: 4514 },
          },
          directives: [],
          loc: { start: 4494, end: 4514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4517, end: 4522 },
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
          loc: { start: 4517, end: 4531 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4534, end: 4540 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4542, end: 4548 },
              },
              loc: { start: 4542, end: 4548 },
            },
            loc: { start: 4542, end: 4549 },
          },
          directives: [],
          loc: { start: 4534, end: 4549 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4552, end: 4561 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4563, end: 4569 },
            },
            loc: { start: 4563, end: 4569 },
          },
          directives: [],
          loc: { start: 4552, end: 4569 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4572, end: 4579 },
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
                    loc: { start: 4582, end: 4592 },
                  },
                  loc: { start: 4582, end: 4592 },
                },
                loc: { start: 4582, end: 4593 },
              },
              loc: { start: 4581, end: 4594 },
            },
            loc: { start: 4581, end: 4595 },
          },
          directives: [],
          loc: { start: 4572, end: 4595 },
        },
      ],
      loc: { start: 4454, end: 4597 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4605, end: 4617 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4622, end: 4624 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4626, end: 4628 },
            },
            loc: { start: 4626, end: 4628 },
          },
          directives: [],
          loc: { start: 4622, end: 4628 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4631, end: 4635 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4637, end: 4643 },
              },
              loc: { start: 4637, end: 4643 },
            },
            loc: { start: 4637, end: 4644 },
          },
          directives: [],
          loc: { start: 4631, end: 4644 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4647, end: 4658 },
          },
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
          loc: { start: 4647, end: 4667 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4670, end: 4675 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4677, end: 4683 },
              },
              loc: { start: 4677, end: 4683 },
            },
            loc: { start: 4677, end: 4684 },
          },
          directives: [],
          loc: { start: 4670, end: 4684 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4687, end: 4695 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4697, end: 4703 },
            },
            loc: { start: 4697, end: 4703 },
          },
          directives: [],
          loc: { start: 4687, end: 4703 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4706, end: 4712 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4714, end: 4718 },
            },
            loc: { start: 4714, end: 4718 },
          },
          directives: [],
          loc: { start: 4706, end: 4718 },
        },
      ],
      loc: { start: 4599, end: 4720 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4727, end: 4737 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4742, end: 4744 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4746, end: 4748 },
              },
              loc: { start: 4746, end: 4748 },
            },
            loc: { start: 4746, end: 4749 },
          },
          directives: [],
          loc: { start: 4742, end: 4749 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4752, end: 4756 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4758, end: 4764 },
              },
              loc: { start: 4758, end: 4764 },
            },
            loc: { start: 4758, end: 4765 },
          },
          directives: [],
          loc: { start: 4752, end: 4765 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4768, end: 4777 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4779, end: 4787 },
            },
            loc: { start: 4779, end: 4787 },
          },
          directives: [],
          loc: { start: 4768, end: 4787 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4790, end: 4800 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4802, end: 4810 },
            },
            loc: { start: 4802, end: 4810 },
          },
          directives: [],
          loc: { start: 4790, end: 4810 },
        },
      ],
      loc: { start: 4722, end: 4812 },
    },
  ],
  loc: { start: 0, end: 4813 },
} as unknown as DocumentNode;
