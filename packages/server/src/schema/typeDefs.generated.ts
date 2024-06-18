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
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 2337, end: 2345 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2347, end: 2352 },
            },
            loc: { start: 2347, end: 2352 },
          },
          directives: [],
          loc: { start: 2337, end: 2352 },
        },
      ],
      loc: { start: 2039, end: 2354 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2361, end: 2368 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2373, end: 2375 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2377, end: 2379 },
              },
              loc: { start: 2377, end: 2379 },
            },
            loc: { start: 2377, end: 2380 },
          },
          directives: [],
          loc: { start: 2373, end: 2380 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2383, end: 2386 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2388, end: 2394 },
              },
              loc: { start: 2388, end: 2394 },
            },
            loc: { start: 2388, end: 2395 },
          },
          directives: [],
          loc: { start: 2383, end: 2395 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2398, end: 2403 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2405, end: 2410 },
              },
              loc: { start: 2405, end: 2410 },
            },
            loc: { start: 2405, end: 2411 },
          },
          directives: [],
          loc: { start: 2398, end: 2411 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2414, end: 2418 },
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
                    loc: { start: 2421, end: 2431 },
                  },
                  loc: { start: 2421, end: 2431 },
                },
                loc: { start: 2421, end: 2432 },
              },
              loc: { start: 2420, end: 2433 },
            },
            loc: { start: 2420, end: 2434 },
          },
          directives: [],
          loc: { start: 2414, end: 2434 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2437, end: 2441 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2443, end: 2454 },
              },
              loc: { start: 2443, end: 2454 },
            },
            loc: { start: 2443, end: 2455 },
          },
          directives: [],
          loc: { start: 2437, end: 2455 },
        },
      ],
      loc: { start: 2356, end: 2457 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2464, end: 2475 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2480, end: 2485 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2487, end: 2490 },
              },
              loc: { start: 2487, end: 2490 },
            },
            loc: { start: 2487, end: 2491 },
          },
          directives: [],
          loc: { start: 2480, end: 2491 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2494, end: 2500 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2502, end: 2505 },
              },
              loc: { start: 2502, end: 2505 },
            },
            loc: { start: 2502, end: 2506 },
          },
          directives: [],
          loc: { start: 2494, end: 2506 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2509, end: 2517 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2519, end: 2524 },
            },
            loc: { start: 2519, end: 2524 },
          },
          directives: [],
          loc: { start: 2509, end: 2524 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2527, end: 2536 },
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
          loc: { start: 2527, end: 2543 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2546, end: 2554 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2556, end: 2561 },
            },
            loc: { start: 2556, end: 2561 },
          },
          directives: [],
          loc: { start: 2546, end: 2561 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2564, end: 2570 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2572, end: 2580 },
            },
            loc: { start: 2572, end: 2580 },
          },
          directives: [],
          loc: { start: 2564, end: 2580 },
        },
      ],
      loc: { start: 2459, end: 2582 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2589, end: 2599 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2604, end: 2606 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2608, end: 2610 },
              },
              loc: { start: 2608, end: 2610 },
            },
            loc: { start: 2608, end: 2611 },
          },
          directives: [],
          loc: { start: 2604, end: 2611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2614, end: 2618 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2620, end: 2624 },
              },
              loc: { start: 2620, end: 2624 },
            },
            loc: { start: 2620, end: 2625 },
          },
          directives: [],
          loc: { start: 2614, end: 2625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2628, end: 2635 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2637, end: 2644 },
              },
              loc: { start: 2637, end: 2644 },
            },
            loc: { start: 2637, end: 2645 },
          },
          directives: [],
          loc: { start: 2628, end: 2645 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2648, end: 2659 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2661, end: 2672 },
              },
              loc: { start: 2661, end: 2672 },
            },
            loc: { start: 2661, end: 2673 },
          },
          directives: [],
          loc: { start: 2648, end: 2673 },
        },
      ],
      loc: { start: 2584, end: 2675 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2684, end: 2695 },
      },
      directives: [],
      loc: { start: 2677, end: 2695 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2703, end: 2713 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2718, end: 2720 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2722, end: 2724 },
            },
            loc: { start: 2722, end: 2724 },
          },
          directives: [],
          loc: { start: 2718, end: 2724 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2727, end: 2736 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2738, end: 2742 },
              },
              loc: { start: 2738, end: 2742 },
            },
            loc: { start: 2738, end: 2743 },
          },
          directives: [],
          loc: { start: 2727, end: 2743 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2746, end: 2753 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2755, end: 2759 },
              },
              loc: { start: 2755, end: 2759 },
            },
            loc: { start: 2755, end: 2760 },
          },
          directives: [],
          loc: { start: 2746, end: 2760 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2763, end: 2771 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2773, end: 2779 },
              },
              loc: { start: 2773, end: 2779 },
            },
            loc: { start: 2773, end: 2780 },
          },
          directives: [],
          loc: { start: 2763, end: 2780 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2783, end: 2800 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2802, end: 2808 },
            },
            loc: { start: 2802, end: 2808 },
          },
          directives: [],
          loc: { start: 2783, end: 2808 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2811, end: 2825 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2827, end: 2830 },
              },
              loc: { start: 2827, end: 2830 },
            },
            loc: { start: 2827, end: 2831 },
          },
          directives: [],
          loc: { start: 2811, end: 2831 },
        },
      ],
      loc: { start: 2697, end: 2833 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2841, end: 2853 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2858, end: 2862 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2864, end: 2870 },
              },
              loc: { start: 2864, end: 2870 },
            },
            loc: { start: 2864, end: 2871 },
          },
          directives: [],
          loc: { start: 2858, end: 2871 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2874, end: 2881 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2883, end: 2885 },
              },
              loc: { start: 2883, end: 2885 },
            },
            loc: { start: 2883, end: 2886 },
          },
          directives: [],
          loc: { start: 2874, end: 2886 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2889, end: 2893 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 2895, end: 2899 },
              },
              loc: { start: 2895, end: 2899 },
            },
            loc: { start: 2895, end: 2900 },
          },
          directives: [],
          loc: { start: 2889, end: 2900 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2903, end: 2907 },
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
                  loc: { start: 2910, end: 2925 },
                },
                loc: { start: 2910, end: 2925 },
              },
              loc: { start: 2910, end: 2926 },
            },
            loc: { start: 2909, end: 2927 },
          },
          directives: [],
          loc: { start: 2903, end: 2927 },
        },
      ],
      loc: { start: 2835, end: 2929 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 2937, end: 2952 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2957, end: 2963 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2965, end: 2967 },
              },
              loc: { start: 2965, end: 2967 },
            },
            loc: { start: 2965, end: 2968 },
          },
          directives: [],
          loc: { start: 2957, end: 2968 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2971, end: 2982 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2984, end: 2995 },
              },
              loc: { start: 2984, end: 2995 },
            },
            loc: { start: 2984, end: 2996 },
          },
          directives: [],
          loc: { start: 2971, end: 2996 },
        },
      ],
      loc: { start: 2931, end: 2998 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3005, end: 3014 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3019, end: 3021 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3023, end: 3025 },
              },
              loc: { start: 3023, end: 3025 },
            },
            loc: { start: 3023, end: 3026 },
          },
          directives: [],
          loc: { start: 3019, end: 3026 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 3029, end: 3034 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 3036, end: 3041 },
              },
              loc: { start: 3036, end: 3041 },
            },
            loc: { start: 3036, end: 3042 },
          },
          directives: [],
          loc: { start: 3029, end: 3042 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 3045, end: 3050 },
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
                    loc: { start: 3053, end: 3057 },
                  },
                  loc: { start: 3053, end: 3057 },
                },
                loc: { start: 3053, end: 3058 },
              },
              loc: { start: 3052, end: 3059 },
            },
            loc: { start: 3052, end: 3060 },
          },
          directives: [],
          loc: { start: 3045, end: 3060 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 3063, end: 3067 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 3069, end: 3079 },
            },
            loc: { start: 3069, end: 3079 },
          },
          directives: [],
          loc: { start: 3063, end: 3079 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "applicationDate",
            loc: { start: 3082, end: 3097 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 3099, end: 3103 },
              },
              loc: { start: 3099, end: 3103 },
            },
            loc: { start: 3099, end: 3104 },
          },
          directives: [],
          loc: { start: 3082, end: 3104 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "paidDues",
            loc: { start: 3107, end: 3115 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 3117, end: 3122 },
              },
              loc: { start: 3117, end: 3122 },
            },
            loc: { start: 3117, end: 3123 },
          },
          directives: [],
          loc: { start: 3107, end: 3123 },
        },
      ],
      loc: { start: 3000, end: 3125 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3132, end: 3142 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3147, end: 3156 },
          },
          directives: [],
          loc: { start: 3147, end: 3156 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3159, end: 3166 },
          },
          directives: [],
          loc: { start: 3159, end: 3166 },
        },
      ],
      loc: { start: 3127, end: 3168 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3181, end: 3186 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3191, end: 3193 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3195, end: 3199 },
            },
            loc: { start: 3195, end: 3199 },
          },
          directives: [],
          loc: { start: 3191, end: 3199 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3202, end: 3207 },
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
                    loc: { start: 3210, end: 3214 },
                  },
                  loc: { start: 3210, end: 3214 },
                },
                loc: { start: 3210, end: 3215 },
              },
              loc: { start: 3209, end: 3216 },
            },
            loc: { start: 3209, end: 3217 },
          },
          directives: [],
          loc: { start: 3202, end: 3217 },
        },
      ],
      loc: { start: 3169, end: 3219 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3233, end: 3241 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3246, end: 3254 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3255, end: 3263 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3265, end: 3271 },
                  },
                  loc: { start: 3265, end: 3271 },
                },
                loc: { start: 3265, end: 3272 },
              },
              directives: [],
              loc: { start: 3255, end: 3272 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3274, end: 3279 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3281, end: 3287 },
                  },
                  loc: { start: 3281, end: 3287 },
                },
                loc: { start: 3281, end: 3288 },
              },
              directives: [],
              loc: { start: 3274, end: 3288 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3290, end: 3298 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3300, end: 3306 },
                },
                loc: { start: 3300, end: 3306 },
              },
              directives: [],
              loc: { start: 3290, end: 3306 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3309, end: 3325 },
              },
              loc: { start: 3309, end: 3325 },
            },
            loc: { start: 3309, end: 3326 },
          },
          directives: [],
          loc: { start: 3246, end: 3326 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3329, end: 3359 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3360, end: 3366 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3368, end: 3374 },
                  },
                  loc: { start: 3368, end: 3374 },
                },
                loc: { start: 3368, end: 3375 },
              },
              directives: [],
              loc: { start: 3360, end: 3375 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3378, end: 3382 },
              },
              loc: { start: 3378, end: 3382 },
            },
            loc: { start: 3378, end: 3383 },
          },
          directives: [],
          loc: { start: 3329, end: 3383 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3386, end: 3401 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3402, end: 3408 },
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
              loc: { start: 3402, end: 3417 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3419, end: 3423 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3425, end: 3431 },
                  },
                  loc: { start: 3425, end: 3431 },
                },
                loc: { start: 3425, end: 3432 },
              },
              directives: [],
              loc: { start: 3419, end: 3432 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3434, end: 3442 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3444, end: 3448 },
                  },
                  loc: { start: 3444, end: 3448 },
                },
                loc: { start: 3444, end: 3449 },
              },
              directives: [],
              loc: { start: 3434, end: 3449 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3452, end: 3474 },
              },
              loc: { start: 3452, end: 3474 },
            },
            loc: { start: 3452, end: 3475 },
          },
          directives: [],
          loc: { start: 3386, end: 3475 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3478, end: 3505 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3506, end: 3512 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3514, end: 3520 },
                },
                loc: { start: 3514, end: 3520 },
              },
              directives: [],
              loc: { start: 3506, end: 3520 },
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
          loc: { start: 3478, end: 3528 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3531, end: 3543 },
          },
          arguments: [
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
                value: "LoginResponse",
                loc: { start: 3562, end: 3575 },
              },
              loc: { start: 3562, end: 3575 },
            },
            loc: { start: 3562, end: 3576 },
          },
          directives: [],
          loc: { start: 3531, end: 3576 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3579, end: 3592 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3593, end: 3598 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3600, end: 3606 },
                  },
                  loc: { start: 3600, end: 3606 },
                },
                loc: { start: 3600, end: 3607 },
              },
              directives: [],
              loc: { start: 3593, end: 3607 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3609, end: 3617 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3619, end: 3625 },
                  },
                  loc: { start: 3619, end: 3625 },
                },
                loc: { start: 3619, end: 3626 },
              },
              directives: [],
              loc: { start: 3609, end: 3626 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3629, end: 3641 },
              },
              loc: { start: 3629, end: 3641 },
            },
            loc: { start: 3629, end: 3642 },
          },
          directives: [],
          loc: { start: 3579, end: 3642 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3645, end: 3658 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3659, end: 3664 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3666, end: 3672 },
                  },
                  loc: { start: 3666, end: 3672 },
                },
                loc: { start: 3666, end: 3673 },
              },
              directives: [],
              loc: { start: 3659, end: 3673 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3676, end: 3683 },
              },
              loc: { start: 3676, end: 3683 },
            },
            loc: { start: 3676, end: 3684 },
          },
          directives: [],
          loc: { start: 3645, end: 3684 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3687, end: 3701 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3702, end: 3713 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3715, end: 3721 },
                  },
                  loc: { start: 3715, end: 3721 },
                },
                loc: { start: 3715, end: 3722 },
              },
              directives: [],
              loc: { start: 3702, end: 3722 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3725, end: 3737 },
              },
              loc: { start: 3725, end: 3737 },
            },
            loc: { start: 3725, end: 3738 },
          },
          directives: [],
          loc: { start: 3687, end: 3738 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3741, end: 3753 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3754, end: 3766 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3768, end: 3774 },
                  },
                  loc: { start: 3768, end: 3774 },
                },
                loc: { start: 3768, end: 3775 },
              },
              directives: [],
              loc: { start: 3754, end: 3775 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3778, end: 3790 },
              },
              loc: { start: 3778, end: 3790 },
            },
            loc: { start: 3778, end: 3791 },
          },
          directives: [],
          loc: { start: 3741, end: 3791 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3794, end: 3810 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3811, end: 3813 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3815, end: 3817 },
                  },
                  loc: { start: 3815, end: 3817 },
                },
                loc: { start: 3815, end: 3818 },
              },
              directives: [],
              loc: { start: 3811, end: 3818 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3820, end: 3824 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3826, end: 3832 },
                  },
                  loc: { start: 3826, end: 3832 },
                },
                loc: { start: 3826, end: 3833 },
              },
              directives: [],
              loc: { start: 3820, end: 3833 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3836, end: 3846 },
              },
              loc: { start: 3836, end: 3846 },
            },
            loc: { start: 3836, end: 3847 },
          },
          directives: [],
          loc: { start: 3794, end: 3847 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 3850, end: 3866 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3867, end: 3869 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3871, end: 3873 },
                  },
                  loc: { start: 3871, end: 3873 },
                },
                loc: { start: 3871, end: 3874 },
              },
              directives: [],
              loc: { start: 3867, end: 3874 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3877, end: 3887 },
              },
              loc: { start: 3877, end: 3887 },
            },
            loc: { start: 3877, end: 3888 },
          },
          directives: [],
          loc: { start: 3850, end: 3888 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 3891, end: 3904 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3905, end: 3910 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 3912, end: 3924 },
                  },
                  loc: { start: 3912, end: 3924 },
                },
                loc: { start: 3912, end: 3925 },
              },
              directives: [],
              loc: { start: 3905, end: 3925 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3928, end: 3932 },
              },
              loc: { start: 3928, end: 3932 },
            },
            loc: { start: 3928, end: 3933 },
          },
          directives: [],
          loc: { start: 3891, end: 3933 },
        },
      ],
      loc: { start: 3221, end: 3935 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3949, end: 3958 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3963, end: 3967 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3969, end: 3973 },
              },
              loc: { start: 3969, end: 3973 },
            },
            loc: { start: 3969, end: 3974 },
          },
          directives: [],
          loc: { start: 3963, end: 3974 },
        },
      ],
      loc: { start: 3937, end: 3976 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 3983, end: 3995 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4000, end: 4005 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4007, end: 4010 },
              },
              loc: { start: 4007, end: 4010 },
            },
            loc: { start: 4007, end: 4011 },
          },
          directives: [],
          loc: { start: 4000, end: 4011 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4014, end: 4026 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4028, end: 4034 },
              },
              loc: { start: 4028, end: 4034 },
            },
            loc: { start: 4028, end: 4035 },
          },
          directives: [],
          loc: { start: 4014, end: 4035 },
        },
      ],
      loc: { start: 3978, end: 4037 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 4044, end: 4060 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 4065, end: 4069 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 4071, end: 4075 },
              },
              loc: { start: 4071, end: 4075 },
            },
            loc: { start: 4071, end: 4076 },
          },
          directives: [],
          loc: { start: 4065, end: 4076 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4079, end: 4084 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4086, end: 4092 },
              },
              loc: { start: 4086, end: 4092 },
            },
            loc: { start: 4086, end: 4093 },
          },
          directives: [],
          loc: { start: 4079, end: 4093 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4096, end: 4108 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4110, end: 4116 },
              },
              loc: { start: 4110, end: 4116 },
            },
            loc: { start: 4110, end: 4117 },
          },
          directives: [],
          loc: { start: 4096, end: 4117 },
        },
      ],
      loc: { start: 4039, end: 4119 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 4126, end: 4139 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4144, end: 4156 },
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
                    loc: { start: 4159, end: 4162 },
                  },
                  loc: { start: 4159, end: 4162 },
                },
                loc: { start: 4159, end: 4163 },
              },
              loc: { start: 4158, end: 4164 },
            },
            loc: { start: 4158, end: 4165 },
          },
          directives: [],
          loc: { start: 4144, end: 4165 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4168, end: 4173 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4175, end: 4178 },
              },
              loc: { start: 4175, end: 4178 },
            },
            loc: { start: 4175, end: 4179 },
          },
          directives: [],
          loc: { start: 4168, end: 4179 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4182, end: 4194 },
          },
          arguments: [],
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
          loc: { start: 4182, end: 4203 },
        },
      ],
      loc: { start: 4121, end: 4205 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4212, end: 4234 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4239, end: 4244 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4246, end: 4252 },
              },
              loc: { start: 4246, end: 4252 },
            },
            loc: { start: 4246, end: 4253 },
          },
          directives: [],
          loc: { start: 4239, end: 4253 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4256, end: 4262 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4264, end: 4274 },
              },
              loc: { start: 4264, end: 4274 },
            },
            loc: { start: 4264, end: 4275 },
          },
          directives: [],
          loc: { start: 4256, end: 4275 },
        },
      ],
      loc: { start: 4207, end: 4277 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4284, end: 4288 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4293, end: 4295 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4297, end: 4299 },
              },
              loc: { start: 4297, end: 4299 },
            },
            loc: { start: 4297, end: 4300 },
          },
          directives: [],
          loc: { start: 4293, end: 4300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4303, end: 4307 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4309, end: 4315 },
              },
              loc: { start: 4309, end: 4315 },
            },
            loc: { start: 4309, end: 4316 },
          },
          directives: [],
          loc: { start: 4303, end: 4316 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4319, end: 4330 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4332, end: 4338 },
              },
              loc: { start: 4332, end: 4338 },
            },
            loc: { start: 4332, end: 4339 },
          },
          directives: [],
          loc: { start: 4319, end: 4339 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4342, end: 4347 },
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
          loc: { start: 4342, end: 4356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4359, end: 4365 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4367, end: 4373 },
              },
              loc: { start: 4367, end: 4373 },
            },
            loc: { start: 4367, end: 4374 },
          },
          directives: [],
          loc: { start: 4359, end: 4374 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4377, end: 4386 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4388, end: 4394 },
            },
            loc: { start: 4388, end: 4394 },
          },
          directives: [],
          loc: { start: 4377, end: 4394 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4397, end: 4404 },
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
                    loc: { start: 4407, end: 4417 },
                  },
                  loc: { start: 4407, end: 4417 },
                },
                loc: { start: 4407, end: 4418 },
              },
              loc: { start: 4406, end: 4419 },
            },
            loc: { start: 4406, end: 4420 },
          },
          directives: [],
          loc: { start: 4397, end: 4420 },
        },
      ],
      loc: { start: 4279, end: 4422 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4430, end: 4442 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4447, end: 4449 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4451, end: 4453 },
            },
            loc: { start: 4451, end: 4453 },
          },
          directives: [],
          loc: { start: 4447, end: 4453 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4456, end: 4460 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4462, end: 4468 },
              },
              loc: { start: 4462, end: 4468 },
            },
            loc: { start: 4462, end: 4469 },
          },
          directives: [],
          loc: { start: 4456, end: 4469 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4472, end: 4483 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4485, end: 4491 },
              },
              loc: { start: 4485, end: 4491 },
            },
            loc: { start: 4485, end: 4492 },
          },
          directives: [],
          loc: { start: 4472, end: 4492 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4495, end: 4500 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4502, end: 4508 },
              },
              loc: { start: 4502, end: 4508 },
            },
            loc: { start: 4502, end: 4509 },
          },
          directives: [],
          loc: { start: 4495, end: 4509 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "password",
            loc: { start: 4512, end: 4520 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4522, end: 4528 },
            },
            loc: { start: 4522, end: 4528 },
          },
          directives: [],
          loc: { start: 4512, end: 4528 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4531, end: 4537 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4539, end: 4543 },
            },
            loc: { start: 4539, end: 4543 },
          },
          directives: [],
          loc: { start: 4531, end: 4543 },
        },
      ],
      loc: { start: 4424, end: 4545 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4552, end: 4562 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4567, end: 4569 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4571, end: 4573 },
              },
              loc: { start: 4571, end: 4573 },
            },
            loc: { start: 4571, end: 4574 },
          },
          directives: [],
          loc: { start: 4567, end: 4574 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4577, end: 4581 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4583, end: 4589 },
              },
              loc: { start: 4583, end: 4589 },
            },
            loc: { start: 4583, end: 4590 },
          },
          directives: [],
          loc: { start: 4577, end: 4590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4593, end: 4602 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4604, end: 4612 },
            },
            loc: { start: 4604, end: 4612 },
          },
          directives: [],
          loc: { start: 4593, end: 4612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4615, end: 4625 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4627, end: 4635 },
            },
            loc: { start: 4627, end: 4635 },
          },
          directives: [],
          loc: { start: 4615, end: 4635 },
        },
      ],
      loc: { start: 4547, end: 4637 },
    },
  ],
  loc: { start: 0, end: 4638 },
} as unknown as DocumentNode;
