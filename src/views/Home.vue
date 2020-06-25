<template>
    <div class="home">
        <div class="call-to-action-block">
            <h1><b>Hello There!</b></h1>
            <p>Would you like to see some open issues?</p>
            <router-link to="/issues/open">
                <button class="open-link-btn">See open issues</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style>
    .call-to-action-block {
        margin-top: 15%;
        margin-bottom: 25%;
        margin-left: 10%;
        margin-right: 10%;
        display: block;
        background: linear-gradient(180deg, #1a535c 0%, #4ecdc4 45%);
        border-radius: 24px 0 ;
        padding-top: 7%;
        padding-bottom: 7%;
        color: #f7fff7;
    }

    .open-link-btn {
        position: relative;
        font-size: 15px;
        letter-spacing: 2px;
        border-radius: 4px;
        text-transform: uppercase;
        outline: 0;
        overflow:hidden;
        z-index: 1;
        cursor: pointer;
        transition:         0.20s ease-in;
        -o-transition:      0.20s ease-in;
        -ms-transition:     0.20s ease-in;
        -moz-transition:    0.20s ease-in;
        -webkit-transition: 0.20s ease-in;
        margin-top: 5%;
        background-color: #1a535c;
        color: #f7fff7;
        border: 2px solid #1a535c;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
        font-weight: normal;
    }

    .open-link-btn:hover {
        background-color: #f7fff7;
        color: #1a535c;
        border: 2px solid #1a535c;
        font-weight: bolder;
    }

    .open-link-btn:before {
        content: "";
        position: absolute;
        background: #f7fff7;
        bottom: 0;
        left: 0;
        right: 0;
        top: 100%;
        z-index: -1;
        -webkit-transition: top 0.15s ease-in;
    }

    .open-link-btn:hover:before {
        top: 0;
    }
</style>
