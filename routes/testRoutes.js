import express from 'express';
import path from 'path';
console.log(path.resolve('../controllers/testController.js')); // Relative path is recommended

// router object
const router = express.Router();

// routes
router.post('/test-post', testPostController); // Corrected route path

// export
export default router;
