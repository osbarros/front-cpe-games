export const TOKEN_KEY = "@cpe-games-Token";
export const USER_KEY = "@cpe-games-user";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getUser = () => sessionStorage.getItem(USER_KEY);
export const login = (token, user) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  sessionStorage.setItem("@cpe-games-jogos", JSON.stringify([{jogo: ""}]));
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
  sessionStorage.removeItem("@cpe-games-jogos");
}
