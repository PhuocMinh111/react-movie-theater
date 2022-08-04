import { request } from "./axios";

export const fetchMovieListApi = () => {
  return request({
    url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET"
  });
};

export const fetchSingleMovieApi = (id) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET"
  });
};