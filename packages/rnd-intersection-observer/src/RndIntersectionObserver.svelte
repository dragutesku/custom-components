<svelte:options tag={null} />
<script>
  import { 
    onDestroy, 
    onMount 
  } from "svelte/internal";
  import { setupI18n, _ } from '../translations/i18n.js';

  let authHeaders;
  let locale = 'en';

  setupI18n({ withLocale: locale });

  const handleEvents = (e) => {
    e.data?.type === "SetAuthHeaders" && (authHeaders = { ...e.data.payload });
  };

  onMount(() => {
    window.postMessage({ type: "GetAuthHeaders" }, "*");
    window.addEventListener("message", handleEvents);
    console.log('MOUNT');
  });

  onDestroy(() => {
    window.removeEventListener("message", handleEvents);
    console.log('DESTROY');
  });
</script>


<div class="rnd-intersection-observer">
  {$_('foo')}
</div>


<style lang="scss">
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
  }
  
  .rnd-intersection-observer {
    background: #000;
    color: #fff;
  }
</style>
