import axios from "axios";

interface Station {
  id: number;
  name: string;
}

export const fetchStation = async () => {
  const res = await axios.get<Station[]>("/api/station");
  return res.data;
};
