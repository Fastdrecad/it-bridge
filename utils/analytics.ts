export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export const pageview = () => {
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const event = (name: string, options = {}) => {
  if (window.fbq) {
    window.fbq("track", name, options);
  }
};
