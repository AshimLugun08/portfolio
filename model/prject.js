import mongoose from 'mongoose';
import { connectMongodb } from '@/lib/db';


await connectMongodb();
// Define a schema
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  technologiesUsed: { type: [String], required: true },
  link:{type:String, required:true}
});

// Check if the model already exists to avoid OverwriteModelError
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
