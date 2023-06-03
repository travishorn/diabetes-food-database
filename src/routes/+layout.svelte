<script>
	import '../app.css';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
</script>

<div class="container mx-auto flex flex-col min-h-screen">
	<slot />
	<SiteFooter class="mt-auto mb-5" />
</div>
