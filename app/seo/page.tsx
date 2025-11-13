export const metadata = { title: "SEO Aanvraag | CNIP" };

export default function Page(){
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">SEO Aanvraag</h1>
      <form action="/api/forms/lead" method="post" className="grid gap-3 max-w-md">
        <input type="hidden" name="ts" id="tsField"/>
        {/* Honeypot */}
        <div style={{position:"absolute",left:-5000}} aria-hidden="true">
          <input name="company_website" tabIndex={-1} autoComplete="off"/>
        </div>
        <input type="hidden" name="service" value="seo"/>

        <label className="grid gap-1">Naam <input name="name" required className="border p-2"/></label>
        <label className="grid gap-1">Bedrijf <input name="company" required className="border p-2"/></label>
        <label className="grid gap-1">E-mail <input name="email" type="email" required className="border p-2"/></label>
        <label className="grid gap-1">Telefoon (optioneel) <input name="phone" className="border p-2"/></label>
        <label className="grid gap-1">Korte toelichting (optioneel)
          <textarea name="message" rows={4} className="border p-2"></textarea>
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2">Versturen</button>
      </form>
      <script dangerouslySetInnerHTML={{__html:`document.getElementById('tsField').value = Date.now();`}}/>
    </main>
  );
}
