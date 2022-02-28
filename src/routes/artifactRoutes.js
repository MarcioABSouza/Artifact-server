import express from 'express';
import { getArtifacts, createArtifact, updateArtifact, deleteArtifact } from '../controllers/artifactController.js';

const router = express.Router();

router.get('/', getArtifacts)
router.post('/', createArtifact)
router.patch('/:id', updateArtifact)
router.delete('/:id', deleteArtifact)


export default router;