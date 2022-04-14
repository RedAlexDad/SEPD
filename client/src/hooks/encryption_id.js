export const useAuth = () => {
  window.localStorage.setItem("loginToken", data.token);

  let JWTPayloadB64 = data.token.split(".")[1];
  let JWTPayloadSTR = decodeURIComponent(escape(window.atob(JWTPayloadB64)));
  let JWTPayloadJSON = JSON.parse(JWTPayloadSTR);

  console.log(JWTPayloadB64, "->", JWTPayloadSTR, "->", JWTPayloadJSON);
  // Для дальнейшего удобства сохраняем тип нашего пользователя
  window.localStorage.setItem("loginType", JWTPayloadJSON.user_type);

  // Сохраняем наш токен, чтобы в дальнейшем прикладывать его к нашим запросам, как удостоверение
  window.localStorage.setItem("loginToken", data.token);
};
