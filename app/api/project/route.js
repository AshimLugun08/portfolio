import { connectMongodb } from '@/lib/db';
import Project from '@/model/prject';

export async function GET(req, res) {
  await connectMongodb();

  try {
    const projects = await Project.find({});
    console.log(JSON.stringify.projects)
    return new Response(JSON.stringify({ success: true, data: projects }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(req, res) {
  await connectMongodb();
  const body = await req.json();

  try {
    const project = await Project.create(body);
    return new Response(JSON.stringify({ success: true, data: project }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
