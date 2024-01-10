<script lang="ts">
export let icon: string | undefined;
export let title: string;

let open = false;

function toggle() {
  open = !open;
}
</script>

<div>
    <div on:click={toggle}>{icon} {title}</div>
    {#if open}
      <div>
        <slot />
      </div>
    {/if}
</div>
