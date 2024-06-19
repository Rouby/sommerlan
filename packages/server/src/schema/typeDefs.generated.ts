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
            value: "pictures",
            loc: { start: 2290, end: 2298 },
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
                    loc: { start: 2301, end: 2308 },
                  },
                  loc: { start: 2301, end: 2308 },
                },
                loc: { start: 2301, end: 2309 },
              },
              loc: { start: 2300, end: 2310 },
            },
            loc: { start: 2300, end: 2311 },
          },
          directives: [],
          loc: { start: 2290, end: 2311 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "seatsAvailable",
            loc: { start: 2314, end: 2328 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2330, end: 2333 },
              },
              loc: { start: 2330, end: 2333 },
            },
            loc: { start: 2330, end: 2334 },
          },
          directives: [],
          loc: { start: 2314, end: 2334 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registrationDeadline",
            loc: { start: 2337, end: 2357 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2359, end: 2363 },
            },
            loc: { start: 2359, end: 2363 },
          },
          directives: [],
          loc: { start: 2337, end: 2363 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "payday",
            loc: { start: 2366, end: 2372 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Date",
              loc: { start: 2374, end: 2378 },
            },
            loc: { start: 2374, end: 2378 },
          },
          directives: [],
          loc: { start: 2366, end: 2378 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "finalCostPerDay",
            loc: { start: 2381, end: 2396 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2398, end: 2403 },
            },
            loc: { start: 2398, end: 2403 },
          },
          directives: [],
          loc: { start: 2381, end: 2403 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2406, end: 2414 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2416, end: 2421 },
            },
            loc: { start: 2416, end: 2421 },
          },
          directives: [],
          loc: { start: 2406, end: 2421 },
        },
      ],
      loc: { start: 2108, end: 2423 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2430, end: 2437 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2442, end: 2444 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2446, end: 2448 },
              },
              loc: { start: 2446, end: 2448 },
            },
            loc: { start: 2446, end: 2449 },
          },
          directives: [],
          loc: { start: 2442, end: 2449 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2452, end: 2455 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2457, end: 2463 },
              },
              loc: { start: 2457, end: 2463 },
            },
            loc: { start: 2457, end: 2464 },
          },
          directives: [],
          loc: { start: 2452, end: 2464 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2467, end: 2472 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2474, end: 2479 },
              },
              loc: { start: 2474, end: 2479 },
            },
            loc: { start: 2474, end: 2480 },
          },
          directives: [],
          loc: { start: 2467, end: 2480 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2483, end: 2487 },
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
                    loc: { start: 2490, end: 2500 },
                  },
                  loc: { start: 2490, end: 2500 },
                },
                loc: { start: 2490, end: 2501 },
              },
              loc: { start: 2489, end: 2502 },
            },
            loc: { start: 2489, end: 2503 },
          },
          directives: [],
          loc: { start: 2483, end: 2503 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2506, end: 2510 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2512, end: 2523 },
              },
              loc: { start: 2512, end: 2523 },
            },
            loc: { start: 2512, end: 2524 },
          },
          directives: [],
          loc: { start: 2506, end: 2524 },
        },
      ],
      loc: { start: 2425, end: 2526 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2533, end: 2544 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2549, end: 2554 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2556, end: 2559 },
              },
              loc: { start: 2556, end: 2559 },
            },
            loc: { start: 2556, end: 2560 },
          },
          directives: [],
          loc: { start: 2549, end: 2560 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2563, end: 2569 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2571, end: 2574 },
              },
              loc: { start: 2571, end: 2574 },
            },
            loc: { start: 2571, end: 2575 },
          },
          directives: [],
          loc: { start: 2563, end: 2575 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2578, end: 2586 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2588, end: 2593 },
            },
            loc: { start: 2588, end: 2593 },
          },
          directives: [],
          loc: { start: 2578, end: 2593 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2596, end: 2605 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2607, end: 2612 },
            },
            loc: { start: 2607, end: 2612 },
          },
          directives: [],
          loc: { start: 2596, end: 2612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2615, end: 2623 },
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
          loc: { start: 2615, end: 2630 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2633, end: 2639 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2641, end: 2649 },
            },
            loc: { start: 2641, end: 2649 },
          },
          directives: [],
          loc: { start: 2633, end: 2649 },
        },
      ],
      loc: { start: 2528, end: 2651 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2658, end: 2668 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2673, end: 2675 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2677, end: 2679 },
              },
              loc: { start: 2677, end: 2679 },
            },
            loc: { start: 2677, end: 2680 },
          },
          directives: [],
          loc: { start: 2673, end: 2680 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2683, end: 2687 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2689, end: 2693 },
              },
              loc: { start: 2689, end: 2693 },
            },
            loc: { start: 2689, end: 2694 },
          },
          directives: [],
          loc: { start: 2683, end: 2694 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2697, end: 2704 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2706, end: 2713 },
              },
              loc: { start: 2706, end: 2713 },
            },
            loc: { start: 2706, end: 2714 },
          },
          directives: [],
          loc: { start: 2697, end: 2714 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2717, end: 2728 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2730, end: 2741 },
              },
              loc: { start: 2730, end: 2741 },
            },
            loc: { start: 2730, end: 2742 },
          },
          directives: [],
          loc: { start: 2717, end: 2742 },
        },
      ],
      loc: { start: 2653, end: 2744 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2753, end: 2764 },
      },
      directives: [],
      loc: { start: 2746, end: 2764 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2772, end: 2782 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2787, end: 2789 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2791, end: 2793 },
            },
            loc: { start: 2791, end: 2793 },
          },
          directives: [],
          loc: { start: 2787, end: 2793 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2796, end: 2805 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2807, end: 2811 },
              },
              loc: { start: 2807, end: 2811 },
            },
            loc: { start: 2807, end: 2812 },
          },
          directives: [],
          loc: { start: 2796, end: 2812 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2815, end: 2822 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2824, end: 2828 },
              },
              loc: { start: 2824, end: 2828 },
            },
            loc: { start: 2824, end: 2829 },
          },
          directives: [],
          loc: { start: 2815, end: 2829 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2832, end: 2840 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2842, end: 2848 },
              },
              loc: { start: 2842, end: 2848 },
            },
            loc: { start: 2842, end: 2849 },
          },
          directives: [],
          loc: { start: 2832, end: 2849 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2852, end: 2869 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2871, end: 2877 },
            },
            loc: { start: 2871, end: 2877 },
          },
          directives: [],
          loc: { start: 2852, end: 2877 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2880, end: 2894 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2896, end: 2899 },
              },
              loc: { start: 2896, end: 2899 },
            },
            loc: { start: 2896, end: 2900 },
          },
          directives: [],
          loc: { start: 2880, end: 2900 },
        },
      ],
      loc: { start: 2766, end: 2902 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2910, end: 2922 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2927, end: 2931 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2933, end: 2939 },
              },
              loc: { start: 2933, end: 2939 },
            },
            loc: { start: 2933, end: 2940 },
          },
          directives: [],
          loc: { start: 2927, end: 2940 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2943, end: 2950 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2952, end: 2954 },
              },
              loc: { start: 2952, end: 2954 },
            },
            loc: { start: 2952, end: 2955 },
          },
          directives: [],
          loc: { start: 2943, end: 2955 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2958, end: 2962 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 2964, end: 2968 },
              },
              loc: { start: 2964, end: 2968 },
            },
            loc: { start: 2964, end: 2969 },
          },
          directives: [],
          loc: { start: 2958, end: 2969 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2972, end: 2976 },
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
                  loc: { start: 2979, end: 2994 },
                },
                loc: { start: 2979, end: 2994 },
              },
              loc: { start: 2979, end: 2995 },
            },
            loc: { start: 2978, end: 2996 },
          },
          directives: [],
          loc: { start: 2972, end: 2996 },
        },
      ],
      loc: { start: 2904, end: 2998 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 3006, end: 3021 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 3026, end: 3032 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3034, end: 3036 },
              },
              loc: { start: 3034, end: 3036 },
            },
            loc: { start: 3034, end: 3037 },
          },
          directives: [],
          loc: { start: 3026, end: 3037 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 3040, end: 3051 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 3053, end: 3064 },
              },
              loc: { start: 3053, end: 3064 },
            },
            loc: { start: 3053, end: 3065 },
          },
          directives: [],
          loc: { start: 3040, end: 3065 },
        },
      ],
      loc: { start: 3000, end: 3067 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3074, end: 3083 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3088, end: 3090 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3092, end: 3094 },
              },
              loc: { start: 3092, end: 3094 },
            },
            loc: { start: 3092, end: 3095 },
          },
          directives: [],
          loc: { start: 3088, end: 3095 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3098, end: 3103 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3105, end: 3110 },
              },
              loc: { start: 3105, end: 3110 },
            },
            loc: { start: 3105, end: 3111 },
          },
          directives: [],
          loc: { start: 3098, end: 3111 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3114, end: 3119 },
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
                    loc: { start: 3122, end: 3126 },
                  },
                  loc: { start: 3122, end: 3126 },
                },
                loc: { start: 3122, end: 3127 },
              },
              loc: { start: 3121, end: 3128 },
            },
            loc: { start: 3121, end: 3129 },
          },
          directives: [],
          loc: { start: 3114, end: 3129 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3132, end: 3136 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3138, end: 3148 },
            },
            loc: { start: 3138, end: 3148 },
          },
          directives: [],
          loc: { start: 3132, end: 3148 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3151, end: 3166 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3168, end: 3172 },
              },
              loc: { start: 3168, end: 3172 },
            },
            loc: { start: 3168, end: 3173 },
          },
          directives: [],
          loc: { start: 3151, end: 3173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3176, end: 3184 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3186, end: 3191 },
              },
              loc: { start: 3186, end: 3191 },
            },
            loc: { start: 3186, end: 3192 },
          },
          directives: [],
          loc: { start: 3176, end: 3192 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkIn",
            loc: { start: 3195, end: 3202 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3204, end: 3212 },
            },
            loc: { start: 3204, end: 3212 },
          },
          directives: [],
          loc: { start: 3195, end: 3212 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "checkOut",
            loc: { start: 3215, end: 3223 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 3225, end: 3233 },
            },
            loc: { start: 3225, end: 3233 },
          },
          directives: [],
          loc: { start: 3215, end: 3233 },
        },
      ],
      loc: { start: 3069, end: 3235 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3242, end: 3252 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3257, end: 3266 },
          },
          directives: [],
          loc: { start: 3257, end: 3266 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3269, end: 3276 },
          },
          directives: [],
          loc: { start: 3269, end: 3276 },
        },
      ],
      loc: { start: 3237, end: 3278 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3291, end: 3296 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3301, end: 3303 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3305, end: 3309 },
            },
            loc: { start: 3305, end: 3309 },
          },
          directives: [],
          loc: { start: 3301, end: 3309 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3312, end: 3317 },
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
                    loc: { start: 3320, end: 3324 },
                  },
                  loc: { start: 3320, end: 3324 },
                },
                loc: { start: 3320, end: 3325 },
              },
              loc: { start: 3319, end: 3326 },
            },
            loc: { start: 3319, end: 3327 },
          },
          directives: [],
          loc: { start: 3312, end: 3327 },
        },
      ],
      loc: { start: 3279, end: 3329 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3343, end: 3351 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3356, end: 3364 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3365, end: 3373 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3375, end: 3381 },
                  },
                  loc: { start: 3375, end: 3381 },
                },
                loc: { start: 3375, end: 3382 },
              },
              directives: [],
              loc: { start: 3365, end: 3382 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3384, end: 3389 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3391, end: 3397 },
                  },
                  loc: { start: 3391, end: 3397 },
                },
                loc: { start: 3391, end: 3398 },
              },
              directives: [],
              loc: { start: 3384, end: 3398 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3400, end: 3408 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3410, end: 3416 },
                },
                loc: { start: 3410, end: 3416 },
              },
              directives: [],
              loc: { start: 3400, end: 3416 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3419, end: 3435 },
              },
              loc: { start: 3419, end: 3435 },
            },
            loc: { start: 3419, end: 3436 },
          },
          directives: [],
          loc: { start: 3356, end: 3436 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3439, end: 3469 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3470, end: 3476 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3478, end: 3484 },
                  },
                  loc: { start: 3478, end: 3484 },
                },
                loc: { start: 3478, end: 3485 },
              },
              directives: [],
              loc: { start: 3470, end: 3485 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3488, end: 3492 },
              },
              loc: { start: 3488, end: 3492 },
            },
            loc: { start: 3488, end: 3493 },
          },
          directives: [],
          loc: { start: 3439, end: 3493 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3496, end: 3511 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3512, end: 3518 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3520, end: 3526 },
                  },
                  loc: { start: 3520, end: 3526 },
                },
                loc: { start: 3520, end: 3527 },
              },
              directives: [],
              loc: { start: 3512, end: 3527 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3529, end: 3533 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3535, end: 3541 },
                  },
                  loc: { start: 3535, end: 3541 },
                },
                loc: { start: 3535, end: 3542 },
              },
              directives: [],
              loc: { start: 3529, end: 3542 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3544, end: 3552 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3554, end: 3558 },
                  },
                  loc: { start: 3554, end: 3558 },
                },
                loc: { start: 3554, end: 3559 },
              },
              directives: [],
              loc: { start: 3544, end: 3559 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3562, end: 3584 },
              },
              loc: { start: 3562, end: 3584 },
            },
            loc: { start: 3562, end: 3585 },
          },
          directives: [],
          loc: { start: 3496, end: 3585 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3588, end: 3615 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3616, end: 3622 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3624, end: 3630 },
                },
                loc: { start: 3624, end: 3630 },
              },
              directives: [],
              loc: { start: 3616, end: 3630 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3633, end: 3637 },
              },
              loc: { start: 3633, end: 3637 },
            },
            loc: { start: 3633, end: 3638 },
          },
          directives: [],
          loc: { start: 3588, end: 3638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3641, end: 3653 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3654, end: 3662 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3664, end: 3668 },
                  },
                  loc: { start: 3664, end: 3668 },
                },
                loc: { start: 3664, end: 3669 },
              },
              directives: [],
              loc: { start: 3654, end: 3669 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3672, end: 3685 },
              },
              loc: { start: 3672, end: 3685 },
            },
            loc: { start: 3672, end: 3686 },
          },
          directives: [],
          loc: { start: 3641, end: 3686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3689, end: 3702 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3703, end: 3708 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3710, end: 3716 },
                  },
                  loc: { start: 3710, end: 3716 },
                },
                loc: { start: 3710, end: 3717 },
              },
              directives: [],
              loc: { start: 3703, end: 3717 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3719, end: 3727 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3729, end: 3735 },
                  },
                  loc: { start: 3729, end: 3735 },
                },
                loc: { start: 3729, end: 3736 },
              },
              directives: [],
              loc: { start: 3719, end: 3736 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3739, end: 3751 },
              },
              loc: { start: 3739, end: 3751 },
            },
            loc: { start: 3739, end: 3752 },
          },
          directives: [],
          loc: { start: 3689, end: 3752 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3755, end: 3768 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3769, end: 3774 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3776, end: 3782 },
                  },
                  loc: { start: 3776, end: 3782 },
                },
                loc: { start: 3776, end: 3783 },
              },
              directives: [],
              loc: { start: 3769, end: 3783 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3786, end: 3793 },
              },
              loc: { start: 3786, end: 3793 },
            },
            loc: { start: 3786, end: 3794 },
          },
          directives: [],
          loc: { start: 3755, end: 3794 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3797, end: 3811 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3812, end: 3823 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3825, end: 3831 },
                  },
                  loc: { start: 3825, end: 3831 },
                },
                loc: { start: 3825, end: 3832 },
              },
              directives: [],
              loc: { start: 3812, end: 3832 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3835, end: 3847 },
              },
              loc: { start: 3835, end: 3847 },
            },
            loc: { start: 3835, end: 3848 },
          },
          directives: [],
          loc: { start: 3797, end: 3848 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3851, end: 3863 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3864, end: 3876 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3878, end: 3884 },
                  },
                  loc: { start: 3878, end: 3884 },
                },
                loc: { start: 3878, end: 3885 },
              },
              directives: [],
              loc: { start: 3864, end: 3885 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3888, end: 3900 },
              },
              loc: { start: 3888, end: 3900 },
            },
            loc: { start: 3888, end: 3901 },
          },
          directives: [],
          loc: { start: 3851, end: 3901 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3904, end: 3920 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3921, end: 3923 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3925, end: 3927 },
                  },
                  loc: { start: 3925, end: 3927 },
                },
                loc: { start: 3925, end: 3928 },
              },
              directives: [],
              loc: { start: 3921, end: 3928 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3930, end: 3934 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3936, end: 3942 },
                  },
                  loc: { start: 3936, end: 3942 },
                },
                loc: { start: 3936, end: 3943 },
              },
              directives: [],
              loc: { start: 3930, end: 3943 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3946, end: 3956 },
              },
              loc: { start: 3946, end: 3956 },
            },
            loc: { start: 3946, end: 3957 },
          },
          directives: [],
          loc: { start: 3904, end: 3957 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
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
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3987, end: 3997 },
              },
              loc: { start: 3987, end: 3997 },
            },
            loc: { start: 3987, end: 3998 },
          },
          directives: [],
          loc: { start: 3960, end: 3998 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 4001, end: 4014 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 4015, end: 4020 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 4022, end: 4034 },
                  },
                  loc: { start: 4022, end: 4034 },
                },
                loc: { start: 4022, end: 4035 },
              },
              directives: [],
              loc: { start: 4015, end: 4035 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4038, end: 4042 },
              },
              loc: { start: 4038, end: 4042 },
            },
            loc: { start: 4038, end: 4043 },
          },
          directives: [],
          loc: { start: 4001, end: 4043 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "removeProfilePicture",
            loc: { start: 4046, end: 4066 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4068, end: 4072 },
              },
              loc: { start: 4068, end: 4072 },
            },
            loc: { start: 4068, end: 4073 },
          },
          directives: [],
          loc: { start: 4046, end: 4073 },
        },
      ],
      loc: { start: 3331, end: 4075 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 4089, end: 4098 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4103, end: 4107 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4109, end: 4113 },
              },
              loc: { start: 4109, end: 4113 },
            },
            loc: { start: 4109, end: 4114 },
          },
          directives: [],
          loc: { start: 4103, end: 4114 },
        },
      ],
      loc: { start: 4077, end: 4116 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 4123, end: 4135 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4140, end: 4145 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4147, end: 4150 },
              },
              loc: { start: 4147, end: 4150 },
            },
            loc: { start: 4147, end: 4151 },
          },
          directives: [],
          loc: { start: 4140, end: 4151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4154, end: 4166 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4168, end: 4174 },
              },
              loc: { start: 4168, end: 4174 },
            },
            loc: { start: 4168, end: 4175 },
          },
          directives: [],
          loc: { start: 4154, end: 4175 },
        },
      ],
      loc: { start: 4118, end: 4177 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4184, end: 4200 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4205, end: 4209 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4211, end: 4215 },
              },
              loc: { start: 4211, end: 4215 },
            },
            loc: { start: 4211, end: 4216 },
          },
          directives: [],
          loc: { start: 4205, end: 4216 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4219, end: 4224 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4226, end: 4232 },
              },
              loc: { start: 4226, end: 4232 },
            },
            loc: { start: 4226, end: 4233 },
          },
          directives: [],
          loc: { start: 4219, end: 4233 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4236, end: 4248 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4250, end: 4256 },
              },
              loc: { start: 4250, end: 4256 },
            },
            loc: { start: 4250, end: 4257 },
          },
          directives: [],
          loc: { start: 4236, end: 4257 },
        },
      ],
      loc: { start: 4179, end: 4259 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4266, end: 4279 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4284, end: 4296 },
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
                    loc: { start: 4299, end: 4302 },
                  },
                  loc: { start: 4299, end: 4302 },
                },
                loc: { start: 4299, end: 4303 },
              },
              loc: { start: 4298, end: 4304 },
            },
            loc: { start: 4298, end: 4305 },
          },
          directives: [],
          loc: { start: 4284, end: 4305 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4308, end: 4313 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4315, end: 4318 },
              },
              loc: { start: 4315, end: 4318 },
            },
            loc: { start: 4315, end: 4319 },
          },
          directives: [],
          loc: { start: 4308, end: 4319 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4322, end: 4334 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4336, end: 4342 },
              },
              loc: { start: 4336, end: 4342 },
            },
            loc: { start: 4336, end: 4343 },
          },
          directives: [],
          loc: { start: 4322, end: 4343 },
        },
      ],
      loc: { start: 4261, end: 4345 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4352, end: 4374 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4379, end: 4384 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4386, end: 4392 },
              },
              loc: { start: 4386, end: 4392 },
            },
            loc: { start: 4386, end: 4393 },
          },
          directives: [],
          loc: { start: 4379, end: 4393 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4396, end: 4402 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4404, end: 4414 },
              },
              loc: { start: 4404, end: 4414 },
            },
            loc: { start: 4404, end: 4415 },
          },
          directives: [],
          loc: { start: 4396, end: 4415 },
        },
      ],
      loc: { start: 4347, end: 4417 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4424, end: 4428 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4433, end: 4435 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4437, end: 4439 },
              },
              loc: { start: 4437, end: 4439 },
            },
            loc: { start: 4437, end: 4440 },
          },
          directives: [],
          loc: { start: 4433, end: 4440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4443, end: 4447 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4449, end: 4455 },
              },
              loc: { start: 4449, end: 4455 },
            },
            loc: { start: 4449, end: 4456 },
          },
          directives: [],
          loc: { start: 4443, end: 4456 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4459, end: 4470 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4472, end: 4478 },
              },
              loc: { start: 4472, end: 4478 },
            },
            loc: { start: 4472, end: 4479 },
          },
          directives: [],
          loc: { start: 4459, end: 4479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4482, end: 4487 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4489, end: 4495 },
              },
              loc: { start: 4489, end: 4495 },
            },
            loc: { start: 4489, end: 4496 },
          },
          directives: [],
          loc: { start: 4482, end: 4496 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4499, end: 4505 },
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
          loc: { start: 4499, end: 4514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4517, end: 4526 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4528, end: 4534 },
            },
            loc: { start: 4528, end: 4534 },
          },
          directives: [],
          loc: { start: 4517, end: 4534 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4537, end: 4544 },
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
                    loc: { start: 4547, end: 4557 },
                  },
                  loc: { start: 4547, end: 4557 },
                },
                loc: { start: 4547, end: 4558 },
              },
              loc: { start: 4546, end: 4559 },
            },
            loc: { start: 4546, end: 4560 },
          },
          directives: [],
          loc: { start: 4537, end: 4560 },
        },
      ],
      loc: { start: 4419, end: 4562 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4570, end: 4582 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4587, end: 4589 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4591, end: 4593 },
            },
            loc: { start: 4591, end: 4593 },
          },
          directives: [],
          loc: { start: 4587, end: 4593 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4596, end: 4600 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4602, end: 4608 },
              },
              loc: { start: 4602, end: 4608 },
            },
            loc: { start: 4602, end: 4609 },
          },
          directives: [],
          loc: { start: 4596, end: 4609 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4612, end: 4623 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4625, end: 4631 },
              },
              loc: { start: 4625, end: 4631 },
            },
            loc: { start: 4625, end: 4632 },
          },
          directives: [],
          loc: { start: 4612, end: 4632 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4635, end: 4640 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4642, end: 4648 },
              },
              loc: { start: 4642, end: 4648 },
            },
            loc: { start: 4642, end: 4649 },
          },
          directives: [],
          loc: { start: 4635, end: 4649 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4652, end: 4660 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4662, end: 4668 },
            },
            loc: { start: 4662, end: 4668 },
          },
          directives: [],
          loc: { start: 4652, end: 4668 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4671, end: 4677 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4679, end: 4683 },
            },
            loc: { start: 4679, end: 4683 },
          },
          directives: [],
          loc: { start: 4671, end: 4683 },
        },
      ],
      loc: { start: 4564, end: 4685 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4692, end: 4702 },
      },
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
            value: "createdAt",
            loc: { start: 4733, end: 4742 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4744, end: 4752 },
            },
            loc: { start: 4744, end: 4752 },
          },
          directives: [],
          loc: { start: 4733, end: 4752 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4755, end: 4765 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4767, end: 4775 },
            },
            loc: { start: 4767, end: 4775 },
          },
          directives: [],
          loc: { start: 4755, end: 4775 },
        },
      ],
      loc: { start: 4687, end: 4777 },
    },
  ],
  loc: { start: 0, end: 4778 },
} as unknown as DocumentNode;
