export default function ErrorComponent({
  errorMessage,
}: Readonly<{ errorMessage: string }>) {
  return (
    <div>
      <h1>Une erreur est survenue</h1>
      <p>{errorMessage}</p>
      <button onClick={() => window.location.reload()}>Réessayer</button>
    </div>
  );
}