import React, { useState } from 'react';

// Palette (used as Tailwind arbitrary values, no tailwind.config changes needed):
// paper background #FAF7F0 / #F6F1E4, ink text #25201B,
// "lost" accent (claim-tag amber) #C2872E, "found" accent (claim-tag teal) #2F6F62.
// Optional: add Fraunces + Inter from Google Fonts in your index.html for a stronger
// display face, then swap font-serif/font-sans below for font-['Fraunces'] / font-['Inter'].

function TagBadge({ label, variant }) {
  const styles = {
    lost: {
      wrap: 'bg-[#F1D9B3]',
      ring: 'border-[#C2872E]',
      text: 'text-[#8A4B12]',
    },
    found: {
      wrap: 'bg-[#CFE3DD]',
      ring: 'border-[#2F6F62]',
      text: 'text-[#1F4B41]',
    },
  }[variant];

  return (
    <div className={`relative w-28 h-16 rounded-md shadow-sm ${styles.wrap}`}>
      <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F6F1E4] border border-[#25201B]/10" />
      <div className={`h-full flex items-center justify-center border-l-2 border-dashed ${styles.ring}`}>
        <span className={`text-xs font-semibold tracking-wide ${styles.text}`}>{label}</span>
      </div>
    </div>
  );
}

function ReportCard({ variant, title, description, buttonLabel }) {
  const theme = {
    lost: { stub: 'bg-[#C2872E]', btn: 'bg-[#C2872E] hover:bg-[#A9701E]' },
    found: { stub: 'bg-[#2F6F62]', btn: 'bg-[#2F6F62] hover:bg-[#255A4F]' },
  }[variant];

  return (
    <div className="flex rounded-2xl border border-[#25201B]/10 bg-white overflow-hidden">
      <div className={`w-3 shrink-0 ${theme.stub}`} />
      <div className="flex-1 p-8">
        <h3 className="font-serif text-2xl text-[#25201B]">{title}</h3>
        <p className="mt-3 text-[#25201B]/70 leading-relaxed">{description}</p>
        <button
          type="button"
          className={`mt-6 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors ${theme.btn}`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#25201B]/80 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#25201B]/15 bg-[#FAF7F0] px-4 py-2.5 text-sm text-[#25201B] placeholder:text-[#25201B]/35 focus:outline-none focus:ring-2 focus:ring-[#25201B]/20 focus:border-[#25201B]/30"
      />
    </div>
  );
}

export default function Footer() {
  const [tab, setTab] = useState('lost'); // 'lost' | 'found'
  const [form, setForm] = useState({ itemName: '', location: '', date: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your search/API call.
    console.log(`Searching ${tab} items:`, form);
  };

  const activeAccent = tab === 'lost' ? '#C2872E' : '#2F6F62';
  const submitBtnClass =
    tab === 'lost'
      ? 'bg-[#C2872E] hover:bg-[#A9701E]'
      : 'bg-[#2F6F62] hover:bg-[#255A4F]';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#25201B]">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-[#F6F1E4]/90 backdrop-blur border-b border-[#25201B]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-tight text-[#25201B]">
            Lost <span className="italic text-[#B5651D]">&</span> Found
          </a>
          <nav className="flex items-center gap-5">
            <button type="button" className="text-sm text-[#25201B]/80 hover:text-[#25201B] transition-colors">
              Log in
            </button>
            <button
              type="button"
              className="text-sm font-medium bg-[#25201B] text-[#F6F1E4] px-4 py-2 rounded-full hover:bg-[#3a332b] transition-colors"
            >
              Sign up
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center overflow-hidden">
          <div className="hidden md:block absolute left-[8%] top-8 -rotate-6">
            <TagBadge label="LOST" variant="lost" />
          </div>
          <div className="hidden md:block absolute right-[8%] top-24 rotate-6">
            <TagBadge label="FOUND" variant="found" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
            Lost something?
            <br />
            <span className="text-[#2F6F62]">Or found something?</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#25201B]/70 max-w-xl mx-auto">
            Post it here. Help others. Get it back.
          </p>
        </section>

        {/* Report cards */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <ReportCard
              variant="lost"
              title="Report Lost Item"
              description="Tell us what you lost and where it was lost."
              buttonLabel="Post Lost Item"
            />
            <ReportCard
              variant="found"
              title="Report Found Item"
              description="Help the owner by posting the found item details."
              buttonLabel="Post Found Item"
            />
          </div>
        </section>

        {/* Search form */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl text-[#25201B]">Search the board</h2>
            <p className="mt-2 text-[#25201B]/70">Look through what's already been posted.</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full border border-[#25201B]/10 bg-white">
              <button
                type="button"
                onClick={() => setTab('lost')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === 'lost' ? 'bg-[#C2872E] text-white' : 'text-[#25201B]/70 hover:text-[#25201B]'
                }`}
              >
                Lost items
              </button>
              <button
                type="button"
                onClick={() => setTab('found')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === 'found' ? 'bg-[#2F6F62] text-white' : 'text-[#25201B]/70 hover:text-[#25201B]'
                }`}
              >
                Found items
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#25201B]/10 rounded-2xl p-8 grid gap-5 sm:grid-cols-2"
            style={{ borderTop: `3px solid ${activeAccent}` }}
          >
            <Field
              label="Item name"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              placeholder={tab === 'lost' ? 'e.g. Black leather wallet' : 'e.g. Set of keys'}
            />
            <Field
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder={tab === 'lost' ? 'Where did you lose it?' : 'Where did you find it?'}
            />
            <Field label="Date" name="date" type="date" value={form.date} onChange={handleChange} />

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-[#25201B]/80 mb-1.5">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder={
                  tab === 'lost'
                    ? 'Color, brand, any identifying details...'
                    : 'Condition, distinguishing marks, where it is now...'
                }
                className="w-full rounded-lg border border-[#25201B]/15 bg-[#FAF7F0] px-4 py-2.5 text-sm text-[#25201B] placeholder:text-[#25201B]/35 focus:outline-none focus:ring-2 focus:ring-[#25201B]/20 focus:border-[#25201B]/30 resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className={`w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-medium text-white transition-colors ${submitBtnClass}`}
              >
                Search {tab === 'lost' ? 'lost' : 'found'} items
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#25201B]/10 bg-[#F6F1E4]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg text-[#25201B]">
            Lost <span className="italic text-[#B5651D]">&</span> Found
          </span>
          <nav className="flex gap-6 text-sm text-[#25201B]/70">
            <a href="#" className="hover:text-[#25201B]">About</a>
            <a href="#" className="hover:text-[#25201B]">Contact</a>
            <a href="#" className="hover:text-[#25201B]">Privacy</a>
          </nav>
          <span className="text-sm text-[#25201B]/50">© {new Date().getFullYear()} Lost & Found</span>
        </div>
      </footer>
    </div>
  );
}