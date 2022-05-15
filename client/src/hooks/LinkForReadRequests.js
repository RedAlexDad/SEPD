import React, { useState, useEffect, useCallback, useContext } from "react";
// Подключаем картинку
import axios from "axios";

// Для переключения других веб страниц
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";

import { useAuth } from "./auth.hook";
import { useHttp } from "./http.hook";
import { useMessage } from "./message.hook";

const storageName = "userDataRequests";

export const LinkForReadRequests = () => {

  const [post, setPost] = useState([]);

  const [ready, setReady] = useState(false);
  // ФИО и группа пользователя
  const { id, family, name, fatherland, group, myID, id_request, num_req, post_user  } = useAuth();
  // Данные
  const [build, setBuild] = useState(null);
  const [auid, setAuid] = useState(null);
  const [dis, setDis] = useState(null);
  const [sched, setSched] = useState(null);
  const [datime, setDatime] = useState(null);

  useEffect(() => {
    const res = axios
      // .get("http://localhost:4000/request_tasks")
      // .get("/api/auth/getInfoAll")
      .post("/api/auth/getInfoFIO", { family, name, fatherland })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("res.data: ", res.data);
    let INFO_USER = res.data;
    return { INFO_USER };
  }, []);


  const getInfo = useCallback(
    (building, auditorium, discipline, schedule, data_time) => {
      setBuild(building)
      setAuid(auditorium)
      setDis(discipline)
      setSched(schedule)
      setDatime(data_time)

      localStorage.setItem( 
        storageName, 
        JSON.stringify({
          userId: id,
          post_user: post_user,

          family: family,
          name: name,
          fatherland: fatherland,
          group: group,

          myID: myID,

          id_request: id_request,

          num_req: num_req,

          build: building, 
          auid: auditorium, 
          dis: discipline, 
          sched: schedule, 
          datime: data_time
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    setBuild(null)
    setAuid(null)
    setDis(null)
    setSched(null)
    setDatime(null)

    localStorage.removeItem(storageName);
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    // console.log("data:", data);

    if (data) {
      getInfo( data.building, data.auditorium, data.discipline, data.schedule, data.data_time);
    }
    
    setReady(true);
  }, [getInfo]);

  return { build, auid, dis, sched, datime };
};
