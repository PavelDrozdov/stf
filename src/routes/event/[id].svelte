<svelte:head>
    <title>{event.title}</title>
</svelte:head>

<script context="module">
    export async function preload({ params, query }) {
        const res = await this.fetch(`event/${params.id}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return { event: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let event;

    function backgroundimg(url){
        return `background-image: url(${url})`
    }
</script>

<style>
.stf-event-wrapper {
    position: relative;
    margin-bottom:90px;
}

.stf-event-wrapper-background {
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 20em;
}

.stf-main-content {
    background: #fff;
    margin-top: -50px;
}

.timeline {
    margin-top: 30px;
    position: relative;
    max-width: 1024px;
}
.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #2f7dbf;
    top: 0;
    bottom: 0;
    margin-left: -3px;
}
.container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 95%;
}
.container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    left: -16px;
    background-color: white;
    border: 4px solid #db3541;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}
.container::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}
.content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    border: 1px solid rgba(255,62,0,0.2);
    display: flex;
}

.content__pic {
    margin-right: 20px;
}
.content__pic img,
.content__pic svg {
    width: 120px;
    height: 120px;
    border-radius:50%;
}

@media screen and (max-width: 600px) {
    .timeline::after {
        left: 31px;
    }
    .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
        left: 0%;
    }
    .container::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
}
</style>
<div class="stf-event-wrapper">
    <div class="stf-event-wrapper-background" style={backgroundimg(event.pic)}></div>
    <div class="stf-article stf-main-content">
        <div>
            <h1>{event.title} </h1>
            ({event.date})
        </div>
        <div>
            {event.description}
        </div>
        <h2>Расписание</h2>
        <div class="timeline">
            {#each event.schedule.blocks as block}
                <div class="container">
                    <div class="content">
                        <div class="content__pic">
                            {#if block.pic}
                                <img src="{block.pic}" alt="">
                            {/if}
                            {#if block.type === "PAUSE"}
                                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 60 60">
                                    <path d="M30 0a30 30 0 1 0 0 60 30 30 0 0 0 0-60zm0 58a28 28 0 1 1 0-56 28 28 0 0 1 0 56z"/>
                                    <path d="M33 46h8V14h-8v32zm2-30h4v28h-4V16zM19 46h8V14h-8v32zm2-30h4v28h-4V16z"/>
                                </svg>
                            {/if}
                        </div>
                        <div class="content__text-info">
                            <h2>{block.title}</h2>
                            <h3>{block.timeStart} - {block.timeEnd}</h3>
                            {#if block.speaker}
                                <div>{block.speaker}</div>
                            {/if}
                            {#if block.description}
                                <br />
                                <p>{block.description}</p>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>