export const toastDesign = (bg_Theme) => {
  const alertToast = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: bg_Theme,
  };

  return alertToast;
};
