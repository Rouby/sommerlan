import { Attending, Party, Picture, PictureTag } from "../../data";

export type PartyMapper = Party;

export type AttendingMapper = Attending;

export type PictureMapper = Picture;

export type PictureTagMapper = PictureTag & {
  id: string;
  picture: Picture;
};
