import express from "express";
import {
  createJobController,
  deleteJobController,
  getAllJobsController,
  jobStatsController,
  updateJobController,
} from "../controllers/jobsController.js";

import userAuth from "../middelwares/authMiddleware.js";

const router = express.Router();


