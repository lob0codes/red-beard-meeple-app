export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  return <p>{params.projectId}</p>;
}
