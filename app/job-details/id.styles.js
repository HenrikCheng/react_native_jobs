import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
    position: "fixed",
    bottom: 0,
    width: "100%", // Make sure the container takes full width
    alignItems: "center", // Center the button horizontally
  },
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignSelf: "center", // Center the button horizontally within the container
  },
  btnText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: "#C3BFCC",
  },
});

export default styles;
