const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/csdaiml");




const ResultSchema = new mongoose.Schema({
  name: String,
  url: String
})
const ResultModel = mongoose.model('results', ResultSchema)

const TimetableSchema = new mongoose.Schema({
  name: String,
  url: String
})
const TimetableModel = mongoose.model('timetables', TimetableSchema)

const CallenderSchema = new mongoose.Schema({
  sno: Number,
  academicYear: String,
  course: String,
  attachment: String,
  startDate: String,
  url: String,
})
const CallenderModel = mongoose.model('callenders', CallenderSchema)

const TeachSchema = new mongoose.Schema({
  cover: String,
  name: String,
  work: String,
  url: String,
})
const TeachModel = mongoose.model('teaches', TeachSchema)


const TechSchema = new mongoose.Schema({
  cover: String,
  name: String,
  work: String,
  url: String,

})
const TechModel = mongoose.model('teches', TechSchema)

const EventSchema = new mongoose.Schema({

  img: String,
  title: String,
  description: String,
  time: String,
  day: String,
  monthyear: String,
  url: String,

})
const EventModel = mongoose.model('event', EventSchema)

const AlumniSchema = new mongoose.Schema({

})
const AlumniModel = mongoose.model('alumni', AlumniSchema)

const FestSchema = new mongoose.Schema({

})
const FestModel = mongoose.model('fest', FestSchema)

const CarouselSchema = new mongoose.Schema({
  src: String,
})
const CarouselModel = mongoose.model('carouselimages', CarouselSchema)

const syllabusSchema = new mongoose.Schema({
  id: String,
  coursesName: String,
  courTeacher: [
    {
      y1: [{ name: String, url: String }],
      y2: [{ name: String, url: String }],
      y3: [{ name: String, url: String }],
      y4: [{ name: String, url: String }],
    },
  ],
});

const SyllabusModel = mongoose.model('syllabus', syllabusSchema)

const PartpdfSchema = new mongoose.Schema({
  name: String,
  link: String,
})
const PartpdfModel = mongoose.model('participationpdf', PartpdfSchema)

const PartdataSchema = new mongoose.Schema({}, { strict: false })
const PartdataModel = mongoose.model('participationdata', PartdataSchema)

const PartcolSchema = new mongoose.Schema({
  c1: String,
  c2: String,
  c3: String,
  c4: String,
  c5: String,
  c6: String,
  c7: String,
  c8: String,
  c9: String,
  c10: String,

  c11: String,
  c12: String,
  c13: String,
  c14: String,
  c15: String,
  c16: String,
  c17: String,
  c18: String,
  c19: String,
})
const PartcolModel = mongoose.model('participationcol', PartcolSchema)

const PubpdfSchema = new mongoose.Schema({
  name: String,
  link: String,
})
const PubpdfModel = mongoose.model('publicationpdf', PubpdfSchema)

const PubdataSchema = new mongoose.Schema({
  c1: String,
  c2: Number,
  c3: Number,
  c4: String,
  c5: String,
  c6: String,
  c7: String,
  c8: String,
  c9: String,
  c10: String,

  c11: String,
  c12: String,
  c13: String,
  c14: String,
  c15: String,
  c16: String,
  c17: String,
  c18: String,
  c19: String,
})
const PubdataModel = mongoose.model('publicationdata', PubdataSchema)

const PubcolSchema = new mongoose.Schema({
  c1: String,
  c2: String,
  c3: String,
  c4: String,
  c5: String,
  c6: String,
  c7: String,
  c8: String,
  c9: String,
  c10: String,
  c11: String,
  c12: String,
  c13: String,
  c14: String,
  c15: String,
  c16: String,
  c17: String,
  c18: String,
  c19: String,
})
const PubcolModel = mongoose.model('publicationcol', PubcolSchema)

const acchpdfSchema = new mongoose.Schema({
  name: String,
  link: String,
})
const acchpdfModel = mongoose.model('achievementspdf', acchpdfSchema)

const acchdataSchema = new mongoose.Schema({
  c1: Number,
  c2: String,
  c3: Number,
  c4: Number,
  c5: Number,
  c6: Number,
  c7: Number,
  c8: Number,
  c9: Number,
  c10: String,
  c11: String,
  c12: String,
  c13: String,
  c14: String,
  c15: String,
  c16: String,
  c17: String,
  c18: String,
  c19: String,
})
const acchdataModel = mongoose.model('achievementsdata', acchdataSchema)

const acchcolSchema = new mongoose.Schema({
  c1: String,
  c2: String,
  c3: String,
  c4: String,
  c5: String,
  c6: String,
  c7: String,
  c8: String,
  c9: String,
  c10: String,
  c11: String,
  c12: String,
  c13: String,
  c14: String,
  c15: String,
  c16: String,
  c17: String,
  c18: String,
  c19: String,
})
const acchcolModel = mongoose.model('achievementscol', acchcolSchema)

const AboutSchema = new mongoose.Schema({
})
const aboutModel = mongoose.model('aboutdepartment', AboutSchema)

const QuickLinksSchema = new mongoose.Schema({
})
const quicklinksModel = mongoose.model('quicklink', QuickLinksSchema)

const SocialLinksSchema = new mongoose.Schema({
})
const sociallinksModel = mongoose.model('sociallink', SocialLinksSchema)
const placementSchema = new mongoose.Schema({
  company: String,
  package: Number,
  count: Number
});
const Placement = mongoose.model('Placement', placementSchema);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  permissions: Object,
})

const UserModel = mongoose.model('user', UserSchema)












app.get("/results", async (req, res) => {
  try {
    const resultlinks = await ResultModel.find();
    res.json(resultlinks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/timetables", async (req, res) => {
  try {
    const timetables = await TimetableModel.find();
    res.json(timetables);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/callender", async (req, res) => {
  try {
    const callenders = await CallenderModel.find();
    res.json(callenders);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/teach", async (req, res) => {
  try {
    const teach = await TeachModel.find();
    res.json(teach);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/tech", async (req, res) => {
  try {
    const tech = await TechModel.find();
    res.json(tech);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/event", async (req, res) => {
  try {
    const event = await EventModel.find();
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/alumni", async (req, res) => {
  try {
    const alumni = await AlumniModel.find();
    res.json(alumni);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/fest", async (req, res) => {
  try {
    const fest = await FestModel.find();
    res.json(fest);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/cimages", async (req, res) => {
  try {
    const cimages = await CarouselModel.find();
    res.json(cimages);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/syllabus", async (req, res) => {
  try {
    const syllabus = await SyllabusModel.find();
    res.json(syllabus);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/partpdf", async (req, res) => {
  try {
    const partpdf = await PartpdfModel.find();
    res.json(partpdf);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/partdata", async (req, res) => {
  try {
    const partdata = await PartdataModel.find();
    res.json(partdata);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/partcol", async (req, res) => {
  try {
    const partcol = await PartcolModel.find();
    res.json(partcol);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/pubpdf", async (req, res) => {
  try {
    const pubpdf = await PubpdfModel.find();
    res.json(pubpdf);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/pubdata", async (req, res) => {
  try {
    const pubdata = await PubdataModel.find();
    res.json(pubdata);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/pubcol", async (req, res) => {
  try {
    const pubcol = await PubcolModel.find();
    res.json(pubcol);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/acchpdf", async (req, res) => {
  try {
    const acchpdf = await acchpdfModel.find();
    res.json(acchpdf);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/acchdata", async (req, res) => {
  try {
    const acchdata = await acchdataModel.find();
    res.json(acchdata);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/acchcol", async (req, res) => {
  try {
    const acchcol = await acchcolModel.find();
    res.json(acchcol);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/about", async (req, res) => {
  try {
    const about = await aboutModel.find();
    res.json(about);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/quicklinks", async (req, res) => {
  try {
    const qvlinks = await quicklinksModel.find();
    res.json(qvlinks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/sociallinks", async (req, res) => {
  try {
    const soclinks = await sociallinksModel.find();
    res.json(soclinks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get('/placements', async (req, res) => {
  try {
    const placements = await Placement.find();
    res.json(placements);
  } catch (err) {
    res.status(500).send(err.message);
  }
});














const fs = require('fs');
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
















app.post('/addevent', upload.single('img'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["img"] = base64Image;
  // res.send(base64Image)
  const event = new EventModel(req.body);
  // res.send(req.body)
  try {
    await event.save();
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Please fill in all fields correctly.', error });
  }
});

app.delete('/delevent/:id', async (req, res) => {
  const { id } = req.params;
  await EventModel.findByIdAndDelete(id);
  res.json({ message: 'Event deleted' });
});

app.put('/editevent/:id', upload.single('img'), async (req, res) => {
  const { id } = req.params;
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["img"] = base64Image;
  try {
    const event = await EventModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: 'Please fill in all fields.' });
  }
});

app.post('/addresult', upload.single('url'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  const result = new ResultModel(req.body);
  try {
    await result.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Please fill in all fields correctly.', error });
  }
});

app.delete('/deleteresult/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await ResultModel.findByIdAndDelete(id);
    res.json({ message: 'Result deleted' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting result.' });
  }
});

app.put('/editresult/:id', upload.single('url'), async (req, res) => {
  const { id } = req.params;
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  try {
    const result = await ResultModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating result.' });
  }
});

app.post('/addtimetable', upload.single('url'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  const result = new TimetableModel(req.body);
  try {
    await result.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Please fill in all fields correctly.', error });
  }
});

app.delete('/deletetimetable/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await TimetableModel.findByIdAndDelete(id);
    res.json({ message: 'Result deleted' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting result.' });
  }
});

app.put('/edittimetable/:id', upload.single('url'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  const { id } = req.params;
  try {
    const result = await TimetableModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating result.' });
  }
});

app.post('/addteach', upload.single('cover'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["cover"] = base64Image;
  const result = new TeachModel(req.body);
  try {
    await result.save();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: 'Please fill in all fields correctly.', error });
  }
});

app.delete('/deleteteach/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await TeachModel.findByIdAndDelete(id);
    res.json({ message: 'Faculty deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting faculty.' });
  }
});

app.put('/editteach/:id', upload.single('cover'), async (req, res) => {
  const { id } = req.params;
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["cover"] = base64Image;
  try {
    const result = await TeachModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: 'Error updating faculty.' });
  }
});

app.post('/addtech', upload.single('cover'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["cover"] = base64Image;
  const result = new TechModel(req.body);
  try {
    await result.save();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: 'Please fill in all fields correctly.', error });
  }
});

app.delete('/deletetech/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await TechModel.findByIdAndDelete(id);
    res.json({ message: 'Faculty deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting faculty.' });
  }
});

app.put('/edittech/:id', upload.single('cover'), async (req, res) => {
  const { id } = req.params;
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["cover"] = base64Image;
  try {
    const result = await TechModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: 'Error updating faculty.' });
  }
});


app.post('/addsyllabus', upload.any(), async (req, res) => {
  try {
    const { id, coursesName } = req.body;
    const courTeacher = {
      y1: [],
      y2: [],
      y3: [],
      y4: [],
    };

    console.log("Received files:", req.files);
    console.log("Received body:", req.body);

    if (req.files) {
      req.files.forEach((file) => {
        const year = file.fieldname;
        const name = req.body[`${year}Name`];
        if (file.buffer) {
          const base64Data = file.buffer.toString('base64');
          courTeacher[year].push({ name, url: base64Data });
        } else {
          console.error(`File buffer is undefined for year ${year} and name ${name}`);
        }
      });
    }

    const newSyllabus = new SyllabusModel({ id, coursesName, courTeacher: [courTeacher] });
    await newSyllabus.save();
    res.status(201).json(newSyllabus);
  } catch (error) {
    console.error("Error details:", error);
    res.status(400).json({ message: error.message });
  }
});







app.delete('/deletesyllabus/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await SyllabusModel.findByIdAndDelete(id);
    res.json({ message: 'Syllabus deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting syllabus.' });
  }
});

app.put('/editsyllabus/:id', upload.any(), async (req, res) => {
  try {
    const { id, coursesName } = req.body;
    const existingSyllabus = await SyllabusModel.findById(req.params.id);

    if (!existingSyllabus) {
      return res.status(404).json({ message: 'Syllabus not found' });
    }

    const updatedCourTeacher = {
      y1: existingSyllabus.courTeacher[0].y1,
      y2: existingSyllabus.courTeacher[0].y2,
      y3: existingSyllabus.courTeacher[0].y3,
      y4: existingSyllabus.courTeacher[0].y4,
    };

    if (req.files) {
      req.files.forEach((file) => {
        const year = file.fieldname;
        const name = req.body[`${year}Name`];
        if (file.buffer) {
          const base64Data = file.buffer.toString('base64');
          updatedCourTeacher[year] = [{ name, url: base64Data }];
        } else {
          console.error(`File buffer is undefined for year ${year} and name ${name}`);
        }
      });
    }

    const updatedSyllabus = await SyllabusModel.findByIdAndUpdate(
      req.params.id,
      {
        id,
        coursesName,
        courTeacher: [updatedCourTeacher],
      },
      { new: true }
    );

    res.json(updatedSyllabus);
  } catch (error) {
    console.error("Error details:", error);
    res.status(400).json({ message: error.message });
  }
});


app.post("/addcalendar", upload.single('url'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  const newCalendar = new CallenderModel(req.body);
  try {
    await newCalendar.save();
    res.json(newCalendar);
  } catch (error) {
    res.status(400).json({ message: "Error adding calendar." });
  }
});

app.put("/editcalendar/:id", upload.single('url'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["url"] = base64Image;
  const { id } = req.params;
  try {
    const updatedCalendar = await CallenderModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCalendar);
  } catch (error) {
    res.status(400).json({ message: "Error updating calendar." });
  }
});

app.delete("/deletecalendar/:id", async (req, res) => {

  const { id } = req.params;
  try {
    await CallenderModel.findByIdAndDelete(id);
    res.json({ message: "Calendar deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting calendar." });
  }
});

app.post("/addcarousel", upload.single('src'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["src"] = base64Image;
  const newCarousel = new CarouselModel(req.body);
  try {
    await newCarousel.save();
    res.json(newCarousel);
  } catch (error) {
    res.status(400).json({ message: "Error adding carousel." });
  }
});

app.put("/editcarousel/:id", upload.single('cover'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["cover"] = base64Image;
  const { id } = req.params;
  try {
    const updatedCarousel = await CarouselModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCarousel);
  } catch (error) {
    res.status(400).json({ message: "Error updating carousel." });
  }
});

app.delete("/deletecarousel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await CarouselModel.findByIdAndDelete(id);
    res.json({ message: "Carousel deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting carousel." });
  }
});

app.post("/addtabledata", async (req, res) => {
  const newRow = new PubdataModel(req.body);
  try {
    await newRow.save();
    res.json(newRow);
  } catch (error) {
    res.status(400).json({ message: "Error adding table data." });
  }
});

app.put("/edittabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRow = await PubdataModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRow);
  } catch (error) {
    res.status(400).json({ message: "Error updating table data." });
  }
});

app.delete("/deletetabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PubdataModel.findByIdAndDelete(id);
    res.json({ message: "Table data deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting table data." });
  }
});

app.post("/addpdf", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const newPdf = new PubpdfModel(req.body);
  try {
    await newPdf.save();
    res.json(newPdf);
  } catch (error) {
    res.status(400).json({ message: "Error adding PDF." });
  }
});

app.put("/editpdf/:id", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const { id } = req.params;
  try {
    const updatedPdf = await PubpdfModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPdf);
  } catch (error) {
    res.status(400).json({ message: "Error updating PDF." });
  }
});

app.delete("/deletepdf/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PubpdfModel.findByIdAndDelete(id);
    res.json({ message: "PDF deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting PDF." });
  }
});

app.put("/editcolumns/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColumns = await PubcolModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedColumns);
  } catch (error) {
    res.status(400).json({ message: "Error updating columns." });
  }
});

app.post("/acchaddtabledata", async (req, res) => {
  const newRow = new acchdataModel(req.body);
  try {
    await newRow.save();
    res.json(newRow);
  } catch (error) {
    res.status(400).json({ message: "Error adding table data." });
  }
});

app.put("/acchedittabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRow = await acchdataModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRow);
  } catch (error) {
    res.status(400).json({ message: "Error updating table data." });
  }
});

app.delete("/acchdeletetabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await acchdataModel.findByIdAndDelete(id);
    res.json({ message: "Table data deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting table data." });
  }
});

app.post("/acchaddpdf", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const newPdf = new acchpdfModel(req.body);
  try {
    await newPdf.save();
    res.json(newPdf);
  } catch (error) {
    res.status(400).json({ message: "Error adding PDF." });
  }
});

app.put("/accheditpdf/:id", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const { id } = req.params;
  try {
    const updatedPdf = await acchpdfModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPdf);
  } catch (error) {
    res.status(400).json({ message: "Error updating PDF." });
  }
});

app.delete("/acchdeletepdf/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await acchpdfModel.findByIdAndDelete(id);
    res.json({ message: "PDF deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting PDF." });
  }
});

app.put("/accheditcolumns/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColumns = await acchcolModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedColumns);
  } catch (error) {
    res.status(400).json({ message: "Error updating columns." });
  }
});

app.post("/partaddtabledata", async (req, res) => {
  const newRow = new PartdataModel(req.body);
  try {
    await newRow.save();
    res.json(newRow);
  } catch (error) {
    res.status(400).json({ message: "Error adding table data." });
  }
});

app.put("/partedittabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRow = await PartdataModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRow);
  } catch (error) {
    res.status(400).json({ message: "Error updating table data." });
  }
});

app.delete("/partdeletetabledata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PartdataModel.findByIdAndDelete(id);
    res.json({ message: "Table data deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting table data." });
  }
});

app.post("/partaddpdf", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const newPdf = new PartpdfModel(req.body);

  try {
    await newPdf.save();
    res.json(newPdf);
  } catch (error) {
    res.status(400).json({ message: "Error adding PDF." });
  }
});

app.put("/parteditpdf/:id", upload.single('link'), async (req, res) => {
  const profilePicPath = req.file.path;
  const fileBuffer = fs.readFileSync(profilePicPath);
  const base64Image = fileBuffer.toString('base64');
  fs.writeFileSync(profilePicPath, fileBuffer)
  obj = req.body
  obj["link"] = base64Image;
  const { id } = req.params;
  try {
    const updatedPdf = await PartpdfModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPdf);
  } catch (error) {
    res.status(400).json({ message: "Error updating PDF." });
  }
});

app.delete("/partdeletepdf/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PartpdfModel.findByIdAndDelete(id);
    res.json({ message: "PDF deleted." });
  } catch (error) {
    res.status(400).json({ message: "Error deleting PDF." });
  }
});

app.put("/parteditcolumns/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColumns = await PartcolModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedColumns);
  } catch (error) {
    res.status(400).json({ message: "Error updating columns." });
  }
});

// Add a new placement
app.post('/api/placements', async (req, res) => {
  try {
    const newPlacement = new Placement(req.body);
    const savedPlacement = await newPlacement.save();
    res.json(savedPlacement);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a placement
app.put('/api/placements/:id', async (req, res) => {
  try {
    const updatedPlacement = await Placement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlacement);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a placement
app.delete('/api/placements/:id', async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.password === password) {
        // Generate redirect URL based on username
        res.json({ success: true, user });
      } else {
        res.json({ success: false, message: "The password is incorrect" });
      }
    } else {
      res.json({ success: false, message: "No record existed" });
    }
  });
});

app.post('/adduser', async (req, res) => {
  const { username, password, permissions } = req.body;
  try {
    const newUser = new UserModel({ username, password, permissions });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
  }
});

app.get('/api/users/username/:username', async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});















app.listen(3001, () => {
  console.log("server is running");
});