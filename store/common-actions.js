import { uiActions } from "./ui-slice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const submitContactUsMessage = (formData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setLoading({
        isLoading: true,
        loadingMessage: "Mengirim pesan...",
      })
    );

    const sendRequest = async () => {
      const url = API_URL + "/inquiry";

      const method = "POST";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("gagal mengirim data");
      }

      const data = await response.json();
      return data;
    };

    try {
      await sendRequest().then((resPost) => {
        dispatch(uiActions.setInquirySendSuccess(true));
        dispatch(
          uiActions.setLoading({
            isLoading: false,
            loadingMessage: "Pesan terkirim",
          })
        );
      });
    } catch (error) {
      alert("response error! : " + error);
    }
  };
};

export const getCities = async () => {
  const response = await fetch(API_URL + "/regency");

  if (!response.ok) {
    throw new Error("gagal menghubungi server api..");
  }
  const data = await response.json();
  return data.data;
};

export const getProvinces = async () => {
  const response = await fetch(API_URL + "/province");

  if (!response.ok) {
    throw new Error("gagal menghubungi server api..");
  }
  const data = await response.json();
  return data.data;
};
