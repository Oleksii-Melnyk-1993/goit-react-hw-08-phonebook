export default function Home() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
      }}
    >
      <h1 style={{ fontSize: 48, textAlign: 'center' }}>Phonebook</h1>
    </div>
  );
}
