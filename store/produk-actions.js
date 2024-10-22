import { produkActions } from "./produk-slice";
import { uiActions } from "./ui-slice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(API_URL + "/produk");

      if (!response.ok) {
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Gagal" })
        );

        throw new Error("gagal menghubungi server api..");
      }
      const data = await response.json();
      return data;
    };

    try {
      const respData = await fetchData();
      dispatch(produkActions.setProducts(respData.data));
    } catch (error) {
      dispatch(
        uiActions.setLoading({ isLoading: false, loadingMessage: "Gagal" })
      );

      console.log("e:", error);
    }
  };
};
