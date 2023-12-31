import { ClaimType } from "@sismo-core/sismo-connect-react";

export const claims = [
  {
    groupId: "0x61ca006d72682a6b4a2a2e566be777be", //APE coin holders
    claimType: ClaimType.GTE,
    value: 1,
    isOptional: true,
    isSelectableByUser: true,
  },
  {
    groupId: "0xf002554351fe264d75f59e7fba89c2e6", //pudgy penguins
    claimType: ClaimType.GTE,
    value: 1,
    isOptional: true,
    isSelectableByUser: true,
  },
  {
    groupId: "0x5f4f2e4af0c05a5dbf5e13624b5de706", //liquality ETHDenver event
    claimType: ClaimType.GTE,
    value: 1,
    isOptional: true,
    isSelectableByUser: true,
  },
  {
    groupId: "0x3a49d2e9734722a24b127b610f894639", //zuko dev team
    claimType: ClaimType.GTE,
    value: 1,
    isOptional: true,
    isSelectableByUser: true,
  },
  {
    groupId: "0xc87cf8b9a4e6388e31466768a266b48a", //2nd zuko dev team
    claimType: ClaimType.GTE,
    value: 1,
    isOptional: true,
    isSelectableByUser: true,
  },
];
