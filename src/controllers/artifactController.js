import mongoose from "mongoose";
import Artifact from "../models/artifactModel.js";

export const getArtifacts = async (req, res) => {
  try {
    console.log("A get artifact action was performed");
    const artifacts = await Artifact.find();

    res.status(200).json(artifacts);
    console.log("Artifact returned!");
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({ errorCode: 500, message: error.message });
  }
};

export const createArtifact = async (req, res) => {
  try {
    console.log("A create artifact action was performed");
    const artifact = req.body;
    const newArtifact = new Artifact(artifact);
    await newArtifact.save();

    res.status(201).json(newArtifact);
    console.log("Artifact saved!");
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ errorCode: 500, message: error.message });
  }
};

export const updateArtifact = async (req, res) => {
  try {
    console.log("A update artifact action was performed");
    const { id } = req.params;
    const { _id, ...artifact } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("Artifact was not found");

    const updatedArtifact = await Artifact.findOneAndUpdate(
      { _id: id },
      artifact,
      { new: true }
    );

    res.json(updatedArtifact);
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ errorCode: 500, message: error.message });
  }
};

export const deleteArtifact = async (req, res) => {
  try {
    console.log("A delete artifact action was performed");
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("Artifact was not found");

    await Artifact.findOneAndDelete({ _id });

    return res.status(200).send("Artifact was deleted");
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ errorCode: 500, message: error.message });
  }
};
