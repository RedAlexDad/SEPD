import { useState, useCallback, useEffect } from "react";

const storageName = "userData";
let $dataDB = [];

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const [family, setFamily] = useState(null);
  const [name, setName] = useState(null);
  const [fatherland, setFatherland] = useState(null);
  const [group, setGroup] = useState(null);

  const login = useCallback((jwtToken, id, familyS, nameS, fatherlandS, groupS) => {
    setToken(jwtToken);
    setUserId(id);
    setFamily(familyS);
    setName(nameS);
    setFatherland(fatherlandS);
    setGroup(groupS);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
        family: familyS,
        name: nameS,
        fatherland: fatherlandS,
        group: groupS,
      })
    );
    

    // console.log("jwtToken: ", jwtToken)
    // console.log("id: ", id);
    // console.log("name: ", name);
    // console.log("family: ", family);
    // console.log("fatherland: ", fatherland);
    // console.log("group: ", group);
    // console.log(id)
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setFamily(null);
    setName(null);
    setFatherland(null);
    setGroup(null);

    localStorage.removeItem(storageName);
  });

  useEffect(() => {
    $dataDB = JSON.parse(localStorage.getItem(storageName));
     console.log("storageName: ", $dataDB)
    // console.log("data ", data)
    // console.log("data.token ", data.token)

    if ($dataDB && $dataDB.token) {
      login($dataDB.token, $dataDB.userId);
      // console.log("data.token ", data.token)
      // console.log("data.userId ", data.userId)
      // console.log("userId ", userId)
    }
    // console.log("data.token ", data.token)
    // console.log("data.userId ", data.userId)

    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready, family, name, fatherland, group};
};

export {$dataDB}