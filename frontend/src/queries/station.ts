//서버에서 async를 이용하여 데이터를 가져올 때 오류처리 등등을 도와주는 라이브러리
import { useQuery } from "@tanstack/react-query";
import { fetchStation } from "../api/station";

export const useQueryStation = () => {
  return useQuery({
    queryKey: ["station"],
    queryFn: fetchStation
  })
};