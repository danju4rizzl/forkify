export const connectionStatus = () => {
  // Find out if the user is connected
  // If yes then do something to notify the user
  const status = navigator.onLine;
  const notifer = !status ? alert("Offline") : alert("Online");
  return notifer;
};
export const proxy = "https://cors-anywhere.herokuapp.com/";
export const key = "aa44ed5c41f9be14149a486a3dbcb3c2";

// export const key = '462b1cc8d4f2730081462fbc65136320';

// aa44ed5c41f9be14149a486a3dbcb3c2
