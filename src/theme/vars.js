const uiPoint = 5;

const deviceSize = {
  desktop: '768px',
};

const palette = {
  white: '#FFFFFF',
  dark: {
    700: '#4D4D4D',
    800: '#343434',
    900: '#000000',
  },
};

const vars = {
  uiPoint,
  colors: {
    loader_background: palette.dark[700],

    card_background: palette.white,

    slider_arrows_background_hover: palette.dark[900],

    pagination_active_number: palette.dark[900],
  },
  sizes: {
    small: {
      selectWidth: 250,
      selectHeight: 34,

      inputWidth: 240,
      inputHeight: 30,

      card_width: 300,
      card_img_width: 250,
      card_img_height: 170,

      game_img_width: 300,
      game_img_height: 170,
    },
    medium: {
      loader_diameter: 80,
      card_width: 290,

      pagination_width: 400,
    },
  },
  boxShadow: {
    card: '0 0 10px rgba(0,0,0,0.2)',
    card_hover: '0 0 20px rgba(0,0,0,0.3)',
  },
  fonts: {
    h1_size: 25,
    h3_size: 20,
    h4_size: 18,
    p1_size: 16,
    boldWeight: 700,
    semiBoldWeight: 600,
    regularWeight: 400,
  },
  media: {
    desktop: `(min-width: ${deviceSize.desktop})`,
  },
};

export default vars;
