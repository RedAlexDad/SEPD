const user = require("./user.js");

class requestBuilding {
  async request_post(req, res) {
    try {
      const {
        family,
        name,
        fatherland,
        group,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      } = req.body;

      const post = await user.create({
        family,
        name,
        fatherland,
        group,

        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      });

      console.log(post);
      return res.json(post);
    } catch (error) {
      res.status(500).json({
        message: "ERROR! Проверьте! Тип ошибка: ",
        error: error.message,
      });
      console.log("ERROR! Проверьте!");
      console.log("Тип ошибка: ", error.message);
    }
  }

  async request_get(req, res) {
    user.find()
          .then((users) => res.send(users))
          .catch((err) => res.send(err));
          
    // console.log(post);
    // return res.json(post);
  }
}

module.exports = new requestBuilding();