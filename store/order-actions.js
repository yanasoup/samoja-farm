import { orderActions } from "./order-slice";
import { uiActions } from "./ui-slice";
import { formatDate } from "@/lib/common";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const confirmOrder = (sessionId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setLoading({
        isLoading: true,
        loadingMessage: "Mohon tunggu...",
      })
    );

    const fetchData = async () => {
      const response = await fetch(API_URL + "/confirm-order/" + sessionId);

      if (!response.ok) {
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Gagal" })
        );
        throw new Error("gagal menghubungi server database..");
      }
      const data = await response.json();
      return data;
    };

    try {
      await fetchData().then((confirmResponse) => {
        dispatch(orderActions.setOrderEmailConfirmed(confirmResponse.success));
        dispatch(orderActions.setOrderConfirm(confirmResponse.success));
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Sukses" })
        );
      });
    } catch (error) {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "fetching cart data failed!.",
      //   })
      // );
    }
  };
};
export const trackOrder = (sessionId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setLoading({ isLoading: true, loadingMessage: "Mencari..." })
    );
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Requesting...",
    //       message: "Getting cart data...",
    //     })
    //   );

    const fetchData = async () => {
      const response = await fetch(API_URL + "/order-trace/" + sessionId);

      if (!response.ok) {
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Gagal" })
        );

        throw new Error("gagal menghubungi server database..");
      }
      const data = await response.json();
      return data;
    };

    try {
      await fetchData().then((resp) => {
        // console.log("then block", resp);
        const newData = [];
        resp.data.map((dt) => {
          // console.log("map block", dt);
          newData.push({
            updated_at: formatDate(dt.updated_at),
            progress: dt.progress,
          });
          // console.log("newData", newData);
        });
        dispatch(orderActions.setOrderTrace(newData));
      });
    } catch (error) {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "fetching cart data failed!.",
      //   })
      // );
    }
    dispatch(
      uiActions.setLoading({ isLoading: false, loadingMessage: "Mencari..." })
    );
  };
};
