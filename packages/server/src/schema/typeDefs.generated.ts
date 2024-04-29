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
      ],
      loc: { start: 1648, end: 2037 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Party", loc: { start: 2044, end: 2049 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2054, end: 2056 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2058, end: 2060 },
              },
              loc: { start: 2058, end: 2060 },
            },
            loc: { start: 2058, end: 2061 },
          },
          directives: [],
          loc: { start: 2054, end: 2061 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2064, end: 2073 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2075, end: 2079 },
              },
              loc: { start: 2075, end: 2079 },
            },
            loc: { start: 2075, end: 2080 },
          },
          directives: [],
          loc: { start: 2064, end: 2080 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2083, end: 2090 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2092, end: 2096 },
              },
              loc: { start: 2092, end: 2096 },
            },
            loc: { start: 2092, end: 2097 },
          },
          directives: [],
          loc: { start: 2083, end: 2097 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2100, end: 2108 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2110, end: 2116 },
              },
              loc: { start: 2110, end: 2116 },
            },
            loc: { start: 2110, end: 2117 },
          },
          directives: [],
          loc: { start: 2100, end: 2117 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2120, end: 2137 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2139, end: 2145 },
            },
            loc: { start: 2139, end: 2145 },
          },
          directives: [],
          loc: { start: 2120, end: 2145 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2148, end: 2162 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2164, end: 2167 },
              },
              loc: { start: 2164, end: 2167 },
            },
            loc: { start: 2164, end: 2168 },
          },
          directives: [],
          loc: { start: 2148, end: 2168 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rentalCosts",
            loc: { start: 2171, end: 2182 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2184, end: 2189 },
              },
              loc: { start: 2184, end: 2189 },
            },
            loc: { start: 2184, end: 2190 },
          },
          directives: [],
          loc: { start: 2171, end: 2190 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attendings",
            loc: { start: 2193, end: 2203 },
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
                    loc: { start: 2206, end: 2215 },
                  },
                  loc: { start: 2206, end: 2215 },
                },
                loc: { start: 2206, end: 2216 },
              },
              loc: { start: 2205, end: 2217 },
            },
            loc: { start: 2205, end: 2218 },
          },
          directives: [],
          loc: { start: 2193, end: 2218 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pictures",
            loc: { start: 2221, end: 2229 },
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
                    loc: { start: 2232, end: 2239 },
                  },
                  loc: { start: 2232, end: 2239 },
                },
                loc: { start: 2232, end: 2240 },
              },
              loc: { start: 2231, end: 2241 },
            },
            loc: { start: 2231, end: 2242 },
          },
          directives: [],
          loc: { start: 2221, end: 2242 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2245, end: 2259 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2261, end: 2264 },
              },
              loc: { start: 2261, end: 2264 },
            },
            loc: { start: 2261, end: 2265 },
          },
          directives: [],
          loc: { start: 2245, end: 2265 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2268, end: 2288 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2290, end: 2294 },
            },
            loc: { start: 2290, end: 2294 },
          },
          directives: [],
          loc: { start: 2268, end: 2294 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2297, end: 2303 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2305, end: 2309 },
            },
            loc: { start: 2305, end: 2309 },
          },
          directives: [],
          loc: { start: 2297, end: 2309 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2312, end: 2327 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2329, end: 2334 },
            },
            loc: { start: 2329, end: 2334 },
          },
          directives: [],
          loc: { start: 2312, end: 2334 },
        },
      ],
      loc: { start: 2039, end: 2336 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2343, end: 2350 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2355, end: 2357 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2359, end: 2361 },
              },
              loc: { start: 2359, end: 2361 },
            },
            loc: { start: 2359, end: 2362 },
          },
          directives: [],
          loc: { start: 2355, end: 2362 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2365, end: 2368 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2370, end: 2376 },
              },
              loc: { start: 2370, end: 2376 },
            },
            loc: { start: 2370, end: 2377 },
          },
          directives: [],
          loc: { start: 2365, end: 2377 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2380, end: 2385 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2387, end: 2392 },
              },
              loc: { start: 2387, end: 2392 },
            },
            loc: { start: 2387, end: 2393 },
          },
          directives: [],
          loc: { start: 2380, end: 2393 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2396, end: 2400 },
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
                    loc: { start: 2403, end: 2413 },
                  },
                  loc: { start: 2403, end: 2413 },
                },
                loc: { start: 2403, end: 2414 },
              },
              loc: { start: 2402, end: 2415 },
            },
            loc: { start: 2402, end: 2416 },
          },
          directives: [],
          loc: { start: 2396, end: 2416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2419, end: 2423 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2425, end: 2436 },
              },
              loc: { start: 2425, end: 2436 },
            },
            loc: { start: 2425, end: 2437 },
          },
          directives: [],
          loc: { start: 2419, end: 2437 },
        },
      ],
      loc: { start: 2338, end: 2439 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2446, end: 2457 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2462, end: 2467 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2469, end: 2472 },
              },
              loc: { start: 2469, end: 2472 },
            },
            loc: { start: 2469, end: 2473 },
          },
          directives: [],
          loc: { start: 2462, end: 2473 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2476, end: 2482 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2484, end: 2487 },
              },
              loc: { start: 2484, end: 2487 },
            },
            loc: { start: 2484, end: 2488 },
          },
          directives: [],
          loc: { start: 2476, end: 2488 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2491, end: 2499 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2501, end: 2506 },
            },
            loc: { start: 2501, end: 2506 },
          },
          directives: [],
          loc: { start: 2491, end: 2506 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2509, end: 2518 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2520, end: 2525 },
            },
            loc: { start: 2520, end: 2525 },
          },
          directives: [],
          loc: { start: 2509, end: 2525 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2528, end: 2536 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2538, end: 2543 },
            },
            loc: { start: 2538, end: 2543 },
          },
          directives: [],
          loc: { start: 2528, end: 2543 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2546, end: 2552 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2554, end: 2562 },
            },
            loc: { start: 2554, end: 2562 },
          },
          directives: [],
          loc: { start: 2546, end: 2562 },
        },
      ],
      loc: { start: 2441, end: 2564 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2571, end: 2581 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2586, end: 2588 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2590, end: 2592 },
              },
              loc: { start: 2590, end: 2592 },
            },
            loc: { start: 2590, end: 2593 },
          },
          directives: [],
          loc: { start: 2586, end: 2593 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2596, end: 2600 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2602, end: 2606 },
              },
              loc: { start: 2602, end: 2606 },
            },
            loc: { start: 2602, end: 2607 },
          },
          directives: [],
          loc: { start: 2596, end: 2607 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2610, end: 2617 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2619, end: 2626 },
              },
              loc: { start: 2619, end: 2626 },
            },
            loc: { start: 2619, end: 2627 },
          },
          directives: [],
          loc: { start: 2610, end: 2627 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2630, end: 2641 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2643, end: 2654 },
              },
              loc: { start: 2643, end: 2654 },
            },
            loc: { start: 2643, end: 2655 },
          },
          directives: [],
          loc: { start: 2630, end: 2655 },
        },
      ],
      loc: { start: 2566, end: 2657 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2666, end: 2677 },
      },
      directives: [],
      loc: { start: 2659, end: 2677 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2685, end: 2695 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2700, end: 2702 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2704, end: 2706 },
            },
            loc: { start: 2704, end: 2706 },
          },
          directives: [],
          loc: { start: 2700, end: 2706 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2709, end: 2718 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2720, end: 2724 },
              },
              loc: { start: 2720, end: 2724 },
            },
            loc: { start: 2720, end: 2725 },
          },
          directives: [],
          loc: { start: 2709, end: 2725 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2728, end: 2735 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2737, end: 2741 },
              },
              loc: { start: 2737, end: 2741 },
            },
            loc: { start: 2737, end: 2742 },
          },
          directives: [],
          loc: { start: 2728, end: 2742 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2745, end: 2753 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2755, end: 2761 },
              },
              loc: { start: 2755, end: 2761 },
            },
            loc: { start: 2755, end: 2762 },
          },
          directives: [],
          loc: { start: 2745, end: 2762 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2765, end: 2782 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2784, end: 2790 },
            },
            loc: { start: 2784, end: 2790 },
          },
          directives: [],
          loc: { start: 2765, end: 2790 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2793, end: 2807 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2809, end: 2812 },
              },
              loc: { start: 2809, end: 2812 },
            },
            loc: { start: 2809, end: 2813 },
          },
          directives: [],
          loc: { start: 2793, end: 2813 },
        },
      ],
      loc: { start: 2679, end: 2815 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2823, end: 2835 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2840, end: 2844 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2846, end: 2852 },
              },
              loc: { start: 2846, end: 2852 },
            },
            loc: { start: 2846, end: 2853 },
          },
          directives: [],
          loc: { start: 2840, end: 2853 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2856, end: 2863 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2865, end: 2867 },
              },
              loc: { start: 2865, end: 2867 },
            },
            loc: { start: 2865, end: 2868 },
          },
          directives: [],
          loc: { start: 2856, end: 2868 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2871, end: 2875 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 2877, end: 2881 },
              },
              loc: { start: 2877, end: 2881 },
            },
            loc: { start: 2877, end: 2882 },
          },
          directives: [],
          loc: { start: 2871, end: 2882 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2885, end: 2889 },
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
                  loc: { start: 2892, end: 2907 },
                },
                loc: { start: 2892, end: 2907 },
              },
              loc: { start: 2892, end: 2908 },
            },
            loc: { start: 2891, end: 2909 },
          },
          directives: [],
          loc: { start: 2885, end: 2909 },
        },
      ],
      loc: { start: 2817, end: 2911 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 2919, end: 2934 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2939, end: 2945 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2947, end: 2949 },
              },
              loc: { start: 2947, end: 2949 },
            },
            loc: { start: 2947, end: 2950 },
          },
          directives: [],
          loc: { start: 2939, end: 2950 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2953, end: 2964 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2966, end: 2977 },
              },
              loc: { start: 2966, end: 2977 },
            },
            loc: { start: 2966, end: 2978 },
          },
          directives: [],
          loc: { start: 2953, end: 2978 },
        },
      ],
      loc: { start: 2913, end: 2980 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 2987, end: 2996 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3001, end: 3003 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3005, end: 3007 },
              },
              loc: { start: 3005, end: 3007 },
            },
            loc: { start: 3005, end: 3008 },
          },
          directives: [],
          loc: { start: 3001, end: 3008 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3011, end: 3016 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3018, end: 3023 },
              },
              loc: { start: 3018, end: 3023 },
            },
            loc: { start: 3018, end: 3024 },
          },
          directives: [],
          loc: { start: 3011, end: 3024 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3027, end: 3032 },
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
                    loc: { start: 3035, end: 3039 },
                  },
                  loc: { start: 3035, end: 3039 },
                },
                loc: { start: 3035, end: 3040 },
              },
              loc: { start: 3034, end: 3041 },
            },
            loc: { start: 3034, end: 3042 },
          },
          directives: [],
          loc: { start: 3027, end: 3042 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3045, end: 3049 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3051, end: 3061 },
            },
            loc: { start: 3051, end: 3061 },
          },
          directives: [],
          loc: { start: 3045, end: 3061 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3064, end: 3079 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3081, end: 3085 },
              },
              loc: { start: 3081, end: 3085 },
            },
            loc: { start: 3081, end: 3086 },
          },
          directives: [],
          loc: { start: 3064, end: 3086 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3089, end: 3097 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3099, end: 3104 },
              },
              loc: { start: 3099, end: 3104 },
            },
            loc: { start: 3099, end: 3105 },
          },
          directives: [],
          loc: { start: 3089, end: 3105 },
        },
      ],
      loc: { start: 2982, end: 3107 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3114, end: 3124 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3129, end: 3138 },
          },
          directives: [],
          loc: { start: 3129, end: 3138 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3141, end: 3148 },
          },
          directives: [],
          loc: { start: 3141, end: 3148 },
        },
      ],
      loc: { start: 3109, end: 3150 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3163, end: 3168 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3173, end: 3175 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3177, end: 3181 },
            },
            loc: { start: 3177, end: 3181 },
          },
          directives: [],
          loc: { start: 3173, end: 3181 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3184, end: 3189 },
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
                    loc: { start: 3192, end: 3196 },
                  },
                  loc: { start: 3192, end: 3196 },
                },
                loc: { start: 3192, end: 3197 },
              },
              loc: { start: 3191, end: 3198 },
            },
            loc: { start: 3191, end: 3199 },
          },
          directives: [],
          loc: { start: 3184, end: 3199 },
        },
      ],
      loc: { start: 3151, end: 3201 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3215, end: 3223 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3228, end: 3236 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3237, end: 3245 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3247, end: 3253 },
                  },
                  loc: { start: 3247, end: 3253 },
                },
                loc: { start: 3247, end: 3254 },
              },
              directives: [],
              loc: { start: 3237, end: 3254 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3256, end: 3261 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3263, end: 3269 },
                  },
                  loc: { start: 3263, end: 3269 },
                },
                loc: { start: 3263, end: 3270 },
              },
              directives: [],
              loc: { start: 3256, end: 3270 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3272, end: 3280 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3282, end: 3288 },
                },
                loc: { start: 3282, end: 3288 },
              },
              directives: [],
              loc: { start: 3272, end: 3288 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3291, end: 3307 },
              },
              loc: { start: 3291, end: 3307 },
            },
            loc: { start: 3291, end: 3308 },
          },
          directives: [],
          loc: { start: 3228, end: 3308 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3311, end: 3341 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3342, end: 3348 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3350, end: 3356 },
                  },
                  loc: { start: 3350, end: 3356 },
                },
                loc: { start: 3350, end: 3357 },
              },
              directives: [],
              loc: { start: 3342, end: 3357 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3360, end: 3364 },
              },
              loc: { start: 3360, end: 3364 },
            },
            loc: { start: 3360, end: 3365 },
          },
          directives: [],
          loc: { start: 3311, end: 3365 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3368, end: 3383 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3384, end: 3390 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3392, end: 3398 },
                  },
                  loc: { start: 3392, end: 3398 },
                },
                loc: { start: 3392, end: 3399 },
              },
              directives: [],
              loc: { start: 3384, end: 3399 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3401, end: 3405 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3407, end: 3413 },
                  },
                  loc: { start: 3407, end: 3413 },
                },
                loc: { start: 3407, end: 3414 },
              },
              directives: [],
              loc: { start: 3401, end: 3414 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3416, end: 3424 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3426, end: 3430 },
                  },
                  loc: { start: 3426, end: 3430 },
                },
                loc: { start: 3426, end: 3431 },
              },
              directives: [],
              loc: { start: 3416, end: 3431 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3434, end: 3456 },
              },
              loc: { start: 3434, end: 3456 },
            },
            loc: { start: 3434, end: 3457 },
          },
          directives: [],
          loc: { start: 3368, end: 3457 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3460, end: 3487 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3488, end: 3494 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3496, end: 3502 },
                },
                loc: { start: 3496, end: 3502 },
              },
              directives: [],
              loc: { start: 3488, end: 3502 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3505, end: 3509 },
              },
              loc: { start: 3505, end: 3509 },
            },
            loc: { start: 3505, end: 3510 },
          },
          directives: [],
          loc: { start: 3460, end: 3510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3513, end: 3525 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3526, end: 3534 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3536, end: 3540 },
                  },
                  loc: { start: 3536, end: 3540 },
                },
                loc: { start: 3536, end: 3541 },
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
                value: "LoginResponse",
                loc: { start: 3544, end: 3557 },
              },
              loc: { start: 3544, end: 3557 },
            },
            loc: { start: 3544, end: 3558 },
          },
          directives: [],
          loc: { start: 3513, end: 3558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3561, end: 3574 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3575, end: 3580 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3582, end: 3588 },
                  },
                  loc: { start: 3582, end: 3588 },
                },
                loc: { start: 3582, end: 3589 },
              },
              directives: [],
              loc: { start: 3575, end: 3589 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3591, end: 3599 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3601, end: 3607 },
                  },
                  loc: { start: 3601, end: 3607 },
                },
                loc: { start: 3601, end: 3608 },
              },
              directives: [],
              loc: { start: 3591, end: 3608 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3611, end: 3623 },
              },
              loc: { start: 3611, end: 3623 },
            },
            loc: { start: 3611, end: 3624 },
          },
          directives: [],
          loc: { start: 3561, end: 3624 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3627, end: 3640 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3641, end: 3646 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3648, end: 3654 },
                  },
                  loc: { start: 3648, end: 3654 },
                },
                loc: { start: 3648, end: 3655 },
              },
              directives: [],
              loc: { start: 3641, end: 3655 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3658, end: 3665 },
              },
              loc: { start: 3658, end: 3665 },
            },
            loc: { start: 3658, end: 3666 },
          },
          directives: [],
          loc: { start: 3627, end: 3666 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3669, end: 3683 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3684, end: 3695 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3697, end: 3703 },
                  },
                  loc: { start: 3697, end: 3703 },
                },
                loc: { start: 3697, end: 3704 },
              },
              directives: [],
              loc: { start: 3684, end: 3704 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3707, end: 3719 },
              },
              loc: { start: 3707, end: 3719 },
            },
            loc: { start: 3707, end: 3720 },
          },
          directives: [],
          loc: { start: 3669, end: 3720 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3723, end: 3735 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3736, end: 3748 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3750, end: 3756 },
                  },
                  loc: { start: 3750, end: 3756 },
                },
                loc: { start: 3750, end: 3757 },
              },
              directives: [],
              loc: { start: 3736, end: 3757 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3760, end: 3772 },
              },
              loc: { start: 3760, end: 3772 },
            },
            loc: { start: 3760, end: 3773 },
          },
          directives: [],
          loc: { start: 3723, end: 3773 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3776, end: 3792 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3793, end: 3795 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3797, end: 3799 },
                  },
                  loc: { start: 3797, end: 3799 },
                },
                loc: { start: 3797, end: 3800 },
              },
              directives: [],
              loc: { start: 3793, end: 3800 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3802, end: 3806 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3808, end: 3814 },
                  },
                  loc: { start: 3808, end: 3814 },
                },
                loc: { start: 3808, end: 3815 },
              },
              directives: [],
              loc: { start: 3802, end: 3815 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3818, end: 3828 },
              },
              loc: { start: 3818, end: 3828 },
            },
            loc: { start: 3818, end: 3829 },
          },
          directives: [],
          loc: { start: 3776, end: 3829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 3832, end: 3848 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3849, end: 3851 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3853, end: 3855 },
                  },
                  loc: { start: 3853, end: 3855 },
                },
                loc: { start: 3853, end: 3856 },
              },
              directives: [],
              loc: { start: 3849, end: 3856 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3859, end: 3869 },
              },
              loc: { start: 3859, end: 3869 },
            },
            loc: { start: 3859, end: 3870 },
          },
          directives: [],
          loc: { start: 3832, end: 3870 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 3873, end: 3886 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3887, end: 3892 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 3894, end: 3906 },
                  },
                  loc: { start: 3894, end: 3906 },
                },
                loc: { start: 3894, end: 3907 },
              },
              directives: [],
              loc: { start: 3887, end: 3907 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3910, end: 3914 },
              },
              loc: { start: 3910, end: 3914 },
            },
            loc: { start: 3910, end: 3915 },
          },
          directives: [],
          loc: { start: 3873, end: 3915 },
        },
      ],
      loc: { start: 3203, end: 3917 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3931, end: 3940 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3945, end: 3949 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3951, end: 3955 },
              },
              loc: { start: 3951, end: 3955 },
            },
            loc: { start: 3951, end: 3956 },
          },
          directives: [],
          loc: { start: 3945, end: 3956 },
        },
      ],
      loc: { start: 3919, end: 3958 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 3965, end: 3977 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3982, end: 3987 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 3989, end: 3992 },
              },
              loc: { start: 3989, end: 3992 },
            },
            loc: { start: 3989, end: 3993 },
          },
          directives: [],
          loc: { start: 3982, end: 3993 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 3996, end: 4008 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4010, end: 4016 },
              },
              loc: { start: 4010, end: 4016 },
            },
            loc: { start: 4010, end: 4017 },
          },
          directives: [],
          loc: { start: 3996, end: 4017 },
        },
      ],
      loc: { start: 3960, end: 4019 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4026, end: 4042 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4047, end: 4051 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4053, end: 4057 },
              },
              loc: { start: 4053, end: 4057 },
            },
            loc: { start: 4053, end: 4058 },
          },
          directives: [],
          loc: { start: 4047, end: 4058 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4061, end: 4066 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4068, end: 4074 },
              },
              loc: { start: 4068, end: 4074 },
            },
            loc: { start: 4068, end: 4075 },
          },
          directives: [],
          loc: { start: 4061, end: 4075 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4078, end: 4090 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4092, end: 4098 },
              },
              loc: { start: 4092, end: 4098 },
            },
            loc: { start: 4092, end: 4099 },
          },
          directives: [],
          loc: { start: 4078, end: 4099 },
        },
      ],
      loc: { start: 4021, end: 4101 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4108, end: 4121 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4126, end: 4138 },
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
                    loc: { start: 4141, end: 4144 },
                  },
                  loc: { start: 4141, end: 4144 },
                },
                loc: { start: 4141, end: 4145 },
              },
              loc: { start: 4140, end: 4146 },
            },
            loc: { start: 4140, end: 4147 },
          },
          directives: [],
          loc: { start: 4126, end: 4147 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4150, end: 4155 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4157, end: 4160 },
              },
              loc: { start: 4157, end: 4160 },
            },
            loc: { start: 4157, end: 4161 },
          },
          directives: [],
          loc: { start: 4150, end: 4161 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4164, end: 4176 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4178, end: 4184 },
              },
              loc: { start: 4178, end: 4184 },
            },
            loc: { start: 4178, end: 4185 },
          },
          directives: [],
          loc: { start: 4164, end: 4185 },
        },
      ],
      loc: { start: 4103, end: 4187 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4194, end: 4216 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4221, end: 4226 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4228, end: 4234 },
              },
              loc: { start: 4228, end: 4234 },
            },
            loc: { start: 4228, end: 4235 },
          },
          directives: [],
          loc: { start: 4221, end: 4235 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4238, end: 4244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4246, end: 4256 },
              },
              loc: { start: 4246, end: 4256 },
            },
            loc: { start: 4246, end: 4257 },
          },
          directives: [],
          loc: { start: 4238, end: 4257 },
        },
      ],
      loc: { start: 4189, end: 4259 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4266, end: 4270 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4275, end: 4277 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4279, end: 4281 },
              },
              loc: { start: 4279, end: 4281 },
            },
            loc: { start: 4279, end: 4282 },
          },
          directives: [],
          loc: { start: 4275, end: 4282 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4285, end: 4289 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4291, end: 4297 },
              },
              loc: { start: 4291, end: 4297 },
            },
            loc: { start: 4291, end: 4298 },
          },
          directives: [],
          loc: { start: 4285, end: 4298 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4301, end: 4312 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4314, end: 4320 },
              },
              loc: { start: 4314, end: 4320 },
            },
            loc: { start: 4314, end: 4321 },
          },
          directives: [],
          loc: { start: 4301, end: 4321 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4324, end: 4329 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4331, end: 4337 },
              },
              loc: { start: 4331, end: 4337 },
            },
            loc: { start: 4331, end: 4338 },
          },
          directives: [],
          loc: { start: 4324, end: 4338 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4341, end: 4347 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4349, end: 4355 },
              },
              loc: { start: 4349, end: 4355 },
            },
            loc: { start: 4349, end: 4356 },
          },
          directives: [],
          loc: { start: 4341, end: 4356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4359, end: 4368 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4370, end: 4376 },
            },
            loc: { start: 4370, end: 4376 },
          },
          directives: [],
          loc: { start: 4359, end: 4376 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4379, end: 4386 },
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
                    loc: { start: 4389, end: 4399 },
                  },
                  loc: { start: 4389, end: 4399 },
                },
                loc: { start: 4389, end: 4400 },
              },
              loc: { start: 4388, end: 4401 },
            },
            loc: { start: 4388, end: 4402 },
          },
          directives: [],
          loc: { start: 4379, end: 4402 },
        },
      ],
      loc: { start: 4261, end: 4404 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4412, end: 4424 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4429, end: 4431 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4433, end: 4435 },
            },
            loc: { start: 4433, end: 4435 },
          },
          directives: [],
          loc: { start: 4429, end: 4435 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4438, end: 4442 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4444, end: 4450 },
              },
              loc: { start: 4444, end: 4450 },
            },
            loc: { start: 4444, end: 4451 },
          },
          directives: [],
          loc: { start: 4438, end: 4451 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4454, end: 4465 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4467, end: 4473 },
              },
              loc: { start: 4467, end: 4473 },
            },
            loc: { start: 4467, end: 4474 },
          },
          directives: [],
          loc: { start: 4454, end: 4474 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4477, end: 4482 },
          },
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
          loc: { start: 4477, end: 4491 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4494, end: 4500 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4502, end: 4506 },
            },
            loc: { start: 4502, end: 4506 },
          },
          directives: [],
          loc: { start: 4494, end: 4506 },
        },
      ],
      loc: { start: 4406, end: 4508 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4515, end: 4525 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4530, end: 4532 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4534, end: 4536 },
              },
              loc: { start: 4534, end: 4536 },
            },
            loc: { start: 4534, end: 4537 },
          },
          directives: [],
          loc: { start: 4530, end: 4537 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4540, end: 4544 },
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
          loc: { start: 4540, end: 4553 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4556, end: 4565 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4567, end: 4575 },
            },
            loc: { start: 4567, end: 4575 },
          },
          directives: [],
          loc: { start: 4556, end: 4575 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4578, end: 4588 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4590, end: 4598 },
            },
            loc: { start: 4590, end: 4598 },
          },
          directives: [],
          loc: { start: 4578, end: 4598 },
        },
      ],
      loc: { start: 4510, end: 4600 },
    },
  ],
  loc: { start: 0, end: 4601 },
} as unknown as DocumentNode;
