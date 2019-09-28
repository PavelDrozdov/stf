<script>
    export let item;
    export let href;
    function backgroundimg(url){
        return `background-image: url(${url})`
    }
</script>

<style>
.stf-news-card {
    height:250px;
    padding-top:100px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(255,62,0,0.1);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 0 5px 5px rgba(255,62,0,0.1);
    margin-bottom: 20px;
}

.stf-news-card__info {
    height:150px;
    box-sizing: border-box;
    background: #fff;
    background: linear-gradient(to bottom, rgba(255,255,255,0.9) 5%, #fff 95%)
}

.stf-news-card__text-area {
    height: 100px;
    box-sizing: border-box;
    padding: 0.5em;
}

.stf-news-card__active-area {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
}

.stf-news-card__active-area a {
    border: 1px solid rgba(255,62,0,0.1);
    text-decoration: none;
    height: 40px;
    margin-left: 10px;
    padding: 5px 15px;
    box-sizing: border-box;
    transition: box-shadow 0.5s;
}

.stf-news-card__active-area a:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>

<div class="stf-news-card" style={backgroundimg(item.pic)}>
    <div class="stf-news-card__info">
        <div class="stf-news-card__text-area">
            <h2>{item.title} ({item.date})</h2>	
            <p>{item.description}</p>
        </div>
        <div class="stf-news-card__active-area">
            <a rel='prefetch' href='{href}{item.id}'>подробнее...</a>
        </div>
    </div>
</div>