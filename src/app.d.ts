// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Food {
			displayName: string;
			level: number;
			explanation?: string;
			suggestions?: string;
		}
	}
}

export {};
