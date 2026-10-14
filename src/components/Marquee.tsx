const items = ["Python", "PyTorch", "LangChain", "Amazon Bedrock", "SageMaker", "AWS Lambda", "DynamoDB", "Serverless", "Spark", "Kafka", "Airflow", "MLflow", "Docker", "PostgreSQL", "MongoDB", "TypeScript", "React", "Vue"];

export default function Marquee() {
  // La lista se duplica para que el desplazamiento infinito no tenga saltos.
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
