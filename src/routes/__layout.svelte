<script>
  import "../app.css";
  import "@fontsource/inter";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <script
    defer
    src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js"></script>
</svelte:head>

<NavBar />
<slot />
<Footer />
