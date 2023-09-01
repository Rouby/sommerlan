import { User } from "../../data";

export type UserMapper = User;

export type AuthDeviceMapper = User["devices"][number];
