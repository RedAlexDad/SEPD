import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  // Токен, для получения идентификации пользователя
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  // Идентификатор пользователя
  const [myID, setmyID] = useState(null);
  // Должность пользователя
  const [post_user, setPostUser] = useState(null);

  // Идентификатор заявления
  const [id_request, setIdRequest] = useState(null);

  // Номер заявления
  const [num_req, setNumberRequest] = useState(null);

  // ФИО и группа пользователя
  const [family, setFamily] = useState(null);
  const [name, setName] = useState(null);
  const [fatherland, setFatherland] = useState(null);
  const [group, setGroup] = useState(null);

  const login = useCallback(
    (jwtToken, id, PosUser, familyS, nameS, fatherlandS, groupS, myIDS, IdReq, numReq) => {
      setToken(jwtToken);
      setUserId(id);
      setPostUser(PosUser)

      setFamily(familyS);
      setName(nameS);
      setFatherland(fatherlandS);
      setGroup(groupS);

      setmyID(myIDS);

      setIdRequest(IdReq);

      setNumberRequest(numReq);

      localStorage.setItem( 
        storageName, 
        JSON.stringify({
          token: jwtToken,
          userId: id,
          post_user: PosUser,

          family: familyS,
          name: nameS,
          fatherland: fatherlandS,
          group: groupS,

          myID: myIDS,

          id_request: IdReq,

          num_req: numReq,
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setPostUser(null);

    setFamily(null);
    setName(null);
    setFatherland(null);
    setGroup(null);

    setmyID(null);

    setIdRequest(null);

    setNumberRequest(null);

    localStorage.removeItem(storageName);
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    // console.log("data:", data);

    if (data && data.token) {
      // console.log("data(auth.hook.js):", data);

      // Расшифровка и получение пользовательского ID
      window.localStorage.setItem("loginToken", data.token);

      let JWTPayloadB64 = data.token.split(".")[1];
      let JWTPayloadSTR = decodeURIComponent(
        escape(window.atob(JWTPayloadB64))
      );
      let JWTPayloadJSON = JSON.parse(JWTPayloadSTR);

      // console.log(JWTPayloadB64, "->", JWTPayloadSTR, "->", JWTPayloadJSON);
      // Для дальнейшего удобства сохраняем тип нашего пользователя
      window.localStorage.setItem("loginType", JWTPayloadJSON.user_type);

      // Сохраняем наш токен, чтобы в дальнейшем прикладывать его к нашим запросам, как удостоверение
      window.localStorage.setItem("loginToken", data.token);

      data.myID = JWTPayloadJSON.id;

      // console.log("data.myID(auth.hook.js):", data.myID);

      login( data.token, data.userId, data.post_user, data.family, data.name, data.fatherland, data.group,  data.myID, data.id_request, data.num_req);
      // login(data.token, data.userId, data.family, data.name, data.fatherland, data.group, data.myID);
    }
    
    setReady(true);
  }, [login]);

  // return { login, logout, token, userId, family, name, fatherland, group, myID};
  return { login, logout, token, family, name, fatherland, group, myID, id_request, num_req, post_user };
};
