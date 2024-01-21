<template>
    <div class="parent-bar px-28 py-5">
        <div class="left-side">
            <div class="logo">
                <slot name="left-side" />
            </div>
        </div>

        <div class="right-side">
            <slot name="right-side" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.parent-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>