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
      ],
      loc: { start: 2039, end: 2267 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Picture", loc: { start: 2274, end: 2281 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2286, end: 2288 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2290, end: 2292 },
              },
              loc: { start: 2290, end: 2292 },
            },
            loc: { start: 2290, end: 2293 },
          },
          directives: [],
          loc: { start: 2286, end: 2293 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2296, end: 2299 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2301, end: 2307 },
              },
              loc: { start: 2301, end: 2307 },
            },
            loc: { start: 2301, end: 2308 },
          },
          directives: [],
          loc: { start: 2296, end: 2308 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2311, end: 2316 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2318, end: 2323 },
              },
              loc: { start: 2318, end: 2323 },
            },
            loc: { start: 2318, end: 2324 },
          },
          directives: [],
          loc: { start: 2311, end: 2324 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2327, end: 2331 },
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
                    loc: { start: 2334, end: 2344 },
                  },
                  loc: { start: 2334, end: 2344 },
                },
                loc: { start: 2334, end: 2345 },
              },
              loc: { start: 2333, end: 2346 },
            },
            loc: { start: 2333, end: 2347 },
          },
          directives: [],
          loc: { start: 2327, end: 2347 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "meta",
            loc: { start: 2350, end: 2354 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PictureMeta",
                loc: { start: 2356, end: 2367 },
              },
              loc: { start: 2356, end: 2367 },
            },
            loc: { start: 2356, end: 2368 },
          },
          directives: [],
          loc: { start: 2350, end: 2368 },
        },
      ],
      loc: { start: 2269, end: 2370 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureMeta",
        loc: { start: 2377, end: 2388 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 2393, end: 2398 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2400, end: 2403 },
              },
              loc: { start: 2400, end: 2403 },
            },
            loc: { start: 2400, end: 2404 },
          },
          directives: [],
          loc: { start: 2393, end: 2404 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 2407, end: 2413 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2415, end: 2418 },
              },
              loc: { start: 2415, end: 2418 },
            },
            loc: { start: 2415, end: 2419 },
          },
          directives: [],
          loc: { start: 2407, end: 2419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "latitude",
            loc: { start: 2422, end: 2430 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2432, end: 2437 },
            },
            loc: { start: 2432, end: 2437 },
          },
          directives: [],
          loc: { start: 2422, end: 2437 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "longitude",
            loc: { start: 2440, end: 2449 },
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
          loc: { start: 2440, end: 2456 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "altitude",
            loc: { start: 2459, end: 2467 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2469, end: 2474 },
            },
            loc: { start: 2469, end: 2474 },
          },
          directives: [],
          loc: { start: 2459, end: 2474 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "takeAt",
            loc: { start: 2477, end: 2483 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 2485, end: 2493 },
            },
            loc: { start: 2485, end: 2493 },
          },
          directives: [],
          loc: { start: 2477, end: 2493 },
        },
      ],
      loc: { start: 2372, end: 2495 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTag",
        loc: { start: 2502, end: 2512 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2517, end: 2519 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2521, end: 2523 },
              },
              loc: { start: 2521, end: 2523 },
            },
            loc: { start: 2521, end: 2524 },
          },
          directives: [],
          loc: { start: 2517, end: 2524 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 2527, end: 2531 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 2533, end: 2537 },
              },
              loc: { start: 2533, end: 2537 },
            },
            loc: { start: 2533, end: 2538 },
          },
          directives: [],
          loc: { start: 2527, end: 2538 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "picture",
            loc: { start: 2541, end: 2548 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Picture",
                loc: { start: 2550, end: 2557 },
              },
              loc: { start: 2550, end: 2557 },
            },
            loc: { start: 2550, end: 2558 },
          },
          directives: [],
          loc: { start: 2541, end: 2558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2561, end: 2572 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2574, end: 2585 },
              },
              loc: { start: 2574, end: 2585 },
            },
            loc: { start: 2574, end: 2586 },
          },
          directives: [],
          loc: { start: 2561, end: 2586 },
        },
      ],
      loc: { start: 2497, end: 2588 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: {
        kind: "Name",
        value: "BoundingBox",
        loc: { start: 2597, end: 2608 },
      },
      directives: [],
      loc: { start: 2590, end: 2608 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PartyInput",
        loc: { start: 2616, end: 2626 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2631, end: 2633 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 2635, end: 2637 },
            },
            loc: { start: 2635, end: 2637 },
          },
          directives: [],
          loc: { start: 2631, end: 2637 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2640, end: 2649 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2651, end: 2655 },
              },
              loc: { start: 2651, end: 2655 },
            },
            loc: { start: 2651, end: 2656 },
          },
          directives: [],
          loc: { start: 2640, end: 2656 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "endDate",
            loc: { start: 2659, end: 2666 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Date",
                loc: { start: 2668, end: 2672 },
              },
              loc: { start: 2668, end: 2672 },
            },
            loc: { start: 2668, end: 2673 },
          },
          directives: [],
          loc: { start: 2659, end: 2673 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 2676, end: 2684 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2686, end: 2692 },
              },
              loc: { start: 2686, end: 2692 },
            },
            loc: { start: 2686, end: 2693 },
          },
          directives: [],
          loc: { start: 2676, end: 2693 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "locationWidgetSrc",
            loc: { start: 2696, end: 2713 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2715, end: 2721 },
            },
            loc: { start: 2715, end: 2721 },
          },
          directives: [],
          loc: { start: 2696, end: 2721 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "roomsAvailable",
            loc: { start: 2724, end: 2738 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2740, end: 2743 },
              },
              loc: { start: 2740, end: 2743 },
            },
            loc: { start: 2740, end: 2744 },
          },
          directives: [],
          loc: { start: 2724, end: 2744 },
        },
      ],
      loc: { start: 2610, end: 2746 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureInput",
        loc: { start: 2754, end: 2766 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2771, end: 2775 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2777, end: 2783 },
              },
              loc: { start: 2777, end: 2783 },
            },
            loc: { start: 2777, end: 2784 },
          },
          directives: [],
          loc: { start: 2771, end: 2784 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "partyId",
            loc: { start: 2787, end: 2794 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2796, end: 2798 },
              },
              loc: { start: 2796, end: 2798 },
            },
            loc: { start: 2796, end: 2799 },
          },
          directives: [],
          loc: { start: 2787, end: 2799 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 2802, end: 2806 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "File",
                loc: { start: 2808, end: 2812 },
              },
              loc: { start: 2808, end: 2812 },
            },
            loc: { start: 2808, end: 2813 },
          },
          directives: [],
          loc: { start: 2802, end: 2813 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "tags",
            loc: { start: 2816, end: 2820 },
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
                  loc: { start: 2823, end: 2838 },
                },
                loc: { start: 2823, end: 2838 },
              },
              loc: { start: 2823, end: 2839 },
            },
            loc: { start: 2822, end: 2840 },
          },
          directives: [],
          loc: { start: 2816, end: 2840 },
        },
      ],
      loc: { start: 2748, end: 2842 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PictureTagInput",
        loc: { start: 2850, end: 2865 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 2870, end: 2876 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2878, end: 2880 },
              },
              loc: { start: 2878, end: 2880 },
            },
            loc: { start: 2878, end: 2881 },
          },
          directives: [],
          loc: { start: 2870, end: 2881 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "boundingBox",
            loc: { start: 2884, end: 2895 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BoundingBox",
                loc: { start: 2897, end: 2908 },
              },
              loc: { start: 2897, end: 2908 },
            },
            loc: { start: 2897, end: 2909 },
          },
          directives: [],
          loc: { start: 2884, end: 2909 },
        },
      ],
      loc: { start: 2844, end: 2911 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 2918, end: 2927 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2932, end: 2934 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2936, end: 2938 },
              },
              loc: { start: 2936, end: 2938 },
            },
            loc: { start: 2936, end: 2939 },
          },
          directives: [],
          loc: { start: 2932, end: 2939 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "party",
            loc: { start: 2942, end: 2947 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Party",
                loc: { start: 2949, end: 2954 },
              },
              loc: { start: 2949, end: 2954 },
            },
            loc: { start: 2949, end: 2955 },
          },
          directives: [],
          loc: { start: 2942, end: 2955 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dates",
            loc: { start: 2958, end: 2963 },
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
                    loc: { start: 2966, end: 2970 },
                  },
                  loc: { start: 2966, end: 2970 },
                },
                loc: { start: 2966, end: 2971 },
              },
              loc: { start: 2965, end: 2972 },
            },
            loc: { start: 2965, end: 2973 },
          },
          directives: [],
          loc: { start: 2958, end: 2973 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "room",
            loc: { start: 2976, end: 2980 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RoomStatus",
              loc: { start: 2982, end: 2992 },
            },
            loc: { start: 2982, end: 2992 },
          },
          directives: [],
          loc: { start: 2976, end: 2992 },
        },
      ],
      loc: { start: 2913, end: 2994 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "RoomStatus",
        loc: { start: 3001, end: 3011 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "REQUESTED",
            loc: { start: 3016, end: 3025 },
          },
          directives: [],
          loc: { start: 3016, end: 3025 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GRANTED",
            loc: { start: 3028, end: 3035 },
          },
          directives: [],
          loc: { start: 3028, end: 3035 },
        },
      ],
      loc: { start: 2996, end: 3037 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 3050, end: 3055 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 3060, end: 3062 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 3064, end: 3068 },
            },
            loc: { start: 3064, end: 3068 },
          },
          directives: [],
          loc: { start: 3060, end: 3068 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "users",
            loc: { start: 3071, end: 3076 },
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
                    loc: { start: 3079, end: 3083 },
                  },
                  loc: { start: 3079, end: 3083 },
                },
                loc: { start: 3079, end: 3084 },
              },
              loc: { start: 3078, end: 3085 },
            },
            loc: { start: 3078, end: 3086 },
          },
          directives: [],
          loc: { start: 3071, end: 3086 },
        },
      ],
      loc: { start: 3038, end: 3088 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 3102, end: 3110 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 3115, end: 3123 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userName",
                loc: { start: 3124, end: 3132 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3134, end: 3140 },
                  },
                  loc: { start: 3134, end: 3140 },
                },
                loc: { start: 3134, end: 3141 },
              },
              directives: [],
              loc: { start: 3124, end: 3141 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3143, end: 3148 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3150, end: 3156 },
                  },
                  loc: { start: 3150, end: 3156 },
                },
                loc: { start: 3150, end: 3157 },
              },
              directives: [],
              loc: { start: 3143, end: 3157 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 3159, end: 3167 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3169, end: 3175 },
                },
                loc: { start: 3169, end: 3175 },
              },
              directives: [],
              loc: { start: 3159, end: 3175 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterResponse",
                loc: { start: 3178, end: 3194 },
              },
              loc: { start: 3178, end: 3194 },
            },
            loc: { start: 3178, end: 3195 },
          },
          directives: [],
          loc: { start: 3115, end: 3195 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyRegisterOptions",
            loc: { start: 3198, end: 3228 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3229, end: 3235 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3237, end: 3243 },
                  },
                  loc: { start: 3237, end: 3243 },
                },
                loc: { start: 3237, end: 3244 },
              },
              directives: [],
              loc: { start: 3229, end: 3244 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3247, end: 3251 },
              },
              loc: { start: 3247, end: 3251 },
            },
            loc: { start: 3247, end: 3252 },
          },
          directives: [],
          loc: { start: 3198, end: 3252 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "registerPasskey",
            loc: { start: 3255, end: 3270 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3271, end: 3277 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3279, end: 3285 },
                  },
                  loc: { start: 3279, end: 3285 },
                },
                loc: { start: 3279, end: 3286 },
              },
              directives: [],
              loc: { start: 3271, end: 3286 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3288, end: 3292 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3294, end: 3300 },
                  },
                  loc: { start: 3294, end: 3300 },
                },
                loc: { start: 3294, end: 3301 },
              },
              directives: [],
              loc: { start: 3288, end: 3301 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3303, end: 3311 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3313, end: 3317 },
                  },
                  loc: { start: 3313, end: 3317 },
                },
                loc: { start: 3313, end: 3318 },
              },
              directives: [],
              loc: { start: 3303, end: 3318 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "RegisterDeviceResponse",
                loc: { start: 3321, end: 3343 },
              },
              loc: { start: 3321, end: 3343 },
            },
            loc: { start: 3321, end: 3344 },
          },
          directives: [],
          loc: { start: 3255, end: 3344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "generatePasskeyLoginOptions",
            loc: { start: 3347, end: 3374 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 3375, end: 3381 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 3383, end: 3389 },
                },
                loc: { start: 3383, end: 3389 },
              },
              directives: [],
              loc: { start: 3375, end: 3389 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JSON",
                loc: { start: 3392, end: 3396 },
              },
              loc: { start: 3392, end: 3396 },
            },
            loc: { start: 3392, end: 3397 },
          },
          directives: [],
          loc: { start: 3347, end: 3397 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPasskey",
            loc: { start: 3400, end: 3412 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "response",
                loc: { start: 3413, end: 3421 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JSON",
                    loc: { start: 3423, end: 3427 },
                  },
                  loc: { start: 3423, end: 3427 },
                },
                loc: { start: 3423, end: 3428 },
              },
              directives: [],
              loc: { start: 3413, end: 3428 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "LoginResponse",
                loc: { start: 3431, end: 3444 },
              },
              loc: { start: 3431, end: 3444 },
            },
            loc: { start: 3431, end: 3445 },
          },
          directives: [],
          loc: { start: 3400, end: 3445 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginPassword",
            loc: { start: 3448, end: 3461 },
          },
          arguments: [
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
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3488, end: 3494 },
                  },
                  loc: { start: 3488, end: 3494 },
                },
                loc: { start: 3488, end: 3495 },
              },
              directives: [],
              loc: { start: 3478, end: 3495 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3498, end: 3510 },
              },
              loc: { start: 3498, end: 3510 },
            },
            loc: { start: 3498, end: 3511 },
          },
          directives: [],
          loc: { start: 3448, end: 3511 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sendMagicLink",
            loc: { start: 3514, end: 3527 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 3528, end: 3533 },
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
              loc: { start: 3528, end: 3542 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3545, end: 3552 },
              },
              loc: { start: 3545, end: 3552 },
            },
            loc: { start: 3545, end: 3553 },
          },
          directives: [],
          loc: { start: 3514, end: 3553 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "loginMagicLink",
            loc: { start: 3556, end: 3570 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "magicLinkId",
                loc: { start: 3571, end: 3582 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3584, end: 3590 },
                  },
                  loc: { start: 3584, end: 3590 },
                },
                loc: { start: 3584, end: 3591 },
              },
              directives: [],
              loc: { start: 3571, end: 3591 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3594, end: 3606 },
              },
              loc: { start: 3594, end: 3606 },
            },
            loc: { start: 3594, end: 3607 },
          },
          directives: [],
          loc: { start: 3556, end: 3607 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshLogin",
            loc: { start: 3610, end: 3622 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "refreshToken",
                loc: { start: 3623, end: 3635 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3637, end: 3643 },
                  },
                  loc: { start: 3637, end: 3643 },
                },
                loc: { start: 3637, end: 3644 },
              },
              directives: [],
              loc: { start: 3623, end: 3644 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthResponse",
                loc: { start: 3647, end: 3659 },
              },
              loc: { start: 3647, end: 3659 },
            },
            loc: { start: 3647, end: 3660 },
          },
          directives: [],
          loc: { start: 3610, end: 3660 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateAuthDevice",
            loc: { start: 3663, end: 3679 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3680, end: 3682 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3684, end: 3686 },
                  },
                  loc: { start: 3684, end: 3686 },
                },
                loc: { start: 3684, end: 3687 },
              },
              directives: [],
              loc: { start: 3680, end: 3687 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 3689, end: 3693 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 3695, end: 3701 },
                  },
                  loc: { start: 3695, end: 3701 },
                },
                loc: { start: 3695, end: 3702 },
              },
              directives: [],
              loc: { start: 3689, end: 3702 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3705, end: 3715 },
              },
              loc: { start: 3705, end: 3715 },
            },
            loc: { start: 3705, end: 3716 },
          },
          directives: [],
          loc: { start: 3663, end: 3716 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteAuthDevice",
            loc: { start: 3719, end: 3735 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 3736, end: 3738 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 3740, end: 3742 },
                  },
                  loc: { start: 3740, end: 3742 },
                },
                loc: { start: 3740, end: 3743 },
              },
              directives: [],
              loc: { start: 3736, end: 3743 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 3746, end: 3756 },
              },
              loc: { start: 3746, end: 3756 },
            },
            loc: { start: 3746, end: 3757 },
          },
          directives: [],
          loc: { start: 3719, end: 3757 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProfile",
            loc: { start: 3760, end: 3773 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 3774, end: 3779 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProfileInput",
                    loc: { start: 3781, end: 3793 },
                  },
                  loc: { start: 3781, end: 3793 },
                },
                loc: { start: 3781, end: 3794 },
              },
              directives: [],
              loc: { start: 3774, end: 3794 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3797, end: 3801 },
              },
              loc: { start: 3797, end: 3801 },
            },
            loc: { start: 3797, end: 3802 },
          },
          directives: [],
          loc: { start: 3760, end: 3802 },
        },
      ],
      loc: { start: 3090, end: 3804 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Attending",
        loc: { start: 3818, end: 3827 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3832, end: 3836 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3838, end: 3842 },
              },
              loc: { start: 3838, end: 3842 },
            },
            loc: { start: 3838, end: 3843 },
          },
          directives: [],
          loc: { start: 3832, end: 3843 },
        },
      ],
      loc: { start: 3806, end: 3845 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthResponse",
        loc: { start: 3852, end: 3864 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3869, end: 3874 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 3876, end: 3879 },
              },
              loc: { start: 3876, end: 3879 },
            },
            loc: { start: 3876, end: 3880 },
          },
          directives: [],
          loc: { start: 3869, end: 3880 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 3883, end: 3895 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3897, end: 3903 },
              },
              loc: { start: 3897, end: 3903 },
            },
            loc: { start: 3897, end: 3904 },
          },
          directives: [],
          loc: { start: 3883, end: 3904 },
        },
      ],
      loc: { start: 3847, end: 3906 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterResponse",
        loc: { start: 3913, end: 3929 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 3934, end: 3938 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 3940, end: 3944 },
              },
              loc: { start: 3940, end: 3944 },
            },
            loc: { start: 3940, end: 3945 },
          },
          directives: [],
          loc: { start: 3934, end: 3945 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 3948, end: 3953 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3955, end: 3961 },
              },
              loc: { start: 3955, end: 3961 },
            },
            loc: { start: 3955, end: 3962 },
          },
          directives: [],
          loc: { start: 3948, end: 3962 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 3965, end: 3977 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3979, end: 3985 },
              },
              loc: { start: 3979, end: 3985 },
            },
            loc: { start: 3979, end: 3986 },
          },
          directives: [],
          loc: { start: 3965, end: 3986 },
        },
      ],
      loc: { start: 3908, end: 3988 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "LoginResponse",
        loc: { start: 3995, end: 4008 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "credentialID",
            loc: { start: 4013, end: 4025 },
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
                    loc: { start: 4028, end: 4031 },
                  },
                  loc: { start: 4028, end: 4031 },
                },
                loc: { start: 4028, end: 4032 },
              },
              loc: { start: 4027, end: 4033 },
            },
            loc: { start: 4027, end: 4034 },
          },
          directives: [],
          loc: { start: 4013, end: 4034 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4037, end: 4042 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "JWT",
                loc: { start: 4044, end: 4047 },
              },
              loc: { start: 4044, end: 4047 },
            },
            loc: { start: 4044, end: 4048 },
          },
          directives: [],
          loc: { start: 4037, end: 4048 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "refreshToken",
            loc: { start: 4051, end: 4063 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4065, end: 4071 },
              },
              loc: { start: 4065, end: 4071 },
            },
            loc: { start: 4065, end: 4072 },
          },
          directives: [],
          loc: { start: 4051, end: 4072 },
        },
      ],
      loc: { start: 3990, end: 4074 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegisterDeviceResponse",
        loc: { start: 4081, end: 4103 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 4108, end: 4113 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4115, end: 4121 },
              },
              loc: { start: 4115, end: 4121 },
            },
            loc: { start: 4115, end: 4122 },
          },
          directives: [],
          loc: { start: 4108, end: 4122 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "device",
            loc: { start: 4125, end: 4131 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthDevice",
                loc: { start: 4133, end: 4143 },
              },
              loc: { start: 4133, end: 4143 },
            },
            loc: { start: 4133, end: 4144 },
          },
          directives: [],
          loc: { start: 4125, end: 4144 },
        },
      ],
      loc: { start: 4076, end: 4146 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 4153, end: 4157 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4162, end: 4164 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4166, end: 4168 },
              },
              loc: { start: 4166, end: 4168 },
            },
            loc: { start: 4166, end: 4169 },
          },
          directives: [],
          loc: { start: 4162, end: 4169 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4172, end: 4176 },
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
          loc: { start: 4172, end: 4185 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4188, end: 4199 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4201, end: 4207 },
              },
              loc: { start: 4201, end: 4207 },
            },
            loc: { start: 4201, end: 4208 },
          },
          directives: [],
          loc: { start: 4188, end: 4208 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4211, end: 4216 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4218, end: 4224 },
              },
              loc: { start: 4218, end: 4224 },
            },
            loc: { start: 4218, end: 4225 },
          },
          directives: [],
          loc: { start: 4211, end: 4225 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4228, end: 4234 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4236, end: 4242 },
              },
              loc: { start: 4236, end: 4242 },
            },
            loc: { start: 4236, end: 4243 },
          },
          directives: [],
          loc: { start: 4228, end: 4243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "avatarUrl",
            loc: { start: 4246, end: 4255 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4257, end: 4263 },
            },
            loc: { start: 4257, end: 4263 },
          },
          directives: [],
          loc: { start: 4246, end: 4263 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "devices",
            loc: { start: 4266, end: 4273 },
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
                    loc: { start: 4276, end: 4286 },
                  },
                  loc: { start: 4276, end: 4286 },
                },
                loc: { start: 4276, end: 4287 },
              },
              loc: { start: 4275, end: 4288 },
            },
            loc: { start: 4275, end: 4289 },
          },
          directives: [],
          loc: { start: 4266, end: 4289 },
        },
      ],
      loc: { start: 4148, end: 4291 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProfileInput",
        loc: { start: 4299, end: 4311 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4316, end: 4318 } },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ID",
              loc: { start: 4320, end: 4322 },
            },
            loc: { start: 4320, end: 4322 },
          },
          directives: [],
          loc: { start: 4316, end: 4322 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4325, end: 4329 },
          },
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
          loc: { start: 4325, end: 4338 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4341, end: 4352 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4354, end: 4360 },
              },
              loc: { start: 4354, end: 4360 },
            },
            loc: { start: 4354, end: 4361 },
          },
          directives: [],
          loc: { start: 4341, end: 4361 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 4364, end: 4369 },
          },
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
          loc: { start: 4364, end: 4378 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "avatar",
            loc: { start: 4381, end: 4387 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "File",
              loc: { start: 4389, end: 4393 },
            },
            loc: { start: 4389, end: 4393 },
          },
          directives: [],
          loc: { start: 4381, end: 4393 },
        },
      ],
      loc: { start: 4293, end: 4395 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthDevice",
        loc: { start: 4402, end: 4412 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4417, end: 4419 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4421, end: 4423 },
              },
              loc: { start: 4421, end: 4423 },
            },
            loc: { start: 4421, end: 4424 },
          },
          directives: [],
          loc: { start: 4417, end: 4424 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4427, end: 4431 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4433, end: 4439 },
              },
              loc: { start: 4433, end: 4439 },
            },
            loc: { start: 4433, end: 4440 },
          },
          directives: [],
          loc: { start: 4427, end: 4440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 4443, end: 4452 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4454, end: 4462 },
            },
            loc: { start: 4454, end: 4462 },
          },
          directives: [],
          loc: { start: 4443, end: 4462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUsedAt",
            loc: { start: 4465, end: 4475 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 4477, end: 4485 },
            },
            loc: { start: 4477, end: 4485 },
          },
          directives: [],
          loc: { start: 4465, end: 4485 },
        },
      ],
      loc: { start: 4397, end: 4487 },
    },
  ],
  loc: { start: 0, end: 4488 },
} as unknown as DocumentNode;
