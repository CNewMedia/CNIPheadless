export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🎉 Deployment Test Gelukt!</h1>
      <p>Je Next.js app draait op Fly.io</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </main>
  )
}
