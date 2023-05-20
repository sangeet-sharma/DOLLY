const mysql = require("./db_connection/connection");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/signup", (req, resp) => {
  const sql = "INSERT INTO login(`name`,`email`,`password`) VALUES(?,?,?)";
  mysql.query(
    sql,
    [req.body.name, req.body.email, req.body.password],
    (error, result) => {
      if (error) {
        return resp.json("Error", error);
      } else {
        return resp.json(result);
      }
    }
  );
});

app.post("/login", (req, resp) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password =?";
  mysql.query(sql, [req.body.email, req.body.password], (error, result) => {
    if (error) {
      return resp.json("error");
    }
    if (result.length > 0) {
      return resp.json({ status: "login successfully" });
    } else {
      return resp.json({ Message: "login Failed..." });
    }
  });
});

app.post("/postCategory", (req, resp) => {
  const sql =
    "INSERT INTO category(`name`,`roomtype`,`roomfacility`,`checkInDate`,`checkOutDate`) VALUES(?,?,?,?,?)";
  mysql.query(
    sql,
    [
      req.body.name,
      req.body.roomtype,
      req.body.roomfacility,
      req.body.checkInDate,
      req.body.checkOutDate,
    ],
    (error, result) => {
      if (error) {
        return resp.json(error);
      } else {
        return resp.json(result);
      }
    }
  );
});

app.post("/AddRoom/Post", upload.single("file"), (req, resp) => {
  var price = req.body.price;
  var roomType = req.body.roomType;
  var roomCapacity = req.body.roomCapacity;
  var Facility = req.body.Facility;
  var Feature = req.body.Feature;
  var Food = req.body.Food;
  var file = req.file.filename;

  var query = `INSERT INTO addroom (price,roomType,roomCapacity,Facility,Feature,Food,file)
     VALUES("${price}","${roomType}",
     "${roomCapacity}","${Facility}","${Feature}","${Food}","${file}")`;

  mysql.query(query, (error, result) => {
    if (error) {
      return resp.json(error);
    } else {
      return resp.json(result);
    }
  });
});

app.get("/TotalRoom/Get", (req, resp) => {
  const sql = "SELECT * FROM addroom";
  mysql.query(sql, (error, result) => {
    if (error) {
      return resp.json(error);
    } else {
      return resp.json(result);
    }
  });
});

app.delete("/DeleteRoom/:id", (req, resp) => {
  const id = req.params.id;

  const sql = "DELETE FROM addroom WHERE id = ?";
  mysql.query(sql, [id], (error, result) => {
    if (error) {
      return resp.json(error);
    } else {
      return resp.json(result);
    }
  });
});

app.get("/UpadateRoom/:id", (req, resp) => {
  const sql = "SELECT * FROM addroom WHERE id = ?";
  const id = req.params.id;
  mysql.query(sql, [id], (error, result) => {
    if (error) {
      return resp.json(error);
    } else {
      return resp.json(result);
    }
  });
});
// app.post("/getroombyid", (req, resp) => {
//   const sql = "SELECT * FROM addroom WHERE id = ?";
//   const id = req.body.id;
//   mysql.query(sql, [id],(error, result) => {
//     if (error)
//     {
//   return resp.json(error);
//     }
// else
//     {
// return resp.json(result);
//     }
//   });
// });
app.post("/getroombyid", (req, res) => {
  const { roomid } = req.body;

  // Query the database with the received ID
  const sql = "SELECT * FROM addroom WHERE id = ?";
  mysql.query(sql, [roomid], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch room data" });
    } else {
      res.json(result);
    }
  });
});

// app.get("/getroombyid/:id", (req, resp) => {
//   const sql = "SELECT * FROM addroom WHERE id = ?";
//   const id = req.params.id;
//   mysql.query(sql, [id], (error, result) => {
//     if (error) {
//       return resp.json(error);
//     } else {
//       return resp.json(result);
//     }
//   });
// });
// app.post("/getroombyid",(req,resp)=>{
//   const id = req.body.roomid
//   const sql= "SELECT * FROM addroom WHERE id = ?";
//   mysql.query(sql,[id],(error,result)=>{
//     if(error)
//     {
//     return resp.json(error);
//     }
//     else
//     {
//       return resp.json(result);
//     }
// });
// });

app.put("/update/UpadateRoom/:id", (req, resp) => {
  var id = req.params.id;
  var price = req.body.price;
  var roomType = req.body.roomType;
  var roomCapacity = req.body.roomCapacity;
  var Facility = req.body.Facility;
  var Feature = req.body.Feature;
  var Food = req.body.Food;

  mysql.query(`UPDATE addroom SET price`);
});
// ********************admin login api**********
app.post("/Adminlogin", (req, resp) => {
  const sql = "SELECT * FROM adminlogin WHERE adminid = ? AND adminpassword =?";
  mysql.query(
    sql,
    [req.body.adminid, req.body.adminpassword],
    (error, result) => {
      if (error) {
        return resp.json("error");
      }
      if (result.length > 0) {
        return resp.json({ status: "login successfully" });
      } else {
        return resp.json({ Message: "login Failed..." });
      }
    }
  );
});

app.put("/roomUpdate/:id", (req, resp) => {
  var id = req.params.id;
  var price = req.body.price;
  var roomType = req.body.roomType;
  var roomCapacity = req.body.roomCapacity;
  var Facility = req.body.Facility;
  var Feature = req.body.Feature;
  var Food = req.body.Food;

  mysql.query(
    `Update addroom SET price=?,roomType=?,roomCapacity=?,Facility=?,Feature=?,Food=?
  where id='${id}'`,
    [price, roomType, roomCapacity, Facility, Feature, Food],
    (error, result) => {
      if (error) {
        return resp.json(error);
      } else {
        return resp.json(result);
      }
    }
  );
});

app.listen(4000);
