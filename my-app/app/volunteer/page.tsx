import Section from "../components/Section";

export const metadata = { title: "Volunteer" };

export default function VolunteerPage() {
  return (
    <Section title="Volunteer" subtitle="Sign up to support the campaign">
      <form className="mx-auto max-w-xl space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <input 
            className="h-11 rounded-md border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-black" 
            placeholder="First name" 
            type="text" 
          />
          <input 
            className="h-11 rounded-md border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-black" 
            placeholder="Last name" 
            type="text" 
          />
        </div>
        <input 
          className="h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-black" 
          placeholder="Email address" 
          type="email" 
        />
        <input 
          className="h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-black" 
          placeholder="Phone number" 
          type="tel" 
        />
        <textarea 
          className="min-h-24 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-black" 
          placeholder="How would you like to help? (e.g., community outreach, event organization, skills you can offer)"
        ></textarea>
        <button 
          className="h-11 w-full rounded-md bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" 
          type="submit"
        >
          Sign Up to Volunteer
        </button>
      </form>
    </Section>
  );
}