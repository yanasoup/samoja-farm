import { cartActions } from "./cart-slice";
import { resetSession } from "@/lib/helper";
import { uiActions } from "./ui-slice";
import { orderActions } from "./order-slice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCartData = (sessionId) => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.setLoading({ isLoading: true, loadingMessage: "Memuat..." })
    // );

    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Requesting...",
    //       message: "Getting cart data...",
    //     })
    //   );

    const fetchData = async () => {
      const response = await fetch(API_URL + "/keranjang/" + sessionId);

      if (!response.ok) {
        throw new Error("gagal menghubungi server database..");
      }
      const data = await response.json();
      return data;
    };

    try {
      const dataKeranjang = await fetchData();
      const cartState = JSON.parse(dataKeranjang.data[0].items);
      dispatch(
        cartActions.replaceCart({
          items: cartState.items || [],
          totalQuantity: cartState.totalQuantity || 0,
          buyerInfo: cartState.buyerInfo || {},
          id: dataKeranjang.data[0].id,
        })
      );
      // dispatch(
      //   uiActions.setLoading({ isLoading: false, loadingMessage: "done" })
      // );
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
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setLoading({
        isLoading: true,
        loadingMessage: "Mohon tunggu...",
      })
    );

    const sendRequest = async () => {
      const url = cart.state.id
        ? API_URL + "/keranjang/" + cart.state.id
        : API_URL + "/keranjang";

      const method = cart.state.id ? "PUT" : "POST";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: JSON.stringify({
            ...cart.state,
            changed: false,
          }),
          status: cart.status,
          session_id: cart.session_id,
        }),
      });

      if (!response.ok) {
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Gagal" })
        );

        throw new Error("gagal mengirim data keranjang");
      }

      const data = await response.json();
      return data;
    };

    try {
      await sendRequest().then((resPost) => {
        dispatch(cartActions.setCartId(resPost.data.id));
        dispatch(cartActions.updateChangeState(false));
        if (cart.status === 1) {
          dispatch(cartActions.resetCartData());
          dispatch(orderActions.setOrderSaved(true));
          resetSession();
        }
        dispatch(
          uiActions.setLoading({ isLoading: false, loadingMessage: "Sukses" })
        );
      });

      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Sending cart data success!",
      //   })
      // );
    } catch (error) {
      alert("data keranjang gagal disimpan!." + error);
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Sending cart data failed!.",
      //   })
      // );
    }
  };
};
