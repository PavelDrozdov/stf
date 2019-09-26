<script></script>

<style>
footer {
    position: fixed;
	left: 0;
    bottom: 0;
    background: #fff;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,62,0,0.1);
 }
.stf-social-networks {
    display: flex;   
}
.stf-social-networks li {
    display:block;
}
.stf-social-networks li::before {
    content: '|';
    padding: 0 20px;    
}
.stf-social-networks li:nth-child(1)::before {
    content: '';
}
.stf-social-networks li a {
    text-decoration: none;
    color: #777;
    font-size: 18px;

}
.stf-social-networks li a:hover {
    color: #333;
    text-decoration: underline;
}
</style>

<footer>
    <ul class="stf-social-networks">
        <li><a href="https://t.me/storm_the_front">telegram</a></li>
        <li><a href="https://vk.com/storm_the_front">VK</a></li>
        <li><a href="https://www.facebook.com/groups/storm.the.front/">facebook</a></li>
        <li><a href="https://www.youtube.com/channel/UCd033jSptvEiG2IJm5aHTMA">youtube</a></li>
        <!-- <li><a href="https://www.youtube.com/channel/UCd033jSptvEiG2IJm5aHTMA">instagram</a></li> -->
    </ul>
</footer>