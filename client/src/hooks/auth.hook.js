import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

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
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId, data.family, data.name, data.fatherland, data.group);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, userId, family, name, fatherland, group};
};