import Head from 'next/head';

const song = {
  title: 'Неоновые крылья',
  subtitle: 'Песня о ночи, что не кончается',
  genre: 'Synthwave / Dream Pop',
  bpm: 96,
  key: 'F# minor',
  lyrics: [
    {
      label: 'Куплет I',
      text: `Город дышит в такт моим шагам,
Свет витрин — как звезды по домам.
Ветер держит память на весу,
Шепчет мне: «Не бойся, я спасу».`
    },
    {
      label: 'Припев',
      text: `Мы взлетим, когда уснет вокзал,
Неоновые крылья — наш сигнал.
Пусть утро ищет нас по этажам,
Мы — искры, что не гаснут по ночам.`
    },
    {
      label: 'Куплет II',
      text: `В зеркалах отражены миры,
Каждый шаг — как вызов темноты.
Ты — мой код, мой тайный перезвон,
В звуке сердца спрятан наш сезон.`
    },
    {
      label: 'Бридж',
      text: `Пульс растает за линией крыш,
Если веришь — значит, ты летишь.
Ветер знает, как сменить цвета,
Чтобы мы не падали с небес всегда.`
    },
    {
      label: 'Припев',
      text: `Мы взлетим, когда уснет вокзал,
Неоновые крылья — наш сигнал.
Пусть утро ищет нас по этажам,
Мы — искры, что не гаснут по ночам.`
    },
    {
      label: 'Аутро',
      text: `И когда рассыплется туман,
Мы вернемся в города, где ждут.
Неоновые крылья — океан,
Что хранит наш свет и нашу суть.`
    }
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{song.title} — авторская песня</title>
        <meta name="description" content="Авторская песня в стиле synthwave / dream pop" />
      </Head>
      <main className="app">
        <article className="card">
          <p className="eyebrow">Авторская премьера</p>
          <h1 className="title">{song.title}</h1>
          <div className="meta">
            <span>Жанр: {song.genre}</span>
            <span>BPM: {song.bpm}</span>
            <span>Тональность: {song.key}</span>
          </div>
          <section className="lyrics">
            {song.lyrics.map((section) => (
              <div key={section.label}>
                <strong>{section.label}</strong>
                <p>{section.text}</p>
              </div>
            ))}
          </section>
          <footer className="footer">
            <span>Слова и музыка: Codex Studio</span>
            <a href="https://agentic-a9095b3d.vercel.app" target="_blank" rel="noreferrer">
              Слушать онлайн
            </a>
          </footer>
        </article>
      </main>
    </>
  );
}

