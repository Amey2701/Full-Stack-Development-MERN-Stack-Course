// ====================================================
// Interface - Blueprint
// ====================================================

interface IUser {
  id: number;
  name: string;
  email: string;
  address?: string | null;
  skills: string[];
}

const userDetails: IUser = {
  id: 1212,
  name: "Rahul",
  email: "rahul@gmail.com",
  skills: ["JS", "React", "Ts"]
};
