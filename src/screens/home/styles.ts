import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 50,
    flex: 1,
  },
  img: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 50,
  },
  form: {
    width: " 100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 56,
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,

    marginRight: 8,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  content__quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  content__text: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  title__created: {
    color: "#4EA8DE",
  },
  subtitle: {
    marginLeft: 10,
    backgroundColor: "#333333",
    paddingRight: 9,
    paddingLeft: 9,
    borderRadius: 16,
    color: "#fff",
  },
  title__completed: {
    color: "#8284FA",
  },
  img__listEmpty: {
    marginTop: 75,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  content__titles: {
    alignItems: "center",
  },
  title__listEmpty: {
    color: "#808080",
    fontWeight: "bold",
  },
  subtitle__listEmpty: {
    color: "#808080",
  },
});
